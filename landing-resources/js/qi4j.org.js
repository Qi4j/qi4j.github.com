

/**
 * Qi4j.org Progressive Enhancement.
 */
$( document ).ready( function( $ )
{

    var throbber_html = '<div class="progress progress-warning progress-striped"><div class="bar" style="width: 100%">Loading</div></div>';
    var $content = $( "#content" );

    /**
     * Downloads.
     */
    function downloads()
    {
        // Add package icons
        $content.find( "table.table-striped tr" ).each( function( idx, download_row )
        {
            $( download_row ).find("a:first").prepend( '<img src="http://team.ops4j.org/images/icons/package_24.gif" /> ' );
        } );
    }

    /**
     * Community/Roadmap.
     */
    function roadmap()
    {
        // Throbbers
        var released_slot = document.createElement( "div" );
        released_slot.className = "qi4j-slot";
        released_slot.innerHTML = throbber_html;
        $content.find( "#qi4j-roadmap-released" ).append( released_slot );

        var not_released_slot = document.createElement( "div" );
        not_released_slot.className = "qi4j-slot";
        not_released_slot.innerHTML = throbber_html;
        $content.find( "#qi4j-roadmap-not-released-yet" ).append( not_released_slot );

        var jira_base_url = 'http://team.ops4j.org/';
        var jira_api = jira_base_url + 'rest/api/latest/';
        var jira_url = jira_base_url + 'browse/QI';

        var roadmap_versions = function( container, versions )
        {
            for( var idx_version = versions.length - 1; idx_version >= 0; idx_version-- )
            {
                var version = versions[ idx_version ];

                var well = document.createElement( "div" );
                well.className = 'well';

                var title = '';
                if( version.archived || version.released )
                {
                    title += '<img src="http://team.ops4j.org/images/icons/package_24.gif" class="pull-right" />';
                }
                else
                {
                    title += '<img src="http://team.ops4j.org/images/icons/box_24.gif" class="pull-right" />';
                }
                title += '<h4><a href="' + version.self + '">' + version.name + '</a> <small>' + version.description + '</small></h4>';

                var issues = '<div class="issues" id="' + version.id + '-issues">';
                issues += "</div>";

                var links = '';
                if ( version.archived || version.released )
                {
                    links += '<p>Release date: <strong>' + version.userReleaseDate + '</strong></p>';
                }
                else
                {
                    links += '<p>Not released yet.</p>';
                }
                links += '<p style="text-align: right"><a href="' + version.self + '" target="_blank" class="btn btn-mini"><i class="icon-eye-open"></i> Open</a></p>';

                well.innerHTML = title + issues + links;
                container.appendChild( well );

                // Fetch issues count - The Jira rest api does not provide a roadmap view ...
                //
                // issuesUnresolved
                // issuesFixedCount
                // issuesAffectedCount
                //
                // if ( unresolved > 0 ) {
                //   data.issuesUnresolved
                // }Êelse {
                //   data.issuesFixedCount
                // }
                //
                var version_url = version.self;
                if ( version.archived || version.released )
                {
                    $.getJSON( version_url + '/relatedIssueCounts?jsonp-callback=?&callback=?', function(data)
                    {
                        var $issues = $( '#' + data.self.substring( data.self.lastIndexOf( '/' ) + 1 ) + '-issues' );
                        if( data.issuesFixedCount )
                        {
                            $issues.append('<p>' + data.issuesFixedCount + ' fixed issue(s).</p>');
                        }
                    });
                }
                else
                {
                    $.getJSON( version_url + '/unresolvedIssueCount?jsonp-callback=?&callback=?', function(data)
                    {
                        var $issues = $( '#' + data.self.substring( data.self.lastIndexOf( '/' ) + 1 ) + '-issues' );
                        $issues.append('<p>' + data.issuesUnresolvedCount + ' unresolved issue(s).</p>');
                    });
                }
            }
        }

        $.getJSON( jira_api + 'project/QI?jsonp-callback=?&callback=?', function( data )
        {
            if ( data.versions.length > 0 )
            {
                var released_versions = [];
                var not_released_versions = [];
                for( var idx_version = data.versions.length - 1; idx_version >= 0; idx_version-- )
                {
                    var version = data.versions[ idx_version ];
                    if( version.archived || version.released )
                    {
                        released_versions.push( version );
                    }
                    else
                    {
                        not_released_versions.push( version );
                    }
                }

                // Append all versions
                var released_container = document.createElement( "div" );
                var not_released_container = document.createElement( "div" );

                roadmap_versions( released_container, released_versions.reverse() );
                roadmap_versions( not_released_container, not_released_versions );

                // Insert Released in DOM
                var released_row = document.createElement( "div" );
                var released_leftSpace = document.createElement( "div" );
                var released_rightSpace = document.createElement( "div" );

                released_row.className = "row-fluid";
                released_leftSpace.className = "span2";
                released_container.className = "span8";
                released_rightSpace.className = "span2";

                released_row.appendChild( released_leftSpace );
                released_row.appendChild( released_container );
                released_row.appendChild( released_rightSpace );

                var $released_slot = $content.find( "#qi4j-roadmap-released div.qi4j-slot" );
                $released_slot.empty();
                $released_slot.append( released_row );

                // Insert NOT Released in DOM
                var not_released_row = document.createElement( "div" );
                var not_released_leftSpace = document.createElement( "div" );
                var not_released_rightSpace = document.createElement( "div" );

                not_released_row.className = "row-fluid";
                not_released_leftSpace.className = "span2";
                not_released_container.className = "span8";
                not_released_rightSpace.className = "span2";

                not_released_row.appendChild( not_released_leftSpace );
                not_released_row.appendChild( not_released_container );
                not_released_row.appendChild( not_released_rightSpace );

                var $not_released_slot = $content.find( "#qi4j-roadmap-not-released-yet div.qi4j-slot" );
                $not_released_slot.empty();
                $not_released_slot.append( not_released_row );

            }
        });
    }

    /**
     * Community/Continuous Integration.
     */
    function continuous_integration()
    {
        // Throbber
        var slot = document.createElement( "div" );
        slot.className = "qi4j-slot";
        slot.innerHTML = throbber_html;
        $( "#content p:last" ).after( slot );

        // Add relationship to builds RSS
        $('<link rel="alternate" type="application/rss+xml" title="Qi4j CI RSS"  href="https://qi4j.ci.cloudbees.com/rssAll" />').appendTo( $('head') );

        // Add Jenkins Jobs
        var ci_url = 'https://qi4j.ci.cloudbees.com/';
        var ci_images_url = ci_url + 'images/32x32/';
        $.getJSON( ci_url + 'api/json?depth=2&jsonp=?&callback=?', function( data )
        {
            if ( data.jobs.length > 0 ) {
                var ciContainer = document.createElement( "div" );
                for( var idx_job = 0; idx_job < data.jobs.length; idx_job++ )
                {
                    var job = data.jobs[ idx_job ];
                    if ( job.buildable )
                    {
                        var well = document.createElement( "div" );
                        well.className = 'well';

                        var title;
                        if (job.color.indexOf('_anime') != -1)
                        {
                            title = '<img src="' + ci_images_url + job.color + '.gif" class="pull-right" />';
                        }
                        else
                        {
                            title = '<img src="' + ci_images_url + job.color + '.png" class="pull-right" />';
                        }
                        title += '<h4>' + job.displayName + '</h4>';

                        var health = '';
                        for( var idx_health = 0; idx_health < job.healthReport.length; idx_health++ )
                        {
                            var health_data = job.healthReport[ idx_health ];
                            health += '<p><img src="' + ci_images_url + health_data.iconUrl + '"/>' + health_data.description + '</p>';
                        }
                        var links = '';
                        if( job.lastCompletedBuild )
                        {
                            if( job.lastCompletedBuild.artifacts && job.lastCompletedBuild.artifacts.length > 0 )
                            {
                                health += '<p><strong>Build artifacts:</strong></p><ul>';
                                for( var idx_artifacts = 0; idx_artifacts < job.lastCompletedBuild.artifacts.length; idx_artifacts++ )
                                {
                                    var artifact = job.lastCompletedBuild.artifacts[ idx_artifacts ];
                                    health += '<li><a href="'+job.lastCompletedBuild.url+'artifact/'+artifact.relativePath+'">'+artifact.fileName+'</a></li>';
                                }
                                health += '</ul>';
                            }
                            var last = new Date(job.lastCompletedBuild.timestamp * 1000);
                            links += '<p class="small">Latest <strong>completed</strong> build <a href="' + job.lastCompletedBuild.url + '" target="_blank">#' + job.lastCompletedBuild.number + '</a> on ' + last + '</p>';
                            links += '<p style="text-align: right"><a href="' + job.url + '" target="_blank" class="btn btn-mini"><i class="icon-eye-open"></i> Open</a></p>';
                        }

                        well.innerHTML = title + health + links;
                        ciContainer.appendChild( well );
                    }
                }

                var row = document.createElement( "div" );
                row.className = "row-fluid";

                var leftSpace = document.createElement( "div" );
                leftSpace.className = "span2";
                row.appendChild( leftSpace );

                ciContainer.className = "span8";
                row.appendChild( ciContainer );

                var rightSpace = document.createElement( "div" );
                rightSpace.className = "span2";
                row.appendChild( rightSpace );

                var $slot = $( "#content div.qi4j-slot" );
                $slot.empty();
                $slot.append( row );
            }

        });
    }

    /**
     * Community/Get Help
     */
    function get_help()
    {
        // Add StackOverflow info
        if( false ) { // DEACTIVATED
            var stack_search_api = 'https://api.stackexchange.com/2.1/search?order=desc&sort=activity&tagged=qi4j&site=stackoverflow'
            console.log(stack_search_api)
            $.getJSON( stack_search_api +'&callback=?', function( data ) {
                console.log( data );
                if ( data.items.length > 0 ) {
                    for( var idx_item = 0 ; idx_item < data.items.length ; idx_item++ ) {
                        var question = data.items[idx_item];
                        console.log( question.title );
                    }
                }
            } );
        }
    }

    // Global enhancements

    // Open external user links in a new window/tab
    $("a[href^='http:']").attr('target','_blank');
    $("a[href^='https:']").attr('target','_blank');

    // Section specific enhancements
    switch( document.title )
    {
        case "Qi4j Downloads":
            downloads();
            break;
        case "Qi4j Continuous Integration":
            continuous_integration();
            break;
        case "Qi4j Roadmap":
            roadmap();
            break;
        default:
            break;
    }

} );

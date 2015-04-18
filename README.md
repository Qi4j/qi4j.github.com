
# Apache Zest Website - zest.apache.org

> Landing pages built using [Jekyll](http://jekyllrb.com/)
>
> Documentation built by the Apache Zest sub-project's build systems


## How to work on content

First, install jekyll: `gem install jekyll`, then:

    cd $PATH_TO_THE_DIRECTORY_THIS_FILE_IS_IN
    jekyll serve
    open http://localhost:4000/

You can now edit files in `./src` and refresh your browser to preview the changes locally.


## How to publish to zest.apache.org

First, install jekyll: `gem install jekyll`, then:

    cd $PATH_TO_THE_DIRECTORY_THIS_FILE_IS_IN
    jekyll build
    svn add content/*
    svn commit -m  "zest: update website"


## Directory Structure

    .
    +-- README.md               This very README
    |
    +-- _config.yml             Jekyll configuration
    +-- src                     Landing pages Jekyll sources
    |   +-- _layouts/           Jekyll layouts
    |   +-- _includes/
    |   |   +-- releases/       Release download pages, one per file
    |   +-- _posts/             News, one per file
    |   +-- index.html          Home page
    |   +-- news.html           News archive page
    |   +-- atom.xml            Atom news feed
    |   +-- downloads.html      Download page
    |   +-- community/          Community pages
    |   +-- sitemap.txt         Sitemap
    |   +-- landing-resources/  CSS, images, fonts and javascript files.
    |   +-- graphics/           Apache Zest graphic resources
    |
    |
    +-- content/                !! Root of files published at https://zest.apache.org/ !!
        |
    |   +-- schemas/            Apache Zest XML Schemas
        |
        +-- qi4j/               Apache Zest Qi4j Documentation
            +-- index.html      Index page pointing at './latest/'
            +-- versions.json   Versions data, used by the Qi4j version-switcher
            +-- develop/        Documentation for the 'develop' branch.
            |   +-- javadocs/
            +-- latest/         Documentation for the 'master' branch aka. the latest stable release.
            |   +-- javadocs/
            +-- VERSION_STRING/ Documentation for each stable release.
                +-- javadocs/



## Landing pages

Only the news are in the Markdown format, the other pages that should rarely
change are plain HTML so we can fine-control the layout.

A news feed is built in **atom.xml** and the site map in **sitemap.txt**


## Sub-projects versionned documentation

Each Apache Zest subproject should make its build system generate its documentation.
As part of its release process it should add its documentation to this very website.

### Apache Zest Qi4j

The versioned documentation is generated from
[asciidoc](http://www.methods.co.nz/asciidoc) text files from the Qi4j SDK
[source repository](http://zest.apache.org/community/codebase.html) by its
[build system](http://zest.apache.org/qi4j/latest/build-system.html).

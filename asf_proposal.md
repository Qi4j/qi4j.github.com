
= Abstract =

    qi4j = new Energy4Java();

That is how to create the Qi4j runtime, and it captures the essence of its spirit.
Qi4j is a platform to develop Composite Oriented Programming applications in Java in a new, exciting and productive manner.

= Governance of Provisional Top Level Project =

Provisional Top Level Project is a new idea at the ASF, and the Qi4j community is willing to try the idea, instead of simply debating it. If it doesn't work, Qi4j will re-enter via the Incubator.

In addition of regular Top Level Projects, we are making the following self-imposed suggestions to the Governance of this Provisional TLP;

1. The initial PMC consists only of Apache Members, to ensure a solid foundation of understanding The Apache Way.

2. On top of being an ASF Member, the PMC Chair is an active contributor to the project, and has a vested interest in its success.

3. Raising the consensus of Releases from 3 +1 votes to 5 +1 votes.

4. Disclaimer on website and releases, marked with "Provisional" and links to the pTLP status at the ASF.

5. Maturity of project into a regular Top Level Project is decided separately by the Board, with input from PMC and ComDev.


= Project Naming =

Apache Zest is the proposed project name, as we have learned that "4j" in names might ultimately limit the future direction of the project.
Additionally, Qi4j will remain as the Java implementation of the composite oriented programming platform. There is also a literal port to .NET, which may be migrated to ASF as well.

= Project Description =

Qi4j is a platform that combines Aspects, Composition, Dependency Injection, Validation, Storage/UnitOfWork handling, Indexing/Search abstraction, Architectural enforcement and much more, in a holistic top-down approach, primarily for Domain-rich applications, even explicitly supportive of Domain Driven Design.

Composite oriented programming is a term coined in the early days of Qi4j, to capture the notion of using another paradigm for creating applications, than the prevalent object oriented programming one.
It comprises of the ability to write smaller parts of code than regular classes, and compose these so called fragments into a larger "Composite". It is similar to aspect-oriented programming, but we take it one step further, there is no base class. The Composite consists of fragments, but no fragment has higher significance than any other fragment. However, there are explicit types of fragments, namely Composite Types, Constraints, Mixins, Concerns and Side-effects, to clearly communicate "Intent". The macro level composition takes the form of Applications has Layers which contains Modules in which the Composite Types are declared.

Qi4j also evangelizes strong typing, so the equivalent of Around-Advice in AOP, which is called Concerns, can be made type-safe or like AOP be generic (using java.lang.reflect.InvocationHandler interface). Composites can either be hard coded using annotations, or assembled dynamically during the bootstrap phase.

Qi4j is a whole new way to write Java applications, where focus lies on structures and interfaces, where classes are 'mere' implementation details.

Qi4j boldly challenges bad practices head-on, such as "What is a Property?", "Why are null arguments allowed by default?" and "Is the structural assembly of the application actually the same as configuration values?"

= Background =

Java is NOT an object-oriented language. Neither is C# or C++. IF they were, how come an Object is DERIVED FROM a Class? A true object-oriented language should for sure have Class(es) assigned to Objects (or a similar construct), which are created 'clean', like stem cells can take on practically any cell's role of the body.

Additionally, in real life, most objects have different properties and behaviors depending on the context. In front of the computer, I am primarily a 'programmer', but in the jungle I am primarily 'scared prey'. Modeling this in Java (and many other languages) requires the introduction of additional Object abstractions, often resulting in many similar classes representing the same underlying entity, again reinforcing our view that Java is a Class Oriented language.

Many problems in software engineering can be attributed to (lack of) cohesion and (too tight) coupling. The original promise was that we write a Class once and we can re-use it in many different applications, subsystems and modules. In reality, the Class often contains "too much" for the next use-case. The granularity is too coarse, causing too much coupling to other parts. This have resulted in libraries being the smallest granularity that is practical, and solutions like OSGi, Spring and others have emerged to tackle the many issues that may arise from this, from dependency injection to configuration to assembly to runtime resolution of versioning.

But we often wish that we could have smaller fragments and COMPOSE objects from these fragments. This also makes it easier to replace parts of implementations, instead of fragile overloading, library extension (assuming the library author provides that) and the famous monkey patching approach.

Aspect Oriented Programming is a concept to capture cross-cutting concerns in one place. Classic cases are Logging and Authentication. This is an excellent concept, but we claim that AspectJ/AspectWerkz and others fail in the implementations, as most rely on naming conventions and declarations separated from the code itself. It is therefor often difficult to know what aspects are in effect at a given point in the code. The code weaving involved sometimes interferes with debugging and/or classloading in environments like OSGi. AOP is often only used by frameworks to "enhance" code supplied by a third-party developer, and less often being part of the downstream developer's daily life.

Many people have architecture/design drawings, often with layers in the application, with modules within those layers. We call this Worditecture, as those layers and modules only exist in Word documents and if the code is inspected, more often than not, it is impossible to relate the code to such drawings. In Qi4j, we set out to enforce the Application Structure. Entities, Values and Services must be declared inside one or more Modules, and Modules belong inside Layers, and Layers are stacked on top of each other. The Entities, Values and Services have Visibility of either 'within Module', 'within Layer' or 'to Layer directly above'. This leads to less configuration and inability to mess up the codebase completely.

= History =

The principles of composite oriented programming are the brain child of Rickard Öberg going back to ~2003. In early 2007, Niclas Hedhman convinced Rickard to start a new open source project around this, and Qi4j was born. First announced at Oredev conference in November 2007.

Over the years, 28 people have contributed source to the project and many others have chimed in on mailing lists around direction, concepts and design. When Qi4j had the attention of media and others, we were not able to build long-term community around the project, and we have seen activity declined, as fewer itches to scratch and fewer people willing to make larger changes.

= Rationale for migrating to ASF =

Qi4j community sees direct productivity gains from using the platform, although the initial learning curve is quite overwhelming, like learning a new language. The Qi4j community recognizes that it has not been able to communicate the benefits well enough, to achieve a large user and developer community. We are confident of Qi4j's technical merit, and would like to draw on ASF's community merit to build a larger, sustainable and successful community around this exciting technology.

The technical merit stems from that Qi4j has a strong model for programming in a more strict, yet more productive environment. A platform where fragments can be leveraged, where aspects are declared on the interfaces, where null values are not allowed by default, and where persistence is integrated yet pluggable at boot time. Qi4j enforces the use of modules and layers, the infrastructure layer can not access layers above it, and presentation layers at the top can't bypass service layers to directly access data stores.
All these restrictions are  there to provide more guidance to the programmer, reducing the length of the rope and the number of trees to hang oneself in.

"Common things should be quick and easy, while anything should be possible", has been the mantra since the inception. And thanks to this foresight, Qi4j can be deeply integrated with many (but not all) existing Java technologies, to provide for migration paths.

Qi4j internally contains a lot of functional structures, and the community is currently migrating Qi4j to Java 8, reducing a chunk of the codebase in the process, and will likely discover new ways of simplicity. Many argue that Qi4j should become its own programming language, but our position has always been that the refactoring tools available in Java are so powerful and should not be under-estimated. It would take endless amount of effort to even get close to that, something that many other language platforms are still struggling with.



= Initial Goals =

Qi4j is already on version 2.0, and striving towards both a 2.1 release as well as a Java 8 specific 3.0 release. This will be one of the first "Java 8"-only projects at the ASF, and hopefully a lot of people find this in itself attractive and exciting.

Qi4j's user base is relatively small, but we are convinced of its remarkable properties as a productivity enhancing platform, and there is still much to do to reach its full potential. There are a lot of low hanging fruit (more extensions and libraries) as well as serious design challenges, such as reloadable Modules via OSGi and Jigsaw integration in Java 9.

As mentioned above, the small agreeable user base also means that Qi4j can be much more aggressive in adopting newer Java versions, and currently an effort is on the way to leverage Java 8. The Stream API and closures are implemented separately in Qi4j, and we are now converting all the internal code to those features supplied in Java 8, to reduce the total code size of Qi4j Core.

= Meritocracy =

Qi4j has been developed under heavy influence of ASF principles and guidelines. The barrier to entry has been at the lowest possible level. A rather aggressive Commit-then-Review process has been in place, but people have in general been encouraged to do larger changes in publicly visible feature branches. The low barrier hasn't created any major problems yet, as reverting mistakes are relatively cheap, and it has been much more important to capture the long-tail of contributions than to avoid occasional bad commits.

Qi4j is not operated by any organization, and all licensing is directly from developer to the user. We will engage the legal committee to ensure the IP rights are in full order.

Qi4j's release process has not been nearly as stringent as the one at ASF, and will be the biggest change to the community. We will work closely with willing "Overseers" (see below), change our Gradle-based build system and use available tools, such as Rat, to ensure the highest quality releases possible.

= Community =

The current Qi4j developer community is rather small, but passionate individuals who are all convinced of Qi4j's merit and potential. We also think that some of the past developers will re-join the effort, once we are at ASF and some traction is attained.

Over the years there has been 28 code contributors in total, of which 8 have been considered Core Developers, i.e. allowed to make changes on the Core runtime on trunk without hand-holding. No access control was in place to enforce that, and a social contract worked very well.

We are probably not the best of community builders, and would welcome members from ASF projects, who think Qi4j is promising, to assist in the community building effort needed.

= Active Developers =

All the active developers are independent of each other. No two developers work for the same employer, and no employer pays anyone for working full-time on Qi4j. We consider the following developers 'active' at the moment, one way or the other. It is a very diverse group;

Niclas Hedhman is an ASF Member, previous long-term member of the Incubator PMC and mentor of 5-10 projects. Freelancing consultant and founder of Bright Things UN Ltd

Marcel Offermans is an ASF Member, PMC Chair of Apache ACE and on Celix, Felix and Incubator PMC, mentor of several podlings. Day time he runs Luminis Technologies in Holland.

Rickard Oberg is one of the founders of JBoss, created Xdoclet and WebWork (now Apache Struts2). He now works at Neo Technology Inc, creators of Neo4j.

Paul Merlin is working at his own company CodeArtisans and a volunteer stone mason of antique walls and buildings.

Stanislav Muhametsin is working at Cometa Solutions Oy. Stan has also ported Qi4j verbatim to C# as the Qi4CS project on GitHub.

Tibor Mlynarik works at ADLER iTech.

Edward Yakop technical architect at ABB Malaysia.

Marc Grue is a professional musician, but has strong interest in computer science abstractions.

Kent Sølvsten is working with energy systems at Arosii A/S in Denmark...

Philippe van Dyck is in the banking industry and works at BNP Paribas

Jiri Jetmar - Independent consultant

Jaydatt Desai - Logicom Solutions

Additional important contributions over the years have come from;
* Alex Schneyderman - Voalté
* Alin Dreghiciu - Sonatype
* Arvid Huss - Jayway
* Michael Hunger - Neo Technology Inc
* Tonny Kohar - independent Apache Batik and SVG consultant


= Alignment =

Apache is a natural option for any Java project, as ASF has an overwhelming percentage of Java projects.
But for Qi4j, we think that our choice to challenge every notion, not based on popularity but on technical merit, should be inspiring to existing ASF projects at large. And by doing so, we hope symbiotic relationships can be established with a variety of other projects at ASF.

Qi4j is not "finished" and a lot of work in the Big Data space is still needed. We would like to see HBase and Cassandra use-cases to be "Tackled Qi4j Style" and practical conventions to emerge. There are several other ASF projects which Qi4j could support 'better', if we get a little help from those communities, incl Struts, Camel, ActiveMQ, Cayenne, Karaf and others.


= Known Risks =

== Orphaned products ==

Qi4j is not a company product and never was. It was started by two individuals who have a long and strong community involvement dating back to 1998, also the time when they first learned to know each other.

If the community can't be built at ASF, then we think that there must be something about Qi4j that is inherently alien to developers, and Qi4j has no broader appeal, beyond those who have both seen the advantages as well as gotten the opportunity to work with it and see for themselves the benefits. We will work hard to ensure the long-term sustainability of the project, because we think that Qi4j represents an important step towards a paradigm shift in software development.

== Inexperience with Open Source ==

Not only does Qi4j have a rather long running history of an independent open source project, 6 major releases, and a track record of operating well as such, but Niclas Hedhman was a long time member of the Incubator PMC, serving on the Legal Committee and have plenty of experience of what is required of Apache projects, as does Marcel Offermans. We wouldn't have proposed to move Qi4j to Apache, unless we thought that the larger Qi4j community will work well at the ASF, with a little bit of initial legal and community assistance from friends at ASF.

All of Qi4j's history, except the initial 2-3 months, were done on open mailing lists and public repositories. The practice of full discourse and discussion on asynchronous mailing lists has been respected to the fullest extent possible, and at no time has other means of communication been regular.

Full source code history may not exist, as we went from Subversion at OPS4J to GIT at OPS4J to finally GitHub, initially with sub-repositories (which didn't work well) to finally the qi4j-sdk repository at GitHub. History has probably broken at some point.

Just like early Apache project's mailing list history, Qi4j's might be incomplete in public archives, but we should be able to restore that, from GMail archives and other mailboxes. We intend to restore the mail archive, as there are many worth-while nuggets in there.

== Homogenous Developers ==

The only homogeneity of Qi4j is the individuals' desire to go beyond the current status quo, to challenge things we do from habit, to criticize 'good practices' and offer radically different solutions to so called mainstream developers and accepted practices.

The contributors have a vast diversity in their backgrounds and interests, even a non-developer making large contributions.

The group came together at Qi4j, drawn by its uniqueness and different way to address common concerns. We consider this to be a non-issue.

== Reliance on Salaried Developers ==

As far as we know, no one is currently paid to work on Qi4j itself. This has been a factor in the slow down of activity in the last two years, but we think that the bottom has been reached and that we will see an uptick during 2015, as some of the core members are coming back to write applications using Qi4j.

== Relationships with Other Apache Products ==

Qi4j is such a unique and radically different platform that there is no direct alignment in Qi4j Core with other Apache (or any other for that matter) projects. We have also kept the dependencies to a minimum by choice.
But Qi4j also defines Extension mechanisms, such as storage, indexing, serialization and metrics, and we have implemented extensions for Apache Cassandra and Apache Solr. We also have libraries that integrate other technology into the Qi4j world, such as Apache Shiro, Apache Struts and Apache CXF. We expect that additional Apache projects will be used in future Extensions as well as Libraries, especially in the Big Data space, where we see great opportunities for a Qi4j approach.

== Excessive Fascination with the Apache Brand ==

There is no doubt that the Apache brand is strong, no one can deny that. But our primary 'fascination' is around the possibility to build a stronger community at the ASF, than we otherwise seem to be able to do. Apache is a natural water cooler, where open development people can share ideas and work together. We hope to inspire other Apache projects to do greater things after being exposed to Qi4j's unique approach to many technical challenges.

= Documentation =

Website; http://qi4j.org
Source Repository; http://github.com/Qi4j/qi4j-sdk
Current Mailing list; https://groups.google.com/forum/#!forum/qi4j-dev

= Initial Source =

As mentioned earlier, Qi4j started out at OPS4J community, and the codebase was initially on Subversion, then moved to OPS4J operated GIT repositories and finally we moved to GitHub. We tried to preserve history the best we could, with reasonable effort.
So, https://github.com/Qi4j contains the repositories that are relevant for the Incubator. In practice, only the qi4j-sdk is current. We suggest that the qi4j-core, qi4j-libraries and qi4j-extensions are imported but made read-only. qi4j-sandbox is imported. qi4j.github.com contains the current website, but the sources for that resides primarily inside the qi4j-sdk repository.

= Source and Intellectual Property Submission Plan =

There are no issues that we know of. Source code is available openly and online. All code has originated directly from Qi4j contributors, marked as Apache Licensed contributions and to the best of our knowledge there is no encumbered IP issues.
As Qi4j was never a legal entity, all contributions were directly licensed (Apache License 2.0) by the developer to the public. There is no problem reaching out to all of the authors of an overwhelming part (if not all) of the codebase and ask for paperwork, if this is necessary.

= External Dependencies =

Qi4j has few dependencies, and all dependencies in all non-optional code is ASLv2 compatible. The required dependencies are;
  * ASM
  * SLF4J (To be revised)
  * org.json (included in source form in the repository. To be revised)

There are optional libraries and extensions that have dependencies on projects with other licenses.
One very notable case, the Neo4j entity store extension, is worth mentioning here. At the time this extension was created, Neo4j was under the AGPL license. It is now under GPL, yet the Qi4j Neo4j extension is licensed under Apache License v2. Are we not violating the license requirements of Neo4j? No, we think not, as the contribution itself was made by Neo Technology under the Apache license. Neo Technology argued that they had the right to provide the extension under ALv2, yet whoever ran a Qi4j application with the Neo4j storage extension, would be subjected to the AGPL (now GPL) requirements. Further discussion with Legal committee is expected to follow.

= Cryptography =

Qi4j optionally depends on projects that use cryptography. As Qi4j isn't an organization, and most developers live in Europe, we have not followed the US trade restrictions on Cryptography.
Without an extensive check of all 100+ optional dependencies, Apache Shiro stands out. We need to get feedback from legal@ on what the exact requirements are, and conduct a full review.

= Required Resources =

== Mailing lists ==

    private@zest.apache.org
    dev@zest.apache.org
    commits@zest.apache.org

== Git Repositories ==

We understand that Apache operates its own Git repositories, as well as having a large number of read-only mirrors at GitHub under Apache organization.

    https://git-wip-us.apache.org/repos/asf/qi4j.git
    https://git-wip-us.apache.org/repos/asf/qi4j-legacy-core.git
    https://git-wip-us.apache.org/repos/asf/qi4j-legacy-libraries.git
    https://git-wip-us.apache.org/repos/asf/qi4j-legacy-extensions.git
    https://git-wip-us.apache.org/repos/asf/qi4j-sandbox.git

== Issue Tracking ==

We also have Jira issues we wish to import from Atlassian operated https://ops4j1.jira.com/browse/QI, if possible, to 

    https://issues.apache.org/jira/browse/ZEST

= Initial PMC =

* Alex Karasulu - akarasulu@apache.org
* James Carman - jcarman@apache.org
* Jeff Genender - jgenender@apache.org
* Marcel Offermans - marrs@apache.org
* Chris Mattmann - mattmann@apache.org
* Niclas Hedhman - niclas@apache.org
* Roman Shaposhnik - rvs@apache.org


= Committers =,

* Edward Yakop - efy@apache.org
* Jaydatt Desai - jaydattdesai@gmail.com
* Jiri Jetmar - juergen.jetmar@gmail.com
* Kent Sølvsten - kent.soelvsten@gmail.com
* Marc Grue - marcgrue@gmail.com
* Paul Merlin - paul@nosphere.org
* Phillipe van Dyck - pvdyck@gmail.com
* Rickard Öberg - rickardoberg@gmail.com
* Stanislav Muhametsin - stanislav.muhametsin@cometasolutions.fi
* Tibor Mlynarik - tibor.mlynarik@gmail.com


= Affiliations =

* Edward Yakop - ABB Malaysia
* Jaydatt Desai - Logicom Solutions
* Jiri Jetmar - Independent consultant
* Kent Sølvsten - Arosii A/S
* Marc Grue - Musician
* Marcel Offermanns - Luminis Technologies
* Niclas Hedhman - Bright Things UN Ltd
* Paul Merlin - CodeArtisans
* Phillipe van Dyck - BNP Paribas
* Rickard Öberg - Neo Technology AB
* Stanislav Muhametsin - Cometa Solutions Oy
* Tibor Mlynarik - ADLER iTech s.r.o.



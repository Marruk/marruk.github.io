"use strict";angular.module("helloImMarkApp",["ui.router"]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function(e,t,i){t.otherwise("/"),e.state("home",{url:"/",controller:"MainCtrl",templateUrl:"views/main.html"}).state("project",{url:"/:slug",controller:"ProjectCtrl",templateUrl:"views/project.html"}),i.html5Mode(!0)}]).run(["$rootScope","$timeout","$state",function(e,t,i){var s;e.$on("$stateChangeStart",function(e,a,o,n){if(s||""===n.name)s=!1;else{e.preventDefault();const l=document.getElementById("wrapper");null!==l&&l.classList.add("is-unloading"),"home"===n.name&&sessionStorage.setItem("homeScrollPosition",window.scrollY),t(()=>{s=!0,i.go(a,o)},300)}}),e.$on("$viewContentLoaded",function(){const e=document.getElementById("loading"),s=document.getElementById("top__content");if(null!==e)t(()=>{null!==s&&window.scrollTo(0,document.getElementById("top__content").clientHeight),e.classList.add("is-done"),t(()=>e.remove(),800)},300);else{const e=document.getElementById("wrapper");e.classList.add("is-loading");const a="home"===i.current.name?parseInt(sessionStorage.getItem("homeScrollPosition"),10):void 0;window.scrollTo(0,isNaN(a)?null!==s?s.clientHeight:0:a),t(()=>{e.classList.remove("is-loading")},300)}})}]),angular.module("helloImMarkApp").controller("MainCtrl",["$scope","$timeout",function(e,t){e.flyAway=function(e,t){e.target.classList.add("is-opened"),void 0!==t&&"right"===t&&e.target.classList.add("is-opened--right")},e.restart=function(){location.reload()},e.age=Math.floor((new Date-new Date(1990,7,18,14,12))/31536e6),e.adventureLocation=(180*Math.random()-90).toFixed(7)+","+(360*Math.random()-180).toFixed(7)}]),angular.module("helloImMarkApp").controller("ProjectCtrl",["$scope","$state",function(e,t){switch(e.project={},t.params.slug){case"trialsreport":e.project={slug:"trialsreport",title:"Trials Report",intro:"Reporting on opponents while playing 'Destiny' in 3 million sessions a month",previewImage:"/images/projects/trialsreport/1.png",next:"opendata"};break;case"afternet":e.project={slug:"afternet",title:"The Afternet",intro:"Remembering life after death together with friends and family",previewImage:"/images/projects/afternet/1.png",next:"openiban"};break;case"getshitdone":e.project={slug:"getshitdone",mobile:!0,title:"Get Shit Done",intro:"Beating procrastination, one mission at a time",previewImage:"/images/projects/getshitdone/1.png",next:"trialsreport"};break;case"greenchoice":e.project={slug:"greenchoice",mobile:!0,title:"Greenchoice",intro:"Making sure a vibrant energy company has the website to show for it",previewImage:"/images/projects/greenchoice/1.png",next:"afternet"};break;case"openiban":e.project={slug:"openiban",mobile:!0,title:"OpenIban",intro:"Helping the transition to a new account number with double the length",previewImage:"/images/projects/openiban/1.png",next:"getshitdone"};break;case"opendata":e.project={slug:"opendata",title:"OpenData",intro:"Empowering you to simplify your webforms with a collection of APIs",previewImage:"/images/projects/opendata/1.png",next:"greenchoice"}}}]),angular.module("helloImMarkApp").run(["$templateCache",function(e){e.put("views/main.html",'<div id="wrapper" class="wrapper"> <div class="top"> <div id="top__content" class="top__content"> <div class="inner"> <p class="top__label"> In that case you are probably interested in </p> <p class="top__actions"> <a class="button button--small button--primary" href="mailto:mark.montvai@gmail.com" target="_blank"> <i class="icon">&#xe0e1;</i> sending me an email </a> <a class="button button--small button--light" href="https://www.instagram.com/drfrizzlemanizzle/" target="_blank"> <i class="icon">&#xe900;</i> pictures of my cat </a> </p> </div> </div> <div class="top__hint"> No need for an introduction? <i class="icon">&#xe5d8;</i> </div> </div> <div class="intro inner"> <div class="intro__title intro__title--main"> <h1>Hello, I\'m Mark!</h1> </div> <p class="hide-on-load intro__description"> I like creating digital products that people love to use. Interaction design and front-end development is what I do most, but concepting, user research and visual design make me tick as well. Combining that with tons of enthousiasm and a big attention to detail results into stuff like this: </p> </div> <div class="hide-on-load hide-on-load--small-delay"> <div class="inner"> <section> <div class="portfolio"> <div class="portfolio-item portfolio-item--big" ng-click="flyAway($event)" ui-sref="project({ slug: \'afternet\'})"> <div class="device"> <img src="/images/projects/afternet.8d9042ce.svg"> <div class="portfolio-item__description"> <h3 class="portfolio-item__title">The Afternet</h3> <p class="portfolio-item__intro"> Remembering life after death together with friends and family </p> </div> </div> </div> <div class="portfolio-item" ng-click="flyAway($event, \'right\')" ui-sref="project({ slug: \'openiban\'})"> <div class="device"> <img src="/images/projects/openiban.a26f6ca2.svg"> <div class="portfolio-item__description"> <h3 class="portfolio-item__title">Open&shy;IBAN</h3> <p class="portfolio-item__intro"> Helping the transition to a new account number with double the length </p> </div> </div> </div> <div class="portfolio-item" ng-click="flyAway($event)" ui-sref="project({ slug: \'getshitdone\'})"> <div class="device"> <img src="/images/projects/getshitdone.2eb83d0d.svg"> <div class="portfolio-item__description"> <h3 class="portfolio-item__title">Get Shit Done</h3> <p class="portfolio-item__intro"> Beating procrastination, one mission at a time </p> </div> </div> </div> <div class="portfolio-item portfolio-item--big" ng-click="flyAway($event, \'right\')" ui-sref="project({ slug: \'trialsreport\'})"> <div class="device"> <img src="/images/projects/trialsreport.e3c18bfd.svg"> <div class="portfolio-item__description"> <h3 class="portfolio-item__title">Trials Report</h3> <p class="portfolio-item__intro"> Reporting on opponents while playing \'Destiny\' in 3 million sessions a month </p> </div> </div> </div> <div class="portfolio-item portfolio-item--big" ng-click="flyAway($event)" ui-sref="project({ slug: \'opendata\'})"> <div class="device"> <img src="/images/projects/opendata.004d0aaf.svg"> <div class="portfolio-item__description"> <h3 class="portfolio-item__title">Open Data</h3> <p class="portfolio-item__intro"> Empowering you to simplify your webforms with a collection of APIs </p> </div> </div> </div> <div class="portfolio-item" ng-click="flyAway($event, \'right\')" ui-sref="project({ slug: \'greenchoice\'})"> <div class="device"> <img src="/images/projects/greenchoice.4f0aa28b.svg"> <div class="portfolio-item__description"> <h3 class="portfolio-item__title">Green&shy;choice</h3> <p class="portfolio-item__intro"> Making sure a vibrant energy company has the website to show for it </p> </div> </div> </div> </div> </section> </div> <section class="section--alt section--closing"> <div class="inner text"> <div class="text__block"> <p> The remaining time of my {{ age }} years on this planet were spent making balloon animals, playing tennis, creating a custom <a href="/files/SportcieStickers.pdf" target="_blank">Panini sticker album</a>, supporting Arsenal, watching \'The Room\' a lot more than necessary, searching for sheep in Age of Empires, putting <a href="/files/WeekendBidBook.pdf" target="_blank">way too much effort</a> into a weekend away and a pretty big transformation as seen below. </p> <div class="transformation"> <img src="/images/markmetznkleinebakkes.f2ec0fa3.png"> <i class="icon">&#xe5c8;</i> <img src="/images/markmetznbakkes.d435c20a.png"> </div> </div> <div class="text__block"> <p> Which brings us to the end of what I have to tell you. Don\'t worry though, there\'s plenty of other stuff to do: </p> <p class="text__actions"> <a href="mailto:mark.montvai@gmail.com&subject=Hello!" target="_blank" class="button button--primary"> <i class="icon">&#xe0e1;</i> Say hello! </a>\x3c!--\n            --\x3e<a href="https://www.instagram.com/drfrizzlemanizzle/" target="_blank" class="button button--light"> <i class="icon">&#xe900;</i> Look at pictures of my cat </a>\x3c!--\n            --\x3e<a href="https://www.linkedin.com/in/markmontvai" target="_blank" class="button button--light"> Connect to my LinkedIn </a>\x3c!--\n            --\x3e<a ng-href="https://www.google.nl/maps/dir//\'{{adventureLocation}}\'/@{{adventureLocation}},3z" target="_blank" class="button button--light"> Go on an adventure </a>\x3c!--\n            --\x3e<a class="button button--light button--text button--text--fun"> Endlessly click this button </a>\x3c!--\n            --\x3e<a href="https://www.youtube.com/watch?v=X4pc3IQKZVs" target="_blank" class="button button--light"> Get emotional </a>\x3c!--\n            --\x3e<a href="http://weirdorconfusing.com/" target="_blank" class="button button--light"> Shop \'til you drop </a>\x3c!--\n            --\x3e<a href="https://apod.nasa.gov/apod/random_apod.html" target="_blank" class="button button--light"> Discover the cosmos </a>\x3c!--\n            --\x3e<a ng-click="restart()" class="button button--light"> Have a fresh start </a> </p> </div> </div> </section> </div> </div>'),e.put("views/project.html",'<div id="wrapper" class="wrapper wrapper--project"> <div class="inner"> <div class="back" ui-sref="home"> <i class="icon icon-chevron_left">&#xe408;</i> </div> <div class="intro"> <div class="intro__title"> <h1 ng-bind="project.title"></h1> </div> <p class="intro__description intro__description--small" ng-bind="project.intro"></p> </div> </div> <div class="hide-on-load"> <section> <div class="inner"> <div class="summary" ng-class="{\'summary--mobile\': project.mobile}"> <div class="summary__stats"> <h2 class="summary__title">Long story short</h2> <ng-include src="\'views/projects/\' + project.slug + \'/summary.html\'"></ng-include> </div> <div class="summary__device"> <div class="device"> <img class="device__image" ng-src="{{project.previewImage}}"> </div> </div> </div> </div> </section> <section class="section--alt section--closing"> <div class="inner text"> <ng-include src="\'views/projects/\' + project.slug + \'/text.html\'"></ng-include> </div> </section> <section> <div class="inner"> <div class="footer"> <div class="footer__back"> Where do we go from here? </div> <div class="footer__label"> </div> <div class="footer__actions"> <a class="button button--light button--faded" ui-sref="home"> <i class="icon">&#xe408;</i> Back </a> <a href="mailto:mark.montvai@gmail.com" class="button button--light button--faded"> <i class="icon">&#xe0e1;</i> Let\'s discuss that in private </a> <a class="button button--primary" ui-sref="project({ slug: project.next})"> Show me more <i class="icon">&#xe5c8;</i> </a> </div> </div> </div> </section> </div> </div>'),e.put("views/projects/afternet/summary.html",'<div class="summary__section"> <span class="summary__label">I designed</span> <a href="https://theafternet.com/" target="_blank" class="button button--light"> a platform </a> </div> <div class="summary__section"> <span class="summary__label">working on</span> <ul class="summary__list"> <li>Interaction Design</li><li>Concept Design</li><li>Visual Design</li> </ul> </div> <div class="summary__section"> <span class="summary__label">with a little help from</span> <ul class="summary__list"> <li>InVision</li><li>Sketch</li> </ul> </div>'),e.put("views/projects/afternet/text.html",'<div class="text__block"> <p> A social network for dead people. Your reaction is probably the same as the on we first had: are you sure that\'s a good idea? Death is a very sensitive subject, a subject that most would argue has no proper place on the internet. Not yet. </p> <p> The briefing for the project was one full of functionalities with a lot of target groups. The core would be a social network to remember deceased friends and family, but The Afternet would also be the place to handle everything for your own death. It would also a place to put your will, a digital vault for all your passwords and the way you say your final words. All on a tight budget of course. </p> <p> Our second reaction wasn\'t much different from the first. We suggested extensive user-research before going further, but the client told us that would not be necessary: he was willing to take a risk. That left us with the challenge to turn the client\'s wishes into a good concept that we felt confident about. </p> <p> The start was to define how the social network would fit into the process of someone\'s death. We split the process and the involved people into three groups as seen below. By taking client wishes, current products and our own thoughts into account we identified the areas that would be the focus of The Afternet. </p> <p> <img class="text__image" src="/images/projects/afternet/2.jpg"> </p> <p> That already trimmed some of the functionalities, but it still had to be molded into one strong enough concept. We looked for something that relates to all involved people and found it: memories. Every profile on The Afternet would revolve around a collection of memories about that person. You can add your own before your death, your close friends and family will fill the big parts of your life and distant friend and family have the stories no-one else has. </p> </div> <div class="text__block text__device"> <div class="device"> <img class="device__image" src="/images/projects/afternet/3.png"> </div> <div class="text__label"> Everyone can add memories telling your story </div> </div> <div class="text__block"> <p> Next, we clearified the exact functionalities for each step of the process, dividing it into three main areas: profiles, networks and curators. After signing up you are able to build up your network with friends and family. Being in someone\'s network means you will be able to see and add to someone\'s profile after death, as well as getting updates on anniversaries or new stories. For your own profile you can add personal memories (only visible after death), your wishes and appoint curators. Curators have the role of notifying the network you have died as well as managing your profile from then on. </p> </div> <div class="text__block text__device"> <div class="device"> <img class="device__image" src="/images/projects/afternet/4.png"> </div> <div class="text__label"> Your dashboard is the hub to all areas of functionality </div> </div> <div class="text__block"> <p> For the interaction design every pixel that was added needed to take the development time into account. The predefined areas of functionality were the base of the structure as well. Because of the tight budget the focus was more on structure and clarity than delivering the wow-factor. With detailed wireframes a prototype was created in InVision that was used as the base for development. </p> <p> The graphic design tried to make it feel like a complete social network. I refrained myself from using heavy colors and let images be the main source of color. The logo (two infinity symbols put together to resemble a flower) is used throughout the platform to give it that extra character. </p> </div> <div class="text__block text__device"> <div class="device"> <img class="device__image" src="/images/projects/afternet/5.png"> </div> </div> <div class="text__block"> <div class="text__columns"> <div> <p> Giving the limited budget and circumstances I think we delivered the best social network we could. My hands are itching to conduct user research on the concept and design, but I guess the testing will be done on production. </p> <p> From a personal point of view it was a great learning experience to work on a new social platform right from the start. Especially the process from briefing to concept was challenging but rewarding. Looking at the end product I see a solid base with a lot of potential, and that\'s a very good feeling. </p> </div> <div> <div class="card card--align"> <div class="card__content"> <h2 class="card__title"> What it was all good for... </h2> <ul class="check-list"> <li>Creating a minimal viable product that is feasible on a tight budget and has room to grow, but is meaningful from the beginning</li> <li>Balancing client and personal ideas to design something both feel good about</li> <li>Bringing structure to a lot of client wishes and defining a core concept that will set it apart from the rest</li> </ul> </div> </div> </div> </div> </div>`'),e.put("views/projects/getshitdone/summary.html",'<div class="summary__section"> <span class="summary__label">I ended up with</span> <a href="https://play.google.com/store/apps/details?id=com.plafhop.getshitdone" target="_blank" class="button button--light"> this Android app </a> </div> <div class="summary__section"> <span class="summary__label">deciding about</span> <ul class="summary__list"> <li>Everything</li> </ul> </div> <div class="summary__section"> <span class="summary__label">with a little help from</span> <ul class="summary__list"> <li>Android SDK</li><li>Photoshop</li><li>Stack Overflow</li> </ul> </div>'),e.put("views/projects/getshitdone/text.html",'<div class="text__block"> <p> The assignment during the <a href="http://nachtkastje.strikingly.com/" target="_blank">\'Week of the Bedside Table\'</a> was simple: use four days to make anything you want, as long as you challenge yourself. For me it was a great opportunity to design and develop my own app for the first time. And while being at it, why not solve a problem almost everyone has? </p> <p> Using the motivation you have before you start working the app let\'s you set your goals and time in which you want to be done. No more distraction, just one mission. By dividing the goal into subgoals, setting consequences for success or failure and a break management system there are no more excuses not to get that shit done. </p> </div> <div class="text__block text__device text__device--mobile"> <div class="device"> <img class="device__image" src="/images/projects/getshitdone/2.png"> </div> <div class="device"> <img class="device__image" src="/images/projects/getshitdone/3.png"> </div> <div class="device"> <img class="device__image" src="/images/projects/getshitdone/4.png"> </div> </div> <div class="text__block"> <div class="text__columns"> <div> <p> With only a few days to come up with the concept and design I had to think fast and gamble a lot. Somehow the idea worked though and it was surprising to see how well the app was being received. Getting an email of a parent asking for a \'light\' version because she was using it for her kids to clean up was the highlight of the responses. </p> <p> The app has been downloaded almost 150.000 times, with users giving it 4.5 stars on average. I still have plans to design and develop a second, bigger and better version of the app. Somehow keep pushing that backwards though... </p> </div> <div> <div class="card card--align"> <div class="card__content"> <h2 class="card__title"> What it was all good for... </h2> <ul class="check-list"> <li>Feeling what it is like to not perfect every part of the project because there is simply not enough time</li> <li>Starting with an idea without a clue on how to make it and Googling your way towards a final product</li> <li>Experiencing (Android) app development and what it takes to get your app on Google Play for the first time</li> </ul> </div> </div> </div> </div> </div>`'),e.put("views/projects/greenchoice/summary.html",'<div class="summary__section"> <span class="summary__label">I managed the development of</span> <a href="https://www.greenchoice.nl" target="_blank" class="button button--light">this website</a> </div> <div class="summary__section"> <span class="summary__label">in the role of</span> <ul class="summary__list"> <li>Scrum Master</li><li>Developer</li> </ul> </div> <div class="summary__section"> <span class="summary__label">with a little help from</span> <ul class="summary__list"> <li>JIRA</li><li>Scrum</li><li>Umbraco</li><li>C#</li> </ul> </div>'),e.put("views/projects/greenchoice/text.html",'<div class="text__block"> <p> This project isn\'t the one that shows off a grand design or implementation, but it might be the one that I learned the most from. In the 2.5 years I was involved during my time at Siteworkers I took on a number of roles, learning about what it took along the way. </p> <p> It started with the implementation of the back-end of the site with the Umbraco CMS and ASP .NET. After that was finished I became the guy in charge of further developing the site, handling the communication with Greenchoice. With the passing of time the process became more fluent and professional. The last year we were scrumming with four different companies (client, front-end, back-end, marketing), improving the website every two weeks. As the Scrum-master it was my responsibility to let the team function as good as possible. </p> </div> <div class="text__block"> <div class="text__columns"> <div> <p> In those years I learned so much about the whole process of a bigger project like this. It showed me valuable lessons on communication, planning and adapting to unforseen circumstances. </p> </div> <div> <div class="card card--align"> <div class="card__content"> <h2 class="card__title"> What it was all good for... </h2> <ul class="check-list"> <li>Scrumming for a common goal with four companies</li> <li>Streamlining a complicated process with a lot of stakeholders as much as possible</li> <li>Being flexible when a plan doesn\'t work out the way it\'s supposed to</li> </ul> </div> </div> </div> </div> </div>`'),e.put("views/projects/opendata/summary.html",'<div class="summary__section"> <span class="summary__label">I worked on</span> <a href="https://opendata.siteworkers.nl" target="_blank" class="button button--light">this website</a> </div> <div class="summary__section"> <span class="summary__label">focussing on</span> <ul class="summary__list"> <li>Front-End Development</li><li>Visual Design</li><li>Interaction Design</li><li>Concept Design</li> </ul> </div> <div class="summary__section"> <span class="summary__label">with a little help from</span> <ul class="summary__list"> <li>SASS</li><li>HTML</li><li>Angular 1</li><li>Sketch</li> </ul> </div>'),e.put("views/projects/opendata/text.html",'<div class="text__block"> <p> For webforms every action the user has to do is one too many. With OpenData we wanted to provide a set of APIs that can reduce that number of actions. For example: instead of asking for your entire address, a postal code and house number would be enough. </p> <p> With a monthly subscription users get access to all APIs we have to offer, including the future ones. There are a number of packages with an increasing amount of requests. On top of that users can buy "back-up" requests to prevent shutdown after the monthly limit. </p> </div> <div class="text__block text__device"> <div class="device"> <img class="device__image" src="/images/projects/opendata/2.png"> </div> <div class="text__label"> A dashboard shows statistics as well as giving users control over their packages </div> </div> <div class="text__block"> <p> During concept development it was a constant trade-off between user friendliness and business goals (making money), more than with any other project I\'ve worked on. On one hand there is no test-package to use while you are implementing the API, but on the other hand you can buy "back-up" requests that never expire. Balancing that was a challenge as well as a learning experience. </p> <p> Another learning experience that came with this project was how much work is needed to get a service like this up and running. A dashboard, documentation, payment, content, forms, customer service: it\'s a lot more than just a website. </p> </div> <div class="text__block text__device"> <div class="device"> <img class="device__image" src="/images/projects/opendata/3.png"> </div> </div> <div class="text__block"> <div class="text__columns"> <div> <p> Once the service was live webforms all around the internet started getting better. The amount of clients for the service are reasonable with both types of packages being used. It became a healthy side-project for the company. There are plans to extend the service with more APIs, making the world an ever better place. </p> </div> <div> <div class="card card--align"> <div class="card__content"> <h2 class="card__title"> What it was all good for... </h2> <ul class="check-list"> <li>Designing an entire service from the ground up, including a dashboard and documentation</li> <li>Using Angular 1 for front-end development for the first time</li> </ul> </div> </div> </div> </div> </div>`'),e.put("views/projects/openiban/summary.html",'<div class="summary__section"> <span class="summary__label">I created</span> <a href="https://play.google.com/store/apps/details?id=nl.siteworkers.openiban" target="_blank" class="button button--light">this Android app</a> </div> <div class="summary__section"> <span class="summary__label">working on</span> <ul class="summary__list"> <li>Interaction Design</li><li>Visual Design</li><li>Development</li> </ul> </div> <div class="summary__section"> <span class="summary__label">with a little help from</span> <ul class="summary__list"> <li>Sketch</li><li>Android SDK</li><li>Stack Overflow</li> </ul> </div>'),e.put("views/projects/openiban/text.html",'<div class="text__block"> <p> In August 2014 all Dutch bank account numbers doubled in length because of the switch to IBAN. A lot of online converters appeared to help people with that switch. One of them was OpenIBAN, which was developed by my employer. After it\'s online success I used some Friday-afternoon time to create an Android app to go along with it. </p> <p> Because of the tiny core functionality I had the possibility to think about every little detail. Calculating and copying the IBAN are at center stage, but everything around it has been thought through. </p> </div> <div class="text__block text__device text__device--mobile"> <div class="device"> <img class="device__image" src="/images/projects/openiban/2.png"> </div> <div class="device"> <img class="device__image" src="/images/projects/openiban/3.png"> </div> <div class="device"> <img class="device__image" src="/images/projects/openiban/4.png"> </div> </div> <div class="text__block"> <div class="text__columns"> <div> <p> The small size of the project gave me the opportunity to make every aspect of the app the way I wanted it. There are even animations for everything that (dis)appears from the screen, helping the flow of the app. It\'s one of the few projects that both the designer and the developer in me are truly happy with. </p> </div> <div> <div class="card card--align"> <div class="card__content"> <h2 class="card__title"> What it was all good for... </h2> <ul class="check-list"> <li>Creating a tool entirely focussed on just one small core functionality</li> <li>Using animation to make the app feel as smooth as possible</li> <li>Experiencing app development</li> </ul> </div> </div> </div> </div> </div>`'),e.put("views/projects/trialsreport/summary.html",'<div class="summary__section"> <span class="summary__label">I\'m working on</span> <a href="https://trials.report" target="_blank" class="button button--light">this webapp</a> </div> <div class="summary__section"> <span class="summary__label">being responsible for</span> <ul class="summary__list"> <li>Interaction Design</li><li>Front-End Development</li><li>Visual Design</li> </ul> </div> <div class="summary__section"> <span class="summary__label">with a little help from</span> <ul class="summary__list"> <li>SASS</li><li>HTML</li><li>Angular</li><li>Sketch</li><li>Git</li> </ul> </div>'),e.put("views/projects/trialsreport/text.html",'<div class="text__block"> <p> \'Destiny\' is a popular videogame that offers an extensive API together with the digital shooting. The most popular multiplayer game mode, \'Trials of Osiris\', matches two teams of three against each other to decide who deserves the loot that comes with victory. And since digital loot is, of course, incredibly important players do whatever it takes to win. </p> <p> That gave two lovely people idea for the first version of \'Trials Report\'. While your next match is loading you are able to look up every stat you need on your opponents: their skill-level, the weapons they use, how they are faring so far and a whole lot more. A great idea with an OK execution, but the first version wasn\'t the prettiest site around. </p> <p> Which is why I decided to take matters into my own hands. After forking the repository I threw away all templates and started from scratch, only focusing on the visual appeal at the time. A few days and emails later I was officially welcomed to the team. </p> </div> <div class="text__block text__device"> <div class="device"> <img class="device__image" src="/images/projects/trialsreport/2.png"> </div> <div class="text__label"> The very first version of the redesigned \'Trials Report\' </div> </div> <div class="text__block"> <p> After the initial redesign there was a lot more work to be done. At that time the site had 60.000 visitors a month - of which 60% on mobile. By redesigning the basic structure of the site in the following those had a much smoother experience. That basic structure hasn\'t changed much since, the feedback on it is still positive. </p> <p> The things that have changed is almost everything else. Almost every month we or one of our visitors thought of something new to add. The biggest challenge was to keep the logical structure of the site intact and never losing focus of it\'s primary goal. The possibilities with the stats are endless, we had to make sure the most important parts are visible within a few seconds. After all, it\'s digital victory we\'re talking about here. </p> </div> <div class="text__block text__device"> <div class="device"> <img class="device__image" src="/images/projects/trialsreport/3.png"> </div> <div class="text__label"> Nowadays there\'s a lot more than just stats.<br>With challenges and badges we even try to add to the experience of the game </div> </div> <div class="text__block"> <div class="text__columns"> <div> <p> \'Trials Report\' has become a bigger success than any of us could have imagined. At it\'s peak we welcomed 640.000 users a month with more than 3 million sessions that lasted 15 minutes on average. Not bad for a side-project, although it\'s easy to put time and energy into something that you see grow like this. </p> <p> As \'Destiny\' ages it\'s popularity has decreased a bit since, and with it our visitors. Fortunately the sequel is set to release soon. If there\'s a similar game mode we will redesign and redevelop the site from the ground up to help players even better on their path to digital domination. </p> </div> <div> <div class="card card--align"> <div class="card__content"> <h2 class="card__title"> What it was all good for... </h2> <ul class="check-list"> <li>Learning to keep a large amount of data structured and prioritised</li> <li>Trying to keeping a growing open-source project organised</li> <li>Experiencing what it\'s like to work together remotely from different timezones</li> <li>Keeping a big number of users (a lot of them with access to Twitter) happy</li> </ul> </div> </div> </div> </div> </div>`')}]);
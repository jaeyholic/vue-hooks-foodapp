(function(e){function t(t){for(var n,i,s=t[0],l=t[1],c=t[2],p=0,d=[];p<s.length;p++)i=s[p],r[i]&&d.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"1ec0":function(e,t,a){},"254d":function(e,t,a){"use strict";var n=a("1ec0"),r=a.n(n);r.a},2559:function(e,t,a){},"29a1":function(e,t,a){},"2bb2":function(e,t,a){"use strict";var n=a("f3b6"),r=a.n(n);r.a},"2eda":function(e,t,a){"use strict";var n=a("c194"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=a("e720"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("app-navigation"),a("main",[a("app-activities"),a("app-grid"),a("app-about")],1)],1)},i=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"gallery",staticClass:"scene -gallery",attrs:{id:"app"}},[a("h1",{ref:"heading"},[e._v("Restaurants In Your Area")]),e._l(e.food,function(t){return a("div",{key:t.name,ref:"itemimg",refInFor:!0,staticClass:"item",attrs:{"data-key":t.name},on:{click:function(a){e.expand(t,a)}}},[a("img",{ref:t.name,refInFor:!0,attrs:{src:t.name+".jpg",alt:t.name}}),a("h4",[e._v(e._s(t.restaurant))])])}),e.isShowing&&!e.isMobile?a("app-details",{attrs:{currentItem:e.currentItem,topImg:e.topImg,rects:e.rects}}):e._e(),e.isShowing&&e.isMobile?a("app-mobiledetails",{attrs:{currentItem:e.currentItem,isShowing:e.isShowing},on:{closeModal:function(t){e.isShowing=t}}}):e._e()],2)},l=[],c=(a("7f7f"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mobiledetails",style:"background: url('"+e.currentItem.name+".jpg') no-repeat left top; background-size: contain"},[a("div",{staticClass:"mobilecontent"},[a("h2",{ref:"title",staticClass:"title"},[e._v(e._s(e.currentItem.restaurant))]),a("div",{staticClass:"tags"},e._l(e.currentItem.tags,function(t){return a("span",{key:t},[e._v(e._s(t))])})),a("p",{ref:"desc",staticClass:"description"},[e._v(e._s(e.currentItem.desc))]),a("button",{on:{click:e.closeModal}},[e._v("Back to Results")])])])}),u=[],p=a("cffa"),d=a("1b1d"),h=a.n(d);a("449c"),a("bbc4");function f(){Object(r["d"])(function(){var e=this.$refs.title,t=this.$refs.desc;h()({target:e,by:"chars"}),h()({target:t,by:"lines"});var a=new p["c"];a.add("start"),a.staggerFromTo(".scene .char, .mobiledetails .char",3.5,{opacity:0,transformOrigin:"50% 50% -30px",rotationY:100},{opacity:1,transformOrigin:"50% 50% 0",rotationY:0,ease:p["a"].easeOut.config(1,.4)},.02,"start+=0.3"),a.staggerFromTo(t.childNodes,1.5,{opacity:0},{opacity:1,ease:p["b"].easeOut},.008,"start+=0.6")})}var b={props:{currentItem:{type:Object,required:!0}},hooks:function(){f()},methods:{closeModal:function(){this.$emit("closeModal",!1)},fadeIn:function(){TweenMax.fromTo(".mobiledetails",.3,{opacity:0},{opacity:1,transformOrigin:"50% 50%",ease:Sine.easeOut})}},mounted:function(){this.fadeIn()}},k=b,g=(a("b8c4"),a("2877")),m=Object(g["a"])(k,c,u,!1,null,"ebee4d98",null);m.options.__file="AppMobiledetails.vue";var y=m.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"details",staticClass:"scene -detail",style:{top:e.topAmt+"px"}},[a("div",{staticClass:"detail"},[a("div",{staticClass:"content"},[a("h2",{ref:"title",staticClass:"title"},[e._v(e._s(e.currentItem.restaurant))]),a("div",{staticClass:"tags"},e._l(e.currentItem.tags,function(t){return a("span",{key:t},[e._v(e._s(t))])})),a("p",{ref:"desc",staticClass:"description"},[e._v(e._s(e.currentItem.desc))])])])])},w=[];a("c5f6");function _(){var e=function(e){e=e||window.event,e.preventDefault&&e.preventDefault(),e.returnValue=!1},t={37:1,38:1,39:1,40:1},a=function(a){if(t[a.keyCode])return e(a),!1};Object(r["d"])(function(){window.addEventListener&&window.addEventListener("DOMMouseScroll",e,!1),window.onwheel=e,window.onmousewheel=document.onmousewheel=e,window.touchmove=e,window.touchstart=e,document.onkeydown=a}),Object(r["c"])(function(){window.removeEventListener&&window.removeEventListener("DOMMouseScroll",e,!1),window.addEventListener("DOMMouseScroll",function(e){e.stopPropagation()},!0),window.onmousewheel=document.onmousewheel=null,window.onwheel=null,window.touchmove=null,window.touchstart=null,document.onkeydown=null})}var j={props:{currentItem:{type:Object,required:!0},rects:{type:Object,required:!0},topImg:{type:Number,required:!0}},hooks:function(){_(),f()},methods:{fadeIn:function(){TweenMax.fromTo(".-detail",.3,{opacity:0},{opacity:1,ease:Sine.easeOut})}},computed:{topAmt:function(){if(window.matchMedia("(min-width: 768px)").matches)return this.topImg+500;var e=this.rects.last.top>0?0:110;return window.pageYOffset-e+this.rects.last.width-280}},mounted:function(){this.fadeIn()}},I=j,T=(a("b6b3"),Object(g["a"])(I,v,w,!1,null,null,null));T.options.__file="AppDetails.vue";var O=T.exports,S={components:{AppDetails:O,AppMobiledetails:y},data:function(){return{isShowing:!1,isMobile:!1,currentItem:null,rects:{first:null,last:null},imgOffset:0,topImg:0}},computed:{food:function(){return this.$store.state.food}},watch:{isShowing:function(){window.matchMedia("(min-width: 768px)").matches?this.isMobile=!1:this.isMobile=!0}},methods:{expand:function(e,t){if(window.matchMedia("(min-width: 768px)").matches){var a=t.target,n=this.$refs[e.name][0];if(this.rects.first=a.getBoundingClientRect(),this.rects.last=this.$refs.gallery.getBoundingClientRect(),this.isShowing)TweenMax.to(n,.3,{x:0,y:0,scale:1,transformOrigin:"0 0",zIndex:0,ease:p["b"].easeIn}),this.isShowing=!1,this.currentItem=null;else{this.isShowing=!0,this.currentItem=e,this.topImg=this.$refs.gallery.scrollTop;var r=this.rects.first.left-this.rects.last.left,o=this.rects.first.top-this.rects.last.top,i=(this.rects.last.width-30)/this.rects.first.width;TweenMax.to(n,.3,{x:-r,y:-o,scale:i,transformOrigin:"0 0",zIndex:1e3,ease:p["b"].easeOut})}}else this.isShowing=!0,this.currentItem=e}}},x=S,M=(a("2eda"),Object(g["a"])(x,s,l,!1,null,null,null));M.options.__file="AppGrid.vue";var A=M.exports,C=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},B=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aside",{staticClass:"about"},[a("h2",[e._v("About Your Area")]),a("img",{attrs:{src:"bridge.jpg",alt:"bridge"}}),a("p",[e._v("We'll throw some happy little limbs on this tree. Everything is happy if you choose to make it that way. Use what you see, don't plan it. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue.")]),a("p",[e._v("Now, we're going to fluff this cloud. You can do anything your heart can imagine. A tree cannot be straight if it has a crooked trunk. I'm sort of a softy, I couldn't shoot Bambi except with a camera. The least little bit can do so much. It just happens - whether or not you worried about it or tried to plan it.")]),a("p",[e._v("Don't be afraid to make these big decisions. Once you start, they sort of just make themselves. We don't need any guidelines or formats. All we need to do is just let it flow right out of us. If these lines aren't straight, your water's going to run right out of your painting and get your floor wet.")]),a("p",[e._v("We'll make some happy little bushes here. But we're not there yet, so we don't need to worry about it. I thought today we would make a happy little stream that's just running through the woods here. This is probably the greatest thing to happen in my life - to be able to share this with you. You can bend rivers. But when I get home, the only thing I have power over is the garbage.")]),a("p",[e._v("See there, told you that would be easy. Isn't it fantastic that you can change your mind and create all these happy things? Let the paint work. It takes dark in order to show light. You can do it. If you've been in Alaska less than a year you're a Cheechako.")])])}],P={},$=P,L=(a("70fd"),Object(g["a"])($,C,B,!1,null,"7fe30fdc",null));L.options.__file="AppAbout.vue";var E=L.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aside",[a("h2",[e._v("Activities")]),e._l(e.activities,function(t){return a("div",{key:t.title},[a("h4",[e._v(e._s(t.title))]),a("small",[e._v(e._s(t.date))]),a("img",{attrs:{src:t.profile,alt:"the author of "+t.title}}),a("p",[e._v(e._s(t.post))])])})],2)},Y=[],F={computed:{activities:function(){return this.$store.state.activities}}},V=F,J=(a("7d28"),Object(g["a"])(V,D,Y,!1,null,"7f2297e3",null));J.options.__file="AppActivities.vue";var N=J.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",[a("app-logo"),a("span",{ref:"logoname",staticClass:"title"},[e._v("Dinner's On Me")]),a("span",{staticClass:"login"},[e._v("Log In")])],1)},G=[],R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100","aria-labelledby":"logo",role:"presentation"}},[a("title",{attrs:{id:"logo"}},[e._v("Food Logo")]),a("path",{staticClass:"cls-1",attrs:{d:"M84.142,51.814V70.763a1.3,1.3,0,0,1-1.3,1.3h0a1.3,1.3,0,0,1-1.3-1.3V54.611a6.754,6.754,0,0,0-1.978-4.775h0V38.142a13.384,13.384,0,0,1,4.578-10.079h0Z"}}),a("path",{staticClass:"cls-1",attrs:{d:"M49.15,26.25A23.75,23.75,0,1,0,72.9,50,23.75,23.75,0,0,0,49.15,26.25Zm0,40.25A16.5,16.5,0,1,1,65.65,50,16.519,16.519,0,0,1,49.15,66.5Z"}}),a("circle",{attrs:{cx:"49.15",cy:"50",r:"14.5"}}),a("path",{staticClass:"cls-1",attrs:{d:"M17.535,30.438v7.938a1,1,0,0,1-2,0V30.438H14.14v7.938a1,1,0,0,1-2,0V30.438H10.775v8.613a2.763,2.763,0,0,0,2.762,2.762v28.95a1.3,1.3,0,0,0,2.6,0V41.813A2.763,2.763,0,0,0,18.9,39.051V30.438Z"}})])},W=[],H={},Z=H,q=(a("2bb2"),Object(g["a"])(Z,R,W,!1,null,"3ba40dd0",null));q.options.__file="AppLogo.vue";var U=q.exports;function K(e){Object(r["d"])(function(){if(e.data.width>1200){var t=this.$refs.logoname;h()({target:t,by:"chars"}),p["d"].staggerFromTo("nav .char",5,{opacity:0,transformOrigin:"50% 50% -30px",cycle:{color:["red","purple","teal"],rotationY:function(e){return 50*e}}},{opacity:1,transformOrigin:"50% 50% 0",rotationY:0,color:"white",ease:p["a"].easeOut.config(1,.4)},-.02)}})}function Q(){var e=Object(r["b"])({width:0});return Object(r["d"])(function(){e.width=window.innerWidth}),{data:e}}var X={components:{AppLogo:U},hooks:function(){K(Q())}},ee=X,te=(a("254d"),Object(g["a"])(ee,z,G,!1,null,"4ec57cb0",null));te.options.__file="AppNavigation.vue";var ae=te.exports,ne={components:{AppNavigation:ae,AppActivities:N,AppAbout:E,AppGrid:A}},re=ne,oe=(a("5c0b"),Object(g["a"])(re,o,i,!1,null,null,null));oe.options.__file="App.vue";var ie=oe.exports,se=a("2f62");n["a"].use(se["a"]);var le=new se["a"].Store({state:{food:[{name:"appetizer",restaurant:"The Chopping Tulip",desc:"Spicy jalapeno frankfurter ribeye bacon short loin, biltong sirloin chuck prosciutto andouille pork rump strip steak corned beef fatback. Buffalo sausage beef ribs drumstick salami pastrami pork belly alcatra boudin tri-tip pork turkey turducken pork chop shank. Doner jerky andouille, shank spare ribs pork chop kevin.",tags:["starters","cafe","pairings"]},{name:"avocado",restaurant:"The Boiling Tripe",desc:"Tail ham hock hamburger, tri-tip tenderloin turducken bresaola burgdoggen doner. Leberkas filet mignon pork burgdoggen pork chop, tri-tip doner cow. Shankle kevin ball tip bacon pork. Prosciutto meatloaf beef kevin sirloin tenderloin flank shankle turducken cupim corned beef porchetta ham hock andouille sausage.",tags:["salad","cafe","lunch"]},{name:"berries",restaurant:"l'Origine",desc:"Swine prosciutto kevin tenderloin ball tip shankle turducken chuck. Jowl turducken pork short ribs, sausage andouille meatloaf fatback drumstick tenderloin shank pancetta. Tail pancetta burgdoggen tenderloin filet mignon chicken. Beef ribs meatloaf andouille fatback, prosciutto corned beef boudin.",tags:["breakfast","cafe","healthy"]},{name:"bowl",restaurant:"The Cane",desc:"Jowl sausage swine cow drumstick doner brisket chicken ball tip meatball frankfurter leberkas alcatra.Tenderloin picanha kielbasa capicola.Tail buffalo corned beef frankfurter drumstick hamburger fatback venison turkey pork loin biltong tongue beef.",tags:["lunch","cafe","healthy"]},{name:"breakfast",restaurant:"la Salle du Nord",desc:"Ball tip pork belly turkey tri-tip, jerky leberkas tenderloin pork chop biltong prosciutto pancetta. Porchetta ground round ham bacon tri-tip jerky buffalo. Bresaola shoulder tail shankle.",tags:["pancakes","cafe","fruit"]},{name:"burger2",restaurant:"Limestone",desc:"Hamburger sausage rump jowl kevin. Strip steak flank kevin biltong, landjaeger boudin leberkas chicken pork chop prosciutto ribeye ball tip. Tenderloin burgdoggen andouille pastrami venison.",tags:["takeout","sides","meat"]},{name:"corn",restaurant:"Saffron",desc:"Ground round biltong bresaola drumstick fatback ham hock sausage t-bone, corned beef hamburger prosciutto. Short ribs spare ribs meatloaf leberkas, turducken picanha tail brisket jerky ball tip. Meatloaf chuck swine, tenderloin sirloin cupim short loin strip steak pork chop ham hock.",tags:["dinner","woodfire","healthy"]},{name:"dumpling",restaurant:"Little China",desc:"Filet mignon bacon spare ribs meatball jowl pork belly cow ground round ham strip steak. Prosciutto flank fatback pastrami short loin turducken tenderloin tongue frankfurter venison drumstick beef ribs burgdoggen chicken brisket. Sirloin chuck filet mignon sausage, pork belly chicken brisket alcatra turducken buffalo ham ball tip ground round boudin.",tags:["dinner","chinese","soup"]},{name:"egg2",restaurant:"Roadhouse",desc:"Spicy jalapeno frankfurter ribeye bacon short loin, biltong sirloin chuck prosciutto andouille pork rump strip steak corned beef fatback. Buffalo sausage beef ribs drumstick salami pastrami pork belly alcatra boudin tri-tip pork turkey turducken pork chop shank. Doner jerky andouille, shank spare ribs pork chop kevin.",tags:["starters","cafe","pairings"]},{name:"fig",restaurant:"le Fleur Frais",desc:"Tail ham hock hamburger, tri-tip tenderloin turducken bresaola burgdoggen doner. Leberkas filet mignon pork burgdoggen pork chop, tri-tip doner cow. Shankle kevin ball tip bacon pork. Prosciutto meatloaf beef kevin sirloin tenderloin flank shankle turducken cupim corned beef porchetta ham hock andouille sausage.",tags:["salad","cafe","lunch"]},{name:"fries",restaurant:"The Violet Diner",desc:"Swine prosciutto kevin tenderloin ball tip shankle turducken chuck. Jowl turducken pork short ribs, sausage andouille meatloaf fatback drumstick tenderloin shank pancetta. Tail pancetta burgdoggen tenderloin filet mignon chicken. Beef ribs meatloaf andouille fatback, prosciutto corned beef boudin.",tags:["breakfast","cafe","healthy"]},{name:"oyster",restaurant:"le Jardin",desc:"Jowl sausage swine cow drumstick doner brisket chicken ball tip meatball frankfurter leberkas alcatra.Tenderloin picanha kielbasa capicola.Tail buffalo corned beef frankfurter drumstick hamburger fatback venison turkey pork loin biltong tongue beef.",tags:["lunch","cafe","healthy"]},{name:"pancake",restaurant:"The Locket",desc:"Ball tip pork belly turkey tri-tip, jerky leberkas tenderloin pork chop biltong prosciutto pancetta. Porchetta ground round ham bacon tri-tip jerky buffalo. Bresaola shoulder tail shankle.",tags:["pancakes","cafe","fruit"]},{name:"pasta",restaurant:"Vagabonds",desc:"Hamburger sausage rump jowl kevin. Strip steak flank kevin biltong, landjaeger boudin leberkas chicken pork chop prosciutto ribeye ball tip. Tenderloin burgdoggen andouille pastrami venison.",tags:["takeout","sides","meat"]},{name:"pasta2",restaurant:"Basil",desc:"Ground round biltong bresaola drumstick fatback ham hock sausage t-bone, corned beef hamburger prosciutto. Short ribs spare ribs meatloaf leberkas, turducken picanha tail brisket jerky ball tip. Meatloaf chuck swine, tenderloin sirloin cupim short loin strip steak pork chop ham hock.",tags:["dinner","woodfire","healthy"]},{name:"pizza",restaurant:"The Parlour",desc:"Filet mignon bacon spare ribs meatball jowl pork belly cow ground round ham strip steak. Prosciutto flank fatback pastrami short loin turducken tenderloin tongue frankfurter venison drumstick beef ribs burgdoggen chicken brisket. Sirloin chuck filet mignon sausage, pork belly chicken brisket alcatra turducken buffalo ham ball tip ground round boudin.",tags:["dinner","chinese","soup"]},{name:"plates",restaurant:"Trilogy",desc:"Spicy jalapeno frankfurter ribeye bacon short loin, biltong sirloin chuck prosciutto andouille pork rump strip steak corned beef fatback. Buffalo sausage beef ribs drumstick salami pastrami pork belly alcatra boudin tri-tip pork turkey turducken pork chop shank. Doner jerky andouille, shank spare ribs pork chop kevin.",tags:["starters","cafe","pairings"]},{name:"popcicle",restaurant:"Paragon",desc:"Tail ham hock hamburger, tri-tip tenderloin turducken bresaola burgdoggen doner. Leberkas filet mignon pork burgdoggen pork chop, tri-tip doner cow. Shankle kevin ball tip bacon pork. Prosciutto meatloaf beef kevin sirloin tenderloin flank shankle turducken cupim corned beef porchetta ham hock andouille sausage.",tags:["salad","cafe","lunch"]},{name:"salmon",restaurant:"The Urban Shark",desc:"Swine prosciutto kevin tenderloin ball tip shankle turducken chuck. Jowl turducken pork short ribs, sausage andouille meatloaf fatback drumstick tenderloin shank pancetta. Tail pancetta burgdoggen tenderloin filet mignon chicken. Beef ribs meatloaf andouille fatback, prosciutto corned beef boudin.",tags:["breakfast","cafe","healthy"]},{name:"soup",restaurant:"The Glass Pantry",desc:"Jowl sausage swine cow drumstick doner brisket chicken ball tip meatball frankfurter leberkas alcatra.Tenderloin picanha kielbasa capicola.Tail buffalo corned beef frankfurter drumstick hamburger fatback venison turkey pork loin biltong tongue beef.",tags:["lunch","cafe","healthy"]},{name:"steak",restaurant:"Castle",desc:"Ball tip pork belly turkey tri-tip, jerky leberkas tenderloin pork chop biltong prosciutto pancetta. Porchetta ground round ham bacon tri-tip jerky buffalo. Bresaola shoulder tail shankle.",tags:["pancakes","cafe","fruit"]},{name:"steamed",restaurant:"Ambience",desc:"Hamburger sausage rump jowl kevin. Strip steak flank kevin biltong, landjaeger boudin leberkas chicken pork chop prosciutto ribeye ball tip. Tenderloin burgdoggen andouille pastrami venison.",tags:["takeout","sides","meat"]},{name:"toast",restaurant:"The Village Cow",desc:"Ground round biltong bresaola drumstick fatback ham hock sausage t-bone, corned beef hamburger prosciutto. Short ribs spare ribs meatloaf leberkas, turducken picanha tail brisket jerky ball tip. Meatloaf chuck swine, tenderloin sirloin cupim short loin strip steak pork chop ham hock.",tags:["dinner","woodfire","healthy"]},{name:"tomato",restaurant:"French Street Kitchen",desc:"Filet mignon bacon spare ribs meatball jowl pork belly cow ground round ham strip steak. Prosciutto flank fatback pastrami short loin turducken tenderloin tongue frankfurter venison drumstick beef ribs burgdoggen chicken brisket. Sirloin chuck filet mignon sausage, pork belly chicken brisket alcatra turducken buffalo ham ball tip ground round boudin.",tags:["dinner","chinese","soup"]}],activities:[{title:"City Zoo",date:"August 3",profile:"profile1.jpg",post:"If you do too much it's going to lose its effectiveness. You can just push a little tree out of your brush like that. Maybe there's a happy little waterfall happening over here. This present moment is perfect simply due to the fact you're experiencing it."},{title:"Painting Classes",date:"September 25",profile:"profile2.jpg",post:"That's why I paint - because I can create the kind of world I want - and I can make this world as happy as I want it. You can't have light without dark. You can't know happiness unless you've known sorrow. This is the way you take out your flustrations. There are no mistakes. You can fix anything that happens."},{title:"Playground",date:"April 15",profile:"profile3.jpg",post:"Clouds are free. They just float around the sky all day and have fun. Let's put some happy trees and bushes back in here. It's life. It's interesting. It's fun. Trees grow in all kinds of ways. They're not all perfectly straight. Not every limb is perfect. I want everbody to be happy. That's what it's all about. Let's do that again."},{title:"Steamboat Casino",date:"April 30",profile:"profile4.jpg",post:"This is where you take out all your hostilities and frustrations. It's better than kicking the puppy dog around and all that so. There he comes. When things happen - enjoy them. They're little gifts. Talk to trees, look at the birds."}]},mutations:{},actions:{}});n["a"].config.productionTip=!1,n["a"].use(r["a"]),new n["a"]({store:le,render:function(e){return e(ie)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var n=a("5e27"),r=a.n(n);r.a},"5e27":function(e,t,a){},"70fd":function(e,t,a){"use strict";var n=a("2559"),r=a.n(n);r.a},"7d28":function(e,t,a){"use strict";var n=a("c6bb"),r=a.n(n);r.a},b6b3:function(e,t,a){"use strict";var n=a("29a1"),r=a.n(n);r.a},b8c4:function(e,t,a){"use strict";var n=a("e426"),r=a.n(n);r.a},c194:function(e,t,a){},c6bb:function(e,t,a){},e426:function(e,t,a){},f3b6:function(e,t,a){}});
//# sourceMappingURL=app.a741848f.js.map
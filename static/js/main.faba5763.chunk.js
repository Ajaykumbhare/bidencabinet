(this.webpackJsonpbidencabinet=this.webpackJsonpbidencabinet||[]).push([[0],{30:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n(0),r=n.n(a),s=n(22),o=n.n(s),c=n(5),d=n(6),h=n(8),l=n(7),p=n(41),m=n(16),u=n(14),f=(n(30),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"head",children:Object(i.jsx)("h1",{children:"Biden Cabinet Nominees"})})}}]),n}(a.Component)),b=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(i.jsxs)(p.a,{className:"box",style:{},children:[Object(i.jsx)(p.a.Img,{variant:"top",src:this.props.pick.imgPath}),Object(i.jsxs)(p.a.Body,{children:[Object(i.jsx)(p.a.Title,{style:{textOverflow:"ellipsis",height:"90px",justifyContent:"flex-start",alignItems:"flex-start"},children:this.props.pick.title}),Object(i.jsx)(u.b,{to:"/cabinet/".concat(this.props.pick.title),children:Object(i.jsx)(m.a,{variant:"outline-secondary",children:"More Information"})})]})]})}}]),n}(a.Component),g=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return this.props.candidates.map((function(e){return Object(i.jsx)(b,{pick:e},e.id)}))}}]),n}(a.Component),j=n(3),x=(n(36),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{children:Object(i.jsx)("span",{style:{height:"25px",width:"25px",backgroundColor:"#bbb",borderRadius:"50%"}})})}}]),n}(a.Component)),y=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.candidates.find((function(t){return Number(e.props.cabinet.id)>0?Number(t.id)===Number(e.props.cabinet.id)-1:Number(t.id)===Number(e.props.candidates.length-1)})),n=this.props.candidates.find((function(t){return Number(e.props.cabinet.id)>=Number(e.props.candidates.length-1)?0===Number(t.id):Number(t.id)===Number(e.props.cabinet.id+1)}));return Object(i.jsx)("div",{className:"view",children:Object(i.jsxs)(r.a.Fragment,{children:[Object(i.jsx)("img",{className:"mugshot",src:this.props.cabinet.imgPath}),Object(i.jsx)("h2",{children:this.props.cabinet.title}),Object(i.jsx)("h4",{children:this.props.cabinet.name}),Object(i.jsx)("h5",{}),Object(i.jsx)("p",{children:this.props.cabinet.description}),Object(i.jsx)(u.b,{to:"/cabinet/".concat(t.title),children:Object(i.jsx)(m.a,{variant:"outline-dark",children:"Previous"})}),Object(i.jsx)("br",{}),Object(i.jsx)(u.b,{to:"/cabinet/".concat(n.title),children:Object(i.jsx)(m.a,{variant:"outline-dark",children:"Next"})}),Object(i.jsx)("div",{children:Object(i.jsx)(x,{})})]})})}}]),n}(a.Component),O=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(i.jsx)("footer",{children:Object(i.jsxs)("p",{className:"boss",children:["Sources: ",Object(i.jsx)("a",{href:"https://buildbackbetter.gov/the-transition/",target:"_blank",children:"The Transition "})," and ",Object(i.jsx)("a",{href:"https://www.whitehouse.gov/the-trump-administration/the-cabinet/",target:"_blank",children:"The Trump Administration"})]})})}}]),n}(a.Component),v=(n(37),n(38),n(24)),S=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).nextCandidate=function(){i.setState({idx:(i.state.idx+1)%i.state.candidates.length}),console.log(i.state.candidates[i.state.idx])},i.previousCandidate=function(){i.setState({idx:(i.state.idx-1)%i.state.candidates.length}),console.log(i.state.candidates[i.state.idx])},i.state={candidates:[{title:"President",name:"Joe Biden",description:"The President is both the head of state and head of government of the United States of America, and Commander-in-Chief of the armed forces.",imgPath:"img/biden4x4.png",nextPath:"Vice President",id:0},{title:"Vice President",name:"Kamala Harris",description:"The primary responsibility of the Vice President of the United States is to be ready at a moment\u2019s notice to assume the Presidency if the President is unable to perform his duties.",imgPath:"img/harris4x4.png",id:1},{title:"Secretary of State",name:"Antony Blinken",description:"The Secretary of State serves as the President\u2019s top foreign policy adviser, and oversees 30,000 employees and a budget of approximately $35 billion.",imgPath:"img/blinken4x4.png",id:2},{title:"Secretary of the Treasury",name:"Janet Yellen",description:"The Department of the Treasury is responsible for promoting economic prosperity and ensuring the soundness and security of the U.S. and international financial systems.",imgPath:"img/yellen4x4.png",id:3},{title:"Secretary of Defense",name:"Gen. Lloyd Austin",description:"The mission of the Department of Defense (DOD) is to provide the military forces needed to deter war and to protect the security of our country. The department\u2019s headquarters is at the Pentagon.",imgPath:"img/austin4x4.png",id:4},{title:"Attorney General",name:"Judge Merrick Garland",description:"The mission of the Department of Justice (DOJ) is to enforce the law and defend the interests of the United States according to the law",imgPath:"img/garland4x4.png",id:5},{title:"Secretary of the Interior",name:"Deb Haaland",description:"The Department of the Interior (DOI) is the nation\u2019s principal conservation agency. Its mission is to protect America\u2019s natural resources, offer recreation opportunities, conduct scientific research, conserve and protect fish and wildlife, and honor our trust responsibilities to American Indians, Alaskan Natives, and our responsibilities to island communities.",imgPath:"img/haaland4x4.png",id:6},{title:"Secretary of Agriculture",name:"Tom Vilsack",description:"The U.S. Department of Agriculture (USDA) develops and executes policy on farming, agriculture, and food.",imgPath:"img/vilsack4x4.png",id:7},{title:"Secretary of Commerce",name:"Gina Raimondo",description:"The Department of Commerce is the government agency tasked with improving living standards for all Americans by promoting economic development and technological innovation.",imgPath:"img/gina4x4.png",id:8},{title:"Secretary of Labor",name:"Mary Walsh",description:"The Department of Labor oversees federal programs for ensuring a strong American workforce. ",imgPath:"img/marty4x4.png",id:9},{title:"Secretary of Health & Human Services",name:"Xavier Becerra",description:"The Department of Health and Human Services (HHS) is the United States government\u2019s principal agency for protecting the health of all Americans and providing essential human services, especially for those who are least able to help themselves. ",imgPath:"img/becerra4x4.png",id:10},{title:"Secretary of Housing & Urban Development",name:"Marcia Fudge",description:"The Department of Housing and Urban Development (HUD) is the federal agency responsible for national policies and programs that address America\u2019s housing needs, that improve and develop the nation\u2019s communities, and that enforce fair housing laws. ",imgPath:"img/fudge4x4.png",id:11},{title:"Secretary of Transportation",name:"Pete Buttigieg",description:"The mission of the Department of Transportation (DOT) is to ensure a fast, safe, efficient, accessible and convenient transportation system that meets our vital national interests and enhances the quality of life of the American people.",imgPath:"img/buttigieg4x4.png",id:12},{title:"Secretary of Energy",name:"Jennifer Granholm",description:"The mission of the Department of Energy (DOE) is to advance the national, economic, and energy security of the United States.",imgPath:"img/granholm4x4.png",id:13},{title:"Secretary of Education",name:"Miguel Cardona",description:"The mission of the Department of Education is to promote student achievement and preparation for competition in a global economy by fostering educational excellence and ensuring equal access to educational opportunity.",imgPath:"img/cardona4x4.png",id:14},{title:"Secretary of Homeland Security",name:"Alejandro Mayorkas",description:"The missions of the Department of Homeland Security are to prevent and disrupt terrorist attacks; protect the American people, our critical infrastructure, and key resources; and respond to and recover from incidents that do occur. ",imgPath:"img/mayorkas4x4.png",id:15},{title:"Secretary of Veterans Affairs",name:"Denis McDonough",description:"The Department of Veterans Affairs is responsible for administering benefit programs for veterans, their families, and their survivors.",imgPath:"img/mcdonough4x4.png",id:16}],idx:0,newArray:[]},i}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(i.jsxs)(u.a,{children:[Object(i.jsx)(j.a,{exact:!0,path:"/",render:function(){return Object(i.jsx)(f,{})}}),Object(i.jsxs)(v.a,{className:"grid",style:{backgroundImage:"url(".concat("./img/seal.svg",")")},children:[Object(i.jsx)(j.a,{exact:!0,path:"/",render:function(){return Object(i.jsx)(g,{candidates:e.state.candidates})}}),Object(i.jsx)(j.a,{exact:!0,path:"/cabinet/:title",render:function(t){var n=t.match;return Object(i.jsx)(y,{candidates:e.state.candidates,nextCandidate:e.nextCandidate,previousCandidate:e.previousCandidate,idx:e.state.idx,newArray:e.state.newArray,cabinet:e.state.candidates.find((function(e){return e.title===n.params.title}))})}})]}),Object(i.jsx)(j.a,{exact:!0,path:"/",render:function(){return Object(i.jsx)(O,{})}})]})}}]),n}(a.Component);o.a.render(Object(i.jsx)(S,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.faba5763.chunk.js.map
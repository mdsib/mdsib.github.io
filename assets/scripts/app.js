"use strict";
var state = null;

var site = document.getElementsByTagName('html')[0];
var nav = document.getElementsByTagName('nav')[0];
var role = document.getElementsByTagName('h2')[0];
var contents = document.querySelectorAll('.content');
var roles = {
   "disqus": "Software Engineer",
   "magnifi": "Software Engineer",
   "mupu": "Co-Founder, CTO, Lead Developer",
   "kcpr": "Internet Director",
   "edufii": "Web Design Intern",
   "default": "Web Developer"
};

var changePage = function () {
   var name = this.getAttribute("name");
   if (!state) {
      site.setAttribute("class", name);
   }
}

var maybeChangePageBack = function () {
      site.setAttribute("class", state);
}

var links = document.querySelectorAll("nav a");

links[links.length] = (document.querySelectorAll("h1")[0]);

var onBackButton = function() {
   setNavActiveStates("nothing");
   nav.setAttribute("class", "");
   state = "";
   site.setAttribute("class", state);
   for (var i = 0; i < contents.length; i++) {
      contents[i].style.display = "none";
   }
}

var setNavActiveStates = function(state) {
  var link;
  for(var i = 0; i < links.length; i++) {
    link = links[i];
    if (link.getAttribute("name") == state) {
      link.setAttribute("class", "active");
    }
    else {
      link.setAttribute("class", "");
    }
  }
}

var displayContent = function(state) {
   for (var i = 0; i < contents.length; i++) {
      if (contents[i].getAttribute("name") == state + "-content") {
         contents[i].style.display = "block";
      }
      else {
         contents[i].style.display = "none";
      }
   }
   nav.setAttribute("class", "scrolled");
}

var ifClicked = function() {
   state = this.getAttribute("name");
   setNavActiveStates(state);
   displayContent(state);

   site.setAttribute("class", state);
}
//var clearPage = function () {
//   if (!state) {
//      site.setAttribute("class", "");
//      role.innerHTML = roles["default"];
//   }
//}
for (var i=0; i < links.length; i++) {
   links[i].addEventListener('mouseenter', changePage);
   links[i].addEventListener('mouseleave', maybeChangePageBack);
   links[i].addEventListener('click', ifClicked);
}

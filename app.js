"use strict";
var state = null;

var site = document.getElementsByTagName('html')[0];
var nav = document.getElementsByTagName('nav')[0];
var role = document.getElementsByTagName('h2')[0];
var contents = document.querySelectorAll('.content');
var roles = {
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

var links = document.querySelectorAll(".vert-ul li");

links[links.length] = (document.querySelectorAll("h1")[0]);

var onBackButton = function() {
   nav.setAttribute("class", "");
   state = "";
   site.setAttribute("class", state);
   for (var i = 0; i < contents.length; i++) {
      contents[i].style.display = "none";
   }
}

var ifClicked = function() {
   state = this.getAttribute("name");
   var attr = null;
   nav.setAttribute("class", "scrolled");

   for (var i = 0; i < links.length; i++) {
      if (attr = (links[i].getAttribute("class")))
         links[i].setAttribute("class", attr.replace(" underline", ""));
   }
   this.setAttribute("class", this.getAttribute("class") + " underline");
   for (var i = 0; i < contents.length; i++) {
      if (contents[i].getAttribute("name") == state + "-content") {
         contents[i].style.display = "block";
      }
      else {
         contents[i].style.display = "none";
      }
   }
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

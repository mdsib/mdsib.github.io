"use strict";
var state = null;
var site = document.getElementsByTagName('html')[0];
var role = document.getElementsByTagName('h2')[0];
var contents = document.querySelectorAll('.content');
var roles = {
   "mupu": "Co-Founder, CTO, Lead Developer",
   "kcpr": "Internet Director",
   "edufii": "Web Design Intern",
   "default": "Full Stack Web Developer"
};
var changePage = function () {
   var name = this.getAttribute("name");
   site.setAttribute("class", name);
}

var ifClicked = function() {
   state = this.getAttribute("name");
   console.log('clicked');
   for (var i in contents) {
      if (contents[i].getAttribute("name") == state + "-content") {
         contents[i].style.display = "block";
      }
      else {
         contents[i].style.display = "none";
      }
   }
}
//var clearPage = function () {
//   if (!state) {
//      site.setAttribute("class", "");
//      role.innerHTML = roles["default"];
//   }
//}
var links = document.querySelectorAll(".vert-ul li");
links[links.length] = (document.querySelectorAll("h1")[0]);
console.log(links);
for (var i in links) {
   links[i].addEventListener('mouseenter', changePage);
   links[i].addEventListener('click', ifClicked);
}


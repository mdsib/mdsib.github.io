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

var links = document.querySelectorAll("nav a, [data-home-link]");

var onBackButton = function() {
    setNavActiveStates("");
    displayContent();
};

var setNavActiveStates = function(state) {
    var link;
    for(var i = 0; i < links.length; i++) {
        link = links[i];
        if (link.getAttribute("name") == state) {
            link.setAttribute("class", "active");
            let style = window.getComputedStyle(link);
            link.style.transform = style.transform;
            link.style.opacity = style.opacity;
            link.style.animation = "none";
            link.style.filter = "none";
        }
        else {
            link.style.transform = "none";
            link.setAttribute("class", "");
            link.style.animation = null;
            link.style.filter = null;
            link.style.transform = null;
        }
    }
};

var displayContent = function(state, scrolled) {
    for (var i = 0; i < contents.length; i++) {
        if (contents[i].getAttribute("name") == state + "-content") {
            contents[i].classList.add("active");
        }
        else {
            contents[i].classList.remove("active");
        }
    }
    if (scrolled) {
        nav.classList.add("scrolled");
    }
    else {
        nav.classList.remove("scrolled");
    }
};

var ifClicked = function() {
    state = this.getAttribute("name");
    setNavActiveStates(state);
    displayContent(state, state !== 'default');
};

for (var i=0; i < links.length; i++) {
    links[i].addEventListener('click', ifClicked);
}

// data in api zetten
var xhr = new XMLHttpRequest();
var url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api/squads/1/teams/1/members/48';

// var url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api/'

// GET REQUEST : dmv fetch
// const teams = fetch(url)
//                 .then(response => response.json())
//                 .then(data => console.log('fetch', data));

// PUT request

//aanpassen van de api:
const userData = {
    "teamId": "1",
    "name": "Sanne",
    "avatar": "https://avatars.githubusercontent.com/u/60745348?s=460&u=f9c29a4d44a973ba6a496526b0bf3faf2f416f9a&v=4",
    "prefix": "",
    "surname": "Duinker",
    "mugshot": "https://avatars.githubusercontent.com/u/60745348?s=460&u=f9c29a4d44a973ba6a496526b0bf3faf2f416f9a&v=4",
    "githubHandle": "sanneduinkerx",
    "other": {
    "age": "19",
    "sport": "none",
    "pet": "kippen",
    "muziek": "Lo-fi, acoustic",
    "werkplek": "Thuis"
    },
    "url": "https://sanneduinkerx.github.io/kickoff-2021/index.html"
};

// xhr.open("PUT", url, true);
// xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.send(JSON.stringify(userData));

// api in element

// document.body.onload = inladen;

// function inladen () {
//   // create a p element
//   var Paragraaf = document.createElement("p");
//   var Img = document.createElement("img");

//   // and give it some content
// //   var newContent = document.createTextNode(" name");
//   var div = document.querySelector('div');

  // add the text node to the newly created div
//   div.appendChild(Paragraaf);
//   Paragraaf.appendChild(newContent);
// }

//src: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
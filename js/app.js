var xhr = new XMLHttpRequest()
var url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api/squads/1/teams/1/members'

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
    }
}
xhr.open("POST", url, true)
xhr.setRequestHeader('Content-Type', 'application/json')
xhr.send(JSON.stringify(userData))

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
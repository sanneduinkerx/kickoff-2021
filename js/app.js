var url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api/squads/1/teams/1/members';

// GET REQUEST
var teams = fetch(url)
                .then(response => response.json())
                .then(data => console.log('fetch', data));

// PUT REQUEST
///...


// api in element

document.body.onload = inladen;

function inladen () {
  // create a p element
  var Paragraaf = document.createElement("p");
  var Img = document.createElement("img");

  // and give it some content
//   var newContent = document.createTextNode(" name");
  var div = document.querySelector('div');

  // add the text node to the newly created div
//   div.appendChild(Paragraaf);
//   Paragraaf.appendChild(newContent);
}

//src: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
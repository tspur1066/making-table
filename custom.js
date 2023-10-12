/********************************************************************
 * 
 * Script to write a tab;e of artist names into index.html.
 * 
 *******************************************************************/

 // The array of objects, one object for each artist.
 
 const artists = [
   {
     name: "Ms Scandalous",
     birthYear: 1985,
     link: "https://www.youtube.com/watch?v=2FPivlfvxu0"
   },
   {
    name: "Juggy D",
    birthYear: 1981,
    link: "https://www.youtube.com/watch?v=1jAc_-FVjdI"
  },
  {
    name: "Sukhbir Singh",
    birthYear: 1969,
    link: "https://www.youtube.com/watch?v=HiprNF9Jad0"
  },
  {
    name: "Abrar-ul-Haq",
    birthYear: 1989,
    link: "https://www.youtube.com/watch?v=-lnnVIP7FEc"
  },
  {
    name: "Rishi Rich",
    birthYear: 1970,
    link: "https://www.youtube.com/watch?v=O95-w2gACuA"
  }
 ]

 // complete with code to select and populate the table
const tableDiv = document.querySelector("#bhangra");

let contents = "<tr>";
contents += "<th>Name</th>";
contents += "<th>Date of Birth</th>";
contents += "<th>Link</th>";
contents += "</tr>";
contents += "<tr>";

artists.forEach(function(artist) {
  contents += `<td> ${artist.name} </td>`;
  contents += `<td> ${artist.birthYear} </td>`;
  contents += `<td><a href= "${artist.link}" target="_blank">${artist.link}</a></td>`;
  contents += "</tr>";
  contents += "</table>";
})

tableDiv.innerHTML = contents;


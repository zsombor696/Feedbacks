/*
* File: app.js
* Author: Juhász Zsombor
* Copyright: 2024, Juhász Zsombor
* Group: Szoft V
* Date: 2024-05-09
* Github: https://github.com/zsombor696/
* Licenc: GNU GPL
*/
const doc = {
    feedsBody: document.querySelector("#feedsBody")
}


function getFeeds(){
    let url = " http://localhost:8000/feedbacks"
    fetch(url)
    .then(response => response.json())
    .then(result => {
        renderFeeds(result)
    })
}

getFeeds()

function renderFeeds(feedsList){
    feedsList.forEach(feeds =>{
        const tr = document.createElement('tr')
        tr.innerHTML =
        `
        <td>${feeds.id}</td>
        <td>${feeds.description}</td>
        <td>${feeds.indicator}</td>
        <td>${feeds.date}</td>
        <td>${feeds.evaluation}</td>
        ` 
        doc.feedsBody.appendChild(tr)
    });
}
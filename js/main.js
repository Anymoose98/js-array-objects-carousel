// Varie immaggini
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


// contenitori vari
let img_contenitore = document.getElementById("img")
let title_contenitore = document.getElementById("title")
let text_contenitore = document.getElementById("text")

// bottoni
// indicearray
let indiceArray = 0;
    // bottone next
    document.getElementById("bottonenext").addEventListener("click", function () {
        if(indiceArray < images.length - 1){
            indiceArray += +1;
            img_contenitore.src =(images[indiceArray].image);
            title_contenitore.textContent = (images[indiceArray].title)
            text_contenitore.textContent = (images[indiceArray].text)
        }
        console.log(indiceArray)
    });

    // bottone prev
    document.getElementById("bottoneprev").addEventListener("click", function () {
        if(indiceArray > 0){
            indiceArray += -1;
            img_contenitore.src =(images[indiceArray].image);
            title_contenitore.textContent = (images[indiceArray].title)
            text_contenitore.textContent = (images[indiceArray].text)
        }
        console.log(indiceArray)
    });


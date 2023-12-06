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

 // elementi foto
let foto_0 = document.getElementById("foto-0")
let foto_1 = document.getElementById("foto-1")
let foto_2 = document.getElementById("foto-2")
let foto_3 = document.getElementById("foto-3")
let foto_4 = document.getElementById("foto-4")

// bottoni
// indicearray
let indiceArray = 0;
if(indiceArray == 0){
    foto_0.classList.remove("oscuramento");
    foto_1.classList.add("oscuramento")
    foto_2.classList.add("oscuramento")
    foto_3.classList.add("oscuramento")
    foto_4.classList.add("oscuramento")
}

    // bottone next
    document.getElementById("bottonenext").addEventListener("click", function () {
        if(indiceArray < images.length - 1){
            indiceArray += +1;
            img_contenitore.src =(images[indiceArray].image);
            title_contenitore.textContent = (images[indiceArray].title)
            text_contenitore.textContent = (images[indiceArray].text)
        }
        else{
            indiceArray = 0
            img_contenitore.src =(images[indiceArray].image);
            title_contenitore.textContent = (images[indiceArray].title)
            text_contenitore.textContent = (images[indiceArray].text)
        }



        if(indiceArray == 0){
            foto_0.classList.remove("oscuramento");
            foto_1.classList.add("oscuramento")
            foto_2.classList.add("oscuramento")
            foto_3.classList.add("oscuramento")
            foto_4.classList.add("oscuramento")
        }

        else if (indiceArray == 1){
            foto_0.classList.add("oscuramento");
            foto_1.classList.remove("oscuramento")
            foto_2.classList.add("oscuramento")
            foto_3.classList.add("oscuramento")
            foto_4.classList.add("oscuramento")

        }
        else if (indiceArray == 2){
            foto_0.classList.add("oscuramento");
            foto_1.classList.add("oscuramento")
            foto_2.classList.remove("oscuramento")
            foto_3.classList.add("oscuramento")
            foto_4.classList.add("oscuramento")
        }
        else if (indiceArray == 3){
            foto_0.classList.add("oscuramento");
            foto_1.classList.add("oscuramento")
            foto_2.classList.add("oscuramento")
            foto_3.classList.remove("oscuramento")
            foto_4.classList.add("oscuramento")
        }
        else if(indiceArray == 4){
            foto_0.classList.add("oscuramento");
            foto_1.classList.add("oscuramento")
            foto_2.classList.add("oscuramento")
            foto_3.classList.add("oscuramento")
            foto_4.classList.remove("oscuramento")
        }
    });

    // bottone prev
    document.getElementById("bottoneprev").addEventListener("click", function () {
        if(indiceArray > 0){
            indiceArray += -1;
            img_contenitore.src =(images[indiceArray].image);
            title_contenitore.textContent = (images[indiceArray].title)
            text_contenitore.textContent = (images[indiceArray].text)
        }
        else{
            indiceArray= 4
            img_contenitore.src =(images[indiceArray].image);
            title_contenitore.textContent = (images[indiceArray].title)
            text_contenitore.textContent = (images[indiceArray].text)
        }


        if(indiceArray == 0){
            foto_0.classList.remove("oscuramento");
            foto_1.classList.add("oscuramento")
            foto_2.classList.add("oscuramento")
            foto_3.classList.add("oscuramento")
            foto_4.classList.add("oscuramento")
        }

        else if (indiceArray == 1){
            foto_0.classList.add("oscuramento");
            foto_1.classList.remove("oscuramento")
            foto_2.classList.add("oscuramento")
            foto_3.classList.add("oscuramento")
            foto_4.classList.add("oscuramento")

        }
        else if (indiceArray == 2){
            foto_0.classList.add("oscuramento");
            foto_1.classList.add("oscuramento")
            foto_2.classList.remove("oscuramento")
            foto_3.classList.add("oscuramento")
            foto_4.classList.add("oscuramento")
        }
        else if (indiceArray == 3){
            foto_0.classList.add("oscuramento");
            foto_1.classList.add("oscuramento")
            foto_2.classList.add("oscuramento")
            foto_3.classList.remove("oscuramento")
            foto_4.classList.add("oscuramento")
        }
        else if(indiceArray == 4){
            foto_0.classList.add("oscuramento");
            foto_1.classList.add("oscuramento")
            foto_2.classList.add("oscuramento")
            foto_3.classList.add("oscuramento")
            foto_4.classList.remove("oscuramento")
        }
    });

    // intervallo tempo
    let tempo 
    function funzione_tempo(){

        let tempo = setInterval(function () {
        if(indiceArray < images.length - 1){
            indiceArray += +1;
            img_contenitore.src =(images[indiceArray].image);
            title_contenitore.textContent = (images[indiceArray].title)
            text_contenitore.textContent = (images[indiceArray].text)
        }
        else{
            indiceArray = 0
            img_contenitore.src =(images[indiceArray].image);
            title_contenitore.textContent = (images[indiceArray].title)
            text_contenitore.textContent = (images[indiceArray].text)
        }

        if(indiceArray == 0){
            foto_0.classList.remove("oscuramento");
            foto_1.classList.add("oscuramento")
            foto_2.classList.add("oscuramento")
            foto_3.classList.add("oscuramento")
            foto_4.classList.add("oscuramento")
        }

        else if (indiceArray == 1){
            foto_0.classList.add("oscuramento");
            foto_1.classList.remove("oscuramento")
            foto_2.classList.add("oscuramento")
            foto_3.classList.add("oscuramento")
            foto_4.classList.add("oscuramento")

        }
        else if (indiceArray == 2){
            foto_0.classList.add("oscuramento");
            foto_1.classList.add("oscuramento")
            foto_2.classList.remove("oscuramento")
            foto_3.classList.add("oscuramento")
            foto_4.classList.add("oscuramento")
        }
        else if (indiceArray == 3){
            foto_0.classList.add("oscuramento");
            foto_1.classList.add("oscuramento")
            foto_2.classList.add("oscuramento")
            foto_3.classList.remove("oscuramento")
            foto_4.classList.add("oscuramento")
        }
        else if(indiceArray == 4){
            foto_0.classList.add("oscuramento");
            foto_1.classList.add("oscuramento")
            foto_2.classList.add("oscuramento")
            foto_3.classList.add("oscuramento")
            foto_4.classList.remove("oscuramento")
        }
        console.log(indiceArray)
    }, 3000);
        return tempo
        }


    let fermoTempo = document.getElementById("fermoTempo")
    let startTempo = document.getElementById("startTempo")

    tempo = funzione_tempo()

    fermoTempo.addEventListener("click",function(){
        clearInterval(tempo);
    })

    startTempo.addEventListener("click", function(){
        clearInterval(tempo);
        tempo = funzione_tempo()
    })







   
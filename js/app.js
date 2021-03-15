'use strict';

let app = document.getElementById('app');
let centerphoto=document.getElementById('centerphoto');
let leftphoto=document.getElementById('leftphoto');
let rightphoto=document.getElementById('rightphoto');
let  clickcounter=25;
  centerphoto=[];
  leftphoto=[];
  rightphoto=[];
let finalimage=[];
let  products=[];

function photo(name,path){
    this.name=name;
    this.path=`./assets/${name}.jpg`;;
    this.views=0;
  this.votes=0;
    this.clickcounter=0;
   
    let  first = Math.floor(Math.random() * 255);
    let second = Math.floor(Math.random() * 255);
    let third = Math.floor(Math.random() * 255);
  
    products.push(this);


};
let Babyswing=new photo('Babyswing','img/babyswing.jpg');
let Facewash = new photo('Facewash','img/Facewash.jpg');
let glasswiper = new photo('glasswiper','img/glasswiper.jpg');
let gum= new photo('gum','img/gum.jpg');
let ajax=new photo('ajax','img/ajax.jpg');
let hoover=new photo('hoover','img/hoover.jpg');
let towel=new photo('towel','img/towel.jpg');
let picnicchair=new photo('picnicchair','img/picnicchair.jpg');
let chair2=new photo('chair2','img/chair2.jpg');
let sunblock=new photo('sunblock','img/sunblock.jpg');
let sunglasses=new photo('sunglasses','img/sunglasses.jpg');
let campingtent=new photo('campingtent','img/campingtent.jpg');
let bag=new photo('bag','img/bag.jpg');

function chooserandomly() {
  let firstRandom = Math.floor(Math.random() * Products.length);
  let secondRandom = Math.floor(Math.random() * Products.length);
  let  thirdRandom = Math.floor(Math.random() * Products.length);
  while (firstRandom === secondRandom || firstRandom === thirdRandom || secondRandom === thirdRandom || finalimage.includes(firstRandom) ||finalimage.includes(secondRandom) || finalimage.includes(thirdRandom)) {
    firstRandom = Math.floor(Math.random() * Products.length);
    secondRandom = Math.floor(Math.random() * Products.length);
    thirdRandom = Math.floor(Math.random() * Products.length);
  }

  
  leftphoto[0] = firstRandom;
  centerphoto[1] = secondRandom;
  rightphoto[2] = thirdRandom;

  leftphoto.src = Products[firstRandom].Path;
  centerphoto.src = Products[secondRandom].Path;
  rightphoto.src = Products[thirdRandom].Path;
  
  leftphoto.alt = Products[firstRandom].name;
 centerphoto.alt = Products[secondRandom].name;
  rightphoto.alt = Products[thirdRandom].name;

  
  Products[firstRandom].views++;
  Products[secondRandom].views++;
  Products[thirdRandom].views++;
  totalclicks++;
  if (totalClicks === 25) {
    leftphoto.removeEventListener('click', handleImageClick);
    centerphoto.removeEventListener('click', handleImageClick);
    rightphoto.removeEventListener('click', handleImageClick);
    displayResults(); 
    
  }

}
function handleImageClick(event) {
  
  for (let i = 0; i < Products.length; i++) {
    if (event.target.alt === Products[i].name) {
      Products[i].votes++;
    }
  }
  chooserandomly();
}
function displayResults() {
  let namephoto = [];
  for (let i = 0; i < Products.length; i++) {
    namephoto.push(Products[i].name);
  }

  let votes = [];
  for (let j = 0; j < Products.length; j++) {
    votes.push(Products[j].votes);
  }
  function renderChart() {
    let canvas = document.createElement('canvas');
   let button = document.createElement('a');
    button.textContent = 'Chart';
    let ctx = canvas.getContext('2d');
    let votes = [];
    let names = [];
    for(let i = 0; i < products.length; i++) {
      votes[i] = products[i].clicks;
      names[i] = products[i].name;
    }
  
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: names,
        datasets: [{
          data: votes,
          label: 'Votes',
          borderWidth: 5
        }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Votes Per Product',
          fontSize: 50
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 1
            }
          }]
        }
      }
    });
  

    let canvas = document.getElementById('chart');
    let ctx = canvas.getContext('2d');
    renderChart();
     
    } 
  leftphoto.addEventListener('click', handleImageClick);
  centerphoto.addEventListener('click', handleImageClick);
  rightphoto.addEventListener('click', handleImageClick);
  
}
displayResults() ;
  

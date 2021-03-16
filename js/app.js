
  
  
'use strict';
photo.allProducts = [];
photo.totalClicks = 0;
photo.lastDisplayed = [];
let  productarea = document.getElementById('productarea');
let  finalresults = document.getElementById('finalresults');
let  productDisplayed = [];
let  productNames = [];
let  productVotes = [];
let  userName;

function getUserName() {
  if(localStorage.userName) {
    alert('Welcome back ' + localStorage.userName + '!');
    userName = localStorage.userName;
  } else {
    userName = prompt('Thank you for participating in our page! Please enter your name');
    console.log(userName);
    alert('Thanks ' + userName + ' for participating. Please click on your favorite image out of the selection.');
  }
}


function photo(path, name) {
  this.name = name;
  this.path = path;
  this.votes = 0;
  this.times = 0;
  photo.allProducts.push(this);
  productNames.push(this.name);
  productDisplayed.push(this.times);
}

new photo('img/bag.jpg', 'bag');
new photo('img/chair2.jpg', 'chair2');
new photo('img/babyswing.jpg', 'babyswing');
new photo('img/gum.jpg', 'gum');
new photo('img/facewash.jpg', 'facewash');
new photo('img/campingtent.jpg', 'campingtent');
new photo('img/picnicchair.jpg', 'picnicchair');
new photo('img/sunglasses.jpg', 'sunglasses');
new photo('img/sunblock.jpg', 'sunblock');
new photo('img/ajax.jpg', 'ajax');
new photo('img/carwithremote.jpg', 'carwithremote');
new photo('img/glasswiper.jpg', 'glasswiper');
new photo('img/gumgum.jpg', 'gumgum');
new photo('img/hoover.jpg', 'hoover');

let  leftimage = document.getElementById('leftimage');
let  centerimage = document.getElementById('centerimage');
let  rightimage= document.getElementById('rightimage');

function randomImage() {
  let randomLeft = Math.floor(Math.random() * photo.allProducts.length);
  let randomCenter = Math.floor(Math.random() * photo.allProducts.length);
  let randomRight = Math.floor(Math.random() * photo.allProducts.length);

  while(randomLeft === randomRight || randomCenter === randomRight || randomCenter === randomLeft ) {

    
    randomLeft = Math.floor(Math.random() * photo.allProducts.length);
    randomCenter = Math.floor(Math.random() * photo.allProducts.length);
    randomRight = Math.floor(Math.random() * photo.allProducts.length);
  }


  leftimage.src = photo.allProducts[randomLeft].path;
  leftimage.alt = photo.allProducts[randomLeft].name;
  centerimage.src = photo.allProducts[randomCenter].path;
  centerimage.alt = photo.allProducts[randomCenter].name;
  rightimage.src = photo.allProducts[randomRight].path;
  rightimage.alt = photo.allProducts[randomRight].name;

  photo.allProducts[randomLeft].times += 1;
  photo.allProducts[randomCenter].times += 1;
  photo.allProducts[randomRight].times += 1;

  photo.lastDisplayed[0] = randomLeft;
  photo.lastDisplayed[1] = randomCenter;
  photo.lastDisplayed[2] = randomRight;
}

function controlClick(event) {
  photo.totalClicks++;
  for(let i in photo.allProducts) {
    if(event.target.alt === photo.allProducts[i].name) {
      photo.allProducts[i].votes++;
    }
  }

  if(photo.totalClicks > 24) {
    productarea.removeEventListener('click', controlClick);
    alert('Thanks for participating! Here are the results of your selections.');
    showResults();
renderChart();

    
  } else {
    randomImage();
  }
}

function showResults() {
  for(let i in photo.allProducts) {
     finalresults = document.createElement('finalresults');
  }
}

function updateVotes() {
  for(let  i in photo.allProducts) {
    productVotes[i] = photo.allProducts[i].votes;
    productDisplayed[i] = photo.allProducts[i].times;
  }
}
function saveLocally() {
  if (localStorage.total) {
    localStorage.setItem('votes', JSON.parse(photo.totalClicks));

    localStorage.userName = userName;
    let  parseVotes = JSON.parse(localStorage.votes);
    let parseTotal = JSON.parse(localStorage.total);

    parseTotal = parseTotal + parseVotes;

    localStorage.setItem('total', JSON.parse(parseTotal));

  } else {
    localStorage.setItem('total', JSON.stringify(photo.totalClicks));
  }
}
function createChart(){
  let context = document.getElementById('myChart').getContext('2d');
  let getGoatsNames=[];
  let getGoatsVotes=[];

  for(let i=0;i<Goat.all.length;i++){
    getGoatsNames.push(Goat.all[i].name);
  }
  for(let i=0;i<Goat.all.length;i++){
    getGoatsVotes.push(Goat.all[i].votes);
  }
  let chartObject={
    
    type: 'bar',
    
    data: {
        labels:'Votes',
        datasets: [{
            label: ' times',
            backgroundColor: 'rgb(100, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: photovotes ,
        }
      ]
    },
    options: {
      scales: {
        xAxes: [{
            barPercentage: 0.4
        }]
    }
    }
}
  let chart = new Chart(context,chartObject);
  
}
getUserName();
finalresults.addEventListener('click',controlClick);
randomImage();

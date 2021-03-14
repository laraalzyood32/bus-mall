'use strict';
let app=document.getElementById("app");
const centerphoto=document.getElementById('centerphoto');
const leftphoto=document.getElementById('leftphoto');
const rightphoto=document.getElementById('rightphoto');
let  clickcounter=25;
let centerphoto=[];
let leftphoto=[];
let rightphoto=[];
let  products=[Babyswing,Facewash,glasswiper,gum,smiling-goat,emotional-goat,kissing-goat];

function photo(name,path){
    this.name=name;
    this.src=filepath;
    this.views=0;
  this.votes=0;
    this.clickcounter=0;
    photo.all.push(this)

};


function render(){
    const leftphoto=random(0,photo.all.length-1);
    const leftphoto=photo.all[leftphoto];
    leftphoto.src=leftphoto.path;
    leftphoto.title=leftphoto.name;
    
  
    const rightphoto=random(0,photo.all.length-1);
    const rightphoto=Goat.all[rightphoto];
    rightphoto.src=rightphoto.path;
    rightphoto.title=rightphoto.name;
}
centerphoto.addEventListener('click',clickHandler);

function clickHandler(event){
  if (event.target.id === 'leftphoto' || event.target.id === 'rightphoto'||event.target.id === 'centerphoto'){
    for(let i=0;i<Goat.all.length;i++){
      if (photo.all[i].name === event.target.title){
        photo.all[i].votes++;
        console.table(photo.all[i])
      }
    }
    render();
  }
  
  function chooserandomly(products){
      return Math.floor(Math.random() * products.length);
    };
  let Babyswing=new photo('Babyswing','img/babyswing.jpg');
  let Facewash = new photo('Facewash','img/Facewash.jpg');
  let glasswiper = new photo('glasswiper','img/glasswiper.jpg');
  let gum= new photo('gum','img/gum.jpg');
  
  for(let i=0;i<products.length;i++){
      new photo(products[i]);
  }
  


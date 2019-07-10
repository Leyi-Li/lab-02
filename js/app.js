'use strict';

// function startPage() {
//   loadPhotos();
// //   attachListeners();
// }

function loadPhotos() {
  const success = photos => displayPhotos(photos);
  const failure = error => console.error(error);
  $.get('./data/page-1.json',(photos)=>{
    if(photos.length){
      success(photos);
    }else{
      failure({'message':'something is wrong'});
    }
  }, 'json');
}

function createPhotos(photoName,path,alt,photoKey){
  this.photoName = photoName;
  this.path = path;
  this.alt = alt
  this.photoKey = photoKey;
  createPhotos.photoList.push(this);
}

createPhotos.photoList = [];

function getPhotos(photos){
  photos.forEach((photo)=>{
    new createPhotos(photo.title,photo.image_url,photo.description,photo.keyword);
  });
}

function displayPhotos(photos){
  getPhotos(photos);
  console.log(createPhotos.photoList);
  for(let i = 0; i <createPhotos.photoList.length; i++){
    const $newPhoto = $('#photo-template').clone();
    $newPhoto.find('h2').text(createPhotos.photoList[i].photoName);
    $newPhoto.find('img').attr('src',createPhotos.photoList[i].path).attr('alt',createPhotos.photoList[i].alt);
    $newPhoto.find('p').text(createPhotos.photoList[i].photoKey); 
    $('main').append($newPhoto); 
  }
  
}

// startPage();
loadPhotos();


'use strict';

// function startPage() {
//   loadPhotos();
//   attachListeners();
// }

function loadPhotos() {
  const success = photos => displayPhotos(photos);
  const success2 = photos => addKeyWord(photos);
  const failure = error => console.error(error);
  $.get('./data/page-1.json',(photos)=>{
    if(photos.length){
      success(photos);
      success2(photos);
    }else{
      failure({'message':'something is wrong'});
    }
  }, 'json');
}

function CreatePhotos(photoName,path,alt,photoKey){
  this.photoName = photoName;
  this.path = path;
  this.alt = alt
  this.photoKey = photoKey;
  CreatePhotos.photoList.push(this);
}

CreatePhotos.photoList = [];

function getPhotos(photos){
  photos.forEach((photo)=>{
    new CreatePhotos(photo.title,photo.image_url,photo.description,photo.keyword);
  });
}

function displayPhotos(photos){
  getPhotos(photos);
  console.log(CreatePhotos.photoList);
  for(let i = 0; i <CreatePhotos.photoList.length; i++){
    const $newPhoto = $('#photo-template').clone();
    $newPhoto.find('h2').text(CreatePhotos.photoList[i].photoName);
    $newPhoto.find('img').attr('src',CreatePhotos.photoList[i].path).attr('alt',CreatePhotos.photoList[i].alt);
    $newPhoto.find('p').text(CreatePhotos.photoList[i].photoKey); 
    $('main').append($newPhoto);
  }
}

let listOfDrop = [];
function addKeyWord(photos){
  photos.forEach(photo =>{
    const $newDrop = $('.dropSelect').clone();
    $newDrop.text(photo.keyword);
    listOfDrop.push($newDrop);
    // console.log($('.dropBox'),$('.dropSelect'));
    // $('.dropBox').append($newDrop);
  });
}

function appendDrop(){
  function addKeyWord(photos);
  
}

// startPage();
// loadPhotos();
$().ready((loadPhotos));

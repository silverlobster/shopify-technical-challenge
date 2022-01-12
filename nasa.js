'use strict';

var apodReq = new XMLHttpRequest();
var req = new XMLHttpRequest();
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var url2 = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key="
var api_key = "U301doQqB5XjRbMstdQ3XgFup2OzSLgyN5LO7u9T";

apodReq.open("GET", url + api_key);
apodReq.send();    

req.open("GET", url2 + api_key);
req.send();

apodReq.addEventListener("load", function(){
	if(apodReq.status == 200 && apodReq.readyState == 4){
  	var response = JSON.parse(apodReq.responseText);
    document.getElementById("apodTitle").textContent = response.title;
    document.getElementById("apodDate").textContent = response.date;
    document.getElementById("apodPic").src = response.hdurl;
    document.getElementById("apodExplanation").textContent = response.explanation;
  }
})

req.addEventListener("load", function(){
	if(req.status == 200 && req.readyState == 4){
  	var response = JSON.parse(req.responseText);
    document.getElementById("title").textContent = response.photos[0].rover.name + " rover - " + response.photos[0].camera.full_name;
    document.getElementById("date").textContent = response.photos[0].earth_date;
    document.getElementById("pic").src = response.photos[0].img_src;
  }
})



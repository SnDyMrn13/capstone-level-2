
 let endangeredButton=document.getElementById("endangered-button");
 let endangeredBirdname=document.getElementById("endangered-bird-name");
 let endangeredBirdimage=document.getElementById("endangered-bird-image");

 let birdData=[];
 let index=0;




 function randomNumber(a,b){
	  return Math.floor(Math.random() * (b-a +1)) +a;
  }
  
  
   async function loadBirds(){
	  let response=await fetch("https://student-data-api.cindino45.workers.dev/api/v1/datasets/birds-of-the-world/records?search=endangered&limit=14");
	  let data=await response.json();
	  birdData=data.records;
	  
	  let index=birdData[randomNumber(0,birdData.length-1)];
	   
	  endangeredBirdname.textContent=index.Name + " -  needs a diet rich in: " + index.Diet ;
      endangeredBirdimage.src=index["Image of Bird"];
   }
   
   
   
   
   endangeredButton.addEventListener("click", function(){
	   
	   loadBirds();
	   
   });
	   
	   
 
  
	






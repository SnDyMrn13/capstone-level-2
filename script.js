
 
 let insectButton=document.getElementById("insect-button");
 let seedButton=document.getElementById("seed-button");
 let nectarButton=document.getElementById("nectar-button");
 let birdData=[];
 let index=0;
 
 
 
 
 function randomNumber(a,b){
	  return Math.floor(Math.random() * (b-a +1)) +a;
  }
  
  
 
 
  async function loadInsectbirds(){
	  /*limited api fetch to the object property I needed, with a limit I could handle*/
	  let response=await fetch("https://student-data-api.cindino45.workers.dev/api/v1/datasets/birds-of-the-world/records?search=insects&limit=20");
	  let data=await response.json();
	  birdData=data.records;
	 /*This is the best I could do for multiple answer randomization at this time(still learning), only side-effect is that you will get duplicates */ 
	 /*wanted new random list to show with every "click" of the button*/
	  let index1=birdData[randomNumber(0,birdData.length-1)];
	  let index2=birdData[randomNumber(0,birdData.length-1)];
	  let index3=birdData[randomNumber(0,birdData.length-1)];
	  let index4=birdData[randomNumber(0,birdData.length-1)];
	  let index5=birdData[randomNumber(0,birdData.length-1)];
	  
	  document.getElementById("insect-list").textContent=index1.Name + ", " + index2.Name + ", " + index3.Name + ", " + index4.Name + ", " + index5.Name ;

	
  }
  
  
  
  
 
  async function loadSeedbirds(){
	   /*limited api fetch to the object property I needed, with a limit I could handle*/
	  let response=await fetch("https://student-data-api.cindino45.workers.dev/api/v1/datasets/birds-of-the-world/records?search=fruit&limit=20");
	  let data=await response.json();
	  birdData=data.records;
	 /*This is the best I could do for multiple answer randomization at this time(still learning), only side-effect is that you will get duplicates */ 
	/*wanted new random list to show with every "click" of the button*/
	  let index1=birdData[randomNumber(0,birdData.length-1)];
	  let index2=birdData[randomNumber(0,birdData.length-1)];
	  let index3=birdData[randomNumber(0,birdData.length-1)];
	  let index4=birdData[randomNumber(0,birdData.length-1)];
	  let index5=birdData[randomNumber(0,birdData.length-1)];
	  
     document.getElementById("fruit-list").textContent=index1.Name + ", " + index2.Name + ", " + index3.Name + ", " + index4.Name + ", " + index5.Name ;
	  
	  
	  
  }	  
	  
 async function loadNectarbirds(){
	  /*limited api fetch to the object property I needed, with a limit I could handle*/
	  let response=await fetch("https://student-data-api.cindino45.workers.dev/api/v1/datasets/birds-of-the-world/records?search=nectar&limit=5");
	  let data=await response.json();
	  birdData=data.records;
	 /*This is the best I could do for multiple answer randomization at this time(still learning), only side-effect is that you will get duplicates  */
	/*wanted new random list to show with every "click" of the button*/	 
	  let index1=birdData[randomNumber(0,birdData.length-1)];
	  let index2=birdData[randomNumber(0,birdData.length-1)];
	  let index3=birdData[randomNumber(0,birdData.length-1)];
	 
	  
	  document.getElementById("nectar-list").textContent=index1.Name + ", " + index2.Name + ", " + index3.Name ;
	  

 }

 		

  
  
	 
 
 
insectButton.addEventListener("click",function(){
	loadInsectbirds();
	
	 
 });
	 
seedButton.addEventListener("click",function(){
	 loadSeedbirds();
	 
 });

nectarButton.addEventListener("click",function(){
	loadNectarbirds();
	
});

 

 let insectButton=document.getElementById("insect-button");
 let seedButton=document.getElementById("seed-button");
 let nectarButton=document.getElementById("nectar-button");
 let birdData=[];
 let index=0;
 
 
 
 
  async function loadInsectbirds(){
	  let response=await fetch("https://student-data-api.cindino45.workers.dev/api/v1/datasets/birds-of-the-world/records?search=insects&limit=5");
	  let data=await response.json();
	  let birdData=data.records;
	  showBird();
	  
  }
 
  async function loadSeedbirds(){
	  let response=await fetch("https://student-data-api.cindino45.workers.dev/api/v1/datasets/birds-of-the-world/records?search=seeds&limit=5");
	  let data=await response.json();
	  let birdData=data.records;
	  showBird(); 
	  
	  
  }	  
	  
 async function loadNectarbirds(){
	  let response=await fetch("https://student-data-api.cindino45.workers.dev/api/v1/datasets/birds-of-the-world/records?search=nectar&limit=5");
	  let data=await response.json();
	  let birdData=data.records;
	  showBird();
	  

 }

 function showBird(){
	let bird=birdData[index]; 
	
document.getElementById("bird-name").textContent=bird.Name;	

	 
	 
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

 
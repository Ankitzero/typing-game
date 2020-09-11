var itemNumber=0,c = 60,
itemList0 = ["Horse","cat","DOg","Mouse","rat","Monkey","Elephant","zebra","piggion","Lion","go"],
itemList1 = ["tReE","planT","bee","$nake","@nimal","b!rd","proto+type","TiGer","hipo","donkey","go"];
itemList2 = ["9854","12pf","1005","yui9","7465","ml23","ljiop","9fg","jk45","23e","go"];
itemList3 = ["ank213","1542","16gh","3012","po53","9582","67qwm","3018","9015","7635","go"];
var errorCounter = 0,noErrorCounter = 0,itemText,randomColor=["black","green","red","royalblue","orange","blue","brown"],colorNumber=0;
var textVaringSize=0,textingSize=[13,20,18,15],store="",itemNo=0,itemListNo=0,gameOver,resetGame,mainGame,Caudio,Waudio;

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var xx,yy,sizeoftext,coloroftext;
var down = false;

//context.lineWidth = 5;


canvas.addEventListener('mousemove',draw);

mainGame = document.getElementById("mainGame");
mainGame.play();
								
/*
canvas.addEventListener('mousedown',function()
{
down=true;
context.beginPath();
context.moveTo(xPos,yPos);
canvas.addEventListener("mousemove",draw);

}); */

//canvas.addEventListener("mouseup",function(){down=false;});

function draw(e)
{
xPos = e.clientX - canvas.offsetLeft;
yPos = e.clientY - canvas.offsetTop;

/*	if(down==true)
	{
	xx=xPos;
	yy=yPos;
	context.lineTo(xPos,yPos);
	context.stroke();
	}
*/
document.getElementById('testing').innerHTML = "x = "+xPos+" y = "+yPos;   // max x = 1200 and max y = 500
}
function myFunction()
{
var color=document.getElementById("favcolor").value;
coloroftext=color;
context.lineWidth=5;
context.strokeStyle = color;
context.fillStyle = color;
}
/*
function fillcanvas() {context.fillRect(0,0,canvas.width,canvas.height);}

function eraser() {var color="white"; context.lineWidth = 20; context.strokeStyle=color;}

function brushsize() {var size=document.getElementById("brush").value; context.lineWidth = size; sizeoftext=size;}
*/


// ********************************* Implementing session *********************************************

function pro(){
				resetGame = document.getElementById("resetGame");
				resetGame.play();
				c = 60;
				errorCounter = 0;
				noErrorCounter = 0;
				document.getElementById("zxc").innerHTML = "Timer";
				document.getElementById("nonError").innerHTML = "NoErrors";
				document.getElementById("yesError").innerHTML = "Errors";
				document.getElementById("userInput").disabled = false;
				document.getElementById("userInput").value = "";
				document.getElementById("userInput").placeholder = "TYPE go for start";
				context.fillStyle = "white"; context.fillRect(0,0,canvas.width,canvas.height);
				mainGame.play();
			}	

function myCounter() {
					document.getElementById("zxc").innerHTML = --c;
					document.getElementById("userInput").placeholder = "";
					if(c == 0){
								mainGame = document.getElementById("mainGame");
								mainGame.pause();
								
								gameOverAudio = document.getElementById("gameOver");
								gameOverAudio.play();
								alert("!!! GAME OVER !!! \
										Correct : "+noErrorCounter+" Wrong : "+errorCounter);
								document.getElementById("userInput").disabled = true;
								clearInterval(myTimer);
							}
  
					}

function hellobro(asd){
					document.getElementById("qwe").innerHTML = asd.value;
					}



function textsee() 
{
	
	
	var x= document.getElementById("userInput").value;
	//var y = document.getElementById("demo").innerHTML;	
	var y = document.getElementById("poi").value;
	var result = x.includes(y);
	
	
	if(result == true){
						++noErrorCounter;
						itemNumber = Math.floor(Math.random() * 10);
						itemNo = Math.floor(Math.random() * 4);
						store = "itemList"+itemNo;
						if(store == "itemList0"){
								Caudio = document.getElementById("correctAudio");
								Caudio.play();
								document.getElementById("poi").value = itemList0[itemNumber];
								itemText=itemList0[itemNumber];
								document.getElementById("userInput").value = "";
								document.getElementById("nonError").innerHTML = noErrorCounter;
						}
						else if(store == "itemList1"){
								Caudio = document.getElementById("correctAudio");
								Caudio.play();
								document.getElementById("poi").value = itemList1[itemNumber];
								itemText=itemList1[itemNumber];
								document.getElementById("userInput").value = "";
								document.getElementById("nonError").innerHTML = noErrorCounter;
								
						}
						else if(store == "itemList2"){
								Caudio = document.getElementById("correctAudio");
								Caudio.play();
								document.getElementById("poi").value = itemList2[itemNumber];
								itemText=itemList2[itemNumber];
								document.getElementById("userInput").value = "";
								document.getElementById("nonError").innerHTML = noErrorCounter;
								
						}
						else if(store == "itemList3"){
								Caudio = document.getElementById("correctAudio");
								Caudio.play();
								document.getElementById("poi").value = itemList3[itemNumber];
								itemText=itemList3[itemNumber];
								document.getElementById("userInput").value = "";
								document.getElementById("nonError").innerHTML = noErrorCounter;
						}
					}
	else{
		++errorCounter;
		Waudio = document.getElementById("wrongAudio");
		Waudio.play();
		document.getElementById("yesError").innerHTML = errorCounter;
		document.getElementById("userInput").value = "";
		}
	
	
//r nput=document.getElementById("fineit").value;

context.fillStyle = "khaki"; 
context.fillRect(0,0,canvas.width,canvas.height);

  
textVaringSize = Math.floor(Math.random() * 10) % 4;
context.font= textingSize[textVaringSize]+"px"+" Arial"; 
colorNumber = Math.floor(Math.random() * 10) % 7;
context.fillStyle=randomColor[colorNumber];

xx=Math.floor(Math.random() * 1100);
yy=Math.floor(Math.random() * 490);
context.fillText(itemText,xx,yy);

// 7. canvas text example storkeText("text",x,y);
//ctx.strokeText("hello",10,20);-
/*ctx.font="25px Comic Sans MS";	// 8. Add color and center text
ctx.textAlign="center";*/
//ctx.fillStyle="red";

}








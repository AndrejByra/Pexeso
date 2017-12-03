var turn1=-1;
var turn2=-1;
var player=1;
var field=[[1,1,2,2],[3,3,4,4],[5,5,6,6],[7,7,8,8]];
console.log(field);
shuffle();

function shuffle()
{
	var i, temp;
	for(i=0;i<20;i++){
var r1=Math.floor(Math.random()*4);
var c1=Math.floor(Math.random()*4);
var r2=Math.floor(Math.random()*4);
var c2=Math.floor(Math.random()*4);
temp=field[r1] [c1];
field[r1] [c1]=field[r2] [c2];
field[r2] [c2]=temp;
} 
console.log("shuffle");
console.log(field);
}

function clickIMG(value)
{
	console.log(value);
	var row=Math.floor(value/10);
	var col=value%10;
	console.log("your click row"+row+"coil"+col);

	if(field[row][col]>0){
		var source="p"+field[row][col]+".png";
		var imageId="img"+row+col;
		console.log(imageId);
		document.getElementById(imageId).src=source;
	}
if (turn1==-1)
		turn1=row*10+col;
	else
	{
		turn2=row*10+col;
		checkSelectedCards();
	}
}

function checkSelectedCards ()
{
	var row1=Math.floor(turn1/10);
	var col1=turn1%10;
	var row2=Math.floor(turn2/10);
	var col2=turn2%10;

	if (field[row1] [col1]==field[row2] [col2])
	{

	}

	else {
		setTimeout(turnBack,2000);
	}
}

function turnBack()
{
	var row1=Math.floor(turn1/10);
	var col1=turn1%10;
	var row2=Math.floor(turn2/10);
	var col2=turn2%10;
	var imageID="img"+row1+col1;
	document.getElementById(imageID).src="back.png";
	var imageID="img"+row2+col2;
	document.getElementById(imageID).src="back.png";
	turn1=-1;
	turn2=-1;
}
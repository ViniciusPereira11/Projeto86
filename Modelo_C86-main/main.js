var canvas = new fabric.Canvas('canvas');
 var x= document.getElementById("musica");

function newImage()
{
fabric.Image.fromURL("BirthdayImage.jpg", function(img){

    blockImageObject = img;
    blockImageObject.scaleToWidth(700);
    blockImageObject.scaleToHeight(510);
    blockImageObject.set({
        top:0,
        left:0
    });
    canvas.add(blockImageObject);
})	
	
}

function playSound(){
	x.play();
}

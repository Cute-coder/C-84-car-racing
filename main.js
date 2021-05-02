canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
background_image="Zandvoort2.jpg";
car1_width=100;
car1_height=90;
car1_image="car1-ferrari.png";
console.log("background_image= " +background_image);
car1_x=150; 
car1_y=80;

car2_width=100;
car2_height=90;
car2_image="car2-ferrari.png";
console.log("background_image= " +background_image);
car2_x=110; 
car2_y=95;
function add(){
    background_imgTag = new Image(); 
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image(); 
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image(); 
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == '74')
{
    car2_left();
    console.log("j left");
}
if(keyPressed == '80')
{
    car2_right();
    console.log("p right");
}
if(keyPressed == '37')
{
    car1_left();
    console.log("left");
}
if(keyPressed == '39')
{
    car1_right();
    console.log("right");
}


}

function car1_left(){
    if(car1_x >=0){
        car1_x-= 10;
        console.log("When left arrow key is pressed, x= " + car1_x+ " | y " +car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
} 
function car1_right(){
    
    if(car1_x <= 700){
        car1_x += 10;
        console.log("When right arrow key is pressed x = " + car1_x+ " | y = " +car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
} 

function car2_left(){
    if(car2_x >=0){
        car2_x-= 10;
        console.log("When j key is pressed, x= " + car2_x+ " | y " +car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
} 
function car2_right(){
    
    if(car2_x <= 700){
        car2_x += 10;
        console.log("When p key is pressed x = " + car2_x+ " | y = " +car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
} 
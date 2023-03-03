let ballImage;
let timerIdRight;
let timerIdLeft;
let timerIdUp;
let timerIdDown;
let right = true;
let left = false;
let up = false;
let down = false;


function startMoving() {     
   console.log("entered startmoving")
   ballImage = document.getElementById("ball");
   let i = true;
   while (i == true) {
      if (right == true) {
         timerIdRight = setInterval(moveBallRight, 10);
      }
      else if (down == true) {
         timerIdDown = setInterval(moveBallDown, 10);
      }
      else if (left == true) {
         timerIdLeft = setInterval(moveBallLeft, 10);
      }
      else if (up == true) {
         timerIdUp = setInterval(moveBallUp, 10);
      }
   }
}

function moveBallRight() {
   let left = parseInt(ballImage.style.left);
   while (left < 500) {
      ballImage.style.left = left + 2 + "px";
   }
   // else{
      clearInterval(timerIdRight)
      right = false;
      down = true;
   // } 
}

function moveBallDown() {
   let top = parseInt(ballImage.style.top);
   if (top < 500) {
      ballImage.style.top = top + 2 + "px";
   }
   else{
      clearInterval(timerIdDown)
      down = false;
      left = true;
   } 
}

function moveBallLeft() {
   let left = parseInt(ballImage.style.left);
   if (left > 0) {
      ballImage.style.left = left - 2 + "px";
   }
   else{
      clearInterval(timerIdLeft)
      left = false;
      up = true;
   } 
}

function moveBallUp() {
   let top = parseInt(ballImage.style.top);
   if (top > 0) {
      ballImage.style.top = top - 2 + "px";
   }
   else{
      clearInterval(timerIdUp)
      up = false;
      right = true;
   } 
}

window.onload = startMoving;


// function moveBall() {
//    console.log("entered moveball")
//    let left = parseInt(ballImage.style.left);
//    if (left + ballImage.width > 500) {
//       let top = parseInt(ballImage.style.top);
//       if (top + ballImage.width > 500) {
//          if (left == 0) {
//             clearInterval(timerId);
//          } 
//          else {
//             ballImage.style.left = left - 2 + "px";  
//          }
//       } 
//       else {
//          ballImage.style.top = top + 2 + "px";  
//       }
//    } 
//    else {
//       console.log("entered else")
//       ballImage.style.left = left + 2 + "px";  
//    }
// }



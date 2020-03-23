
var images = ["images/ruin1.jpg","images/bridge.jpg", "images/banner4.jpg","images/creepy.jpg"];
var show = document.getElementById("show");

var num = 0;
function next()  {
    num++;
    if(num >= images.length) {
        num =0;
    }
    show.src = images[num];
}

function prev()  { 
    num--;
    if(num <= 0 ) { 
        num = images.length-1;
    }
    show.src = images[num];
}

/*#############################*/

/*############# MODAL ################*/
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("show");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
/*############# END MODAL ################*/

/*############# START SOUND GARDEN ################*/

var whisper = document.getElementById("whisper"), howl = document.getElementById("howl"), violin = document.getElementById("violin");
var isPlaying = [false, false, false];

function playTrack(btnId) {

   if (isPlaying[btnId] == false) {
         
        if(btnId == 0){
            whisper.play();
        } else if (btnId == 1) {
            violin.play();
        } else if (btnId == 2) {
            howl.play();
        }
        $("#" + btnId).css('background','rgba(230, 53, 53, 0.7)');  
        isPlaying[btnId] = true;   
        
    } else if (isPlaying[btnId] == true) {

        if(btnId == 0){
            whisper.pause();
        } else if (btnId == 1) {
            violin.pause();
        } else if (btnId == 2) {
            howl.pause();
        } 
        $("#" + btnId).css('background','rgb(66, 173, 125, 0.3)');
        isPlaying[btnId] = false;
   }

   console.log("IS ", btnId, " PLAYING? ", isPlaying[btnId]);
}

/*############# END SOUND GARDEN ################*/
/* end text appear on scroll*/
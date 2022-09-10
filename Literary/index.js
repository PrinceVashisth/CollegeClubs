let flag =0;

function controller(x){
    // flag=flag+x;
    flag=x;
    slideshow(flag);
}
slideshow(flag);


function slideshow(num){
    let slide1=document.getElementsByClassName('slide');
    let slide2=document.getElementsByClassName('slide-txt');

     
    // if(num == slide1.length){
    //     flag=0;
    //     num=0;
    // }
    // if(num<0){
    //     flag=slide1.length-1;
    //     num=slide1.length-1;
    // }
    
    for(let y of slide1){
        y.style.display="none";
    }
    for(let x of slide2){
        x.style.display="none";
        
} 
        slide1[num].style.display="block";
        slide2[num].style.display="block";
    }


let flag2=0;
function controller2(z){
    flag2 = flag2+z;
    poem_slideshow(flag2);
}
poem_slideshow(flag2);

function poem_slideshow(num2){
    let poemslider=document.getElementsByClassName('poemslide');
       if(num2== poemslider.length-2){
        flag2=0;
        num2=0;
    }
    if(num2<0){
        flag2=poemslider.length-1;
        num2=poemslider.length-1;
    }
    for(let y of poemslider){
        y.style.display="none";
    }
    
        poemslider[num2].style.display="block";
        poemslider[num2+1].style.display="block";
        poemslider[num2+2].style.display="block";
}
      // Targeting video element 
      let clip = document.querySelector(".vid")
  
      /* Applying mouseover event on video clip 
      and then we call play() function to play 
      the video when the mouse is over the video */
      clip.addEventListener("mouseover", function (e) {
          clip.play();
      })

      /* Applying mouseout event on video clip 
      and then we call pause() function to stop 
      the video when the mouse is out the video */
     clip.addEventListener("mouseout", function (e) {
          clip.pause();
      })

      let flag3=0;
function controller3(z){
    flag3= flag3+z;
    theatre_slideshow(flag3);
}
theatre_slideshow(flag3);

function theatre_slideshow(num3){
    let theatreslider=document.getElementsByClassName('theatreslide');
       if(num3 == theatreslider.length-2){
        flag3=0;
        num3=0;
    }
    if(num3<0){
        flag3=theatreslider.length-1;
        num3=theatreslider.length-1;
    }
    for(let y of theatreslider){
        y.style.display="none";
    }
    
        theatreslider[num3].style.display="block";
        theatreslider[num3+1].style.display="block";
        theatreslider[num3+2].style.display="block";
}


function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
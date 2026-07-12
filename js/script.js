/* =====================================================
   NEXTINLINE - PRIMELOGIC
   PREMIUM EXPERIENCE ENGINE
===================================================== */



/* =====================================================
   SCROLL REVEAL
===================================================== */


const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(

    (entries)=>{


        entries.forEach(entry=>{


            if(entry.isIntersecting){


                entry.target.classList.add("active");


                revealObserver.unobserve(entry.target);


            }


        });


    },

    {

        threshold:.15,

        rootMargin:"0px 0px -80px 0px"

    }

);



revealElements.forEach(element=>{


    revealObserver.observe(element);


});








/* =====================================================
   PREMIUM PARTICLE BACKGROUND
===================================================== */


const canvas = document.getElementById("particles");


if(canvas){


const ctx = canvas.getContext("2d");


let particles = [];

let mouse = {


    x:null,

    y:null


};





function resizeCanvas(){


    canvas.width =
    window.innerWidth;


    canvas.height =
    window.innerHeight;


}



resizeCanvas();


window.addEventListener(
"resize",
resizeCanvas
);





window.addEventListener(
"mousemove",
(event)=>{


    mouse.x =
    event.clientX;


    mouse.y =
    event.clientY;


});






class Particle{


constructor(){


    this.x =
    Math.random()*canvas.width;


    this.y =
    Math.random()*canvas.height;


    this.size =
    Math.random()*1.8+.4;


    this.speedX =
    (Math.random()-.5)*0.25;


    this.speedY =
    (Math.random()-.5)*0.25;


}





update(){


    this.x += this.speedX;

    this.y += this.speedY;




    if(this.x<0 ||
       this.x>canvas.width){


        this.speedX *= -1;


    }



    if(this.y<0 ||
       this.y>canvas.height){


        this.speedY *= -1;


    }




}



draw(){


    ctx.beginPath();


    ctx.arc(

        this.x,

        this.y,

        this.size,

        0,

        Math.PI*2

    );


    ctx.fillStyle =
    "rgba(0,0,0,0.12)";


    ctx.fill();



}


}







function createParticles(){


    particles=[];



    const amount =
    window.innerWidth < 700
    ? 35
    : 90;



    for(
        let i=0;
        i<amount;
        i++
    ){


        particles.push(
            new Particle()
        );


    }


}



createParticles();






function animateParticles(){


    ctx.clearRect(

        0,

        0,

        canvas.width,

        canvas.height

    );




    particles.forEach(particle=>{


        particle.update();

        particle.draw();



    });



    requestAnimationFrame(
        animateParticles
    );


}



animateParticles();





}









/* =====================================================
   MOUSE PARALLAX BACKGROUND
===================================================== */


const mesh =
document.querySelector(".mesh-gradient");



if(mesh){



window.addEventListener(
"mousemove",
(e)=>{


    const x =
    (e.clientX /
    window.innerWidth - .5);



    const y =
    (e.clientY /
    window.innerHeight - .5);




    mesh.style.transform = `

        translate(
            ${x * 30}px,
            ${y * 30}px
        )

        scale(1.08)

    `;



});



}









/* =====================================================
   PRODUCT PARALLAX
===================================================== */


const product =
document.querySelector(".product-frame");



if(product){



window.addEventListener(
"scroll",
()=>{


    const offset =
    window.scrollY;



    product.style.transform = `

        translateY(
            ${Math.min(offset * .03,25)}px
        )

    `;



});


}








/* =====================================================
   NAVBAR BLUR EFFECT
===================================================== */


const navbar =
document.querySelector(".navbar");



window.addEventListener(
"scroll",
()=>{


    if(window.scrollY > 50){


        navbar.style.background =
        "rgba(255,255,255,.85)";


    }


    else{


        navbar.style.background =
        "rgba(255,255,255,.65)";


    }


});








/* =====================================================
   BUTTON MICRO INTERACTIONS
===================================================== */


const buttons =
document.querySelectorAll(
".primary-button, .nav-button"
);



buttons.forEach(button=>{


button.addEventListener(
"mouseenter",
()=>{


button.style.transform =
"translateY(-4px)";



});





button.addEventListener(
"mouseleave",
()=>{


button.style.transform =
"translateY(0)";


});



});








/* =====================================================
   IMAGE FADE IN
===================================================== */


const images =
document.querySelectorAll("img");



images.forEach(image=>{


image.style.opacity="0";


image.style.transition =
"opacity .8s ease";




function showImage(){


image.style.opacity="1";


}





if(image.complete){


showImage();


}

else{


image.addEventListener(
"load",
showImage
);


}



});









/* =====================================================
   REDUCE MOTION SUPPORT
===================================================== */


const reduceMotion =
window.matchMedia(
"(prefers-reduced-motion: reduce)"
);



if(reduceMotion.matches){


document
.querySelectorAll("*")
.forEach(element=>{


element.style.animationDuration =
"0.01ms";


element.style.transitionDuration =
"0.01ms";


});


}







console.log(
"NextInLine Premium Experience Loaded 🚀"
);

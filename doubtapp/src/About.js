import React ,{useRef}from 'react'
import useScrollSnap from "react-use-scroll-snap";
import { ReactDOM } from 'react'
import img1 from '../src/img1.png'
import img2 from '../src/img2.png'
import img3 from '../src/img3.png'
import img4 from '../src/img4.png'
import imgsmall1 from '../src/imgsmall1.png'
import imgsmall2 from '../src/imgsmall2.png'
import imgsmall3 from '../src/imgsmall3.png'
import imgsmall4 from '../src/imgsmall4.png'



// CODE FOR CURSOR DOT
document.addEventListener("mousemove", function (event) {
  var cursorDot = document.querySelector(".cursor-dot");
  cursorDot.style.left = event.clientX + "px";
  cursorDot.style.top = event.clientY + "px";
});


const About = () => {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 50, delay: 20 });
  return (
    
    <div  id='mainaboutdiv' ref={scrollRef}>
     <div id='secondbody' className='flex' >
      <div id= 'secondbodyparent'>
      <h1 id='secondbodybold'>
      CURIOUS... BY NAME, BY NATURE
      </h1>
      <p id='secondbodyp'>It’s what inspires us to whip up, throw <br/> together, tear, shake, and break the rules – <br/> on a mission to redefine food for a new<br/>  generation.</p>
      </div>
      <img id='secondbodyimg' src={img1}/>

     </div>
     {/* //secondpanel */}
     <div id='secondbody1' className='flex' >
     
      <img id='secondbodyimg1' src={img2}/>
      <div id= 'secondbodyparent1'>
      <h1 id='secondbodybold1'>
      INSPIRING GOOD THROUGH TASTY GOODNESS

      </h1>
      <p id='secondbodyp1'>We’re here to inspire discovery and tempt everyone to<br/>  eat more plants. Because we care about the future –<br/>  yours, ours and the planet’s</p>
      </div>

     </div>
     {/* thirdpanel */}
     <div id='secondbody2' className='flex' >
      <div id= 'secondbodyparent2'>
      <h1 id='secondbodybold2'>
      POWERED BY POSITIVITY
      </h1>
      <p id='secondbodyp2'>We’re not crusading or going up against an industry.<br/>  We’re for; for flavour, for fun, for what’s possible.</p>
      </div>
      <img id='secondbodyimg2' src={img3}/>
     {/* thirdpanel */}
     </div>
     <div id='secondbody3' className='flex' >
     <img id='secondbodyimg3' src={img4}/>
      <div id= 'secondbodyparent3'>
      <h1 id='secondbodybold3'>
      FLAVOURSOME FOOD FOR EVERYONE
      </h1>
      <p id='secondbodyp3'>Our curious creations are made for vegans and meat-eaters<br/>  alike. Because meat-free doesn’t mean flavour free.</p>
      </div>
      

     </div>
     {/* 4 img panel */}
     <div id='imgpaneldiv'>
    <h1 id='panelmainhead'>FEATURES &<br/>BENEFITS</h1>

    <div className='flex justify-around'>
      <div>
        <img id='smallimgpic'  src={imgsmall1}/>
        <h3 id='smallimghead'>PLANT BASED</h3>
        <p id='smallimgp'>Plant-protein yumminess<br/>, suitable for vegans (and everyone<br/> else)</p>
      </div>

      <div>
        <img id='smallimgpic' src={imgsmall2}/>
        <h3 id='smallimghead'>REAL INGREDIENTS</h3>
        <p id='smallimgp'>If we don’t know exactly what an <br/>ingredient is, we don’t include it</p>
      </div>

      <div>
        <img id='smallimgpic'  src={imgsmall3}/>
        <h3 id='smallimghead'>UNREAL TEXTURE</h3>
        <p id='smallimgp'>It’s not meat. No really, it’s not!</p>
      </div>

      <div>
        <img id='smallimgpic'  src={imgsmall4}/>
        <h3 id='smallimghead'>BLAND IS BANNED</h3>
        <p id='smallimgp'>Foodies unite, because here <br/> flavour rules</p>
      </div> 
    </div>
     </div>

   
    
    </div>
  )
}

export default About

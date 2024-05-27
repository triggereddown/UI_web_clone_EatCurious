// import React, { useEffect, useRef } from 'react';
// import Swiper from 'swiper';
// // import Swiper styles
// import 'swiper/css';


// const Footer = () => {
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     const swiper = new Swiper(swiperRef.current, {
//       slidesPerView: 'auto',
//       spaceBetween: 10,
//       loop: true,
//       loopAdditionalSlides: 10, // Number of additional slides to create in loop mode
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//     });

//     return () => {
//       swiper.destroy();
//     };
//   }, []);
//   return (

   

//     <div className="swiper-container" ref={swiperRef}>
//       <div className="swiper-wrapper">
//         {/* Render your slide components here */}
//         <h1 >Packed with flavours</h1>
//     <h1>100% Plant Based</h1>
//     <h1>Dairy Free</h1>
//     <h1>Packed with flavours</h1>
//     <h1>100% Plant Based</h1>
//     <h1>Dairy Free</h1>
//       </div>
//       <div className="swiper-button-next"></div>
//       <div className="swiper-button-prev"></div>
//     </div>
//   );
// };

    
  

// export default Footer
import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/css';

document.addEventListener("mousemove", function (event) {
  var cursorDot = document.querySelector(".cursor-dot");
  cursorDot.style.left = event.clientX + "px";
  cursorDot.style.top = event.clientY + "px";
});

const Footer = () => {
  // const swiperRef = useRef(null);

  // useEffect(() => {
  //   const swiper = new Swiper(swiperRef.current, {
  //     slidesPerView: 'auto',
  //     spaceBetween: 10,
  //     loop: true,
  //     loopAdditionalSlides: 10, // Number of additional slides to create in loop mode
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     },
  //   });

  //   return () => {
  //     swiper.destroy();
  //   };
  // }, []);

  return (
    // <div className="swiper-container" ref={swiperRef}>
    //   <div className="swiper-wrapper">
    //     {/* Render your slide components here */}
    //     <h1 id='minielement'>Packed with flavours</h1>
    //     <h1 id='minielement'>100% Plant Based</h1>
    //     <h1 id='minielement'>Dairy Free</h1>
    //     <h1 id='minielement'>Packed with flavours</h1>
    //     <h1 id='minielement'>100% Plant Based</h1>
    //     <h1 id='minielement'>Dairy Free</h1>
        
    //   </div>
    //   <div className="swiper-button-next"></div>
    //   <div className="swiper-button-prev"></div>


    // </div>
    <div id='container'>
      <div id='scroll'>
        <div id='righttoleft'>
          <p id='minielement'> Packed with flavours </p>
          <p id='minielement'> 100% Plant Based </p>
          <p id='minielement'> Dairy Free </p>
          <p id='minielement'> Packed with flavours </p>
          <p id='minielement'> 100% Plant Based </p>
          <p id='minielement'> Dairy Free </p>
          <p id='minielement'> Packed with flavours </p>
          <p id='minielement'> 100% Plant Based </p>
          <p id='minielement'> Dairy Free </p>
          <p id='minielement'> Packed with flavours </p>
          <p id='minielement'> 100% Plant Based </p>
          <p id='minielement'> Dairy Free </p>
          <p id='minielement'> Packed with flavours </p>
          <p id='minielement'> 100% Plant Based </p>
          <p id='minielement'> Dairy Free </p>




          
        </div>
      </div>
    </div>
  );
};

export default Footer;


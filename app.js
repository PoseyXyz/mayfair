window.addEventListener('load', ()=>{
  const preload = document.querySelector('.preloader-container')
  preload.classList.add('preload-finish');
})

const x = document.querySelector('.hamburger')
const navbar = document.querySelector('.open-bar')
x.addEventListener('click', myFunction)
function myFunction() {
    x.classList.toggle("change");
    navbar.style.height==='100vh' ? navbar.style.height = '0' : navbar.style.height = '100vh'
  }

  let atScroll = false;
  let parallaxTitle = document.querySelectorAll(".parallax-title");

  const scrollProgress = () => {
      atScroll = true;
  }

  const raf = () => {
      if (atScroll) {
          parallaxTitle.forEach((element, index) => {
              element.style.transform = `translateX(${window.scrollY /40}%)`;
          });
          atScroll = false;
      }
      requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);
  window.addEventListener("scroll", scrollProgress);

 let lifterGridImg1 = document.querySelector('.lifter-grid-img1')
 let lifterGridImg2 = document.querySelector('.lifter-grid-img2')
let lifterLink1 = document.querySelector('.lifter-link1')
let lifterLink2 = document.querySelector('.lifter-link2')
let lifterLink3 = document.querySelector('.lifter-link3')
let lifterLink4 = document.querySelector('.lifter-link4')
let lifterLink5 = document.querySelector('.lifter-link5')



 function liftImages(name){
    const random = Math.floor(Math.random()*(65-1+1))+1
    const random2 = Math.floor(Math.random()*(65-1+1))+1

    lifterGridImg1.style.width = `calc(100vh - 60vh)`
    
    lifterGridImg2.style.width = `calc(100vh - 60vh)`
   if(name === 'link1'){
    lifterGridImg1.setAttribute('src', 'images/wardrobe/trouser1.jpg') 
    lifterGridImg2.setAttribute('src', 'images/wardrobe/trouser2.jpg') 


    lifterGridImg1.animate([
        // keyframes
        { transform: `translateY(${random*2}%)` }, 
        { transform: `translateY(${random}%)` }
      ], { 
        // timing options
        'duration': 500,
        easing:"ease",
        fill:"forwards"
        
        
        
      });
     // lifterGridImg1.style.transform = `translateY(${random}%)`
      lifterGridImg2.animate([
        // keyframes
        { transform: `translateY(${random2*2}%)` }, 
        { transform: `translateY(${random2}%)` }
      ], { 
        // timing options
        'duration': 500,
        easing:"ease",
        fill:"forwards"
        
        
        
      });
      //lifterGridImg2.style.transform = `translateY(${random2}%)`
    
   }else if(name === 'link2'){
    lifterGridImg1.setAttribute('src', 'images/wardrobe/tee1.jpg') 
    lifterGridImg2.setAttribute('src', 'images/wardrobe/tee2.jpg') 

    lifterGridImg1.animate([
        // keyframes
        { transform: `translateY(${random*2}%)` }, 
        { transform: `translateY(${random}%)` }
      ], { 
        // timing options
        duration: 500,
        easing:"ease",
        fill:"forwards"
        
        
      });
      //lifterGridImg1.style.transform = `translateY(${random}%)`
      lifterGridImg2.animate([
        // keyframes
        { transform: `translateY(${random2*2}%)`}, 
        { transform: `translateY(${random2}%)` }
      ], { 
        // timing options
        'duration': 500,
        easing:"ease-in-out",
        fill:"forwards"
        
        
      });
  
   }
   else if(name === 'link3'){
    lifterGridImg1.setAttribute('src', 'images/wardrobe/shorts.jpg') 
    lifterGridImg2.setAttribute('src', 'images/wardrobe/shorts2.jpg') 


    lifterGridImg1.animate([
        // keyframes
        { transform: `translateY(${random*2}%)` }, 
        { transform: `translateY(${random}%)` }
      ], { 
        // timing options
        duration: 500,
        easing:"ease",
        fill:"forwards"
        
        
      });
      //lifterGridImg1.style.transform = `translateY(${random}%)`
      lifterGridImg2.animate([
        // keyframes
        { transform: `translateY(${random2*2}%)`}, 
        { transform: `translateY(${random2}%)` }
      ], { 
        // timing options
        'duration': 500,
        easing:"ease-in-out",
        fill:"forwards"
        
        
      });
      
  
   }
   else if(name === 'link4'){
    lifterGridImg1.setAttribute('src', 'images/wardrobe/hoodie1.jpg') 
    lifterGridImg2.setAttribute('src', 'images/wardrobe/hoodie2.jpg') 


    lifterGridImg1.animate([
        // keyframes
        { transform: `translateY(${random*2}%)` }, 
        { transform: `translateY(${random}%)` }
      ], { 
        // timing options
        duration: 500,
        easing:"ease",
        fill:"forwards"
        
        
      });
      //lifterGridImg1.style.transform = `translateY(${random}%)`
      lifterGridImg2.animate([
        // keyframes
        { transform: `translateY(${random2*2}%)`}, 
        { transform: `translateY(${random2}%)` }
      ], { 
        // timing options
        'duration': 500,
        easing:"ease-in-out",
        fill:"forwards"
        
        
      });
      
  
   }
   else if(name === 'link5'){
    lifterGridImg1.setAttribute('src', 'images/wardrobe/cap1.jpg') 
    lifterGridImg2.setAttribute('src', 'images/wardrobe/cap2.jpg') 
    lifterGridImg1.animate([
        // keyframes
        { transform: `translateY(${random*2}%)` }, 
        { transform: `translateY(${random}%)` }
      ], { 
        // timing options
        duration: 500,
        easing:"ease",
        fill:"forwards"
      })
      //lifterGridImg1.style.transform = `translateY(${random}%)`
      lifterGridImg2.animate([
        // keyframes
        { transform: `translateY(${random2*2}%)`}, 
        { transform: `translateY(${random2}%)` }
      ], { 
        // timing options
        'duration': 500,
        easing:"ease-in-out",
        fill:"forwards"
      })  
   }

 }

 lifterLink1.addEventListener('mouseover', (e)=>liftImages(e.target.name))
 lifterLink2.addEventListener('mouseover', (e)=>liftImages(e.target.name))
 lifterLink3.addEventListener('mouseover', (e)=>liftImages(e.target.name))
 lifterLink4.addEventListener('mouseover', (e)=>liftImages(e.target.name))
 lifterLink5.addEventListener('mouseover', (e)=>liftImages(e.target.name))


const interBg = document.querySelector('.interchanging-bg')
 const interLink1 = document.querySelector(".interchanging-link-1")
 const interLink2 = document.querySelector(".interchanging-link-2")

 function manipulateBg(className){
    let hello = ''
    if(className === 'interchanging-link-1'){
        hello = className
        interBg.style.backgroundImage = (hello === 'interchanging-link-1') ? "url('./images/new.jpg')" : null

        interBg.animate([
            {transform:'scale(1.2)'},
            {transform:'scale(1)'}
        ], {
            'duration': 500,
            easing:"ease-in-out",
            fill:"forwards"
        })
    }else if(className === 'interchanging-link-2'){
       hello = className
       interBg.style.backgroundImage = (hello === 'interchanging-link-2') ? "url('./images/teeimg2.jpg')" : null
       interBg.animate([
        {transform:'scale(1.2)'},
        {transform:'scale(1)'}
    ], {
        'duration': 500,
        easing:"ease-in-out",
        fill:"forwards"
    })
    }
    interLink1.style.color =  (hello === 'interchanging-link-1') ? '#e2231a' : 'white'
    interLink2.style.color =  (hello === 'interchanging-link-2') ? '#e2231a' : 'white' 
 }

 interLink1.addEventListener('click', ()=>manipulateBg('interchanging-link-1'))
 interLink2.addEventListener('click', ()=>manipulateBg('interchanging-link-2'))






import "../styles/about.scss";

const about = document.querySelector(".about")
const modal = document.querySelector(".modal")
const closeModalBtn = document.querySelector('.close-btn') 
const navBar = document.querySelector('.nav-bar-container')
const mainContentContainer = document.querySelector('.main-content-container')
navBar.onclick = (e) => {
    
   
    if (e.target === about){
        
     return  openModal()
    }
    closeModal()
}

document.addEventListener('DOMContentLoaded', () =>{
    openModal()
})

window.addEventListener('click', (e) => {
      if (e.target === modal){
          
          closeModal()
      }
    })
    



closeModalBtn.onclick = () => {
    closeModal()
}


function openModal(){
    modal.style.display = 'block';
    document.querySelector("body").style.overflow = 'hidden';
    document.querySelector("body").style.background = 'rgba(0,0,0,0.6)';
    mainContentContainer.style.visibility = 'hidden' 
    document.querySelector('footer').style.visibility = 'hidden'
}

function closeModal(){
    modal.style.display = 'none';
    document.querySelector("body").style.overflow = 'visible';
    document.querySelector("body").style.background = 'white';
    mainContentContainer.style.visibility = 'visible' 
    document.querySelector('footer').style.visibility = 'visible'
}

 



document.addEventListener("DOMContentLoaded", function() {
    // Get all the navigation links
    const navLinks = document.querySelectorAll('.nav-links ul li a');
    const button = document.querySelector(".font-btn" )

    button.addEventListener('click',()=> {
        const aboutMe = document.querySelector('.container7');
        aboutMe.scrollIntoView({behavior: 'smooth'})
    })
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default behavior of anchor links
            if (e.target.innerText === 'Contact Me') {
                const aboutMe = document.querySelector('.container7');


                // Scroll to the target section smoothly
                aboutMe.scrollIntoView({ behavior: 'smooth' });
            }

            else if(e.target.innerText === 'Skills'){
                const aboutMe = document.querySelector('.container4');
                aboutMe.scrollIntoView({ behavior: 'smooth' });
                

            }else if(e.target.innerText === 'Projects'){
                const projects = document.getElementById('container5')
                projects.scrollIntoView({ behavior: 'smooth' });

            }else if(e.target.innerText === 'Services'){
                const projects = document.querySelector('.container3')
                projects.scrollIntoView({ behavior: 'smooth' });
            }else if(e.target.innerText === 'About Me'){
                const projects = document.querySelector('.container2')
                projects.scrollIntoView({ behavior: 'smooth' });



            }else if(e.target.innerText === 'My Socials'){
                    const socials = document.querySelector('.container1')
                    socials.scrollIntoView({behavior: 'smooth'})

            }
            
            // Get the target section ID from the href attribute

            // Find the target section based on its ID
           


            
        });
    });
});


// const observer = new IntersectionObserver((entries)=>{
//         // const myEntry = entries[0]
//          entries.forEach((entry)=>{
//             console.log(entry)

//             if (entry.isIntersecting) {
//                 entry.target.classList.add('image-animation')
//                 observer.unobserve(entry.target)
//              } else{
//                 entry.target.classList.remove('image-animation')
//              }
//          })

         
    
// },{
//     threshold:0.5
// }

// )





// observer.observe(container1)

// const container3 = document.querySelector('.container3')



// const observer2 = new IntersectionObserver((entries)=>{

// entries.map((entry)=>{

//     entry.target.classList.toggle('container3-animation', entry.isIntersecting)
//     if (entry.isIntersecting) {
//         observer2.unobserve(entry.target)
//     }
    
// })

// }, {
//     threshold: 0.5
// })



// observer2.observe(container3)

const sr = ScrollReveal({
    duration: 3000,
    reset: true,
    distance: '40px'
    
})


const sr2 = ScrollReveal({
    duration: 7000,
    reset: true,
})
sr.reveal('.container5', {origin: 'top'})



sr2.reveal('.container4')



const sr3 = ScrollReveal({
    duration: 600,
    reset: true,
})

sr3.reveal('.header', {origin: 'top'})
// sr3.reveal('.container2', {origin: 'top'})


const sr5 = ScrollReveal({
    duration: 1000,
    reset: true,
})

 sr5.reveal('.container2', {origin: 'left'})





 const sr6 = ScrollReveal({
    duration:1600,
    reset: true,
    distance: '40px'

 })

 sr6.reveal('.container3',{origin: 'top'})


const sr4 = ScrollReveal({
    duration: 4000,
    reset: true,
})

sr4.reveal('.contact', {origin: 'top'})



try {
    


// const form = document.querySelector('form')
//  form.addEventListener('submit', ()=> {
//  form.reset()



// })

} catch (error) {
    console.log(error)
}







const fontIcon = document.querySelector('.fa-solid.fa-bars');
const header = document.querySelector('header');

fontIcon.addEventListener('click', (e) => {
    console.log(e)
    header.classList.toggle('header1');
});
























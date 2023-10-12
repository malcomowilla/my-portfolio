
document.addEventListener("DOMContentLoaded", function() {
    // Get all the navigation links
    const navLinks = document.querySelectorAll('.nav-links ul li a');

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

const container3 = document.querySelector('.container3')



const observer2 = new IntersectionObserver((entries)=>{

entries.map((entry)=>{

    entry.target.classList.toggle('container3-animation', entry.isIntersecting)
    if (entry.isIntersecting) {
        observer2.unobserve(entry.target)
    }
    // if (entry.isIntersecting) {
    //     entry.target.classList.add('container3-animation')
        
    // } else {
    //     entry.target.classList.remove('container3-animation')
    // }
})

}, {
    threshold: 0.5
})



observer2.observe(container3)

const sr = ScrollReveal({
    duration: 3000,
    reset: true,
    distance: '40px'
    
})


const sr2 = ScrollReveal({
    duration: 5000,
    reset: true,
})
sr.reveal('.container5', {origin: 'left'})



sr2.reveal('.container4')




const sr3 = ScrollReveal({
    duration: 600,
    reset: true,
})

sr3.reveal('.header', {origin: 'top'})



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








































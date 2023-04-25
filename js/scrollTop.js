
var button = document.getElementById('scrollToTop')

const html = document.querySelectorAll('html')
const body = document.querySelectorAll('body')

button.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({
        top: 0,
        left: 0,
    })
})


// // scroll to top
// const button = document.getElementById('scrollToTop');

// const scrollToTop = () => {
//   button.addEventListener("click", () => {
//     window.scroll({
//       top: 0,
//       left: 0,
//       behavior: 'smooth'
//     }); 
//   });
// };
// scrollToTop();



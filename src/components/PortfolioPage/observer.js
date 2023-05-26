export function observeIntersection(elements) {
    // const observerDiv = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     console.log(entry);
    //     if (entry.isIntersecting) {
    //       entry.target.classList.add('show');
    //     } else {
    //       entry.target.classList.remove('show');
    //     }
    //   });
    // });
  
    // elements.forEach((el) => observerDiv.observe(el));
  
    // const observerImg = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     console.log(entry);
    //     if (entry.isIntersecting) {
    //       entry.target.classList.add('show_img');
    //     } else {
    //       entry.target.classList.remove('show_img');
    //     }
    //   });
    // });
  
    // const hiddenImg = document.querySelectorAll('.hidden_img');
  
    // hiddenImg.forEach((el) => observerImg.observe(el));

    // const scrollElement = document.querySelector('.scroll');

    // window.addEventListener('scroll', () => {
    //   const scrollPosition = window.scrollY;
    //   if (scrollPosition > 0) {
    //     scrollElement.classList.add('scrolled');
    //   } else {
    //     scrollElement.classList.remove('scrolled');
    //   }
    // });

    // const sections = document.querySelectorAll('.container');
    // let currentSectionIndex = 0;
    // let isAnimating = false;

    // function scrollToNextSection() {
    //   if (isAnimating) return;
    //   if (currentSectionIndex >= sections.length - 1) return;

    //   isAnimating = true;

    //   sections[currentSectionIndex].classList.remove('enter');
    //   sections[currentSectionIndex].classList.add('exit');

    //   currentSectionIndex++;

    //   sections[currentSectionIndex].classList.add('enter');

    //   setTimeout(() => {
    //     sections[currentSectionIndex].classList.remove('exit');
    //     isAnimating = false;
    //   }, 500); // Adjust the duration to match the CSS transition duration
    // }

    // window.addEventListener('wheel', (event) => {
    //   const delta = event.deltaY;

    //   if (delta > 0) {
    //     scrollToNextSection();
    //   }
    // });

      // const container2 = document.querySelector('.container2');
  
      // const observer = new IntersectionObserver((entries) => {
      //   const entry = entries[0];
      //   if (entry.isIntersecting) {
      //     container2.classList.add('show');
      //   } else {
      //     container2.classList.remove('show');
      //   }
      // }, {
      //   threshold: 0.5, // Adjust the threshold as needed
      // });
  
      // observer.observe(container2);
  
      // return () => {
      //   observer.unobserve(container2);
      // };
      
      const sectionArray = ['section1', 'section2', 'section3'];
      let currentIndex = 0;

      window.addEventListener('wheel', (event) => {
        const scrollUp = event.deltaY < 0;
        const scrollDown = event.deltaY > 0;

        if (scrollUp) {
          if (currentIndex === 0) {
            // do nothing
          }
          else if (currentIndex !== 0) {
            currentIndex--;
            updateSectionUp();
          }
        }
        else if (scrollDown) {
          if (currentIndex === sectionArray.length - 1) {
            // do nothing
          }
          else if (currentIndex !== sectionArray.length - 1) {
            currentIndex++;
            updateSectionDown();
          }
        }
      });

      function updateSectionUp() {
        const element = document.getElementById("sectionContainer");
        element.style.setProperty('--number-of-scrolls', currentIndex);
        element.classList.remove('translateDown');
        element.classList.add('translateDown');
      }

      function updateSectionDown() {
        const element = document.getElementById("sectionContainer");
        element.style.setProperty('--number-of-scrolls', currentIndex);
        element.classList.remove('translateUp');
        element.classList.add('translateUp');
      }
  }
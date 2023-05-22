export function observeIntersection(elements) {
    const observerDiv = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });
  
    elements.forEach((el) => observerDiv.observe(el));
  
    const observerImg = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show_img');
        } else {
          entry.target.classList.remove('show_img');
        }
      });
    });
  
    const hiddenImg = document.querySelectorAll('.hidden_img');
  
    hiddenImg.forEach((el) => observerImg.observe(el));
  }
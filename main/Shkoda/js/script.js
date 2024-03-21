const btnUp = {
    el: document.querySelector('.baton-up'),
    show() {
      
      this.el.classList.remove('baton-up_hide');
    },
    hide() {
      
      this.el.classList.add('baton-up_hide');
    },
    addEventListener() {
     
      window.addEventListener('scroll', () => {
        
        const scrollY = window.scrollY || document.documentElement.scrollTop;
       
        scrollY > 400 ? this.show() : this.hide();
      });
     
      document.querySelector('.baton-up').onclick = () => {
       
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  btnUp.addEventListener();
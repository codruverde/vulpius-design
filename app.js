const checkbox = document.getElementById('gekko');
  const pres = document.getElementById('presentation');
  const body = document.body;

  checkbox.addEventListener('change', function() {
    if (this.checked) {
      body.style.overflow = 'scroll';
      setTimeout(function() {
        pres.style.zIndex = "-1";
      }, 2200); // Delay of 1 second (1000 milliseconds)
    }
  });

  const viewportHeight = window.innerHeight;

  function scrollToSection(event, id) {
    event.preventDefault();
    
    const element = document.getElementById(id);
    const elementHeight = element.offsetHeight;

    if (element) {
      const scrollPosition = element.offsetTop - (viewportHeight / 2) + (elementHeight / 2);
      
      window.scrollTo({
        top: scrollPosition
      });
    }
  };

  const button = document.getElementById('batman-link');
  const close = document.getElementById('close-modal');
  const dialogue = document.getElementById('modal');

  button.addEventListener('click', () => {
      dialogue.showModal();
    });
  close.addEventListener('click', () => {
      dialogue.close();
    });


  const link1 = document.getElementById('link1');
  const link2 = document.getElementById('link2');
  const link3 = document.getElementById('link3');
  const link4 = document.getElementById('link4');

  link1.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({top: 0});
  });
  link4.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({top: document.body.scrollHeight});
  });

  const bodyHeight = document.body.scrollHeight;
  const rect1 = document.querySelector('.rect1');
  const rect2 = document.querySelector('.rect2');
  const rect3 = document.querySelector('.rect3');
  const rect4 = document.querySelector('.rect4');
  const icons = document.getElementById('icons-container');
  const childElements = document.getElementsByClassName('icons');
  const roadtext = document.getElementById('road-text');
  const ultrawide = document.getElementById("ultrawide").firstChild;
  const mobile = document.getElementById("mobile-image").firstChild;

  window.addEventListener('scroll', () => {
    const element2 = document.getElementById('road');
    const element3 = document.getElementById('flexible-design');
    const element4 = document.getElementById('project3');
    const element5 = document.getElementById('grid');

    const scrollY = window.scrollY;
    const scrollPosition1 = viewportHeight * 0.6;
    const scrollPosition2 = element2.offsetTop + (element2.offsetHeight / 2);
    const scrollPosition3 = element4.offsetTop + (element4.offsetHeight / 2);
    const scrollPosition4 = element5.offsetTop - (viewportHeight / 2);

      if (scrollY <= scrollPosition1) {
        rect1.style.transform = "translate(0)";
        rect2.style.transform = "translate(3px)";
        rect3.style.transform = "translate(3px)";
        rect4.style.transform = "translate(3px)";

        link1.style.animation = "pullout 3s";
        link2.style.animation = "none";
        link3.style.animation = "none";
        link4.style.animation = "none";
      } else if (scrollY <= scrollPosition2) {
        rect1.style.transform = "translate(0)";
        rect2.style.transform = "translate(3px)";
        rect3.style.transform = "translate(3px)";
        rect4.style.transform = "translate(3px)";

        link1.style.animation = "pullout 3s";
        link2.style.animation = "none";
        link3.style.animation = "none";
        link4.style.animation = "none";

        roadtext.style.opacity = "1";
        icons.style.opacity = "0.8";
        for (let i = 0; i < childElements.length; i++) {
          const child = childElements[i];
          // Modify the style properties of each child element
          child.style.transform = "translate(0)";
        }
      } else if (scrollY <= scrollPosition3) {
        rect1.style.transform = "translate(3px)";
        rect2.style.transform = "translate(0)";
        rect3.style.transform = "translate(3px)";
        rect4.style.transform = "translate(3px)";

        link1.style.animation = "none";
        link2.style.animation = "pullout 3s";
        link3.style.animation = "none";
        link4.style.animation = "none";
      } 
      else if (scrollY <= scrollPosition4) {
        rect1.style.transform = "translate(3px)";
        rect2.style.transform = "translate(3px)";
        rect3.style.transform = "translate(0)";
        rect4.style.transform = "translate(3px)";

        link1.style.animation = "none";
        link2.style.animation = "none";
        link3.style.animation = "pullout 3s";
        link4.style.animation = "none";

        ultrawide.style.transform = "translate(0)";
        mobile.style.transform = "translate(0)";
      } else {
        rect1.style.transform = "translate(3px)";
        rect2.style.transform = "translate(3px)";
        rect3.style.transform = "translate(3px)";
        rect4.style.transform = "translate(0)";

        link1.style.animation = "none";
        link2.style.animation = "none";
        link3.style.animation = "none";
        link4.style.animation = "pullout 3s";
      }
  });



  if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
  };

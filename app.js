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

  const link1 = document.querySelector('.link1');
  const link2 = document.querySelector('.link2');
  const link3 = document.querySelector('.link3');
  const link4 = document.querySelector('.link4');
  const bodyHeight = document.body.offsetHeight;
  const scroll1 = 0.19 * bodyHeight;
  const scroll2 = 0.47 * bodyHeight;
  const scroll3 = 0.9 * bodyHeight;

  link1.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({top: 0});
  });
  link2.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({top: scroll1});
  });
  link3.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({top: scroll2});
  });
  link4.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({top: scroll3});
  });

  const rect1 = document.querySelector('.rect1');
  const rect2 = document.querySelector('.rect2');
  const rect3 = document.querySelector('.rect3');
  const rect4 = document.querySelector('.rect4');
  const roadtext = document.getElementById('road-text');
  const ultrawide = document.getElementById("ultrawide").firstChild;
  const mobile = document.getElementById("mobile-image").firstChild;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const scrollPosition1 = 0.06 * bodyHeight;
    const scrollPosition2 = 0.15 * bodyHeight;
    const scrollPosition3 = 0.425 * bodyHeight;
    const scrollPosition4 = 0.88 * bodyHeight;
    const scrollPosition5 = 1 * bodyHeight;

      if (scrollY <= scrollPosition1) {
        rect1.style.transform = "translate(0)";
        rect2.style.transform = "translate(3px)";
        rect3.style.transform = "translate(3px)";
        rect4.style.transform = "translate(3px)";
      } else if (scrollY <= scrollPosition2) {
        rect1.style.transform = "translate(0)";
        rect2.style.transform = "translate(3px)";
        rect3.style.transform = "translate(3px)";
        rect4.style.transform = "translate(3px)";
        roadtext.style.opacity = "1";
      } else if (scrollY <= scrollPosition3) {
        rect1.style.transform = "translate(3px)";
        rect2.style.transform = "translate(0)";
        rect3.style.transform = "translate(3px)";
        rect4.style.transform = "translate(3px)";
      } 
      else if (scrollY <= scrollPosition4) {
        rect1.style.transform = "translate(3px)";
        rect2.style.transform = "translate(3px)";
        rect3.style.transform = "translate(0)";
        rect4.style.transform = "translate(3px)";
        ultrawide.style.transform = "translate(0)";
        mobile.style.transform = "translate(0)";
      } else if (scrollY <= scrollPosition5) {
        rect1.style.transform = "translate(3px)";
        rect2.style.transform = "translate(3px)";
        rect3.style.transform = "translate(3px)";
        rect4.style.transform = "translate(0)";
      }
  });

  if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
  };
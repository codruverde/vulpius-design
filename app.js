// START z-index change and prevent initial scrolling
const checkbox = document.getElementById('gekko');
const pres = document.getElementById('presentation');
const body = document.body;

// Prevent default scroll behavior when the screen is less than 650px wide
function preventScroll(e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
}

// Disable scroll for screens smaller than 650px by default
if (window.matchMedia("(max-width: 650px)").matches) {
  window.addEventListener('scroll', preventScroll);
}

// Function to handle scrolling behavior based on screen size
checkbox.addEventListener('change', function() {
  if (this.checked) {
    // Use horizontal scrolling for larger screens, vertical for smaller screens
    if (window.matchMedia("(min-width: 650px)").matches) {
      body.style.overflowX = 'scroll';
      body.style.overflowY = 'hidden';

      // Enable horizontal scrolling with the mouse wheel
      window.addEventListener('wheel', function(event) {
        if (event.deltaY !== 0) {
          document.documentElement.scrollLeft += event.deltaY;
          event.preventDefault(); // Prevent default vertical scroll
        }
      });

    } else {
      // For smaller screens (less than 650px)
      body.style.overflowY = 'scroll';
      body.style.overflowX = 'hidden';

      // Allow vertical scrolling again by removing the scroll event listener
      window.removeEventListener('scroll', preventScroll);
    }

    setTimeout(function() {
      pres.style.zIndex = "-1";
    }, 2200); // Delay of 2.2 seconds
  }
});


// Reset scroll history
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
}

// Button scroll events
const goToStart = document.querySelector("[button1]");
const goToProjects = document.querySelector("[button2]");
const goToSkills = document.querySelector("[button3]");
const goToEnd = document.querySelector("[button4]");

const start = document.getElementById("start");
const projects = document.getElementById("projects-container");
const skills = document.getElementById("skills");
const contact = document.getElementById("contact");
const circle = document.getElementById("circle");

let disableScrollObserver = false; // Flag to temporarily disable scroll-based behavior

// Function to temporarily disable scroll-based margin changes
function temporarilyDisableScrollObserver() {
  disableScrollObserver = true;
  setTimeout(() => {
    disableScrollObserver = false;
  }, 1000); // Disable for 1 second
}

// Button scroll handlers
goToStart.addEventListener("click", () => {
  start.scrollIntoView({ behavior: "smooth", inline: "start" });
  circle.style.marginLeft = "-3px";
  temporarilyDisableScrollObserver();
});

goToProjects.addEventListener("click", () => {
  projects.scrollIntoView({ behavior: "smooth", inline: "start" });
  circle.style.marginLeft = "126px";
  temporarilyDisableScrollObserver();
});

goToSkills.addEventListener("click", () => {
  skills.scrollIntoView({ behavior: "smooth", inline: "start" });
  circle.style.marginLeft = "251px";
  temporarilyDisableScrollObserver();
});

goToEnd.addEventListener("click", () => {
  contact.scrollIntoView({ behavior: "smooth", inline: "start" });
  circle.style.marginLeft = "360px";
  temporarilyDisableScrollObserver();
});

// Function to apply ease-out timing
function easeOut(t) {
  return 1 - Math.pow(1 - t, 1.5); // Cubic ease-out
}

// Function to animate the increment of the number with easing
function animateIncrement(element, start, end, duration) {
  let startTime = null;

  function updateNumber(currentTime) {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;

    // Calculate the current value based on the elapsed time and duration
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOut(progress); // Apply easing function
    const currentNumber = Math.floor(easedProgress * (end - start) + start);

    // Update the text content
    element.textContent = currentNumber;

    // Continue the animation until progress reaches 1 (100%)
    if (progress < 1) {
      window.requestAnimationFrame(updateNumber);
    }
  }

  // Start the animation
  window.requestAnimationFrame(updateNumber);
}

// IntersectionObserver to trigger the animation when a div comes into view
function createObserver(target, start, end, duration) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Start animating the target element
        animateIncrement(entry.target, start, end, duration);
        observer.unobserve(entry.target); // Stop observing after the animation
      }
    });
  }, { threshold: 0.3 });

  observer.observe(target); // Start observing the target element
}

// Get both number div elements
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");

// Create an observer for number1 to animate from 0 to 17
createObserver(number1, 0, 17, 1500);

// Create an observer for number2 to animate from 0 to 28
createObserver(number2, 0, 28, 1500);

// Scroll animation for the circle margin based on the visible section
const skills2 = document.getElementById("skills2");

function createCircleObserver(section, marginValue) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !disableScrollObserver) {
        // Update the circle's margin when the section is visible, but only if scrollObserver is not disabled
        circle.style.marginLeft = marginValue;
      }
    });
  }, { threshold: 0.3 }); // Adjust threshold to control when to trigger the change

  observer.observe(section);
}

// Attach circle margin update for each section
createCircleObserver(start, "-3px"); // When 'start' section is visible
createCircleObserver(projects, "126px"); // When 'projects-container' is visible
createCircleObserver(skills, "251px"); // When 'skills' section is visible
createCircleObserver(skills2, "251px"); // When 'skills' section is visible
createCircleObserver(contact, "360px"); // When 'contact' section is visible

// Autoplay videos onscroll
const videos = document.querySelectorAll(".videos");

// Function to handle video play/pause based on visibility
function handleVideoPlay(entries) {
  entries.forEach((entry) => {
    const video = entry.target; // Get the video element
    if (entry.isIntersecting) {
      // If the video is at least 50% in view, play the video
      video.play();
    } else {
      // If the video is less than 50% in view, pause the video
      video.pause();
    }
  });
}

// Create the IntersectionObserver for videos
const videoObserver = new IntersectionObserver(handleVideoPlay, {
  threshold: 0.5 // Trigger when 50% of the video is visible
});

// Observe each video element
videos.forEach((video) => {
  videoObserver.observe(video);
});

// Media query listener to switch between horizontal and vertical scrolling
const mediaQuery = window.matchMedia("(max-width: 650px)");

function handleMediaQueryChange(e) {
  if (e.matches) {
    // Switch to vertical scroll for smaller screens
    body.style.overflowY = 'scroll';
    body.style.overflowX = 'hidden';
  } else {
    // Switch to horizontal scroll for larger screens
    body.style.overflowX = 'scroll';
    body.style.overflowY = 'hidden';
  }
}

// Apply initial scroll settings based on the screen size
handleMediaQueryChange(mediaQuery);

// Add listener for viewport width changes
mediaQuery.addListener(handleMediaQueryChange);

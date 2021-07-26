const sections = document.querySelectorAll("section");
const bubble = document.querySelector(".bubble");

const options = {
  threshold: 0.7
};
let observer = new IntersectionObserver(navCheck, options);

function toggleBackgroundColor(element) {
  const color = element.style.color;
  console.log('color is : ' + color);
  if (color === 'white') {
    console.log('toggled to white');
    element.style.setProperty('color', '#000000');
  } else {
    element.style.setProperty('color', '#FFFFFF');
  }
}


function navCheck(entries) {
  entries.forEach(entry => {
    //const className = entry.target.className;
    const id = entry.target.id;
    const activeAnchor = document.querySelector(`[data-page=${id}]`);
    console.log('ActiveAnchor : ' + activeAnchor);
    //const gradientIndex = entry.target.getAttribute('data-index');
    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left,
    };
    if (entry.isIntersecting) {
      bubble.style.setProperty('left', `${directions.left}px`);
      bubble.style.setProperty('top', `${directions.top}px`);
      bubble.style.setProperty('width', `${directions.width}px`);
      bubble.style.setProperty('height', `${directions.height}px`);
      //bubble.style.background = gradients[gradientIndex];
      console.log('color should toggle');
      toggleBackgroundColor(activeAnchor);
    } else {
      toggleBackgroundColor(activeAnchor);
    }
  });
}

sections.forEach(section => {
  observer.observe(section)
});
let navigation = document.querySelector('nav');
let imgInspector = document.querySelector('.img-inspector');
let upDownCount = 0;
let leftRightCount = 0;
let zoomCount = 200;


navigation.addEventListener('click', event => {
  if (event.target.dataset.direction === 'up') {
    upDownCount -= 10;
    imgInspector.style.backgroundPositionY = `${upDownCount}px`;
  } else if (event.target.dataset.direction === 'down') {
    upDownCount += 10;
    imgInspector.style.backgroundPositionY = `${upDownCount}px`;
  } else if (event.target.dataset.direction === 'left') {
    leftRightCount -= 10;
    imgInspector.style.backgroundPositionX = `${leftRightCount}px`;
  } else if (event.target.dataset.direction === 'right') {
    leftRightCount += 10;
    imgInspector.style.backgroundPositionX = `${leftRightCount}px`;
  } else if (event.target.dataset.direction === 'in') {
    zoomCount += zoomCount * 0.2;
   imgInspector.style.backgroundSize = `${zoomCount}%`;
  } else if (event.target.dataset.direction === 'out') {
    zoomCount -= zoomCount * 0.2;
    imgInspector.style.backgroundSize = `${zoomCount}%`;
  }
});


const svgContainer = document.querySelector('.svg-container')

document.addEventListener('mousemove', e => {
  const mouseX = e.pageX / window.innerWidth - 0.5
  const mouseY = e.pageY / window.innerHeight - 0.5

  // Adjust the movement range and direction as needed
  const translateX = mouseX * 50
  const translateY = mouseY * 50

  svgContainer.style.transform = `translate(${translateX}px, ${translateY}px)`
})

const svgContainer_2 = document.querySelector('.svg-container_2')

document.addEventListener('mousemove', e => {
  const mouseX = e.pageX / window.innerWidth - 0.5
  const mouseY = e.pageY / window.innerHeight - 0.5

  // Adjust the movement range and direction as needed
  const translateX = mouseX * 50
  const translateY = mouseY * 50

  svgContainer_2.style.transform = `translate(${translateX}px, ${translateY}px)`
})

const clicked = document.querySelector('.svg-container_1')

document.addEventListener('click', () => {
  clicked.window.location.href = './html/løvskov.html'
})

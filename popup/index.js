const footer = document.querySelector('.footer');
footer.addEventListener(onNavClick)
alert(footer);
function onNavClick(e) {
  console.log(e);
  alert(e.target.name)
  if(e && e.target.name === 'NAV') {

  }
}
const footer = document.querySelector('.footer');
footer.addEventListener('click', onNavClick);
function onNavClick(e) {
  if(e && e.target.nodeName === 'NAV') {
    const currentKey  = e.target.attributes.key.nodeValue;
  }
}

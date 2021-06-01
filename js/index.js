Array.prototype.forEach.call(document.getElementsByClassName('collapsible'), column => column.addEventListener('click', () => {
  column.classList.toggle('active');

  const content = column.nextElementSibling;

  if (content.style.display === 'block') content.style.display = 'none';
  else content.style.display = 'block';
}));

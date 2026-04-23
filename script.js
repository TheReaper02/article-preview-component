
  const btn = document.getElementById('shareBtn');
  const tooltip = document.getElementById('shareTooltip');
 
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    tooltip.classList.toggle('active');
  });
 
  
  document.addEventListener('click', () => {
    tooltip.classList.remove('active');
  });
 
  tooltip.addEventListener('click', (e) => e.stopPropagation());
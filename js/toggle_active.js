document.addEventListener('click', function (e) {
  const el = e.target.closest('.toggle_active');
  if (!el) return;
  el.classList.toggle('active');
});
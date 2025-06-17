function toggleMenu() {
  document.getElementById('sidebar').classList.toggle('show');
}

function toggleSubmenu(button) {
  const li = button.closest('.has-submenu');
  const allLis = document.querySelectorAll('.has-submenu');

  allLis.forEach(item => {
    const submenu = item.querySelector('.submenu');
    const btn = item.querySelector('button');
    const expanded = item === li && !item.classList.contains('active');

    item.classList.remove('active');
    submenu.style.display = 'none';
    btn.setAttribute('aria-expanded', 'false');

    if (expanded) {
      item.classList.add('active');
      submenu.style.display = 'flex';
      btn.setAttribute('aria-expanded', 'true');
    }
  });
}

function loadPage(page, button) {
  const iframe = document.getElementById('iframeContent');
  iframe.src = page;

  const allSubItems = document.querySelectorAll('.submenu button, .sidebar li > button');
  allSubItems.forEach(btn => btn.classList.remove('active'));

  button.classList.add('active');

  localStorage.setItem('currentPage', page);
  localStorage.setItem('currentButtonText', button.textContent.trim());

  const parent = button.closest('.has-submenu');
  if (parent && !parent.classList.contains('active')) {
    toggleSubmenu(parent.querySelector('button'));
  }

  document.getElementById('sidebar').classList.remove('show');
}

window.addEventListener('DOMContentLoaded', () => {
  const savedPage = localStorage.getItem('currentPage');
  const savedButtonText = localStorage.getItem('currentButtonText');

  if (savedPage) {
    document.getElementById('iframeContent').src = savedPage;
  }

  if (savedButtonText) {
    const btns = document.querySelectorAll('.submenu button, .sidebar li > button');
    btns.forEach(btn => {
      if (btn.textContent.trim() === savedButtonText) {
        btn.classList.add('active');
        const parent = btn.closest('.has-submenu');
        if (parent) {
          parent.classList.add('active');
          parent.querySelector('.submenu').style.display = 'flex';
          parent.querySelector('button').setAttribute('aria-expanded', 'true');
        }
      }
    });
  }
});

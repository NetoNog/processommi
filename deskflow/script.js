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

  // Armazena a página e botão ativo
  localStorage.setItem('currentPage', page);
  localStorage.setItem('currentButtonText', button.textContent.trim());

  // Marca visualmente a seção pai como ativa
  const parentDetail = button.closest('details');
  if (parentDetail) {
    document.querySelectorAll('.sidebar details').forEach(detail => {
      detail.parentElement.classList.remove('active');
    });
    parentDetail.parentElement.classList.add('active');
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
        const parentDetail = btn.closest('details');
        if (parentDetail) {
          parentDetail.open = true;
          parentDetail.parentElement.classList.add('active');
        }
      }
    });
  }

  // Comportamento acordeão: fecha outras categorias ao abrir uma
  document.querySelectorAll('.sidebar details').forEach(detail => {
    detail.addEventListener('toggle', function () {
      if (this.open) {
        document.querySelectorAll('.sidebar details').forEach(other => {
          if (other !== this) {
            other.open = false;
          }
        });
      }
    });
  });
});

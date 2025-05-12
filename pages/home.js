function mostrarInput() {
    let inputCollapse = document.getElementById('input-collapse')
    inputCollapse.classList.toggle('d-none')
}


document.addEventListener('DOMContentLoaded', function() {
  const btnFecharModal = document.getElementById('btn-fechar-modal');
  if (btnFecharModal) {
    btnFecharModal.addEventListener('click', function() {
      //Usando jQuery (se estiver disponível)
      if (typeof $ !== 'undefined') {
        $('#navbarNav').collapse('hide');
      } 
      //Usando DOM puro
      else {
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler && !navbarToggler.classList.contains('collapsed')) {
          navbarToggler.click();
        }
      }
    });
  }


  // Fechar o menu ao clicar em qualquer item de navegação
  const navItems = document.querySelectorAll('.navbar-nav .nav-item a');
  navItems.forEach(function(item) {
    item.addEventListener('click', function() {
      // Método 1: Usando jQuery
      if (typeof $ !== 'undefined') {
        $('#navbarNav').collapse('hide');
      } 
      //Usando DOM puro
      else {
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler && !navbarToggler.classList.contains('collapsed')) {
          navbarToggler.click();
        }
      }
    });
  });
});




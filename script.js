function clearText() {
    var button = document.getElementById("editable-button");
    button.innerHTML = "";
  }

  const filtres = document.querySelectorAll('.filtre');
    filtres.forEach(filtre => {
      filtre.addEventListener('click', () => {
        if (!filtre.classList.contains('active')) {
          // Supprime la classe "active" de tous les filtres
          filtres.forEach(f => f.classList.remove('active'));
          // Ajoute la classe "active" au filtre cliqué
          filtre.classList.add('active');
        }
      });
    }); 
function clearText() {
    var button = document.getElementById("editable-button");
    button.innerHTML = "";
  }

  function clearText() {
    var button = document.getElementById("editable-button2");
    button.innerHTML = "";
  }

const checkbox = document.getElementById('lik1');
const button = document.getElementById('réservation');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    button.classList.add('ractive');
  } else {
    button.classList.remove('ractive');
  }
});


  



document.addEventListener('DOMContentLoaded', (event) => {
    const checkbox = document.getElementById('click');
    const contenedorHumo = document.querySelector('.contenedor_humo');
    const card = document.querySelector('.card')
  
    checkbox.addEventListener('change', function() {
      var root = document.documentElement;

      
      if (this.checked) {
        root.style.setProperty('--color-nieve', '#ff239c');
        root.style.setProperty('--color-brillonieve', '#ff63b9');
        contenedorHumo.style.display = 'block'; 
        card.style.display = 'block'
        setTimeout(() => {
          card.classList.add('visible')
          contenedorHumo.classList.add('visible');
        }, 10); 
      } else {
        contenedorHumo.classList.remove('visible');
        card.classList.remove('visible')
        setTimeout(() => {
          contenedorHumo.style.display = 'none'; 
          card.style.display = 'none'
        }, 500); 
      }
    });
  })

document.addEventListener('mousedown', function(e){
  const checkbox = document.getElementById('click');
  if (checkbox.checked){
    var body = document.querySelector('body');
    var globo = document.createElement('span');
    var x = e.offsetX;
    var y = e.offsetY;
    globo.style.left = x + 'px';
    globo.style.top = y + 'px';
    var tamaño = Math.random() * 100;
    globo.style.width = 10 + tamaño + 'px';
    globo.style.height = 10 + tamaño + 'px';
    body.appendChild(globo);
    setTimeout(function(){
      globo.remove();
    }, 1500);
  }
  
})

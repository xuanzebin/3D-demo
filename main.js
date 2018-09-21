document.querySelectorAll('section>div>input').forEach(range=>{
    range.oninput=function(){
      let x = document.querySelector('#rotateX').value
      let y = document.querySelector('#rotateY').value
      let z = document.querySelector('#rotateZ').value
      document.querySelector('.container').style = `transform: rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`
    }
  })
let um = document.getElementById('dois')
let dois = document.getElementById('um')

function MM(event) {
	event.preventDefault() 
	um.style.color = 'green'
	um.innerHTML = dois.value
}
  um.addEventListener('click', function(){
  		um.style.color = 'green'
  })
  um.addEventListener('mouseover', function(){
    	um.style.color = 'blue'
    })
  um.addEventListener('mouseout',function(){
  		um.style.color = 'yellow'
  })
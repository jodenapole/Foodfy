const recipes = document.querySelectorAll('.card')

for (let i = 0; i < recipes.length; i++) {
	recipes[i].addEventListener('click', function () {
		
		window.location.href=`/recipes/${i}`
	});
}

const infoContent = document.querySelector('.info p.info-desc')
const infoTitle = document.querySelector('.info h1.info-desc')

if (infoContent.innerHTML == ''){
	infoContent.remove('p')
	infoTitle.remove('h1')
}
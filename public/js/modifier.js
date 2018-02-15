(function() {
		console.log('click modifier');

//fonction autoexécutante???
let aBtnModifier = document.querySelectorAll('.modifier');

for (elm of aBtnModifier) {
	elm.addEventListener('click', function(){

		console.log('click modifier');

		let tr = this.parentNode.parentNode;
		let id = tr.children[0].innerHTML;
		let prenom = tr.children[1].innerHTML;
		let nom = tr.children[2].innerHTML;
		let telephone = tr.children[3].innerHTML;
		let courriel = tr.children[4].innerHTML;

		let elmForm = document.getElementById('formModif');

		let elmInput = elmForm.querySelectorAll('input')
		elmInput[0].value = prenom
		elmInput[1].value = nom
		elmInput[2].value = telephone
		elmInput[3].value = courriel

		//elmForm.submit()

 	})
 }

})();
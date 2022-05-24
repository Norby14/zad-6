(function () {
const ex1 = document.getElementById('ex1_button')
const ex1c = document.getElementById('ex1_content')
//const ex2 = document.getElementById('ex2_text')
//const ex2c = document.getElementById('ex2_content')
	
	ex1.addEventListener("click", function(){
		var data = "";
		for(var i=0; i<10; i++){
			if(i!=0)
				data += ",";
			data+= i.toString();
		}
		ex1c.innerHTML = data;
	});

	/* ex2.addEventListener("placeholder", function(){
		var number = document.getElementById("phone number");
		if (number.value.lenght !=9)
			number = "tak";
		else
			number = "nie";
	})
*/
})();
function val () {
const ex2 = document.getElementById('ex2_text')
const ex2c = document.getElementById('ex2_content')
	ex2.addEventListener("input", function (){
		var number = document.getElementById("ex2_text");
		if (number.value.lenght = 9){
			
			ex2c.innerHTML = "tak"}
		else
		{
		ex2c.innerHTML = "nie";
	}
							
});
}

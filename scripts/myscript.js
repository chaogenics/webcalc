//get the rate and length of stay and calculate with state/local tax
function calc_normal(){
	let lnStateTax = .0725
	let lnCityTax = .06
	let lcRate = document.getElementById("rate").value;
	let lcLos = document.getElementById("los").value;
	let lnRate = Number(lcRate)
	let lnLos = Number(lcLos)

	let lnTotal = (Number(lcRate) * 1.1325) * Number(lcLos);  //total
	let strTotal = (lnTotal.toFixed(2)).toString(); //convert total to string
	let lcStTaxText = (((lnRate * lnLos) * lnStateTax).toFixed(2)).toString();  //state tax
	let lcCityTaxText = (((lnRate * lnLos) * lnCityTax).toFixed(2)).toString(); //city tax

	//display rate
	let text = "Rate: $" + lcRate;
	document.getElementById("text_display").innerHTML = text;

	//dispaly State tax info
	let text2 = "State Tax Total: $" + lcStTaxText;
	document.getElementById("text_display2").innerHTML = text2; 

	//dispaly City tax info
	let text3 = "City Tax Total: $" + lcCityTaxText;
	document.getElementById("text_display3").innerHTML = text3; 
	
	//display total
	//all of this just to use the singular or plural form of night based on number of days
	if (Number(lcLos) > 1){
		let text4 = "Your total for " + lcLos + " nights at $" + lcRate + " will be $" + strTotal + ".";
		document.getElementById("text_display4").innerHTML = text4; //display to the page in the <p>
	}else{
		let text4 = "Your total for " + lcLos + " night at $" + lcRate + " will be $" + strTotal + ".";
		document.getElementById("text_display4").innerHTML = text4; //display to the page in the <p>
	}
}

//calculate rate from total
function calc_gross(){
	let lnStateTax = .0725
	let lnCityTax = .06
	let lcTotal = document.getElementById("gross_rate").value;
	let lcLos = document.getElementById("gross_los").value;
	let lnLos = Number(lcLos);
	let lnTotal = Number(lcTotal);

	let lnRate = ((Number(lcTotal) /Number(lcLos)) / 1.1325) ;  //calculate daily rate
	let strRate = (lnRate.toFixed(2)).toString();  //convert to string

	let lcStTaxText = (((lnRate * lnLos) * lnStateTax).toFixed(2)).toString();  //state tax
	let lcCityTaxText = (((lnRate * lnLos) * lnCityTax).toFixed(2)).toString(); //city tax
	
	//display rate
	let text = "Total for stay: $" + lcTotal;
	document.getElementById("gross_text_display").innerHTML = text;

	//dispaly State tax info
	let text2 = "State Tax Total: $" + lcStTaxText;
	document.getElementById("gross_text_display2").innerHTML = text2; 

	//dispaly City tax info
	let text3 = "City Tax Total: $" + lcCityTaxText;
	document.getElementById("gross_text_display3").innerHTML = text3; 
	
	let text4 = "The rate will be $" + strRate + " per night in Choice.";
	document.getElementById("gross_text_display4").innerHTML = text4; //display to the page in the <p>
	
}
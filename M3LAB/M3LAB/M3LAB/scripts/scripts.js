var insult={};
	var randomBodyParts = ["Face", "Nose", "Hair", "Mouth", "Forehead"];
	var randomAdjectives = ["Smelly", "Boring", "Stupid", "Lazy", "Small" ];
	var randomAnimals = ["Rhino", "Bull", "Goose", "Horse", "Rat"];
	var randomAnimalBodyParts = ["Nose", "Stomach", "Leg", "Thigh", "Head"];  
	insult.randomize=function(){
	// Pick a random body part from the RandomBodyParts array:
	insult.randomBodyPart = randomBodyParts[Math.floor(Math.random()*5)];
	//pick a random adjective from the randomAdjectives array:
	insult.randomAdjective = randomAdjectives[Math.floor(Math.random()*5)];
	//pick a random word from the randomWords array:
	insult.randomAnimal = randomAnimals[Math.floor(Math.random()*5)];
	// pick a random animal body part from randomAnimalBodyParts array:
	insult.randomAnimalBodyPart = randomAnimalBodyParts[Math.floor(Math.random()*5)];
	}
	//Join all the random strings into a sentence:
	insult.build=function(){
	insult.randomInsult= "Your " + insult.randomBodyPart + " is more " +
	insult.randomAdjective + " than a " + insult.randomAnimal + "'s " + insult.randomAnimalBodyPart + "!!!";
	}
	
	insult.print=function(){
		document.write(insult.randomInsult);
	}
	insult.printBig=function(){
		var openTag="<h1 style='color:red;'>"
		var closeTag="</h1>"
		console.log(openTag + insult.randomInsult + closeTag);
		document.write(openTag + insult.randomInsult+ closeTag);
	}
	insult.randomize();
	insult.build();
	insult.print();
	insult.printBig();
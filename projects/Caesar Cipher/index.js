function rot13(str) { //Converts a string with the Caesar Cipher.
	let newStr = str.split(''); //Split the string into an array of characters.

	newStr.forEach(function(letter, index) { //Go through each letter in the array.
		let currCode = letter.charCodeAt(); //Gets value of this letter's char code.
		if ((currCode >= 65) && (currCode <= 90)) { //If letter is between A-Z. (Caps only.)
			if ((currCode >= 65) && (currCode <= 77)) { //If letter is between A-M.
				newStr[index] = String.fromCharCode(currCode + 13); //Moves letter 13 places forward.
			} else if ((currCode >= 78) && (currCode <= 90)) { //If letter is between N-Z.
				newStr[index] = String.fromCharCode(currCode - 13); //Moves letter 13 places back.
			}
		}
	});
	newStr = newStr.join(''); //Reassembles the string.
	console.log("Original string: " + str);
	console.log("Modified string: " + newStr + "\n")
	return newStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC"); //Returns 'FREE CODE CAMP'
rot13("SERR CVMMN!"); //Returns 'FREE PIZZA!'
rot13("SERR YBIR?"); //Returns 'FREE LOVE?'
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."); //Returns 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.'
rot13("LBH QVQ VG!"); //Returns 'YOU DID IT!'
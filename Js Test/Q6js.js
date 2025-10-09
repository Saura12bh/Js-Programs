/*Q6. Write a javascript program to count each digit , vowel , consonant , special symbol of string.
*/
//for user input
const readline = require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Enter a string: ",function(str) {
    // Initialize counters
    let digits=0;
    let vowels=0;
    let con=0;
    let special=0;
    let space=0;

    // Convert string to lowercase for easier comparison
    let lowerStr=str.toLowerCase();

	//iterat one by one character 
    for (let i=0;i<lowerStr.length;i++) {
        let ch=lowerStr[i];

	//char is num then digit ++
        if (ch>='0'&& ch<='9') {
            digits++;
	//char is char then it will check it is vowel or con then ++
        } else if(ch>='a' && ch<='z') {
            if(ch==='a' || ch==='e'||ch==='i'||ch==='o'||ch==='u') 
	     {
                vowels++;
            } else 
	     {
                con++;
            }
           }else if (ch===' ')
	   {
            space++;
         } else {
            special++;
        }
    }

    //printlin count of the each value
    console.log("Digits: "+digits);
    console.log("Vowels: "+vowels);
    console.log("Consonants: "+con);
    console.log("Special symbols: "+special);
    console.log("Space: "+space);

    rl.close();
});
/*Q5. Write a java program to remove duplicate alphabet from string.
Input : Goodmorningindia
Output : Godmrniga
*/
const readline =require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Enter a string: ",function(str) {
    let result ="";

    // Loop through each character of the string
    for (let i=0;i<str.length;i++) {
        let ch=str[i];
        let dup=false;

        // Check if this character already exists in result
        for (let j=0;j<result.length;j++) {
            if (result[j]===ch) {
                dup=true;
                break;
            }
        }

        // If not duplicate, add to result
        if (dup==false) {
            result=result+ch;
        }
    }

   //printing string after removing duplicate
    console.log("String after removing duplicates: "+result);
    rl.close();
});

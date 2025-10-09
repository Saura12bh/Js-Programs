/*Q3. Given an array, move all zeroes to the end while maintaining the order of non-zero elements.
Example:
Input: [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]
Hint :
Use a count pointer to shift non-zero elements and fill the rest with 0. */

let arr =[0,1,0,3,12];
let count=0; // Count of non-zero elements

// Shift all non-zero elements to the front
for (let i=0;i<arr.length;i++) {
    if (arr[i]!==0) 
	{   
        arr[count]=arr[i];   //all non zero element store and then cnt++
        count++;
    	}
}

// Fill remaining positions with 0
while (count<arr.length) {  //3<5
    arr[count]=0;  
    count++;
}

//display final array
console.log("Array after moving zeros to the end: " + arr);

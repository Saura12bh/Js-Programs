let arr = [1, 2, 3, 5, 1, 5, 20, 2, 12, 10];
let unique = [];

for (let i = 0; i < arr.length; i++) {
    let count = 0;

    // Count how many times arr[i] occurs in the array
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count++;
        }
    }

    // If it occurs only once, add to unique array
    if (count === 1) {
        unique.push(arr[i]);
    }
}

console.log("All unique elements in the array are: " + unique);

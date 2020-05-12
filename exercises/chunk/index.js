// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let chunked = [];
    let index = 0;

    while(index < array.length) {
       let subArray = array.slice(index, index + size)
       chunked.push(subArray);
       index += size;
    }

    return chunked;
}

console.log(chunk([1,2,3,4,5,6,7,8,9], 2))

module.exports = chunk;

// #1
// function chunk(array, size) {
//     let chunked = [];

//     for(let el of array) {
//         const last = chunked[chunked.length - 1];
        
//         if(!last || last.length === size) {
//             chunked.push([el])
//         } else {
//             last.push(el);
//         }
//     }

//     return chunked
// }

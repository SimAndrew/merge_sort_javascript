function mergeSort (arr) {
    if (arr.length < 2) return arr;
    var middleIndex = Math.floor(arr.length / 2);
    var firstHalf = arr.slice(0, middleIndex);
    var secondHalf = arr.slice(middleIndex);

    return merge (mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge (array1, array2) {
    var result = [];
    while (array1.length && array2.length){
        var minElem;
        if (array1[0] < array2[0]) minElem = array1.shift();
        else minElem = array2.shift();
        result.push(minElem);
    }
    if (array1.length) result = result.concat(array1);
    else result = result.concat(array2);
    return result;
}
console.log( mergeSort([6000, 34, 203, 3, 746, -200, 984, 198, 764, -10, 9, 1]) ); // [-200, -10,   1,    3, 9,  34, 198,  203, 746, 764, 984, 6000]

//Merge sort algorithm at each level we divide the array into two halves until we get bunch of single element arrays.
//Then, we start merging and sorting the smaller arrays in a series of steps which is the conquer portion of divide and conquer.

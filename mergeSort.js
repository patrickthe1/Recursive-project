//A function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.

function mergeSort(arr){
    if(arr.length < 2){
        return arr
    }

    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0,middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right)); 
}

//helper function to merge two sorted arrays
function merge(left,right){
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        }else{
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));    
}

const array1 = [6,8,10,3,6,17,100,99,0,1,2,4,5];
console.log(mergeSort(array1));
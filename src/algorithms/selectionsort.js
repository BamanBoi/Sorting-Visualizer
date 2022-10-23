import { swap } from "./swap";

export function selectionSort(array) {
    const animations = [];
    if (array.length <= 1) {
        return array;
    }
    selectionSortHelper(array, animations);
    //console.log(array);
    return animations;
}
function selectionSortHelper(mainArray, animations) {
    for (let i = 0; i < mainArray.length - 1; i++) {
        let min_index = i;
        for (let j = i + 1; j < mainArray.length; j++) {
            if (mainArray[min_index] > mainArray[j]) {
                min_index = j;
            }
        }
        animations.push([i, min_index, mainArray[i], mainArray[min_index]]);
        animations.push([i, min_index, mainArray[i], mainArray[min_index]]);
        mainArray = swap(mainArray, min_index, i);
    }
    
}
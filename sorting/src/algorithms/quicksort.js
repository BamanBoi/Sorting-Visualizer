import { swap } from "./swap";

export function quickSort(array){
    const animations=[];
    if(array.lenth<=1){
        return array;
    }
    quickSortHelper(0,array.length-1,array,animations);
    console.log(array);
    return animations;
}
function quickSortHelper(start,end,array,animations){
    if(start<end){
    let pivot=partition(start,end,array,animations);
    quickSortHelper(start,pivot-1,array,animations);
    quickSortHelper(pivot+1,end,array,animations);
    }
}
function partition(start,end,array,animations){
    let pivot=array[start];
    let low=start;
    let high=end;
    while(high>low){
        while(pivot>=array[low]){
            low++;
        }
        while(pivot<array[high]){
            high--;
        }
        if(low<high){
            animations.push([low,high,array[low],array[high]]);
            animations.push([low,high,array[low],array[high]]);
            swap(array,low,high);
        }
    }
    animations.push([high,start,array[high],array[start]]);
    animations.push([high,start,array[high],array[start]]);
    swap(array,high,start);
    return high;
}
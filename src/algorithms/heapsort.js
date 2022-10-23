import { swap } from "./swap";

export function heapSort(array){
    const animations=[];
    if(array.length<=1){
        return array;
    }
    heapSortHelper(array,animations,array.length);
    console.log(array);
    return animations;
}
function heapSortHelper(array,animations,n){
    build_max_heap(array,n,animations);
    for(let i=n-1;i>=1;i--){
        animations.push([0,i,array[0],array[i]]);
        animations.push([0,i,array[0],array[i]]);
       swap(array,0,i);
       heapify(array,0,i-1,animations);
    }
}
function heapify(array,i,n,animations){
    let largest=i;
    let left=2*i+1;
    let right=2*i+2;
    if(left<=n && array[left]>array[largest]){
        largest=left;
    }
    if(right<=n && array[right]>array[largest]){
        largest=right;
    }
    if (largest!==i)
    {
        animations.push([largest,i,array[largest],array[i]]);
        animations.push([largest,i,array[largest],array[i]]);
        swap(array,largest,i);
        heapify(array,largest,n,animations);
    }
}
function build_max_heap(array,n,animations){
    for (let i = n/2-1; i>=0; i--)
    {
        heapify(array,i,n,animations);
    }
}
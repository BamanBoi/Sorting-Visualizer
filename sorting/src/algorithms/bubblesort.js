import {swap} from './swap'
export  function bubbleSort(array) {
    const animations = [];
    if (array.length <= 1){return array;}
    //const auxiliaryArray = array.slice();
    bubbleSortHelper(array, animations);
    return animations;
  }
  function bubbleSortHelper(mainArray,animations){

    //let k=mainArray.length-1;
    for(let i=0;i<mainArray.length-1;i++){
        for(let j=0;j<mainArray.length-i-1;j++){
            if(mainArray[j]>mainArray[j+1]){
                animations.push([j,j+1,mainArray[j],mainArray[j+1]]);
                animations.push([j,j+1,mainArray[j],mainArray[j+1]]);
                mainArray=swap(mainArray,j,j+1);
            }
        }
        // animations.push([k,-1,mainArray[k],mainArray[k]]);
        // k--;
    }
  }

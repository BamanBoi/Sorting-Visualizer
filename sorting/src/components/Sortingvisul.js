import React from 'react'
import './Sortingvisul.css'
import { Slider } from '@material-ui/core';
//import {get5} from '../components/NavBar.js';
import { useState } from 'react';
import { getMergeSortAnimations } from '../algorithms/Mergesort.js';
import { bubbleSort } from '../algorithms/bubblesort';
import { insertionSort } from '../algorithms/insertionsort';
import { selectionSort } from '../algorithms/selectionsort';
import { heapSort } from '../algorithms/heapsort';
import { quickSort } from '../algorithms/quicksort';
//import { red } from '@material-ui/core/colors';
//import {  } from './NavBar';
const PRIMARY_COLOR = 'purple';
const SECONDARY_COLOR = 'yellow';
//const 5=get5();
//const fast=();
export default function Sortingvisul() {
  // const [val, setVal] = useState(5);
  // const updateVal = (e, data) => {
  //   setVal(data);
  //   //(val);
  //   console.log(val);
  // };
  const [val, setVal] = useState(30);
  const updateVal = (e, data) => {
    setVal(data);
    //(val);
    console.log(val);
  };
  const [wid, setWidth] = useState(2.5);
  const updateWidth = (e, data) => {
    setWidth(data);
    //(val);
    console.log(val);
  };
  const [array, setarray] = useState(resetarray());
  //const array=resetarray();
  // console.log("Hi");
  //console.log(5);
  //resetarray(array);
  const func = () => {
    setarray(resetarray());
  }
  const Mergesort = () => {
    const animations = getMergeSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('bars');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
       let color=SECONDARY_COLOR;
       if(i%3!==0){
         color=PRIMARY_COLOR;
       }
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * val);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, (i+1)* val);
      }
    }
    //setarray(animations);
  }
  const BubbleSort = () => {
    const animations = bubbleSort(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('bars');
      const [barOneIdx, barTwoIdx, oneHeight, twoHeight] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      if(i%2===0){
      setTimeout(() => {
        barOneStyle.height = `${twoHeight}px`;
        barTwoStyle.height = `${oneHeight}px`;
        barOneStyle.backgroundColor="yellow";
        barTwoStyle.backgroundColor="yellow";
      }, i * val);
    }
    else{
      setTimeout(() => {
        // barOneStyle.height = `${twoHeight}px`;
        // barTwoStyle.height = `${oneHeight}px`;
        barOneStyle.backgroundColor="purple";
        barTwoStyle.backgroundColor="purple";
      }, (i+1)* val);
    }
      // setTimeout(() => {
      //   // barOneStyle.height = `${twoHeight}px`;
      //   // barTwoStyle.height = `${oneHeight}px`;
      //   barOneStyle.backgroundColor="purple";
      //   barTwoStyle.backgroundColor="purple";
      // }, i * 100);
    }
  }
  const InsertionSort = () => {
    const animations = insertionSort(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('bars');
      const [barOneIdx, barTwoIdx, oneHeight, twoHeight] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      if (barOneIdx === barTwoIdx) {
        setTimeout(() => {
          barOneStyle.height = `${twoHeight}px`;
          //barOneStyle.backgroundColor="red";
          //barTwoStyle.height = `${oneHeight}px`;
        }, i * val);
      }
      else {
        if(i%2===0){
          setTimeout(() => {
            barOneStyle.height = `${twoHeight}px`;
            barTwoStyle.height = `${oneHeight}px`;
            barOneStyle.backgroundColor="yellow";
            barTwoStyle.backgroundColor="yellow";
          }, i * val);
        }
        else{
          setTimeout(() => {
            // barOneStyle.height = `${twoHeight}px`;
            // barTwoStyle.height = `${oneHeight}px`;
            barOneStyle.backgroundColor="purple";
            barTwoStyle.backgroundColor="purple";
          }, (i+1)* val);
        }
      }
    }
  }
  const SelectionSort = () => {
    const animations = selectionSort(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('bars');
      const [barOneIdx, barTwoIdx, oneHeight, twoHeight] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      if(i%2===0){
        setTimeout(() => {
          barOneStyle.height = `${twoHeight}px`;
          barTwoStyle.height = `${oneHeight}px`;
          barOneStyle.backgroundColor="yellow";
          barTwoStyle.backgroundColor="yellow";
        }, i * val);
      }
      else{
        setTimeout(() => {
          // barOneStyle.height = `${twoHeight}px`;
          // barTwoStyle.height = `${oneHeight}px`;
          barOneStyle.backgroundColor="purple";
          barTwoStyle.backgroundColor="purple";
        }, (i+1)* val);
      }
    }
  }
  const HeapSort = () => {
    const animations = heapSort(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('bars');
      const [barOneIdx, barTwoIdx, oneHeight, twoHeight] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      if(i%2===0){
        setTimeout(() => {
          barOneStyle.height = `${twoHeight}px`;
          barTwoStyle.height = `${oneHeight}px`;
          barOneStyle.backgroundColor="yellow";
          barTwoStyle.backgroundColor="yellow";
        }, i * val);
      }
      else{
        setTimeout(() => {
          // barOneStyle.height = `${twoHeight}px`;
          // barTwoStyle.height = `${oneHeight}px`;
          barOneStyle.backgroundColor="purple";
          barTwoStyle.backgroundColor="purple";
        }, (i+1)* val);
      }
    }
  }
  const QuickSort = () => {
    const animations = quickSort(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('bars');
      const [barOneIdx, barTwoIdx, oneHeight, twoHeight] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      if(i%2===0){
        setTimeout(() => {
          barOneStyle.height = `${twoHeight}px`;
          barTwoStyle.height = `${oneHeight}px`;
          barOneStyle.backgroundColor="yellow";
          barTwoStyle.backgroundColor="yellow";
        }, i * val);
      }
      else{
        setTimeout(() => {
          // barOneStyle.height = `${twoHeight}px`;
          // barTwoStyle.height = `${oneHeight}px`;
          barOneStyle.backgroundColor="purple";
          barTwoStyle.backgroundColor="purple";
        }, (i+1)* val);
      }
    }
  }

  return (
    <>
      <div>
        <h3>Slow Down Sorting(in ms)</h3>
        <div style={{ width: 200 }}>
          <Slider aria-label="Temperature"
            defaultValue={30}
            valueLabelDisplay="auto"
            step={2.5}
            marks
            onChange={updateVal}
            min={5}
            max={100} />
        </div>
        <h3>Width of bars</h3>
        <div style={{ width: 200 }}>
          <Slider aria-label="Temperature"
            defaultValue={2.5}
            valueLabelDisplay="auto"
            step={0.5}
            marks
            onChange={updateWidth}
            min={2.5}
            max={7.5} />
        </div>
      </div>
      <div className='container'>
        {array.map((value, id) => {
          return (
            <div key={id} className="bars" style={{ height: `${value}px`, width: `${wid}px` }}></div>
          )
        })}

        <div className="resetArray">
          <button onClick={func} className='button2'>Reset Array</button>
        </div>
        <div className='buttons'>
          <button onClick={Mergesort} className='button'>Merge Sort</button>
          <button onClick={BubbleSort} className='button'>Bubble Sort</button>
          <button onClick={InsertionSort} className='button'>Insertion Sort</button>
          <button onClick={SelectionSort} className='button'>Selection Sort</button>
          <button onClick={HeapSort} className='button'>Heap Sort</button>
          <button onClick={QuickSort} className='button'>Quick Sort</button>
        </div>
      </div>
    </>
  )
}
function randomIntFromIntervel(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function resetarray() {
  const array = [];
  for (let index = 0; index < 100; index++) {
    array.push(randomIntFromIntervel(5, 600));
  }
  //const arrayBars=document.getElementsByClassName('bars');
  // for(let i=0;i<array.length;i++){
  //    arrayBars[i].style.backgroundColor="purple";
  // }
  return array;
}


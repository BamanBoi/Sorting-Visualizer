import React from 'react'
import './Sortingvisul.css'
import { useState } from 'react';
import { getMergeSortAnimations } from '../algorithms/Mergesort.js';
import { bubbleSort } from '../algorithms/bubblesort';
import { insertionSort } from '../algorithms/insertionsort';
import { selectionSort } from '../algorithms/selectionsort';
import { heapSort } from '../algorithms/heapsort';
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';
export default function Sortingvisul() {
  const [array, setarray] = useState(resetarray());
  //const array=resetarray();
  console.log("Hi");
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
        const barOneStyle = arrayBars[barOneIdx];
        const barTwoStyle = arrayBars[barTwoIdx];
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 10);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 10);
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
      setTimeout(() => {
        barOneStyle.height = `${twoHeight}px`;
        barTwoStyle.height = `${oneHeight}px`;
      }, i * 5);

    }
  }
  const InsertionSort =() =>{
    const animations=insertionSort(array);
    for(let i=0;i<animations.length;i++){
      const arrayBars = document.getElementsByClassName('bars');
      const [barOneIdx, barTwoIdx, oneHeight, twoHeight] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      if(barOneIdx===barTwoIdx){
        setTimeout(() => {
          barOneStyle.height = `${twoHeight}px`;
          //barTwoStyle.height = `${oneHeight}px`;
        }, i * 5);
      }
      else{
      setTimeout(() => {
        barOneStyle.height = `${twoHeight}px`;
        barTwoStyle.height = `${oneHeight}px`;
      }, i * 5);
    }
    }
  }
  const SelectionSort = () =>{
    const animations=selectionSort(array);
    for(let i=0;i<animations.length;i++){
      const arrayBars = document.getElementsByClassName('bars');
      const [barOneIdx, barTwoIdx, oneHeight, twoHeight] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      setTimeout(() => {
        barOneStyle.height = `${twoHeight}px`;
        barTwoStyle.height = `${oneHeight}px`;
      }, i * 50);
    }
  }
  const HeapSort = () =>{
    const animations=heapSort(array);
    for(let i=0;i<animations.length;i++){
      const arrayBars = document.getElementsByClassName('bars');
      const [barOneIdx, barTwoIdx, oneHeight, twoHeight] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      setTimeout(() => {
        barOneStyle.height = `${twoHeight}px`;
        barTwoStyle.height = `${oneHeight}px`;
      }, i * 5);
    }
  }
  return (
    <>
      <div className='container'>
        {array.map((value, id) => {
          return (
            <div key={id} className="bars" style={{ height: `${value}px` }}></div>
          )
        })}

        <button onClick={func}>Reset Array</button>
        <button onClick={Mergesort}>Merge Sort</button>
        <button onClick={BubbleSort}>Bubble Sort</button>
        <button onClick={InsertionSort}>Insertion Sort</button>
        <button onClick={SelectionSort}>Selection Sort</button>
        <button onClick={HeapSort}>Heap Sort</button>
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
    array.push(randomIntFromIntervel(5, 700));
  }
  return array;
}


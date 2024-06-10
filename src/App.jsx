import { useState } from 'react'
import { DndContext, closestCorners } from '@dnd-kit/core';
import React from 'react'
import Column from './column/Column'
import "./App.css";

const App = () => {
  const [countries, setCountries] = useState([
  {id: 1, name: "Afghanistan"},
  {id: 2, name: "Albania"},
  {id: 3, name: "Morocco"},
  ]);

  
  return (
    <>
      <div className = "App">
        <h1>Countries</h1>        
      </div>
    </>

  )
};

export default App;
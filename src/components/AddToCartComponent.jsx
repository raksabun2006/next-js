"Use client"
import React, { useState } from 'react'

export default function AddToCartComponent() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1>Cart:{count} </h1>
        {/* <button onClick={ ()=>setCount={count+1} }>Add</button> */}
      
    </div>
  )
}

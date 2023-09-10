import { useState } from "react"

const ItemCount = ({initial, stock, onAdd})=>{
  const [counter,setcounter] = useState(initial)

  const handleAdd=()=>{
    if(counter<stock)
    setcounter(counter+1)
  }

  const handleSubstract=()=>{
    if (counter>initial)
    setcounter(counter-1)
  }
  const handleOnAdd = () => {
    onAdd(counter);
  }

  return (
    <div>
      <h2>Counter</h2>
      <button onClick={handleAdd}>+1</button>
      <label>
        <strong>{counter}</strong>
      </label>
      <button onClick={handleSubstract}>-1</button>
      <button onClick={handleOnAdd}>Agragar al carrito</button>
    </div>

)}
export default ItemCount

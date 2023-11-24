
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../Redux/counterSlice"

function Example (){
  const count = useSelector((state)=> state.counter.value)
  //useSelector PER LEGGERE
  const dispatch = useDispatch()
    //useDispatch PER MODIFICARE
    return(
        <div>
            <p>Conteggio:{count}</p>
            {/* <button onClick={()=>(setCount(count+1))}>Incrementa</button> */}
            <button aria-label="Increment value" onClick={()=>(dispatch(increment()))}>Incrementa+</button>
            {/* <button onClick={()=>(sessionStorage.removeItem("count"), setCount(0))}>Svuota Contatore</button> */}
            <button aria-label="Decrement value" onClick={()=>(dispatch(decrement()))}>Decrementa-</button>
        </div>
    )
}
export default Example
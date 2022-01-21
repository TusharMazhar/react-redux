import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions/index'

const App =()=> {
  const value = useSelector((state)=>state.changeTheNumber)
  const dispatch = useDispatch()
  return (
    <div className="App">
        <div className="title">InCrement and Decrement</div>
        <div>
          <button className="btn1" onClick={()=> dispatch(decrement(5)) }>Decrement</button>
          <span>{value}</span>
          <button className="btn2" onClick={()=> dispatch(increment(10)) }>Increment</button>
        </div>
    </div>
  )
}

export default App

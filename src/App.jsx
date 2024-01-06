import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button className='btn btn-primary'>Create</button>
    </>
  )
}

export default App

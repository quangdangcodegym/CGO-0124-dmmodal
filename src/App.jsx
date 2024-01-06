import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import CustomersPage from './components/customers/CustomersPage';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button className='btn btn-primary'>Create</button>
      <CustomersPage />
    </>
  )
}

export default App

import { Route, Routes } from 'react-router'
import Home from './component/Home'
import ProtfolioTwo from './component/ProtfolioTwo'
import ProtThree from './component/ProtThree'
import ProtFour from './component/ProtFour'
import ProtFive from './component/ProtFive'

function App() {

  return (
    <>
    <Routes >
      <Route path='/' element={<Home />} />
      <Route path='page2' element={<ProtfolioTwo />} />
      <Route path='page3' element={<ProtThree />} />
      <Route path='page4' element={<ProtFour />} />
      <Route path='page5' element={<ProtFive />} />



   </Routes>
    </>
  )
}

export default App

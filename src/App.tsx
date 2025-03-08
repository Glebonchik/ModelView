import Header from './components/Header'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import DragAndDrop from './components/DragAndDrop'
import ViewModel from './components/ViewModel'
import About from './components/About'
import Projects from './components/Projects'

const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DragAndDrop/>} />
          <Route path="/view-model" element={<ViewModel/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
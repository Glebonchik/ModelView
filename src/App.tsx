import Header from './components/Header'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import DragAndDrop from './components/DragAndDrop'
import ViewModel from './components/ViewModel'

const App = () => {
  return (
    <div >
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DragAndDrop/>} />
          <Route path="/view-model" element={<ViewModel/>} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
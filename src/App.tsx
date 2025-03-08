import Header from './components/Header'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import DragAndDrop from './components/DragAndDrop'
import ViewModel from './components/ViewModel'
import About from './components/About'
import Projects from './components/Projects'
import Profile from './components/Profile'
import { AvatarProvider } from './hooks/avatarContext'

const App = () => {
  return (
    <div >
      <BrowserRouter>
      <AvatarProvider>
        <Header />
        <Routes>
          <Route path="/" element={<DragAndDrop/>} />
          <Route path="/view-model" element={<ViewModel/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
      </AvatarProvider>
      </BrowserRouter>

    </div>
  )
}

export default App
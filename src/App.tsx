import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import SegmentationProject from './pages/segmentation-project'
import ExtensionProject from './pages/extension-project'
import TransformerProject from './pages/transformer-project'
import RPSAIProject from './pages/data_vis-project'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/segmentation-project' element={<SegmentationProject />} />
        <Route path='/extension-project' element={<ExtensionProject />} />
        <Route path='/transformer-project' element={<TransformerProject />} />
        <Route path='/datavis-project' element={<RPSAIProject />} />
      </Routes>
    </div>
  )
}

export default App

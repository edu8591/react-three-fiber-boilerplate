import './App.css'
import { Canvas } from '@react-three/fiber'
import Cube from './components/Cube'

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <Cube position={[-2, 0, 0]} name="left" wireframe />
      <Cube position={[0, 0, 0]} name="center" wireframe={false} />
      <Cube position={[2, 0, 0]} name="right" wireframe color={'red'} />
      <Cube position={[0, -2, 0]} name="bottom" wireframe />
      <Cube position={[0, 2, 0]} name="top" wireframe />
    </Canvas>
  )
}

export default App

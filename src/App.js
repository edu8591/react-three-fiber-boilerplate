import './App.css'
import { Canvas } from '@react-three/fiber'
import Cube from './components/Cube'

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <Cube position={[-2, 0, 0]} name="left" shadow={true} />
      <Cube position={[0, 0, 0]} name="center" />
      <Cube position={[2, 0, 0]} name="right" />
      <Cube position={[0, -2, 0]} name="bottom" />
      <Cube position={[0, 2, 0]} name="top" />
    </Canvas>
  )
}

export default App

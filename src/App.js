import './App.css'
import { Canvas } from '@react-three/fiber'
import Cube from './components/Cube'

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <Cube position={[-2, 0, 0]} name="left" wireframe args={[2, 0, 1]} />
      <Cube
        position={[0, 0, 0]}
        name="center"
        wireframe={false}
        args={[1, 1, 1]}
      />
      <Cube
        position={[2, 0, 0]}
        name="right"
        wireframe
        color={'red'}
        args={[2, 2, 1]}
      />
      <Cube position={[0, -2, 0]} name="bottom" wireframe args={[1, 1, 2]} />
      <Cube position={[0, 2, 0]} name="top" wireframe args={[1, 2, 2]} />
    </Canvas>
  )
}

export default App

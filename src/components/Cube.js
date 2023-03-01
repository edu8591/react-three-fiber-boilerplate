import React, { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'

function Cube({ position, name, wireframe, fog, color }) {
  const ref = useRef()
  useEffect(() => {
    console.log(ref)
  })

  return (
    <mesh position={position} name={name} ref={ref}>
      <boxGeometry />
      <meshBasicMaterial
        color={color || 0x00ff00}
        wireframe={wireframe}
        fog={fog}
      />
    </mesh>
  )
}

export default Cube

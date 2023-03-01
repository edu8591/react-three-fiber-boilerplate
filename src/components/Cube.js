import React, { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'

function Cube({ position, name, wireframe, fog, color, args }) {
  const [hovered, setHover] = useState(false)
  const [rotate, setRotate] = useState(false)

  const handleClick = () => setRotate(!rotate)
  const ref = useRef()
  useEffect(() => {
    console.log(ref)
  })
  useFrame((_state, delta) => {
    if (rotate) {
      ref.current.rotation.x += 1 * delta
      ref.current.rotation.y += 0.5 * delta
      // ref.current.position.y = Math.sin(state.clock.getElapsedTime()) //makes it move up and down
      // ref.current.rotation.z += 2 * delta
    }
  })
  return (
    <mesh
      position={position}
      name={name}
      ref={ref}
      onPointerLeave={() => setHover(false)}
      onPointerEnter={() => setHover(true)}
      onClick={handleClick}>
      <boxGeometry args={args} />
      <meshBasicMaterial
        color={hovered ? 'red' : color || 0x00ff00}
        wireframe={wireframe}
        fog={fog}
      />
    </mesh>
  )
}

export default Cube

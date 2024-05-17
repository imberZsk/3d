'use client'
import * as THREE from 'three'
import { useEffect } from 'react'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

export default function Home() {
  useEffect(() => {
    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 5

    const sphere = new THREE.SphereGeometry(16, 50, 50)
    const texture = new THREE.TextureLoader().load('/livingRoom.jpg')
    const material = new THREE.MeshBasicMaterial({ map: texture })
    const sphereMesh = new THREE.Mesh(sphere, material)
    sphere.scale(16, 16, -16)
    scene.add(sphereMesh)

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    const container = document.querySelector('#container')
    container?.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)

    controls.enableDamping = true // 启用阻尼效果
    controls.dampingFactor = 0.05 // 阻尼系数，取值范围为0到1

    controls.update()

    function animate() {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      container?.removeChild(renderer.domElement)
    }
  }, [])

  return <main id="container"></main>
}

'use client'
import * as THREE from 'three'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // 场景
    const scene = new THREE.Scene()
    // 相机
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )

    camera.position.z = 5

    scene.add(camera)

    // 物体
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    // 材质
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    // 网格
    const cube = new THREE.Mesh(geometry, material)

    scene.add(cube)
    // 渲染器
    const renderer = new THREE.WebGLRenderer()
    // 设置渲染器大小
    renderer.setSize(window.innerWidth, window.innerHeight)

    document.querySelector('#container')?.append(renderer.domElement)

    renderer.render(scene, camera)

    return () => {
      renderer.dispose()
    }
  }, [])
  return <main id="container"></main>
}

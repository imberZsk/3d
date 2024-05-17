'use client'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Page(): JSX.Element {
  useEffect(() => {
    const videos = document.querySelectorAll('video')
    videos.forEach((element) => {
      element.play()
    })
  }, [])
  return (
    <div className="flex justify-center flex-col lg:pt-40 pt-8 pb-10">
      <div className="text-4xl text-center mb-10">Demos</div>
      <div className="mx-auto grid grid-cols-1 font-bold px-7 lg:px-20 gap-4 lg:grid-cols-3">
        <div className="border border-gray-400 rounded-lg overflow-hidden">
          <Link href="/normal">
            <video src="/normal.mov" muted loop className="video"></video>
            <p className="p-4 text-lg">基础效果</p>
          </Link>
        </div>

        <div className="border border-gray-400 rounded-lg overflow-hidden">
          <Link href="/scene">
            <video src="/skybox.mov" muted loop></video>
            <p className="p-4 text-lg">场景贴图</p>
          </Link>
        </div>

        <div className="border border-gray-400 rounded-lg overflow-hidden">
          <Link href="/skybox">
            <video src="/skybox.mov" muted loop></video>
            <p className="p-4 text-lg">天空盒效果</p>
          </Link>
        </div>

        <div className="border border-gray-400 rounded-lg overflow-hidden">
          <Link href="/circleTexture">
            <video src="/circleTexture.mov" muted loop></video>
            <p className="p-4 text-lg">全景贴图效果</p>
          </Link>
        </div>

        <div className="border border-gray-400 rounded-lg overflow-hidden">
          <Link href="/earth" prefetch={false}>
            <video src="/earth.mov" muted loop></video>
            <p className="p-4 text-lg">3D地球</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

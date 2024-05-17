import Link from 'next/link'

export default function Page(): JSX.Element {
  return (
    <main className="mx-auto mt-[10vw] grid w-[40%] grid-cols-4 text-[24px] font-bold">
      <Link href="/normal">最简单的Demo</Link>
      <Link href="/scene">场景贴图</Link>
      <Link href="/skybox">天空盒效果</Link>
      <Link href="/circleTexture">全景贴图效果</Link>
    </main>
  )
}

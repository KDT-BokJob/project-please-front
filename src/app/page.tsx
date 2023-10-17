import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-[375] h-[815] bg-cyan-100">
      home
      <p className="text-[34] font-bold">Large Title</p>
      <p className="text-[23] font-semibold">Medium Title</p>
      <p className="text-[18] font-semibold">small Title</p>
      <p className="text-[15] font-semibold">subtitle</p>
      <p className="text-[16] font-bold">button bold</p>
      <p className="text-[12] font-semibold">button semibold</p>
      <p className="text-[13] font-medium">label medium</p>
      <p className="text-[10] font-normal">label regular</p>
    </main>
  )
}

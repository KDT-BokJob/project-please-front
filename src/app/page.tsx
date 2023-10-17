import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-[375px] h-[815px] bg-cyan-100">
      <p className="title-l">Large Title</p>
      <p className="title-m">Medium Title</p>
      <p className="title-s">small Title</p>
      <p className="headline">headline</p>
      <p className="btn-bold">button bold</p>
      <p className="btn-semi">button semibold</p>
      <p className="label-semi">label semibold</p>
      <p className="label-m">label medium</p>
      <p className="label-nomal">label regular</p>
      <p className="paragraph">paragraph</p>
    </main>
  )
}

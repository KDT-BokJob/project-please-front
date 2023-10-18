import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-[375px] h-[815px] bg-cyan-100">
      <Button variant="primary" label={'hello'}/>
      <Button label={'hello'}/>
      <Button variant="primary" label={'hello'}/>
      <Button variant="primary" label={'hello'}/>
      <Button variant="primary" label={'hello'}/>

    </main>
  )
}

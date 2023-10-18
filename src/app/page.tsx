import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-[375px] h-[815px] bg-cyan-100">
      <Button label={'hello'} />
      <Button variant="primary" label={'hello'} />
      <Button variant="secondary" label={'secondary'} />
      <Button variant="outline" label={'outline'} />
      <Button size="box" label={'box'} />

      <Button className="box-border" size="mini" variant="outline" label={'mini'} />
      <Button size="md" label={'hello'} />
    </main>
  )
}

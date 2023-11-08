'use client'
import React from 'react'
import * as Progress from '@radix-ui/react-progress'

interface ProgressBarProps {
  previous: number;
  current: number;
}

function progressBar({previous, current}:ProgressBarProps) {
  const [progress, setProgress] = React.useState(previous)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(current), 100)
    return () => clearTimeout(timer)
  }, [])
  return (
    <Progress.Root className="fixed top-0 left-0 w-full h-2 overflow-hidden rounded-sm bg-base-secondary-light" value={progress}>
      <Progress.Indicator className="w-full h-full bg-brand-primary-light [transition:transform_660ms_cubic-bezier(0.65,_0,_0.35,_1)]" style={{ transform: `translateX(-${100 - progress}%)` }} />
    </Progress.Root>
  )
}
export default progressBar

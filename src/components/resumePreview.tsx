'use client'
import React from 'react'

interface IResumePreivew {
  src: string
}

export default function ResumePreview({ src }: IResumePreivew) {
  return <>{src && <iframe src={`${src}#toolbar=0&navpanes=0&scrollbar=0`} loading={'lazy'} height={450}></iframe>}</>
}

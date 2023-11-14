'use client'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useCallback, useRef, useState } from 'react'
import { ChevronDown, ReloadIcon } from '@/lib/icons'

interface Settings {
  dots: boolean
  infinite: boolean
  slidesToShow: number
  slidesToScroll: number
  vertical: boolean
  verticalSwiping: boolean
}

export default function SlickSlider({
  children,
  total,
  options,
}: {
  children: React.ReactNode
  total: number
  options?: Settings
}) {
  const [count, setCount] = useState(options?.slidesToScroll ? options?.slidesToScroll : 1)
  const settings = Object.assign(
    {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      centerMode: true,
      centerPadding: '10px',
      afterChange: (index: number) => setCount(index + settings.slidesToScroll),
    },
    options,
  )
  const slickRef = useRef(null)
  const next = useCallback(() => {
    slickRef?.current?.slickNext()
  }, [])
  return (
    <>
      <Slider ref={slickRef} {...settings}>
        {children}
      </Slider>
      {options?.dots ? (
        // 마지막 공고에 도달하면 Reload 아이콘, 아니면 ArrowDown 아이콘 노출
        count !== total ? (
          <div className="animate-bounce m-auto fixed bottom-16 right-1/2 cursor-pointer" onClick={next}>
            <ChevronDown size="20" />
          </div>
        ) : (
          <div className="m-auto fixed bottom-16 right-1/2 cursor-pointer">
            <ReloadIcon size="20" />
          </div>
        )
      ) : (
        <span className="flex justify-end">
          <p className="text-[10px] font-semibold text-brand-primary-light after:content-['/'] after:mx-1">{count}</p>
          <p className="text-[10px] font-semibold">{total}</p>
        </span>
      )}
    </>
  )
}

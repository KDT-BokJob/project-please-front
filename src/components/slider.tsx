'use client'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useState } from 'react'

export default function SlickSlider({ children, total }: { children: React.ReactNode; total: number }) {
  const [count, setCount] = useState(1)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '10px',
    afterChange: (index: number) => setCount(index + 1),
  }
  return (
    <>
      <Slider {...settings}>{children}</Slider>
      <span className="flex justify-end">
        <p className="text-[10px] font-semibold text-brand-primary-light after:content-['/'] after:mx-1">{count}</p>
        <p className="text-[10px] font-semibold">{total}</p>
      </span>
    </>
  )
}

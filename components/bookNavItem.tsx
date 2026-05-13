'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

interface BookNavItemProps {
  href: string
  src: string
  srcHover: string
  alt: string
}

export default function BookNavItem({ href, src, srcHover, alt }: BookNavItemProps) {
  const [isHover, setIsHover] = useState(false)

  return (
    <Link href={href}>
      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="relative transition-all active:translate-y-1"
      >
        <Image
          src={isHover ? srcHover : src}
          alt={alt}
          width={64}
          height={64}
          className="transition-transform hover:scale-110"
          style={{ imageRendering: 'pixelated' }}
        />
      </button>
    </Link>
  )
}
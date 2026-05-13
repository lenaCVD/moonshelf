'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import type { Book } from '@/data/books'

interface BookCardProps {
  book: Book
}

export default function BookCard({ book }: BookCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/shelf/${book.slug}`}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex flex-col items-center transition-all duration-300 hover:-translate-y-2"
      >

        {/* Portada */}
        <Image
          src={isHovered ? `/img/books/${book.slug}_hover.png` : book.cover}
          alt={book.title}
          width={64}
          height={96}
          className="transition-all duration-300"
          style={{ imageRendering: 'pixelated' }}
        />

        {/* Título en hover */}
        <span className="
          absolute -bottom-6
          text-xs text-foreground
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          whitespace-nowrap
        ">
          {book.title}
        </span>

        {/* Punto de estado */}
        <div className={`
          absolute top-0 right-0 w-2 h-2
          ${book.status === 'done' ? 'bg-green-400' :
            book.status === 'reading' ? 'bg-yellow-400' :
            'bg-purple-400'}
        `}/>

      </div>
    </Link>
  )
}
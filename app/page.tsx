'use client'

import Image from "next/image"
import { useState } from 'react'
import { books } from '@/data/books'
import type { Book } from '@/data/books'
import BookCard from '@/components/BookCard'
import BookNavItem from '@/components/bookNavItem'

export default function Home() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)

  return (
    <main className="flex h-screen p-4 gap-2">

      {/* Izquierda — Estantería */}
      <div className="flex-1 border border-border rounded-lg overflow-y-auto p-4">
        {books.map(book => (
          <BookCard
            key={book.slug}
            book={book}
            onSelect={() => setSelectedBook(book)}
          />
        ))}
      </div>

      {/* Derecha */}
      <div className="w-2/5 flex flex-col gap-2">

        {/* Logo */}
        <div className="flex-1 border border-border rounded-lg flex flex-col items-center justify-center gap-4">
          <h1 className="text-6xl">Moonshelf</h1>
          <Image
            src="/img/moonshelf.png"
            width={200}
            height={200}
            alt="Moonshelf Logo"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>

        {/* Info del libro */}
        <div className="flex-1 border border-border rounded-lg flex items-center justify-center p-6">
          {selectedBook ? (
            <div className="flex flex-col gap-3">
              <p className="text-lg font-bold">{selectedBook.title}</p>
              <p className="text-sm text-muted">{selectedBook.author}</p>
              <p className="text-sm">{selectedBook.description}</p>
              <p className="text-xs text-muted">{selectedBook.genre}</p>
            </div>
          ) : (
            <p className="text-muted text-sm">Selecciona un libro</p>
          )}
        </div>

        {/* Botones libro */}
        <div className="h-24 border border-border rounded-lg flex items-center justify-around px-4 overflow-visible">
          <BookNavItem href="/" src="/img/books/book_1.png" srcHover="/img/books/book_1_hover.png" alt="Inicio" />
          <BookNavItem href="/about" src="/img/books/book_1.png" srcHover="/img/books/book_1_hover.png" alt="About" />
          <BookNavItem href="/shelf" src="/img/books/book_1.png" srcHover="/img/books/book_1_hover.png" alt="Shelf" />
        </div>

      </div>

    </main>
  )
}
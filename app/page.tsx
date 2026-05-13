import Image from "next/image";
import { books } from '@/data/books'
import BookCard from '@/components/BookCard'
import BookNavItem from '@/components/bookNavItem'

export default function Home() {
  return (
    <main className="flex h-screen p-4 gap-2">

      {/* Izquierda — Estantería con scroll */}
      <div className="flex-1 border border-border rounded-lg overflow-y-auto p-4">
        {books.map(book => (
          <BookCard key={book.slug} book={book} />
        ))}
      </div>

      {/* Derecha — fija */}
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

        {/* Descripción */}
        <div className="flex-1 border border-border rounded-lg flex items-center justify-center">
          description
        </div>

        {/* Botones libro */}
        <div className="h-24 border border-border rounded-lg flex">
          <BookNavItem href="/about" src="/img/books/book_1.png" srcHover="/img/books/book_1_hover.png" alt="About" />
          <BookNavItem href="/shelf" src="/img/books/book_1.png" srcHover="/img/books/book_1_hover.png" alt="Shelf" />
        </div>

      </div>

    </main>
  );
}
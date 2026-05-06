import BookNavItem from './bookNavItem'

export default function Bottomnav() {
    return (
        <div className="fixed bottom-0 
                        left-0 right-0 
                        h-16 bg-surface 
                        flex flex-row 
                        items-center 
                        justify-around 
                        px-4 
                        border-t 
                        border-border"
        >

        <BookNavItem href="/" src="/img/books/book_1.png" srcHover="/img/books/book_1_hover.png" alt="Landing Page" />
        <BookNavItem href="/about" src="/img/books/book_1.png" srcHover="/img/books/book_1_hover.png" alt="Landing Page" />
        <BookNavItem href="/shelf" src="/img/books/book_1.png" srcHover="/img/books/book_1_hover.png" alt="Landing Page" />

        </div>
    )
}
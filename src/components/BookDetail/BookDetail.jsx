import { useParams } from 'react-router-dom'

const BookDetail = ({ results }) => {
    const { id } = useParams()

    const book = results.find((result) => {
        const bookId = result.key.replace("/works/", "")
        return bookId === id
    })

    if (!book) return <p>Loading...</p>

    return (
        <>
            <h2>Book Detail</h2>
            <h4>{book.title}</h4>
        </>
    )
}

export default BookDetail
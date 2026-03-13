import { useNavigate, useParams } from 'react-router-dom'

const BookDetail = ({ results, onConfirm }) => {
    const { id } = useParams()
    const navigate = useNavigate()

    const book = results.find((result) => {
        const bookId = result.key.replace("/works/", "")
        return bookId === id
    })
    if (!book) return <p>Loading...</p>

    const backButton = () => {
        navigate(-1)
    } 

    const confirmButton = (book) => {
        onConfirm(book)
    }

    return (
        <>
            <h2>Book Detail</h2>
            <p>Title: {book.title}</p>
            <p>Author: {book.author_name?.[0]}</p>
            <p>Language: {book.language?.slice(0,5).join(", ")}</p>
            <p>First Publish Year: {book.first_publish_year}</p>
            <p>Edition: {book.edition_count}</p>
            {book.cover_i && (
            <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title}/>
            )}
            <button onClick={backButton}>Back</button>
            <button onClick={() => confirmButton(book)}>Confirm</button>       
        </>
    )
}

export default BookDetail
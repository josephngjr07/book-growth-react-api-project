
const BookLibrary = ({ library }) => {


    return (
        <>
        <h4>Book Library</h4>
        <ul>
            {library.map((book) => (
              <li key={book.cover_i}>
                <p>Title: {book.title}</p>
                <p>Author: {book.author_name}</p>
                <p>Img</p>
                <p>Status: </p>
                <p>Notes: </p>
                {/* <button onClick={handleDelete}>Delete</button> */}
              </li>  
            ))}
        </ul>
        </>
    )
}

export default BookLibrary
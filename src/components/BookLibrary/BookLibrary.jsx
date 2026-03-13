
const BookLibrary = ({ library, onDelete }) => {

    return (
        <>
          <h4>Book Library</h4>
          {library.length === 0 && <p>Add a Book to the library</p>}
          <ul>
              {library.map((book) => {

                return(
                <li key={book.id}>
                  <p>Title: {book?.title}</p>
                  <p>Author: {book?.author_name?.[0]}</p>
                  {book.cover_i && (
                    <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title}/>
                  )}
                  <p>Status: {book.status}</p>
                  <p>Notes: {book.notes}</p>
                  <button onClick={() => onDelete(book)}>Delete</button>
                </li>  
                )
              })}
          </ul>
        </>
    )
}

export default BookLibrary
import { Link } from 'react-router-dom'

const ResultList = ({ results }) => {

    
    return (
        <>
            <ul>
                {results.map((result) => {
                    const bookId = result.key.replace("/works/", "")
                    
                    return(
                    <li key={bookId}>
                        <Link to={`/book/${bookId}`}>
                            <p>Title: {result.title}</p>
                            <p>Author: {result.author_name}</p>
                        </Link>
                    </li>
                    )
                })}
            </ul>
        </>
    )
}

export default ResultList
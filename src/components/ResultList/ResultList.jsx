
const ResultList = ({ results }) => {
    return (
        <>
            <h4>Result List</h4>
            {console.log(results)}
            <ul>
                {results.map((result) => (
                    <li key={result.cover_i}>
                        <p>Title: {result.title}</p>
                        <p>Author: {result.author_name[0]}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ResultList
import ResultList from "../components/ResultList/ResultList"
import SaveForm from "../components/SaveForm/SaveForm"
import SearchBar from "../components/SearchBar/SearchBar"

const BookSearch = ({ results, onSearch }) => {
     
    return (
        <>
            <h4>Book Search Page</h4>
            <SearchBar onSearch={onSearch}/>
            <ResultList results={results}/>
            <SaveForm />
        </>
    )
}

export default BookSearch
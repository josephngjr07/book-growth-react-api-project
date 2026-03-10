import ResultList from "../components/ResultList/ResultList"
import SaveForm from "../components/SaveForm/SaveForm"
import SearchBar from "../components/SearchBar/SearchBar"

const BookSearch = ({ results, onConfirm }) => {
    return (
        <>
            <h4>Book Search Page</h4>
            <SearchBar onConfirm={onConfirm}/>
            <ResultList results={results}/>
            <SaveForm />
        </>
    )
}

export default BookSearch
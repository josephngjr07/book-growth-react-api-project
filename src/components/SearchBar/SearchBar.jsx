import { useState } from 'react'

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("")

    const handleChange = (event) => {
        setQuery(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onSearch(query)
     
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Book Search: </label>
            <input
                type="text"
                value={query}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default SearchBar
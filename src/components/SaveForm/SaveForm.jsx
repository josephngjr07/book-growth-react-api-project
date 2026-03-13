import { useState } from "react"

const SaveForm = ({ selectedBook, onAdd }) => {
    const book = selectedBook

    const [formData, setFormData] = useState({
        notes: "",
        status: "Want to Read"
    })

    const handleChange = (event) => {
        const { name, value} = event.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const savedBook = {
            ...selectedBook,
            ...formData
        }
             
        onAdd(savedBook)

        setFormData({
            notes: "",
            status: "Want to Read"
        })
        
    }

    if (!selectedBook) return <p>No Book Selected</p>

    return (
        <>
            <form onSubmit={handleSubmit}>
                <p>Title: {book?.title}</p>
                <p>Author: {book?.author_name?.[0]}</p> 
                <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title}/>
                <label htmlFor="Status">Status: </label>
                <select 
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    >
                    <option value="Want to Read">Want to Read</option>
                    <option value="Currently Reading">Currently Reading</option>
                    <option value="Paused">Paused</option>
                    <option value="Finished">Finished</option>
                </select>
                <label htmlFor="Notes">Notes: </label>
                <input
                    name="notes"
                    type="text"
                    value={formData.notes}
                    onChange={handleChange}
                />
                <button type="submit">Add</button>
            </form>
       </>
    )
}

export default SaveForm
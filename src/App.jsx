import { Routes, Route, useNavigate } from "react-router-dom"
import BookLibrary from "./components/BookLibrary/BookLibrary"
import SaveForm from "./components/SaveForm/SaveForm"
import BookSearch from "./pages/BookSearch"
import { getData } from "./service/BookService"
import { useState } from "react"
import NavBar from "./components/NavBar/NavBar"
import BookDetail from "./components/BookDetail/BookDetail"

const App = () => {

  const navigate = useNavigate()
  const [results, setResults] = useState([])
  const [library, setLibrary] = useState([])
  const [selectedBook, setSelectedBook] = useState()


  const handleSearch = async (query) => {
    const data = await getData(query)
    setResults(data)
  }

  const handleConfirm = (book) => {
    setSelectedBook(book)
    navigate("/save")
  }

  const handleAdd = (savedBook) => {

    setLibrary (
      [...library,
      savedBook]
    )
    navigate("/library")
  }

  const handleDelete = (book) => {
    const filteredBooks = library.filter((item) => {
      return book.key !== item.key
    })

    setLibrary (
      filteredBooks
    )
  }
  return (
    <>
      <NavBar />
      <h1>BookGrowth</h1>
      <Routes>
        <Route path="/" element={<BookSearch results={results} onSearch={handleSearch}/>}/>
        <Route path="/library" element={<BookLibrary library={library} onDelete={handleDelete}/>} />
        <Route path="/book/:id" element={<BookDetail results={results} onConfirm={handleConfirm}/>}/>
        <Route path="/save" element={<SaveForm selectedBook={selectedBook} onAdd={handleAdd}/>}/>
      </Routes>
    </>
  )
}

export default App
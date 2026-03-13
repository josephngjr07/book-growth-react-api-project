import { Routes, Route, useNavigate } from "react-router-dom"
import BookLibrary from "./components/BookLibrary/BookLibrary"
import SaveForm from "./components/SaveForm/SaveForm"
import BookSearch from "./pages/BookSearch"
import { useState, useEffect } from "react"
import NavBar from "./components/NavBar/NavBar"
import BookDetail from "./components/BookDetail/BookDetail"
import { getData } from "./service/BookService"
import { fetchLibrary } from "./service/BookService"
import { addBook } from "./service/BookService"
import { deleteBook } from "./service/BookService"

const App = () => {

  const navigate = useNavigate()
  const [results, setResults] = useState([])
  const [library, setLibrary] = useState([])
  const [selectedBook, setSelectedBook] = useState()

  useEffect(() => {
    const loadBooks = async () => {
      const data = await fetchLibrary()
      setLibrary(data)
    }
    loadBooks()
  }, [])

  const handleSearch = async (query) => {
    const data = await getData(query)
    setResults(data)
  }

  const handleConfirm = (book) => {
    setSelectedBook(book)
    navigate("/save")
  }

  const handleAdd = async (savedBook) => {
    const newBook = await addBook(savedBook)
    
    setLibrary (
      [...library,
      newBook]
    )
    navigate("/library")
  }

  const handleDelete = async (book) => {
    await deleteBook(book.id)

    const filteredBooks = library.filter((item) => {
      return book.id !== item.id
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
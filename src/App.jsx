import { Routes, Route } from "react-router-dom"
import BookLibrary from "./components/BookLibrary/BookLibrary"
import SaveForm from "./components/SaveForm/SaveForm"
import BookSearch from "./pages/BookSearch"
import { getData } from "./service/BookService"
import { useState } from "react"
import NavBar from "./components/NavBar/NavBar"

const App = () => {

  const [results, setResults] = useState([{
  title: "Atomic Habits",
  author_name: ["James Clear"],
  cover_i: 240727
}])
  const [library, setLibrary] = useState([{
  title: "Atomic Habits",
  author_name: ["James Clear"],
  cover_i: 240727
}])

  const confirmResults = (query) => {
    console.log('confirmed')
    setResults(query)
  }

  return (
    <>
      <NavBar />
      <h1>BookGrowth</h1>
      <Routes>
        <Route path="/" element={<BookSearch results={results} onConfirm={confirmResults}/>}/>
        <Route path="/library" element={<BookLibrary library={library}/>} />
      </Routes>
    <button onClick={getData}>Test API</button>
    </>
  )
}

export default App
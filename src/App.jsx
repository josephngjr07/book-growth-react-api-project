import BookLibrary from "./components/BookLibrary/BookLibrary"
import SaveForm from "./components/SaveForm/SaveForm"
import BookSearch from "./pages/BookSearch"
import { getData } from "./service/BookService"
import { useState } from "react"

const App = () => {

  const [searchResult, setSearchResult] = useState({})
  const [library, setLibrary] = useState([{
  title: "Atomic Habits",
  author_name: ["James Clear"],
  cover_i: 240727
}])



  return (
    <>
      <h1>BookGrowth</h1>
      <BookSearch />
      <SaveForm />
      <BookLibrary library={library}/>
      <button onClick={getData}>Test API</button>
    </>
  )
}

export default App
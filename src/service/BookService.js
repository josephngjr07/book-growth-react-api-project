

async function getData(query) {
  const url = `https://openlibrary.org/search.json?q=${query}`
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result.docs[0])
    return result.docs;
  } catch (error) {
    console.error(error.message);
  }
}

export { getData }
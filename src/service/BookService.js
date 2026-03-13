

async function getData(query) {
  const url = `https://openlibrary.org/search.json?q=${query}`
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result.docs;
  } catch (error) {
    console.error(error.message);
  }
}

export { getData }

async function fetchLibrary() {
  const url = "https://api.airtable.com/v0/appaTMo2RETi2GRTY/Books";
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLETOKEN}`
      }
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
      return data.records.map((record) => ({
      id: record.id,
      ...record.fields
    }))

  } catch (error) {
    console.error(error.message);
  }
}

export { fetchLibrary }

async function addBook(book) {
  const url = "https://api.airtable.com/v0/appaTMo2RETi2GRTY/Books";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLETOKEN}`
      },
      body: JSON.stringify({
        fields: {
          title: book.title,
          author_name: book.author_name?.[0],
          status: book.status,
          notes: book.notes,
          cover_i: book.cover_i,
        }
      })
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
      return {
      id: data.id,
      ...data.fields
    }

  } catch (error) {
    console.error(error.message);
  }
}

export { addBook }

async function deleteBook(id) {
  const url = `https://api.airtable.com/v0/appaTMo2RETi2GRTY/Books/${id}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLETOKEN}`
      },
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return id
  } catch (error) {
    console.error(error.message);
  }
}

export { deleteBook }


async function getData(query) {
  const url = `https://openlibrary.org/search.json?q=${query}`
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result)
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

fetchLibrary()
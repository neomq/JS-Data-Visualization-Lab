// use axios to retrieve content of data.json as a JavaScript object
// and then return the array that is stored with the data property

async function loadData() {
    const response = await axios.get('data.json');
    return response.data.yearly;
}

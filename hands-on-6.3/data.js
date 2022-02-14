async function loadData1() {
    const response = await axios.get('meteors.json');
    return response.data;
}

async function loadData2() {
    const response = await axios.get('sightings.json');
    return response.data;
}
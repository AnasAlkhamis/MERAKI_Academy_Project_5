
async function getData() {
  return Promise.resolve('data');
}

async function getMoreData(data) {
  return Promise.resolve(data + 'more data');
}

async function getAll() {
  const data = await getData();
  const moreData = await getMoreData(data);
  return `All the data: ${data}, ${moreData}`;
}

getAll().then((all) => {
  console.log('all the data')
})

app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});
app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});
app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});
app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});
app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

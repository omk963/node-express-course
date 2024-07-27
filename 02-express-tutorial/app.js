const express = require('express');
const app = express();
const { products, people } = require('./data');
const peopleRouter = require('./routes and controllers/routes/people');

const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
}

app.use(logger)

app.use(express.static('./public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1/people", peopleRouter);

app.get('/api/v1/test', (req, res) => {
  res.json({ message: 'It Worked!' });
})

// app.get('/api/v1/people', (req, res) => {
//   res.json(people);
// })

// app.post('/api/v1/people', (req, res) => {
//   const { name } = req.body;
//   if (name) {
//     people.push({ id: people.length + 1, name });
//     res.status(201).json({ success: true, name });
//   }
//   else {
//     res.status(400).json({ success: false, message: "Please provide a name" });
//   }
// })

app.get('/api/v1/products', (req, res) => {
  res.json(products);
})

app.get('/api/v1/products/:productID', (req, res) => {
  const idToFind = parseInt(req.params.productID);
  const product = products.find((p) => p.id === idToFind);
  if (!product) {
    res.status(404).json({ message: 'That product was not found.' });
  }
  res.status(200).json(product);
})

app.get('/api/v1/query', (req, res) => {
  const { search, limit } = req.query
  let sortedProducts = [...products]

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    return res.status(200).json({ sucess: true, data: [] })
  }
  res.status(200).json(sortedProducts)
})

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(3000, () => {
  console.log('server is listening on port 3000....')
})
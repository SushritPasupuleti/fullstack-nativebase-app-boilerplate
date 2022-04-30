const express = require('express')
const app = express()
const port = process.env.PORT || 5000

//normally you'd add some middleware here to check
//for authentication, etc.
// and you'd also want to make folders like:
// routes, models, handlers, etc.

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port} 🚀`)
})
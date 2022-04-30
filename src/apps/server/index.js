const axios = require('axios').default;
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

//normally you'd add some middleware here to check
//for authentication, etc.
// and you'd also want to make folders like:
// routes, models, handlers, etc.
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/posts', async (req, res) => {

    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch(ex => {
            console.log("ex:", ex);
            res.status(500).json({
                error: ex.message
            });
        })
})

app.get('/posts/:id', async (req, res) => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`)
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch(ex => {
            console.log("ex:", ex);
            res.status(500).json({
                error: ex.message
            });
        })
})

app.listen(port, () => {
    console.log(`Server listening on port ${port} 🚀`)
})
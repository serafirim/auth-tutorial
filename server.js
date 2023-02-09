const express = require('express')
const cors = require('cors') // add as a middleware
const app = express()

// #region --------------------[ Uses ]--------------------------------------------------------
app.use(cors())
// #endregion ---------------------------------------------------------------------------------

app.use('/login', (req, res) => {
    res.send({
        token: 'test123'
    })
})

// Run server
app.listen(8080, () => console.log('API is running on http://localhost:8080/login'))
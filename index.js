const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('thamnoon non'))
app.get('/Adout', (req, res) => res.send('หน้า เกี่ยวกับ'))
app.get('/contact', (req, res) => res.send('หน้า ติอต่อเรา'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
 
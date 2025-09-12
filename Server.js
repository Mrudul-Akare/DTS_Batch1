import express from 'express';
import mysql from 'mysql2';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MrudulAkare@2503',
    database: 'mcart'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

app.get('/products', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/cart', (req, res) => {
    db.query(`SELECT cart.cartId, products.* 
              FROM cart JOIN products ON cart.prodId = products.prodId`, 
              (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.put('/products/:id', (req, res) => {
    const { price } = req.body;
    db.query('UPDATE products SET prodPrice =? WHERE prodId = ?', 
             [price, req.params.id], (err) => {
        if (err) throw err;
        res.send('Product price updated');
    });
});

app.post('/cart', (req, res) => {
    const { prodId } = req.body;
    db.query('INSERT INTO cart (prodId) VALUES (?)',[prodId],(err)=>{
        if (err) throw err;
        res.send('Product added to cart');
    });
});

app.delete("/products/:id",(req, res)=>{
    const { id } = req.params;
    res.send(`Product ${id} deleted`);
});

app.listen(3000, () => console.log('Server running on port 3000'));

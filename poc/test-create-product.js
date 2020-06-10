const mysql = require('mysql2/promise')



const run = async () => {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'cat-products'
        })
        try {
            const [results] = await connection.query('insert into products (product, price) values (?, ?)', ['Ipad', '3999'])
            await connection.query('insert into categories_products (product_id, category_id) values (?, ?)',[results.insertId, 1])
            console.log(results)
        } catch (err) {
            console.log(err)
        }
    } catch (err) {
        console.log(err)
    }
}
run()
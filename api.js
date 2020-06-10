const db = require('./db')
const categories = require('./categories')(db)
const products = require('./products')(db)

const test = async() => {
   // await categories.create(['eletrodoméstico']) parei 4:00
    //await categories.remove(4)
    //await categories.update(1, ['eletronicos'])
    //const cats = await categories.findAll()
    //console.log(cats)
    //await products.create(['Atari', '2999'])
    //await products.addImage(2, ['imag test', 'url'])
    //const prods = await products.findAllByCategory(1)
    await products.updateCategories(2, [8])
    //const prods = await products.findAllPaginated()
    //console.log(prods)
}
test()
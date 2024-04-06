const connection = require ('./connection')

const allItems = async () => {
    const [query] = await connection.execute('SELECT * FROM tabla');
    return query;
}

module.exports = allItems;
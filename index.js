require('dotenv').config({ path: '../.env' })

const { createTable, listTables } = require('./dynamodb')

async function main() {
    const { TableNames } = await listTables()
    console.log(TableNames)
}

main()
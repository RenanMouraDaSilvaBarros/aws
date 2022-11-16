const { createTable } = require('./dynamodb')

async function main() {

    const table = await createTable({
        name: 'test', attributes: [
            {
                AttributeName: 'id',
                AttributeType: 'N'
            }
        ], keys: [{
            AttributeName: 'id',
            KeyType: 'HASH'
        },]
    })

    console.log(table)
}

main()
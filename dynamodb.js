const { DynamoDb } = require('./aws')

//crud
//create table if existe
//delete table

const createTable = ({ name, attributes, keys, configs }) => {

    //input
    // {
    //     name: 'test2', attributes: [
    //         {
    //             AttributeName: 'id',
    //             AttributeType: 'N'
    //         }
    //     ], keys: [{
    //         AttributeName: 'id',
    //         KeyType: 'HASH'
    //     },]
    // }
    const params = {
        AttributeDefinitions: attributes,
        KeySchema: keys,
        TableName: name,
        ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1
        },
        StreamSpecification: {
            StreamEnabled: false
        }
    };

    try {
        return DynamoDb.createTable(params).promise()
    } catch (error) {
        console.log(error)
    }
}

const listTables = () => {
    //return
    //const { TableNames } = await listTables()

    try {
        return DynamoDb.listTables({}).promise();
    } catch (error) {
        console.log(error)
    }

}

module.exports = { createTable, listTables }
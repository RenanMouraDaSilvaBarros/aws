const { AWS } = require('./aws')

const local = new AWS.Endpoint('http://localhost:8000');

const dynamodb = new AWS.DynamoDB({endpoint:local })

const createTable = ({ name, attributes, keys, configs }) => {

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
        return dynamodb.createTable(params).promise()
    } catch (error) {
        console.log(error)
    }
}

module.exports = { createTable }
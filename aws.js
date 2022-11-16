const AWS = require('aws-sdk')

AWS.config.update({ region: process.env.REGION });

const dynamoDbLocal = new AWS.Endpoint(process.env.DYNAMODB_LOCAL);

const DynamoDb = new AWS.DynamoDB({ endpoint: dynamoDbLocal })

module.exports = { AWS, DynamoDb }

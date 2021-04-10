const AWS = require('aws-sdk');
const uuidv4 = require('uuid/v4');

class DynamoDBProvider {

    constructor() {
        this.DYNAMODB = new AWS.DynamoDB.DocumentClient();
    }

    newItemInDDB(tableName, keyObject, data) {
        let newPayload = {
            TableName: tableName,
            Key: keyObject,
            Item: {
                id: uuidv4(),
                email: data.email,
                name: data.name,
                city: data.city,
            }
        };
        return this.DYNAMODB.put(newPayload).promise()
    }
}

module.exports = { DynamoDBProvider };

const serverless = require('serverless-http')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const AWS = require('aws-sdk')

const AUTOR_TABLE = 'dev-autors'

const dynamoDb = new AWS.DynamoDB.DocumentClient()

app.use(bodyParser.json({ strict: false }))

app.get('/', (req, res) => {
    const params = {
        TableName: AUTOR_TABLE,
    }

    dynamoDb.scan(params, (error, result) => {
        if (error) {
            res.status(400).json({ error: 'Error retrieving' })
        }

        const { Items: autor } = result

        res.json({ autor })
    })
})

app.post('/', (req, res) => {
    const { email, name, city } = req.body
  
    const id = uuid.v4()
  
    const params = {
      TableName: AUTOR_TABLE,
      Item: {
        id,
        email,
        name,
        city,
      },
    }
  
    dynamoDb.put(params, error => {
      if (error) {
        console.error('Error creating: ', error)
        res.status(400).json({ error: 'Could not create' })
      }
  
      res.json({ id, name, email, city, status: 200})
    })
  })



module.exports.dynamo = serverless(app)
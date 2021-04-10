const DynamoDBProvider = require("../commons/AWS/DynamoDBProvider").DynamoDBProvider;
const AUTOR_TABLE = 'dev-autors';

class Service {

    constructor() {
        this.dao = new DynamoDBProvider();
    }

    async initialize() {
    }

    /**
     * Retrives Autor
     * @param {*} event
     * @param {*} context
     */
    async getAutor(event, context) {
        let Autor = { status: 200 };
        return Autor;
    }

    /**
     * Retrives Autor
     * @param {*} event
     * @param {*} context
     */
    async postAutor(event, context) {
        console.debug("event body", event.body);

        const keyObject = {
            email: event.body.email,
            city: event.body.city,
            name: event.body.name
        };

        console.log(keyObject);
        const res = await this.dao.newItemInDDB(AUTOR_TABLE, keyObject, event.body);
        console.log(res);
        let Autor = { status: 200 };
        return Autor;
    }
}

exports.Service = Service;
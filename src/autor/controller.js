const { Service } = require('./Service');

let {
    SUCCESS,
    INTERNAL_ERROR,
    INTERNAL_ERROR_DATA 
} = require('../commons/customResponse');

class Controller {

    /**
     * Initialize global objects
     */
    constructor() {
        this.service = new Service();
    }

    async initialize() {
        await this.service.initialize();
    }

    /**
     * Retrives 
     * @param {*} event
     * @param {*} context
     */
    async get(event, context) {
        let response = {};
        let status = {};
        console.debug("event", event);
        try {
            status = SUCCESS;
            let autor = await this.service.getAutor(event, context);
            //status.body = ;
            response = autor;
            console.debug("Success", response);
        } catch (error) {
            if (error.status && error.status.code) {
                console.error("Error:", error);
                return error;
            }
            INTERNAL_ERROR.status.detail = error.message;
            status = INTERNAL_ERROR;
            response = status;
            console.error("Error:", response);
        }
        return response;
    }

    /**
     * Retrives 
     * @param {*} event
     * @param {*} context
     */
     async post(event, context) {
        let response = {};
        let status = {};
        try {
            status = SUCCESS;
            let autor = await this.service.postAutor(event, context);
            //status.body = ;
            response = autor;
            console.debug("Success", response);
        } catch (error) {
            if (error.status && error.status.code) {
                console.error("Error:", error);
                return error;
            }
            INTERNAL_ERROR.status.detail = error.message;
            status = INTERNAL_ERROR;
            response = status;
            console.error("Error:", response);
        }
        return response;
    }
}

module.exports.Controller = Controller;

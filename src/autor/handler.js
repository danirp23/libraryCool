const Controller = require('./controller').Controller;

/**
 * Handler for 
 * @param {*} event
 */
async function Handler(event, context) {
    let controller = new Controller();
    await controller.initialize();

    let response = null;
    console.debug("event method", event);
    if(event.method === 'GET'){
        response = await controller.get(event, context);
    }

    if(event.method === 'POST'){
        response = await controller.post(event, context);
    }

    return response;
}

module.exports.Handler = Handler;


var chai = require('chai'),
    expect = chai.expect,
    modelEvent = require('../../events/mode-query'),
    handler = require('../../../src/autor/handler');

describe('Test autor', function() {
    this.timeout(0);
    beforeEach(function() {   
        
    });

    it('Success get autor', async() => {
        const result = await handler.Handler(modelEvent.eventQuery({
            "autores": [
                {
                    "name":"kenobi", 
                    "date":1220.66,
                    "city":"NY",
                    "email": "cualquier@cosa.com"
                }
            ]
          }, 'POST', {}, {}, {}), { 'awsRequestId': '3000' });
        expect(result.status).to.equal(200);
    });
});
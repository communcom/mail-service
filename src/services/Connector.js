const core = require('cyberway-core-service');
const BasicConnector = core.services.Connector;

const Mail = require('../controllers/Mail');

class Connector extends BasicConnector {
    constructor() {
        super();

        this._mail = new Mail({ connector: this });
    }

    async start() {
        await super.start({
            serverRoutes: {
                sendVerificationEmail: {
                    handler: this._mail.sendVerificationEmail,
                    scope: this._mail,
                    validation: {
                        required: ['email', 'code'],
                        properties: {
                            email: {
                                type: 'string',
                            },
                            code: {
                                type: 'string',
                            },
                        },
                    },
                },
            },
        });
    }
}

module.exports = Connector;

const core = require('cyberway-core-service');
const Basic = core.controllers.Basic;
const Logger = core.utils.Logger;

const fs = require('fs');
const path = require('path');

const Mailgun = require('mailgun-js');

const env = require('../data/env');

const verificationTemplate = fs.readFileSync(
    path.join(__dirname, '../data/verification-template.html'),
    'utf-8'
);

class Mail extends Basic {
    constructor({ connector }) {
        super({ connector });

        this._mailgun = new Mailgun({ apiKey: env.MAILGUN_API_KEY, domain: env.GLS_DOMAIN });
    }

    async sendVerificationEmail({ email, code }) {
        const data = {
            from: env.GLS_FROM_WHO_EMAIL,
            to: email,
            subject: env.GLS_EMAIL_SUBJECT,
            html: verificationTemplate.replace('{%code%}', code),
        };

        try {
            const { id, message } = await this._mailgun.messages().send(data);

            Logger.log(id, message);

            return { id, message };
        } catch (err) {
            Logger.error('Mailgun email send error:', err);

            throw { code: 500, message: err.message };
        }
    }
}

module.exports = Mail;

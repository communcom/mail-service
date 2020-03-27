const env = process.env;

module.exports = {
    MAILGUN_API_KEY: env.MAILGUN_API_KEY,
    GLS_DOMAIN: env.GLS_DOMAIN,
    GLS_FROM_WHO_EMAIL: env.GLS_FROM_WHO_EMAIL,
    GLS_EMAIL_SUBJECT: env.GLS_EMAIL_SUBJECT,
};

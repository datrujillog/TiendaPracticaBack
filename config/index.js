require("dotenv").config();

module.exports = {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    SENDGRID_DOMAIN: process.env.SENDGRID_DOMAIN,
}
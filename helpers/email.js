const sgMail = require("@sendgrid/mail");
const { SENDGRID_API_KEY, SENDGRID_DOMAIN } = require("../config/index");
sgMail.setApiKey(SENDGRID_API_KEY); 


const sendEmail = (email,token) => {
    console.log("email ::::::", email);
    const msg = {
        to: email,
        from: SENDGRID_DOMAIN,
        subject: "Código de recuperación.",
        text: 'Tu código de recuperacion es: ' + token,
        html: `<strong>Tu código de recuperacion es:</strong> ${token}`
     
    };
  
    (async () => {
      try {
        await sgMail.send(msg);
      } catch (err) {
        console.error(err);
        if (err.response) {
          console.error(err.response.body);
        }
      }
    })();
  };
  
  module.exports = { sendEmail };
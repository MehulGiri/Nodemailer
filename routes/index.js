var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");

router.get('/form', function(req, res, next) {
  res.render('form');
});

router.post('/form', function(req, res, next) {

   var data_to=req.body.name;
   var data_sub=req.body.sub1;
   var data_msg=req.body.msg1;

   console.log(data_to);
    data1=data_to;
    data2=data_sub;
    data3=data_msg;
   megg="Hello This is " + data_to ; 

  //  res.send('hello ')
    res.redirect('/')
 
});


/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });

  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "mehulgoswami876@gmail.com", // generated ethereal user
        pass: "Password" // generated ethereal password
      }
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: data1, // list of receivers
      subject: data2, // Subject line
      text: data3, // plain text body
      html: megg // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  
  main().catch(console.error);
});

module.exports = router;

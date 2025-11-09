const express = require("express")
const cors = require("cors")
const nodemailer = require("nodemailer");
const { time } = require("motion/react");




const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));




// controller-----------------------------------------------------------------------------------------------------------


// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
//   host: "smtp.ethereal.email",
//   port: 587,
//   secure: false, 
// // true for 465, false for other ports
service:"gmail",
  auth: {
    user: "rdlodhatemp@gmail.com",
    pass: "cdblhkqrdvhldryk",
  },
});

// Wrap in an async IIFE so we can use await.
// (async () => {
//   const info = await transporter.sendMail({
//     from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
//     to: "bar@example.com, baz@example.com",
//     subject: "Hello ✔",
//     text: "Hello world?", // plain‑text body
//     html: "<b>Hello world?</b>", // HTML body
//   });

//   console.log("Message sent:", info.messageId);
// })();

const  sendmail = async({name,email,message})=> {
    const info = await transporter.sendMail({
    from:`${name} <${email}>`,
    to: "rdlodhatemp@gmail.com",
    subject: "Hire me",
    text: `${message} `, // plain‑text body
    html: `<b>Hello world ${message}</b> <br>Time:${(new Date).getHours()}:${(new Date).getMinutes()}`, // HTML body
  });
  
  

  console.log("Message sent:", info.messageId);

}




//route---------------------------------------------------------------------------------------------------------------

app.post('/submit',(req,res)=>{
    
    console.log(req.body)
    res.json(req.body)
    
    sendmail(req.body)
   
   console.log("-----------------------------------")
})



//server------------------------------------------------------------------------------------------------------------
app.listen(4000,()=>{
    console.log("hi from server")
})
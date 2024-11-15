import emailjs from "@emailjs/browser"

const sendEmail=(data)=>{
emailjs.init(import.meta.env.VITE_USER_ID)
emailjs.send(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID,{
//  name:data.name,
 to_email:data.email,
 subject:data.subject,
 message:data.message
}).then((response)=>{
    console.log(response)
}).catch(error=>{
  console.log(error)
})
}
export {sendEmail}
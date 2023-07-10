const nodemailer = require("nodemailer");

export default async function sendEmail(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const {
    fname,
    lname,
    email,
    phone,
    selectedForm_1,
    selectedForm_2,
    selectedDate,
    selectedTime,
    asp,
  } = req.body;
  if (
    !fname ||
    !lname ||
    !email ||
    !phone ||
    !selectedForm_1 ||
    !selectedForm_2
  ) {
    return res.status(400).json({ error: "Please fill in all fields" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "majd.khaled87@gmail.com",
      pass: "gzszfksphqncbpyd",
    },
  });

  const mailOptions = {
    from: "majd.khaled87@gmail.com",
    to: "majd.khaled87@gmail.com",
    subject: "New message from your website",
    text: `First name:${fname}\nLast name${lname}\nEmail: ${email}\nPhone Number: ${phone}\nI like to do : ${selectedForm_1}\nFor:${selectedForm_2}\nDate:${selectedDate}\nTime:${selectedTime}\nI Want As Soon As Possible:${asp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}

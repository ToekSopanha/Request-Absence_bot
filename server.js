import express from "express";
import dotenv from "dotenv";
import axios from "axios";
import path from "path";
import bodyParser from "body-parser";
import fs from "fs";
import FormData from "form-data";
import { fileURLToPath } from "url";
import cors from "cors";


// Load .env
dotenv.config();

// Fix __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

// Check .env
if (!process.env.BOT_TOKEN || !process.env.CHAT_ID) {
  console.log("❌ File .env cannot load value!");
} else {
  console.log("✅ File .env loaded successfully");
}

// Telegram bot check
async function checkTelegram() {
  try {
    const response = await axios.get(
      `https://api.telegram.org/bot${process.env.BOT_TOKEN}/getMe`
    );

    if (response.data.ok) {
      console.log("✅ Telegram bot connected");
      console.log("Bot username:", response.data.result.username);
    }

    await axios.post(
      `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
      {
        chat_id: process.env.CHAT_ID,
        text: "Welcome to Telegram BOT SV4.14",
      }
    );

    console.log("✅ Message sent to Telegram");
  } catch (error) {
    console.log("❌ Telegram BOT error");
  }
}

// Call function
checkTelegram();

// Send form data to Telegram
app.post("/sent", async (req, res) => {
  const { fullname, gender, nationality, datebirth, currentlyaddress, email, phonenumber, groupname,
    major, timestudy, requestabsence, startdate, enddate, description
   } = req.body;

  const message = `
******* Student Request for themseft *******
FullName: ${fullname}
Gender: ${gender}
Nationality: ${nationality}
Date of birth: ${datebirth}
Currently Address: ${currentlyaddress}
Email: ${email}
Phone Number: ${phonenumber}
Group Name: ${groupname}
Major: ${major}
Time Study: ${timestudy}
Request Absence: ${requestabsence}
Start Date: ${startdate}
End Date: ${enddate}
Description: ${description}
===============================
`;
  try {
    await axios.post(
      `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
      {
        chat_id: process.env.CHAT_ID,
        text: message,
      }
    );

    res.status(200).redirect('/Hearder');
  } catch (error) {
    res.status(500).send("❌ Failed to send message");
  }
});

// Send form data to Telegram
app.post("/sentP", async (req, res) => {
  const {gender,nationality, datebirth, currentlyaddress, email, phonenumber, groupname,
    major, timestudy, requestabsence, startdate, enddate, description, Pfullname, Pgender, Sfullname
   } = req.body;

  const message = `
******* Parents Request for there Child *******
Parent FullName: ${Pfullname}
I am : ${Pgender}
Student FullName: ${Sfullname}
Gender: ${gender}
Nationality: ${nationality}
Date of birth: ${datebirth}
Currently Address: ${currentlyaddress}
Email: ${email}
Phone Number: ${phonenumber}
Group Name: ${groupname}
Major: ${major}
Time Study: ${timestudy}
Request Absence: ${requestabsence}
Start Date: ${startdate}
End Date: ${enddate}
Description: ${description}
===============================
`;
  try {
    await axios.post(
      `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
      {
        chat_id: process.env.CHAT_ID,
        text: message,
      }
    );

    res.status(200).redirect('/Hearder');
  } catch (error) {
    res.status(500).send("❌ Failed to send message");
  }
});

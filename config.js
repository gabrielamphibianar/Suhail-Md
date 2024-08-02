const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "711352278";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "711352278,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_11_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY2LFxuICAgICAgICA4MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMixcbiAgICAgICAgMTQzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg3LFxuICAgICAgICA3MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMyxcbiAgICAgICAgODAsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAzOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg3LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjQsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzksXG4gICAgICAgIDUwLFxuICAgICAgICAzMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDY5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg3LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMixcbiAgICAgICAgMzIsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDU1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MixcbiAgICAgICAgNTgsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDczLFxuICAgICAgICAyNDMsXG4gICAgICAgIDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDUxLFxuICAgICAgICA4NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzIsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5LFxuICAgICAgICA1NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTAzLFxuICAgICAgICA2MSxcbiAgICAgICAgODQsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzksXG4gICAgICAgIDUyLFxuICAgICAgICA5MixcbiAgICAgICAgNjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDk1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJBejZPQ05MM2ZKOUIvK3RlOFR4S3BjUEZla0ZIVVdUa2RjUHI1K2xGMTRFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzIsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzIsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQSUZWNEoxM1NsR2p0QUlfTHRscmx3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ4YmQ4ODY5LTlkYTItNGY0YS05NmU2LWI2ZjNhYzQ1N2VjZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjgsXG4gICAgICAxMDQsXG4gICAgICAyNDEsXG4gICAgICAxNTksXG4gICAgICAxMzUsXG4gICAgICA4NCxcbiAgICAgIDg0LFxuICAgICAgMjEyLFxuICAgICAgMTA3LFxuICAgICAgMTA4LFxuICAgICAgOTksXG4gICAgICAxNjgsXG4gICAgICAyNDEsXG4gICAgICAyMjYsXG4gICAgICAxMzUsXG4gICAgICAxNjUsXG4gICAgICAxNDQsXG4gICAgICAxMTksXG4gICAgICAyMjIsXG4gICAgICA5M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDksXG4gICAgICA2LFxuICAgICAgOTUsXG4gICAgICAyNCxcbiAgICAgIDIyOCxcbiAgICAgIDIyOSxcbiAgICAgIDE2MCxcbiAgICAgIDQsXG4gICAgICAyMzgsXG4gICAgICA3MyxcbiAgICAgIDQ1LFxuICAgICAgMTAyLFxuICAgICAgMjUzLFxuICAgICAgMTc1LFxuICAgICAgODgsXG4gICAgICAxOSxcbiAgICAgIDIxNSxcbiAgICAgIDEwMSxcbiAgICAgIDgzLFxuICAgICAgMTU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkM0QkFLTE1SXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3MTEzNTIyNzg6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDE4OTM2MTQzMzM5ODY6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQeTUwOEVDRUsrcHNyVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjIyOVp0d0dVMzhUc1NVeWkxN2lFZ1FTOW9EeVJOTnJ5YnIrNkJQQ2puRWs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiR2pOKzcreHRRWGhFSTB3TzU1bkJnTER4dW5SVHA2VFA3d0QwdHUyWEhINERkVE9lakNjZXRUaTNMQWtEaUJHMWVDWmpZcjdBaEN6VlgwQlNIWms0QUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieE1YdGNuTDg3TUNKT1NRZTVDUTIrc0RVVVQ4TzFHcHozYUdRQWxOeFlvc0JkenErN0hseUtyODJIUGdEVDJyTmVRT2wra0pHem9TN3Fpa1pPSmUwQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NzExMzUyMjc4OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI1ODYyOTBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ amphibia²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "amphibia-md",
  ownername:process.env.OWNER_NAME|| "amphibiarecaptainer",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

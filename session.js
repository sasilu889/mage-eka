//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicURGa2Q0SXJJUlRZS2xXVDhCUmIyS08vZ21kSExqUWpZSXlDcEsyakVYOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZzY2R3YxaEszait5Mno4bUdWS2s1VW5NUkJZQTFvOEVMTTBZR3IrODRRdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBTkZWdDg2SU02cWhGUTZQUWVNWTRraVNoYTU2YXk2VTUxVWpoUzU2eVc0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDVFpnTFE1c2cwd1NlbDdOMEU2eTZlb0tPdzFXSHpKWjdHWFFIUkNZbjJrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldHNXluMWJTOWFrTWtCYUlWRFlzclgvUndZR2UycjVjdW1iYUZaY2JiMUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlLTzdJN2pOR3U2UmxiWi9lUHU5WEF0VmphRURqbVEvNTloOWdaa3UyWGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUtQaHAwaStPTVBXWlo1cHZxRVZOemUySm5YdjF5cFlCVTZza0d2M1NHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZDdjSUxSOGdsVUg1QjVHWkV6QURVYlUrYVVObUlXVFdmMkEzZ3RmMkdGTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlgxME9ZM0xVcDh5T2VkUDZCeVppanJBclpzN3dGcEdTRzRpUVBMdHVFSTROTFJhbVI4UkFlUTBraW5SUEw3NGNHbFMrOUR0TXNIU1ZyWDRWQTRESENBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODksImFkdlNlY3JldEtleSI6IklEL2l3RW56Lys5NXlUb2pFQkZ2SFBvZ3haUzNiZ1JjWlRvRldMR2Y4eFU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlllM3QwQUtSUVhDM05SRDl0cUE1TnciLCJwaG9uZUlkIjoiMzA4MmFkYWMtMDE4Zi00MjNiLWEyMmItZTY0M2FiYjZmNjY2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InB6M1FkZkp2Q25PUFpqVHVGWGhRdkc5RytBcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRZ3FOTHgzUlU3ZkRnazUwR0QxdE1qbzBEbVU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWldESjQxUDEiLCJtZSI6eyJpZCI6Ijk0Nzg0MzMxMTgwOjMyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTg5NjUzNDkxNjU4OTk0OjMyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTlNuajhVREVLQ3MyY0lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSDZIN3puU05hY0RJd0V0OTVPUTBQYTFsS21kZHFJWm9oajl2V1RFc1VqND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNmJYcmU2a3RZRUhDRkUwWU1zVFA2WTlXMlZoNVphQ1psdFE3TTQ5MEJMU3grMnl0WWtCbjRITGh3V0FzWjlySVVxS0dJVU4yQlhpTnNTcGsyTzI3Q1E9PSIsImRldmljZVNpZ25hdHVyZSI6IlpRTDVpU3FoM2RJYS9oNVUyNlNweWFpN1M5bzZmS21xR040ZWF0YjBDOVZRSzh4MWdReWdwNitIaW4zWUFyeGgyejhPVWlsWWcrTE9NR1hvTkNvS0NnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODQzMzExODA6MzJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUitoKzg1MGpXbkF5TUJMZmVUa05EMnRaU3BuWGFpR2FJWS9iMWt4TEZJKyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwNDg4NjIxLCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJFSiJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94784331180",
  PASSWORD: 
    process.env.PASSWORD || "sasilu",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};

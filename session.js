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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0JYSEVaWXlrZ3FVay82U2xpMmpDSU56dnZ4MXJ4a29lcTFYTGUrcFBtVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHNhSnZNTUtuc3ZzYXg2MkZLK1VMRkxTV1NvYWdISUhvOERJVUMzUHB6dz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSXFWa2R1VUNWcUErYXJNOEpSeFQ0RFRnblUxek1tamFrWUZIakRtZ0VrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3Q2tqanYxU1JGWHdBU2liUDc2L1VCMFV0eG5PZG9FL1F1TkFCZ3lvY1JzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJIM0lWUkQ1bm9EUEIxOVdMdERLV0g1eDVOMVZFMktqUkpIMXU0dHVDSGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllDcGJFSkcrUmV4S1EvMzhUL3RnaWFNV0FueHBpUURBZ3RoWEV5Y29qVEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUJLVThXbnZmNmE2ZjFkVUsrZ0o3Y1M0bHprTzd3L0JmL0F4d2pmWFMxOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicllacDdzUVRkdFdaczdPUkFWbE9kbW16N3NqVWpxUmdjSlhBMXJDZkcxOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBWZFFvYlJCSi9RazBka2FmYm83Z1RKbzY3cncwZFFPUW93cFZzVS81TzhyVWZTbERseWE0UjdRY0V3U21qd3k5b1hGbWVWTGhMUlJJV2JiRUU3ZmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA4LCJhZHZTZWNyZXRLZXkiOiJNMXpycU52NDJHYVNCNEtVUTVVaDFVbHVReDl4Y2kxcXZhaE1mMS9XTUVzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg0MzMxMTgwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkRCNUZCM0ExMzE0RjFFNTJCRTczMjJEMDkwNTAzNzY5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTA4Njk2MjR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Inhqd2k0cVdzUU1HQkF0Q1owS1NESlEiLCJwaG9uZUlkIjoiMTc2ZmYyZjktMjE4Ni00NGY0LWEwMmItNThkZDQwY2MzZTUwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFxYVZVaVUwS3VpVy9xbms4QUJ0d0lQMTl4ND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkVEdqR3pqTTRjb1ZMSCtCWU5JaVEyT0RZQnc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSzg0QTdYNkQiLCJtZSI6eyJpZCI6Ijk0Nzg0MzMxMTgwOjM0QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTg5NjUzNDkxNjU4OTk0OjM0QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTlduajhVREVPZk04TUlHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSDZIN3puU05hY0RJd0V0OTVPUTBQYTFsS21kZHFJWm9oajl2V1RFc1VqND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiazF3d0dwUG9MTXhyc0JtWUdhakFzcGR4N1M0bmowMlJwQlAycVFKMElPZmh6c1haTk41ZmYxdS9za1IxSnRkMG1yb0VEOFZkTzRSbVpaT0s0YWszQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IllkYUlUazlPeTA0TjJCSHpsRVB4SFdkWjhJV2I4UytoMlM0dkdQS2p0Qjk0SDRqdzlnanBWK09LaDlRUmVlQUFqT0M2dFd3VGh3MzBpNkpML21oNmpRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODQzMzExODA6MzRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUitoKzg1MGpXbkF5TUJMZmVUa05EMnRaU3BuWGFpR2FJWS9iMWt4TEZJKyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwODY5NjIxLCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJFSiJ9",
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

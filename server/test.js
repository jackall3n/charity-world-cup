"use strict";

var http = require("http");

var options = {
    method: 'GET',
    scheme: 'https',
    host: 'localhost.fidelity.co.uk',
    path: '/aws/service/secure/client/retrieve',
    headers: {
        'Referer' : 'https://localhost.fidelity.co.uk',
        'Host' : 'localhost.fidelity.co.uk',
        'livesite.aws.key': 'livesite_aws',
        'cm.aws.key': 'cm_aws',
        'Origin': 'https://localhost.fidelity.co.uk',
        SM_USERDN: 10173022,
      'X-Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMDEwNDE0MiIsInNtc2lkIjoiT0FrSlNkRlZnYVhpQy9leEl0cm0xbDhHendPRTNOb0k3VW00SU1GbDFQZz0iLCJ1Y3h0Ijp7ImNvbnN1bHRhbnROdW1iZXIiOiIxMDEwNDE0MiIsImNvbnN1bHRhbnQiOnsiY29uc3VsdGFudE51bWJlciI6IjEwMTA0MTQyIiwiZnVsbE5hbWUiOiJndXB0YSxIdWdvIiwiZmlyc3ROYW1lIjpudWxsLCJsYXN0TmFtZSI6Imd1cHRhIiwiZW1haWwiOiJodWdvLnNoYXdAYmVzdGludmVzdC5jby51ayIsInRlbGVwaG9uZSI6IjA3NDI0NTMzNDIzIiwiY291bnRyeSI6bnVsbCwicGVybWlzc2lvbnMiOlsiUEVSTV9MT0dJTiIsIlBFUk1fQUNDT1VOVFMiLCJQRVJNX0RFQUxJTkciLCJQRVJNX0NPTU1JU1NJT04iLCJQRVJNX1BPUlRGT0xJTyIsIlBFUk1fT0ZGU0hPUkVGVU5EUyIsIlBFUk1fVVNFUk1BSU5UIiwiUEVSTV9JU0FYUFJFU1MiLCJQRVJNX1NQRUNJQUxURVJNUyIsIlBFUk1fUkVQT1JUUyIsIlBFUk1fQURWQU5DRURSRVBPUlRTIiwiUEVSTV9NT0RFTE1HTVQiLCJQRVJNX0FHRU5UX0RFQUxJTkciXSwiZmlybUFkbWluIjp0cnVlfSwiYWR2aXNlciI6eyJhZHZpc2VyTmFtZSI6IlRpbG5leSBJbnZ0IE1nbXQgU2VydiBMdGQiLCJhZHZpc2VyTGVnYWxOYW1lIjoiVGlsbmV5IEludnQgTWdtdCBTZXJ2IEx0ZCIsImFkdmlzZXJOdW1iZXIiOiIxNzAyMjQiLCJhdXRob3JpemF0aW9ucyI6eyJyb2xlcyI6W10sInBlcm1pc3Npb25zIjpbIlBFUk1fTE9HSU4iLCJQRVJNX0FDQ09VTlRTIiwiUEVSTV9ERUFMSU5HIiwiUEVSTV9DT01NSVNTSU9OIiwiUEVSTV9QT1JURk9MSU8iLCJQRVJNX09GRlNIT1JFRlVORFMiLCJQRVJNX1VTRVJNQUlOVCIsIlBFUk1fSVNBWFBSRVNTIiwiUEVSTV9TUEVDSUFMVEVSTVMiLCJQRVJNX1JFUE9SVFMiLCJQRVJNX0FEVkFOQ0VEUkVQT1JUUyIsIlBFUk1fQUdFTlRfREVBTElORyJdLCJhbGxvd2VkVG9EZWFsIjp0cnVlfSwic29uYXRhTWlncmF0ZWQiOnRydWUsImRmbSI6ZmFsc2UsInBvc3RhbEFkZHJlc3MiOnsibGluZTEiOiI2IENoZXN0ZXJmaWVsZCBHYXJkZW5zIiwibGluZTIiOiJNYXlmYWlyIExvbmRvbiIsImxpbmUzIjpudWxsLCJsaW5lNCI6bnVsbCwiY29udGFjdFJvbGUiOiJDT1JSRVNQT05ERU5DRV9BRERSRVNTIiwiY291bnRyeSI6IkdCIiwicG9zdGFsVG93biI6bnVsbCwicG9zdGFsQ29kZSI6IlcxSiA1QlEiLCJlbWFpbCI6IiJ9LCJ0ZWxlcGhvbmUiOnsidGVsZXBob25lTnVtYmVyIjoiMjA3MTg5OTk5OSJ9LCJoZWFkVUFOIjoiMTcwMjI0Iiwib25zaG9yZSI6dHJ1ZX0sIm1hc3RlclBpblVzZWQiOmZhbHNlLCJhZHZpY2VHaXZlbiI6ZmFsc2V9LCJpc3MiOiJodHRwczovL3VhdC5maWRlbGl0eS5jby51ay9nYXRld2F5L21wYy92MS9hd3MtbG9naW4iLCJqdGkiOiI0ODNlYjg5ZC0zZTVjLTQyNDktYmJjYi1mMjdmZGNjYTk5OWYiLCJpYXQiOjE1MjY1NTE4NjUsImV4cCI6MTUyNjU1MzY2NX0.GxdDxjhBl5o20MJw_bbXnnkfvEfLsv6hYuGgg1OqalPyOo6uh2WX0jNcNaYPf7bNvjXIa6q7H-JGkqbReUr717d6T0TgwkkdC_LO0QnDmb537H8vAw9o8dP5IboYr20-AG3am-IjIL07rkG5mMmy09mDjCFs97An0d9lAZGzt8ZK7DS08LiFjRmlU59aoJFeWJulVVTFfBGWaIDZ9CHDhfDroR_HwN0lHJBORfNZa873absjwPUgQwf7bKlspvzjsFyNZQxFE8-ESujinOgZudvIwi_ax-KZt9Dw3-YaCtw2vnHFZMn2xXiRZd3N5-XEWbl6CYf96ctHR4-q04KL3g'
    }
}

var req = http.request(options, function (res) {
  console.log("Req headers:", res.req);
  console.log('Status: ' + res.statusCode);
  console.log('Headers: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (body) {
    console.log('Body: ' + body);
  });
})

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});


req.end();
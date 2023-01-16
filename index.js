const express = require("express");
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable
const cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// handle request to /api/whoami
app.get("/api/whoami",(req, res) => {
  let resObj = {
    "ipaddress": req.ip,
    "language": req.get("Accept-Language"),
    "software": req.get("User-Agent")
  };
  res.json(resObj);
});


// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log(`Your app is listening on port ${listener.address().port} ...`);
});
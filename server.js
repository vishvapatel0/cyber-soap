import express from "express";
import soap from "soap";
import fs from "fs";
import path from "path";
import { DOMParser } from "xmldom";
const app = express();
const PORT = 8000;
const wsdlPath = path.join(process.cwd(), "service.wsdl");
const wsdl = fs.readFileSync(wsdlPath, "utf8");
const users = {
"admin": "password123",
"user": "userpass"
};
const service = {
WSService: {
WSServicePortType: {
GetData: (args, callback) => {
console.log("Received Request:", args);
const securityHeader = args.Security;
if (!securityHeader) {
return callback({ message: "Missing WS-Security Header" });
}
const { Username, Password } = securityHeader;
if (!users[Username] || users[Username] !== Password) {
return callback({ message: "Authentication Failed" });
}
const input = args.input;
const result = input.split("").reverse().join("");
callback(null, { result });
      },
    },
  },
};
soap.listen(app, "/ws-security", service, wsdl, () => {
console.log(`SOAP service running on http://localhost:${PORT}/ws-security`);
});
app.listen(PORT, () => {
console.log(`Express server started on port ${PORT}`);
});

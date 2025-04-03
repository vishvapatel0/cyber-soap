# SOAP Web Service with WS-Security

This project demonstrates a SOAP web service using WS-Security for authentication. The service is built with Node.js and uses the `soap` package to handle SOAP requests and responses.

## Features
- SOAP-based web service using WSDL
- WS-Security header for authentication
- Reverse string functionality

## Prerequisites
Ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher)

## Project Structure
- **service.wsdl**: Defines the SOAP service with WS-Security.
- **server.js**: Sets up the SOAP server with authentication.
- **client.js**: SOAP client to consume the service.

## Architecture Overview
1. **Client (client.js)** sends a SOAP request to the server using the WSDL.
2. The **SOAP request** includes a WS-Security header with credentials and input data.
3. **Server (server.js)** verifies the WS-Security header for valid credentials.
4. If authentication is successful, the server processes the input, reverses the string, and returns the result.
5. The **client** receives the SOAP response with the reversed string.

## API Key and Security
Currently, the service uses basic authentication with WS-Security headers (Username/Password). In a production setup, consider using more secure methods like:
- OAuth 2.0 or JWT for token-based authentication
- HTTPS for encrypted communication

## Installation
1. Clone the repository:
```bash
git clone <repository-url>
cd <repository-name>
```

2. Install dependencies:
```bash
npm install
```

## Running the Service
Start the SOAP server:
```bash
node server.js
```
Service should be running at: `http://localhost:8000/ws-security`

## Testing the Service
Run the client script to send a request:
```bash
node client.js
```
Expected output:
```
SOAP Response: { result: 'dlroWolleH' }
```

## How the Code Works
- **service.wsdl**: Describes the service interface, including input/output messages and the endpoint location.
- **server.js**:
  - Sets up an Express server and loads the WSDL file.
  - Defines a SOAP service with a "GetData" operation.
  - Validates credentials using WS-Security headers.
  - Processes input data by reversing the input string.
  - Returns the result or an authentication error.
- **client.js**:
  - Creates a SOAP client using the WSDL URL.
  - Sends a request with security headers (Username/Password).
  - Displays the response from the server.

## License
This project is licensed under the MIT License.


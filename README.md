# cm-technical-challenge

## Challenge
Using APIGW and Lambda create an HTTP API that takes a string as input, and returns a response with:
- Two properties: `statusCode` (with its appropriate value, e.g. 2xx or 5xx etc.) and `body`
    - Where `body` has two of its own stringified properties: `message` and `payload`
    - `message` should have value "Thank you for using the reverser!"
    - `payload` should have the input string as a value, except it is reversed (e.g. "Hello" -> "olleH")
- The challenge is complete when you can perform a `GET` request on the newly created resource(s) above, and get the response defined above 

## Details
- Share your screen
- Fork and clone this repository to your local machine
- Write all the business logic necessary for your Lambda
- The AWS infrastructure (APIGW and Lambda) will be bootstrapped for you
- When your HTTP API is ready to ship, push it to the remote/origin and the interviewer will deploy it for you
- Use any HTTP tool you want e.g. `cURL` or `Postman` to test your endpoint
- Collaborate with your interviewer as if they are your peer (this is an interactive challenge)
- Feel free to deploy and experiment at will
- The interviewer may or may not give you hints
- Feel free to ask your interviewer questions at anytime

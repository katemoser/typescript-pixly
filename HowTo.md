<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
TODO WED MORNING

work on express + s3
build something that lets us pull exif off photoo
make a  baby version
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



ANYTHING IN ALL CAPS IS A PLACEHOLDER like this `NAME_OF_APP`

<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Installations
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

### Foundations ###
1. Node (Have this installed on your machine)

### Front End ###
1. Create your React app in TypeScript with: npx create-react-app `NAME_OF_APP` --template typescript 

2. Install react-bootstrap: 
    - npm install react-bootstrap bootstrap@5.1.3

2a. Add typescript types for react-bootstrap: 
    - npm install --save @types/react-bootstrap

3. Install react router DOM: npm install react-router-dom

4. install axios : npm install axios


### Back End ###

https://www.pullrequest.com/blog/intro-to-using-typescript-in-a-nodejs-express-project/

1. Express: npm install express
1a. Add typescript: 
    npm install typescript ts-node @types/node @types/express --save-dev
1b. Configure Typescript and make tsconfig.json:
    npx tsc --init
1c. Create Express server in index.ts
1d. add build script to package.json: 
    "build": "tsc --project ./"

2. Express PG (ORM): npm install pg

3. dotenv (built in type declarations) to protect our .env environmental variables
while in production: npm install dotenv
4. All collaborators make their own .env files that will store their personal keys.


### Database ###

### Object Storage ###
> AWS S3
1. install AWS SDK for Javascript (Typescript types are bundled together)
    - npm install aws-sdk
 2. Enable public access by NOT ONLY making the bucket public, but building a
 JSON ACL (Access Control List) that allows all access. Follow the path: Bucket ->
 Permissions -> Bucket Policy. It looks like this:

 Resource: https://www.liainfraservices.com/blog/aws-s3-access-denied-unable-to-grant-public-access-to-an-existing-s3-bucket/

"{
“Id”: “Policy15434102856”,
“Version”: “2012-10-17”,
“Statement”: [
{
“Sid”: “Stmt15433597724”,
“Action”: “s3:*”,
“Effect”: “Allow”,
“Resource”: “arn:aws:s3:::bucketname/*”,
“Principal”: “*”
}
]
}"


- TODO: Look at the API for GetObject. Will need an authorization header


<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Development
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
1. To run and compile the front end, use this: npx webpack --watch
2. To run and compile the back end, use this: npm run build
 - We can use npm run build, because of the script we've defined for build in our
 package.json


<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Deployment
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

### Deployment ###
1. Create a new repo for your front end and one for your back end when you have
clean, working versions


<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Educational
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

### New Concepts ###

- piexifjs /exif-js <-- JS libraries for dealing with exif data
- For users submitting data, we use the input type "file" for a form and check
this link for examples: https://www.w3schools.com/tags/att_input_accept.asp
- For resizing and other exciting image editing, look into the html <canvas> element.
Link to that is here: https://imagekit.io/blog/how-to-resize-image-in-javascript/

<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
BUGS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

>>> When running webpack --watch, we got this error:
    
    WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

ERROR in main
Module not found: Error: Can't resolve './src' in '/Users/kate/Desktop/Rithm/Week-10/typescript-pixly/pixly-fe'

FIX: Had to run `npx webpack watch --mode development` and add (blank) index.js file to ./src


>>> We had issues with our exported PORT const in our config becoming a globally
declared variable.

FIX: Changed our import / export syntax to the following 

 - import { PORT } from "./config"

 - export {
  PORT,
  getDatabaseUri,
};
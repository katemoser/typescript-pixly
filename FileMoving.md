


###
CURRENT STATE

IN THE FORM (FE)

1. Click Submit
 - Make a new empty form data object
 - Add the current state as an attribute to the empty form data object
 - Send form data object (modified) to our method in the PixlyAPI


IN PIXLY API (FE)

2. Receive the modified form data object (as arugment)
 - Make an axios POST request to our "/upload" route in the BE containing our form
 data


IN /POSTCARDS/UPLOAD (BE)

3. Route will have a multer middleware that will encode in the proper format AND
put the file in the proper location (IDEALLY THIS WILL GO TO AWS INSTEAD OF A BE
FOLDER)


###
FUTURE STATE

IN /POSTCARDS/UPLOAD (BE)

3. Route will have a multer middleware that will encode in the proper format AND
put the file in the proper location (IDEALLY THIS WILL GO TO AWS INSTEAD OF A BE
FOLDER)


`CORS CONSIDERATION HERE`


IN AWS S3

OBTAIN LISTING OF RESOURCES
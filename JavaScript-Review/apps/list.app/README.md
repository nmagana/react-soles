## Setting Up a Web Server
We will be using live-server to set up a web server for local development. Download it with the following command

`npm install -g live-server`

You can then create a local web page with the following command:

`live-server <path-to-folder>`

Live-server is extremely useful, as you can make changes and have your local web page update automatically.

## Getting Started
Put the following code into index.html.
```
<!DOCTYPE <!DOCTYPE html>
<html>
    <head>
        
    </head>
    <body>
        <h1>List App</h1>
        <h2>Create your list!</h2>
        <p>Created by <Your Name Here></p>
        <script src="list-app.js"></script>
    </body>
</html>
```
Replace the `<Your Name Here>` with your name. If you have live-server set up, you can see the change in the web page when you save. This line `<script src="list-app.js"></script>` loads in JavaScript from list-app.js. Since we are loading it inline, don't add anymore JavaScript in between the script tags. The script tags is placed at the end of body, to wait until all the elements are created.

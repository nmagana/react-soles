# List App

## Setting Up a Web Server
We will be using live-server to set up a web server for local development. Download it with the following command

`npm install -g live-server`

You can then create a local web page with the following command:

`live-server <path-to-folder>`

You can also specify a browser you want to use like so:

`live-server <path-to-folder> --browser='Google Chrome'`

I will be using Google Chrome for the rest of the lesson, so feel free to download it if you aren't using it.

Live-server is extremely useful, as you can make changes and have your local web page update automatically.

## Using Chrome Developer Tools
You can use the console in Chrome Developer Tools to inspect elements of HTML pages and look at the console that can be used to debug your JavaScript file. You can access it by clicking on the three dots in the upper right corner -> More Tools -> Developer Tools. The Elements tab shows the HTML page while the Console tab shows the output from console from the JavaScript file. 

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
        <p> Let's get started</p>
        <p> I love SOLES</p>
        <script src="list-app.js"></script>
    </body>
</html>
```
Replace the `<Your Name Here>` with your name. If you have live-server set up, you can see the change in the web page when you save. This line `<script src="notes-app.js"></script>` loads in JavaScript from list-app.js. Since we are loading it inline, don't add anymore JavaScript in between the script tags.

## Document Object Model (DOM)
The DOM allows you to change elements in HTML in JavaScript. You use the global variable `document` in the JavaScript file to access the DOM. 

### Document Methods/Properties Review

#### querySelector
You can access an element from its tag by using the `querySelector` method. This method grabs the first element with the `<p>` tag. If you put this code in the list-app.js file, you will get `<p> Let's get started! </p>`.

```
const pElement = document.querySelector('p');
console.log(pElement);
```

#### querySelectorAll
You can grab all elements with `<p>` tags by using the `querySelectorAll` method.

```
const pElements = document.querySelectorAll('p');
console.log(pElements);
```

#### remove
You can use the `remove` method to remove an element via the DOM. You can see how you can use integrate forEach to loop through each element in pElements. Now all elements with `<p>` will be removed from the web page.

```
const pElements = document.querySelectorAll('p');
pElements.forEach(function(pElement) {
    pElement.remove()
})
```

#### textContent
You can also access the text content of an element by using the `textContent` property. The following example adds an exclamation point to each of the `<p>` elements.

```
const pElements = document.querySelectorAll('p');
pElements.forEach(function(pElement) {
    pElement.textContent += '!';
})
```

### Adding Elements via the DOM

To create a new element at the end of body element, follow these steps.

#### Create Element and Add Content
You will first need to create a DOM element with the `createElement` method. You can specify what element tag you want. The following line will create a paragraph element. You can then add content by setting the textContent that we used previously.
```
const paragraphElement = document.createElement('p');
paragraphElement.textContent = 'I am a new paragraph!';
```
#### Appending to Body Tag
Now that the paragraph element is created, use the `appendChild` method to append the paragraph element. To append it to the end of the body tag, you first must use `querySelector` to get that element. Try the code above and below in the list-app.js to see your new paragraph element!

```
document.querySelector('body').appendChild(paragraphElement);
```

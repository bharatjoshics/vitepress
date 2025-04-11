# Install and Import VUE JS
Let us now install and import the VUE JS to use in our application.

## Important Instructions
   - NODE JS should be installed on your system.
   - It is recommened to have a IDE like VS Code, WebStorm, etc.

## Install VUE JS

To install the VUE JS follow-

   1. Open command prompt or terminal in IDE.
   2. Make sure your terminal / command prompt is at correct path / directory where you want to create project.
   3. `npm create vue@latest` run the command.
   4. This command will install and execute create-vue.
   5. You will be presented with prompts for several optional features like this
        
            ✔ Project name: … <your-project-name>
            ✔ Add TypeScript? … No / Yes
            ✔ Add JSX Support? … No / Yes
            ✔ Add Vue Router for Single Page Application development? … No / Yes
            ✔ Add Pinia for state management? … No / Yes
            ✔ Add Vitest for Unit testing? … No / Yes
            ✔ Add an End-to-End Testing Solution? … No / Cypress / Nightwatch / Playwright
            ✔ Add ESLint for code quality? … No / Yes
            ✔ Add Prettier for code formatting? … No / Yes
            ✔ Add Vue DevTools 7 extension for debugging? (experimental) … No / Yes

            Scaffolding project in ./<your-project-name>...
            Done.

   6. If you are unsure about an option, simply choose No by hitting enter for now.
   7. Once the project is created, change the directory to your project folder. 
        `cd <your-project-name>`
   8. Install the npm dependencies. 
        `npm install`
   9. You can now run your project by using the command `npm run dev`

## Import VUE JS
We're now ready to import the VUE JS in our project. It is required to use the vue components and elements in our application.

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

    Add the following line inside head element of your HTML page like this-
    
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Notes</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 20px;
        }
        h1 {
            color: #333;
        }
        .container {
            max-width: 800px;
            margin: auto;
        }
    </style>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

</head>
<body>
    <div class="container">
        <h1>Welcome to My Notes</h1>
        <p>This is a simple HTML template.</p>
    </div>
</body>
</html>
```
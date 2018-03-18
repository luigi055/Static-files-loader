# Static Files Loader

## Description.
Inpired by the [SixClaw's static-loader](https://www.npmjs.com/package/static-loader) static-files-loader is an alternative where you can use your static files and copy them to the production build folder.

__This is also compatible with Webpack 4__

you can include:
	- favicon.ico
    - human.txt
    - robot.txt
    - .htaccess
    - sitemap.xml
    - and many more...

## Next To Do

* [ ] advanced Loader's options (Since right now is very basic).

## Installing.

Installing via __Yarn__
```
yarn add --dev static-files-loader
```
Installing vía __NPM__
```
npm i -d static-files-loader
```


## How to use.

Add the loader in webpack.config.js
```
...
module: {
  rules: [{
    test: /\.ico|txt$/,
    use: [
      {
        loader: "static-files-loader",
      },
    ],
  }],
}
...
```
In your main Javascript file import them as common js file.

```
/* eslint-disable */
import "./favicon.ico";
import "./robot.txt";
import "./human.txt";
/* eslint-enable */
```

Also you can pass the output query to specify the path where you want the file to ourput and if you want to rename it.

```
/* eslint-disable */
import "./humano.txt?output="human.txt";
import "./favicon.ico?output=favicon.ico";
import "./robot.txt?output=static/txt/robot.txt";
/* eslint-enable */
```

Now in your dev html source file (/src) add the files you're going to use
```
<head>
  <meta charset="UTF-8" />
  <title>React App</title>
  <link rel="shortcut icon" href="favicon.ico" /> <!-- ADD FAVICON -->
</head>

<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="app"></div>
</body>

</html>
```

Finally when you generate your production folder the static files imported in your js will be able in the path you specified __(by default webpack entry directory "/")__
```
-public
--bundle.js
--style.css
--index.html
--favicon.ico
--robot.txt
--human.txt
```

## Author.
[Pedro La Rosa D. Linkedin Profile](https://www.linkedin.com/in/pedro-luis-la-rosa-doganieri-a9b2a5103/)
[Pedro La Rosa D. Github Profile](https://github.com/luigi055)



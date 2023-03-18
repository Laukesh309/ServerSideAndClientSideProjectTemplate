OverAll View Of This Architecture
===================================
In This Application when use build or run Project first server specific bundle created by webpack . besically these bundle we can execute like normal node app
the only differennce is before run an application first webpack merge all file starting from entry into single bundle file with transpiled code by babel.
when bundle created we run that bundle file by node dist/bundle.js  . so because of this server started  when user hit request on server a react html componet
convert to string by renderToString method and merge with html template sent to the browser with script in which client bundle reference is There

note: to execute jsx babel transiped is neccessary for both server and clint bundle

Server Side Rendering Detail
=============================

1. For Server Side Rendering we have to make React Component as String  . So For Conversion of Component into string we have to use RenderToString Method
const renderToString = require("react-dom/server").renderToString
2.For Server Side Routing We Use StaticRouter in which Child We give Routes and route . important point note here is in StaticRouter we have to pass location props as req.url .
so according to url it will pick route and return component and from renderToString method it return html as string.
3. we wil face an issue like this .
      You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
      | app.get("*", (req, res) => {
      |   let componetServerComponent = renderToString(
      >     <StaticRouter location={req.url}>
      |       <App />
      |     </StaticRouter>

this is issue is arise because webpack and node don't know jsx they only know js  . so to handle this issue have  to use a babel-loader so that it transpiles jsx ans es6 before executing file

4. so handle issue we have to install following dependencies
 "@babel/core": "^7.21.3",
    "@babel/preset-env": "^7.20.2",
    "@babel/preset-react": "^7.18.6",
    "babel-loader": "^9.1.2",
5. also create .babelrc in which we have to define preset so that it is able to understand jsx and transpiled jsx into normal vanila js

Important Note
===============
1.before Running Server first bundle should be created with transpiled code then execute this transpiled code so that server side jsx code execute properly
2.someTime mininfied error arise on browser because we did't specify mode in which bundle created so mode:development will help
3.client side bundle should be in public folder . so that when request goes for client bundle it serve from public and rehydrate on client
4.For serverSide Rendering Appp we must use  rehydrate(domNode ,<App/>) for client side rehydration
5. For React App we use createRoot() it return render and unmount

DocToCheck
===========
https://react.dev/reference/react-dom/server/renderToString
https://reactrouter.com/en/main/router-components/static-router
https://www.robinwieruch.de/webpack-babel-setup-tutorial/
https://github.com/facebook/react/issues/24610
https://stackoverflow.com/questions/33001237/webpack-not-excluding-node-modules


Note: in latest React SWITCH is deprecated in place of this Routes(not Router) they provided and inside of this route will be there
2. No two router will be nested inside each other

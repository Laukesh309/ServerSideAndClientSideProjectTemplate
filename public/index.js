import React, { Component } from 'react'
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '../Router/App'

const domNode = document.getElementById('root');


// No, hydrating happens here:

// hydrateRoot(rootElement, <App />);
// There is no need for a further render call.

if (domNode != null) {
  hydrateRoot(domNode,
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
// const root = hydrateRoot(domNode, <App />)


//Note hydrateRootReturn Two value first  Render and second null but its hydrate on client side app so need to again render component
// root.render(<h1>this is index</h1>)



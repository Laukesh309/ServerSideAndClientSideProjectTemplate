import React, { Component } from 'react'
import { hydrateRoot } from 'react-dom/client';
import App from '../Router/App'

const domNode = document.getElementById('root');

const root = hydrateRoot(domNode, <div>
  <h1>this is client side</h1>
  <App />
</div>
)

// root.render(<h1>this is index</h1>)



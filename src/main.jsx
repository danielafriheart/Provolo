import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({ routeTree })
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
)

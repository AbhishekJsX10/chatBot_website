import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './routes/Homepage/HomePage.jsx'
import SignUpPage from './routes/SignUpPage/SignUpPage.jsx'
import SignInPage from './routes/SignInPage/SignInPage.jsx'
import ChatPage from './routes/ChatPage/ChatPage.jsx'
import DashboardPage from './routes/DashboardPage/DashboardPage.jsx'
import RootLayout from './layouts/rootLayout/RootLayout.jsx'
import DashboardLayout from './layouts/DashBoardLayout/DashboardLayout.jsx'




const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <Homepage /> },
      { 
        element: <DashboardLayout />,
        children: [
          { path: '/dashboard', element: <DashboardPage /> },
          { path: '/dashboard/chats/:id', element: <ChatPage /> },
        ]
      },
      { path: '/sign-up/*', element: <SignUpPage /> },
      { path: '/sign-in/*', element: <SignInPage /> },
    ],
  }
]);






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

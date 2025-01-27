import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import SlamBook from "./components/SlamBook";
import Main from "./components/Main";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />
    },
    {
      path: "/maagya",
      element: <SlamBook />
    },
  ])

  return (
    <main className='main'>
      <RouterProvider router={router} />
    </main>
  )
}

export default App

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import { Page404, LandingPage, Dashboard } from './pages'
import { Footer, Header } from './components'
import { AuthContextProvider } from "./context/Auth";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Header />
        <LandingPage />
        <Footer />
      </>,
      errorElement: <Page404 />
    },
    {
      path: "/dashboard",
      element: <>
        <Header />
        <Dashboard />
      </>,
    },
  ]);

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      <AuthContextProvider>
        <ChakraProvider>
          <RouterProvider router={router} />
        </ChakraProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import { Page404, LandingPage } from './pages'
import { Footer, Header } from './components'

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
  ]);

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </div>
  );
}

export default App;
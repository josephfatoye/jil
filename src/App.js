import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
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
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
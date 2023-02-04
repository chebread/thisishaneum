import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet,
} from 'react-router-dom';
import Home from 'pages/Home';
import Contact from 'pages/Contact';
import NotFoundPage from 'pages/NotFoundPage';
// import CustomCursor from 'components/CustomCursor';

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={
          <>
            {/* <CustomCursor /> */}
            <Outlet />
          </>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="c" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Router;

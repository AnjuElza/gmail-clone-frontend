import { Suspense, lazy } from 'react';
import axios from 'axios';
import {Toaster} from 'react-hot-toast';
import { Navigate, Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Router } from 'react-router-dom';
import { routes } from "./routes/routes";
import SuspenseLoader from './components/common/SuspenseLoader';
import DataProvider from './context/DataProvider';
import Register from './pages/Register';
import Login from './pages/Login';
import './App.css';
import { UserContextProvider } from './context/userContext';

const ErrorComponent = lazy(() => import('./components/common/ErrorComponent'));

const router = createBrowserRouter(
  createRoutesFromElements(
    // <><Route>
    //   <Route path={routes.main.path} element={<Navigate to={`${routes.emails.path}/inbox`} />} />
    //   {/* <Route path={routes.main.path} element={<routes.login.element />} /> */}
    //   {/* <Route path={routes.inbox.path} element={<Navigate to={`${routes.emails.path}/inbox`} />} /> */}
    //   <Route path={routes.main.path} element={<routes.main.element />} />
    //   <Route path={`${routes.emails.path}/:type`} element={<routes.emails.element />} errorElement={<ErrorComponent />} />
    //   <Route path={routes.view.path} element={<routes.view.element />} errorElement={<ErrorComponent />} />
    //   <Route path={routes.register.path} element={<routes.register.element />} />
    //   <Route path={routes.login.path} element={<routes.login.element />} />
    // </Route>
    //   <Route path={routes.invalid.path} element={<Navigate to={`${routes.emails.path}/inbox`} />}>
    //   </Route></>

    <Route>
        
      (!localStorage.getItem("token")) ? {  
        <><Route path={routes.main.path} element={<routes.login.element />} />
        <Route path={routes.register.path} element={<routes.register.element />} /></>
        }:{ 
        
      <Route path={routes.main.path} element={<Navigate to={`${routes.emails.path}/inbox`} />} />
        }
        <Route path={routes.main.path} element={<routes.main.element />}>
       
          <Route path={`${routes.emails.path}/:type`} element={<routes.emails.element />} errorElement={<ErrorComponent />} />
          <Route path={routes.view.path} element={<routes.view.element />} errorElement={<ErrorComponent />} />
        </Route><Route path={routes.invalid.path} element={<Navigate to={`${routes.emails.path}/inbox`} />} />
      
    </Route>
  )
)

function App() {
  return (
  
<Suspense fallback={<SuspenseLoader />}>
  {/* <UserContextProvider> */}
      <DataProvider>
        <RouterProvider router={router} />
        < Toaster position='top-center' toastOptions={{duration:5000}}/>
      </DataProvider>
      {/* </UserContextProvider> */}
    </Suspense>

  );
}

export default App;
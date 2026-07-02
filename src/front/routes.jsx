// Import necessary components and functions from react-router-dom.
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route, Navigate,
} from "react-router-dom";

import { PublicLayout } from "./pages/PublicLayout";
import { PrivateLayout } from "./pages/PrivateLayout";

/*import { Layout } from "./pages/Layout";*/
import { Home } from "./pages/Home";
{/*import { Single } from "./pages/Single";*/ }
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Blog } from "./pages/Blog";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";

import { Dashboard } from "./pages/Dashboard";
/*import { Payments } from "./pages/Payments";*/
import { Budget } from "./pages/Budget";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>      
      {/* Portal público: Navbar + Footer + Outlet */}
      <Route path="/" element={<PublicLayout />} errorElement={<h1>Not found!</h1>}>
        <Route index element={<Home />} />
        {/*<Route path="/single/:theId" element={ <Single />} />   Dynamic route for single items */}
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>

    {/* Portal privado: Sidebar + Topbar + Outlet */}
      <Route path="/portal" element={<PrivateLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="budget" element={<Budget />} />
      </Route>
    </>
  )
);
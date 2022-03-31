import React from "react";
import { Routes, Route } from "react-router-dom";
import Error404 from "../components/Error404";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import MyMap from "../components/MyMap";
import Book from "../pages/Book";
import Places from "../pages/Places";

const MainRoutes = () => (
  <Routes>
    {/** Protected Routes */}
    {/** Wrap all Route under ProtectedRoutes element */}
    <Route path="" element={<ProtectedRoutes />}>
      <Route path="book" element={<Book />} />
      <Route path="map" element={<MyMap />} />
      <Route path="places" element={<Places />} />
    </Route>

    {/** Public Routes */}
    {/** Wrap all Route under PublicRoutes element */}
    <Route path="" element={<PublicRoutes />}>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Route>

    {/** Error404 routes */}
    <Route path="*" element={<Error404 />} />
  </Routes>
);

export default MainRoutes;

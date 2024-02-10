import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import {
  Flights,
  RootLayout,
  Hotels,
  Trains,
  Bus,
  MyTrip,
  Profile,
  FlightSearch,
  ProtectedRoute,
  HotelSearch
} from "./pages";
import LoginSignup from "./pages/Login_Signup/LoginSignup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Flights />} />
      <Route path="/flight" element={<Flights />} />
      <Route path="/flight/:searchQuery" element={<FlightSearch />} />
      <Route
        path="/hotels"
        element={
          <ProtectedRoute>
            <Hotels />
          </ProtectedRoute>
        }
      />
      <Route path="/hotels/:hotelSearchQuery" element={<HotelSearch />} />
      <Route path="/trains" element={<Trains />} />
      <Route path="/bus" element={<Bus />} />
      <Route path="/login-signup" element={<LoginSignup />} />
      <Route path="/mysupport/trips" element={<MyTrip />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Flights/>} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

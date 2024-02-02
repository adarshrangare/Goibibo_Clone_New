import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Flights, RootLayout, Hotels, Trains, Bus, MyTrip, Profile,FlightSearch } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Flights />} />
      <Route path="/flight" element={<Flights />} />
      <Route path="/flight/:searchQuery" element={<FlightSearch/>} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/trains" element={<Trains />} />
      <Route path="/bus" element={<Bus />} />
      <Route path="/mysupport/trips" element={<MyTrip />} />
      <Route path="/profile" element={<Profile />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

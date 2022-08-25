import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "~/routes/home";
import Layout from "~/routes/layout";
import Game from "~/routes/game";
import Results from "~/routes/results";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/play" element={<Game />} />
        <Route path="/results" element={<Results />} />
      </Route>
    </Routes>
  );
}

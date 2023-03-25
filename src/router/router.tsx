import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Page1 } from "../Page1";
import { Page2 } from "../Page2";
import { Page1DetailA } from "../Page1DetailA";

export const Router = () => {
  return (
    <Routes>
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page1/detailA" element={<Page1DetailA />} />
    </Routes>
  );
};

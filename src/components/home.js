import React from "react";

import MainNavigation from "./mainNavigation";
import Categories from "./categories";

export default function Home() {
  return (
    <div className="home-wrapper">
      <MainNavigation />
      <Categories />
    </div>
  );
}

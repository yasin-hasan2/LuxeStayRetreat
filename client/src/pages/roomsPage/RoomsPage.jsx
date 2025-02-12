// import React from 'react';

import Categories from "../../components/Categories/Categories";
import Rooms from "../../components/Home/Rooms";

const RoomsPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-12 gradient-text text-center">
          All Resorts
        </h1>
      </div>
      {/* Categories section   */}
      <Categories />
      {/* Rooms section */}
      <Rooms />
    </div>
  );
};

export default RoomsPage;

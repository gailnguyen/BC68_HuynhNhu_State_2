import React from "react";
import "./glassesStore.scss";
import TryOnModel from "../TryOnModel/TryOnModel";

const GlassesStore = () => {
  return (
    <div className="glasses_store min-h-screen">
      <div className="store_layout space-y-3 min-h-screen">
        <div className="store_title">
          <h2 className="text-center text-2xl font-bold text-white py-5 mb-10">
            TRY GLASSES APP ONLINE
          </h2>
        </div>
        <div className="container">
          <TryOnModel />
        </div>
      </div>
    </div>
  );
};

export default GlassesStore;

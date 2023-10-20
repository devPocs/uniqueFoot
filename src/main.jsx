import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//import sidebarProvider
import SideBarProvider from "./../src/contexts/SideBarContext.jsx";

//import productProvider
import ProductProvider from "./../src/contexts/ProductContext.jsx";

//import descriptionProvider
import DescriptionProvider from "./../src/contexts/DescriptionContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SideBarProvider>
      <DescriptionProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </DescriptionProvider>
    </SideBarProvider>
  </React.StrictMode>
);

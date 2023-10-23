import { useContext } from "react";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/*import components*/

import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import ProductDescription from "./components/ProductDescription";

//import descriptionContext
import { DescriptionContext } from "./contexts/DescriptionContext";
function App() {
  const { showItemDescription } = useContext(DescriptionContext);

  return (
    <div className="relative flex min-h-[100vh] flex-grow flex-col">
      <Router>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/product/:id"} element={<ProductDetails />} />
        </Routes>
        <ProductDescription />
        <SideBar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

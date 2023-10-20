import { useContext } from "react";
import Banner from "./../components/Banner";
import ShowCase from "./../components/ShowCase";

//import descriptionContext
import { DescriptionContext } from "../contexts/DescriptionContext";

function Home() {
  const { showItemDescription } = useContext(DescriptionContext);

  return (
    <div className="w-[100%]">
      <div className="relative w-[100%]">
        <Banner />
        <ShowCase />
      </div>
    </div>
  );
}

export default Home;

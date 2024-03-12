import React from "react";
import { 
    Header1,
    Header2,
} 
from "../component/Major/header/header";
import { 
  Hero0, 
  Hero1 
} from "./Major/hero/hero";

function Home() {
    return (
    <>
      <Header1 />
      <Header2 />
      <Hero0/>
      <Hero1/>
    </>
  );
}
export default Home;
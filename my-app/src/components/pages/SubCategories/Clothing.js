import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import Masonry from "react-masonry-component";
import { masonryOptions } from "../../../exports";
import Logo from "../../../images/logo.png";

function Clothing() {

  return (
    <React.Fragment>
      <h1>Outdoors</h1>
      <img src={Logo} />
      <img src={Logo} />
      <img src={Logo} />
      <img src={Logo} />
      <img src={Logo} />
    </React.Fragment>
  );
}



export default Clothing;
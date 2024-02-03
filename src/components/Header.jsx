import React from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";

function Header() {
  return (
    <>
      <MDBNavbar style={{ backgroundColor: "#17202A " }}>
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">
            <img
              src="https://cdn.icon-icons.com/icons2/2249/PNG/512/movie_search_outline_icon_139356.png"
              height="30"
              alt=""
              loading="lazy"
            />
            <h1 style={{ color: "white" }}>MOVIE SEARCH</h1>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>

      {/*  Carousel */}
      <MDBCarousel>
        <MDBCarouselItem itemId={1}>
          <img
            src="https://img.freepik.com/free-vector/online-movies-entertainment-banner_1419-2246.jpg?w=1380&t=st=1706940749~exp=1706941349~hmac=ebd69f8120a54ba883a2b33b2f66a66259ea14fe62c1db0fa01d3d491ba36b0b"
            className="d-block w-100"
            alt="..."
          />
          <MDBCarouselCaption>
            <h5 style={{position:"relative",bottom:"50px"}}>
              Your One Stop To find All your Movies
            </h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarousel>
    </>
  );
}

export default Header;

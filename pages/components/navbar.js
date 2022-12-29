import React, { useState, createContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Toast from "react-bootstrap/Toast";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "../../styles/Home.module.css";
import Router from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const UserContext = createContext();

function NavigateBar(props) {
  const [movie, setMovie] = useState("");
  const expand = ["lg"];
  const [show, setShow] = useState(false);
  const [erorCode, setErorCode] = useState("");
  const [erorValue, setErorValue] = useState(
    "You might be mistyped Movie name Hence Movie Not Found."
  );
  function handleMovieChange(e) {
    setMovie(e.target.value);
  }

  function keyPress(e) {
    if (e.keyCode === 13) {
      if (
        typeof movie === "undefined" ||
        (typeof movie === "string" && movie.trim().length === 0)
      ) {
        setErorValue(
          "Invalid combination of letters Searched , Such as Empty characters!."
        );
        setErorCode("Error 422 ! Unsupported Entry");
        setShow(true);
      } else {
        Router.push(`/movie/search?s=` + movie);
      }

      e.preventDefault();
    }
  }
  function onpress() {
    if (
      typeof movie === "undefined" ||
      (typeof movie === "string" && movie.trim().length === 0)
    ) {
      setErorValue(
        "Invalid combination of letters Searched , Such as Empty characters!."
      );
      setErorCode("Error 422 ! Unsupported Entry");
      setShow(true);
    } else {
      Router.push(`/movie/search?s=` + movie);
    }
  }

  return (
    <UserContext.Provider value={{ movie }}>
      <>
        <Toast
          onClose={() => setShow(false)}
          show={show}
          delay={3000}
          style={{
            position: "fixed",
            zIndex: "4",
            bottom: "2rem",
            left: "2rem",
            border: "1px solid white",
            borderRadius: "5px",
          }}
          autohide
        >
          <Toast.Header
            style={{
              background: "#a9414b",
            }}
          >
            <strong className="me-auto">{erorCode}</strong>
          </Toast.Header>
          <Toast.Body
            style={{
              background: "black",
            }}
          >
            {erorValue}
          </Toast.Body>
        </Toast>
        <Navbar
          key={expand}
          expand={expand}
          className={`bgBlack fontWhite`}
          style={{
            position: "sticky",
            top: "0",
            padding: "0px",
            margin: "auto",
          }}
        >
          <Container
            fluid
            className={`fontWhite  ${styles.navbarOnMob}`}
            style={{ width: "80vw", height: "15vh" }}
          >
            <Navbar.Brand
              href="#"
              onClick={() => Router.push("/")}
              style={{
                fontSize: "x-large",
                fontWeight: "bold",
                textShadow: "-2px 2px 4px #00d4ff",
                fontVariant: "petite-caps",
              }}
            >
              FluX Movies
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 fontWhite">
                  <Nav.Link href="#" onClick={() => Router.push("/")}>
                    Home
                  </Nav.Link>
                  <Nav.Link
                    href="#"
                    onClick={() => Router.push("/movie/search")}
                  >
                    Movies
                  </Nav.Link>
                </Nav>
                <Form className={`${styles.bigScreen}`}>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    value={movie}
                    onChange={handleMovieChange}
                    onKeyDown={keyPress}
                    className="me-2 bgBlack fontWhite"
                    aria-label="Search"
                  />
                  <Button variant="outline-dark" onClick={onpress}>
                    Search
                  </Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <Form
          className={`${styles.mobileviewflex}`}
          style={{ maxWidth: "85vw", margin: "auto" }}
        >
          <Form.Control
            type="search"
            placeholder="Search"
            value={movie}
            onChange={handleMovieChange}
            onKeyDown={keyPress}
            className="me-2 bgBlack fontWhite"
            aria-label="Search"
          />
          {/* <Button variant="outline-dark" onClick={onpress}></Button> */}
          <FontAwesomeIcon
            icon={faSearch}
            onClick={onpress}
            style={{
              display: "flex",
              height: "2rem",
              alignSelf: "center",
              margin: "2px",
            }}
          />
        </Form>
        {props.children}
      </>
    </UserContext.Provider>
  );
}
// export const MOVIE = { movie };

export default NavigateBar;

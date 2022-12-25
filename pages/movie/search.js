import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import Placeholder from "react-bootstrap/Placeholder";
import img from "../../public/thirteen.svg";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import stylis from "../../styles/Home.module.css";

function About(props) {
  const [movie, setMovie] = useState(props.s);
  const key = "2d4765cd";
  const [data, setData] = useState([]);
  const [check, setCheck] = useState(false);
  const [erorCode, setErorCode] = useState("");
  const [erorValue, setErorValue] = useState(
    "You might be mistyped Movie name Hence Movie Not Found."
  );

  // const [src, setSrc] = useState(
  //   "https://m.media-amazon.com/images/M/MV5BOTk3MDNhODEtMWYyMC00NmVjLTg3NzgtNjI1MzA4ZmVhMjE2XkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_SX300.jpg"
  // );

  async function api() {
    loading.style.display = "flex";
    displaycard.style.display = "None";
    console.log(movie);
    Eror.style.display = "none";

    await fetch(`http://www.omdbapi.com/?apikey=${key}&s=${movie}`, {
      mode: "no-cors",
    })
      .then((response) => response.json())
      .then((d) => {
        if (d["Response"] == "False") {
          Eror.style.display = "Block";
          setErorCode("Error 404! No match Found.");
          setErorValue(
            "You might be mistyped Movie name Hence Movie Not Found."
          );
          setData([]);
        } else {
          displaycard.style.display = "block";
          setCheck(true);
          setData(d["Search"]);

          console.log(data);
        }
        loading.style.display = "None";
      });
  }

  function handleMovieChange(e) {
    setMovie(e.target.value);
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
    } else {
      api();
    }
  }
  function keyPress(e) {
    if (e.keyCode === 13) {
      // console.log("value", e.target.value);
      if (
        typeof movie === "undefined" ||
        (typeof movie === "string" && movie.trim().length === 0)
      ) {
        setErorValue(
          "Invalid combination of letters Searched , Such as Empty characters!."
        );
        setErorCode("Error 422 ! Unsupported Entry");
      } else {
        api();
      }
      e.preventDefault();
    }
  }

  useEffect(() => {
    api();
    return;
  }, []);

  return (
    <>
      {/* {api()} */}
      <InputGroup className="mb-3 mx-auto" style={{ width: "80vw" }}>
        <Form.Control
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          placeholder="Search your Movie By Name"
          value={movie}
          onChange={handleMovieChange}
          onKeyDown={keyPress}
          className="bgBlack"
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={onpress}
        >
          Search
        </Button>
      </InputGroup>
      <div id="displaycard">
        {check ? (
          data.slice(0, 6).map((m, i) => (
            <Card
              style={{
                width: "60vw",
                display: "flex",
                margin: "Auto",
                flexDirection: "row",
              }}
              key={i}
              className="displaycard bgBlack"
            >
              <div className={stylis.thirteen}>
                <img
                  // If Image component of Nextjs is used
                  // to Understand the concept behind loader function read this Image Optimization article from next js Documentation
                  // https://nextjs.org/docs/basic-features/image-optimization
                  // loader={({ src }) => {
                  //   return m.Poster;
                  // }}
                  src={m.Poster}
                  style={{
                    margin: "Auto",
                    height: "25vh",
                    filter: "none",
                  }}
                  alt=".."
                />
              </div>

              <Card.Body>
                <Card.Title>{m.Title}</Card.Title>
                <Card.Text>{m.Type}</Card.Text>
                <Card.Text>{m.Year}</Card.Text>
                <Button variant="primary" onClick={() => Router.push(m.imdbID)}>
                  Details
                </Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <div>no</div>
        )}
      </div>
      {/* loading Skeleton */}
      <Card
        style={{
          width: "60vw",
          margin: "Auto",
          display: "flex",
          flexDirection: "row",
        }}
        className="bgBlack"
        id="loading"
      >
        <Image
          src={img}
          alt=".."
          style={{
            margin: "Auto",
            height: "80px",
            width: "auto",
            padding: "1rem",
          }}
        />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={11} />
            <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={2} />
        </Card.Body>
      </Card>

      {/* Error box */}
      <Alert
        id="Eror"
        variant="danger"
        onClose={() => (Eror.style.display = "none")}
        dismissible
        style={{
          width: "75vw",
          margin: "auto",
          backgroundColor: "#a9414b",
          display: "none",
        }}
        className="thirteen"
      >
        <Alert.Heading>{erorCode}</Alert.Heading>
        <p>{erorValue}</p>
      </Alert>
    </>
  );
}

export async function getServerSideProps(context) {
  var s = context.query.s;

  if (typeof s === "undefined") {
    s = "Bollywood";
  }
  return {
    props: { s }, // will be passed to the page component as props
  };
}
export default About;

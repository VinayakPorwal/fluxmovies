import Router, { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import img from "../../public/thirteen.svg";
import Image from "next/image";
import stylis from "../../styles/Home.module.css";

function movies() {
  const key = "2d4765cd";
  const router = useRouter();

  const [data, setData] = useState([]);

  const [src, setSrc] = useState();
  const { query, isReady } = useRouter();
  useEffect(() => {
    if (!router.isReady) return;

    // codes using router.query
    // router.query.movies;
    api(router.query.movies);
    return;
  }, [router.isReady]);

  async function api(abc) {
    console.log(abc);
    loading.style.display = "flex";
    displaycard.style.display = "None";
    // if (abc != null) {
    await fetch(`http://www.omdbapi.com/?apikey=${key}&i=${abc}&plot=full`)
      .then((response) => response.json())
      .then((d) => {
        if (d["Response"] == "False") setData([]);
        else {
          loading.style.display = "None";
          displaycard.style.display = "block";
          setSrc(d["Poster"]);
          setData(d);
          console.log(d);
        }
      });
    // }
  }
  //   const ratings = data["Ratings"];
  //   console.log(ratings[0]);

  return (
    <>
      <div id="displaycard" style={{ display: "none" }}>
        <Card
          style={{
            width: "80vw",
            display: "flex",
            margin: "Auto",
            flexDirection: "row",
          }}
          className="bgBlack"
        >
          <div className={stylis.thirteen}>
            <Image
              // to Understand the concept behind loader function read this Image Optimization article from next js Documentation
              // https://nextjs.org/docs/basic-features/image-optimization
              loader={({ src }) => {
                return data["Poster"];
              }}
              src={src}
              width={300}
              height={400}
              style={{
                margin: "Auto",
                padding: "1rem",
                zIndex: "1",
                filter: "none",
              }}
              alt=".."
            />
          </div>

          <Card.Body>
            <Card.Title>{data["Title"]}</Card.Title>
            <Card.Text>{data["Actors"]}</Card.Text>
            <Card.Text>{data["Type"]}</Card.Text>
            <Card.Text>Director: {data["Director"]}</Card.Text>
            <Card.Text>Writer: {data["Writer"]}</Card.Text>
            <Card.Text>Duration: {data["Runtime"]}</Card.Text>
            <Card.Text>Language: {data["Language"]}</Card.Text>
            <Card.Text> IMDb ratings: {data["imdbRating"]}/10</Card.Text>
            <Card.Text>Collection: {data["BoxOffice"]}</Card.Text>
            <Button variant="primary">{data["Year"]}</Button>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "80vw",
            display: "block",
            margin: "Auto",
          }}
          className="bgBlack"
        >
          <Card.Text style={{ padding: "1rem" }}>{data["Plot"]}</Card.Text>
        </Card>
      </div>
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
    </>
  );
}

export default movies;

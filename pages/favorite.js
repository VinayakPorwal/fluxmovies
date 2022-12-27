import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Router from "next/router";

function FavoriteList(props) {
  if (typeof window !== "undefined") {
    console.log("we are running on the client");
  } else {
    console.log("we are running on the server");
  }
  const [src, setSrc] = useState(
    "https://m.media-amazon.com/images/M/MV5BOTk3MDNhODEtMWYyMC00NmVjLTg3NzgtNjI1MzA4ZmVhMjE2XkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_SX300.jpg"
  );
  //   const favdata = props.getdata;
  const favoriteData = props.favoriteData;
  const check = props.check;

  return (
    <div>
      {" "}
      {/* Favorites */}
      <div id="DynamicFavData" style={{ display: "none" }}>
        <Card.Header
          as="h5"
          style={{ width: "80vw", alignItems: "center", margin: "1rem auto" }}
          id="scrolltofav"
        >
          {favoriteData.length} Favorites
        </Card.Header>

        <Card
          className={`${styles.thirteen} bgBlack mb-3`}
          id="favorites"
          style={{ width: "80vw", alignItems: "center", margin: "auto" }}
        >
          <div
            className={`${styles.grid} ${styles.scrolbar}`}
            style={{
              overflowX: "scroll",
              width: "fit-content",
              display: "flex",
            }}
          >
            {check &&
              favoriteData.map((obj) => (
                <Card.Body style={{ textAlign: "center" }} key={obj.imdb}>
                  <Image
                    alt="movie"
                    loader={() => {
                      return obj.poster;
                    }}
                    src={obj.poster}
                    priority
                    //   src={src}
                    width={120}
                    height={400}
                    style={{
                      height: "25vh",
                      filter: "none",
                      width: "auto",

                      cursor: "pointer",
                      marginBottom: "2px",
                    }}
                    onClick={() => Router.push("movie/" + obj.imdb)}
                  />
                  <Card.Title className={styles.movieName}>
                    {obj.title}
                  </Card.Title>
                  {/* <Card.Text>{m.Year}</Card.Text> */}
                  <Button
                    variant="secondary"
                    onClick={() => {
                      var objId = obj.imdb;
                      const removeItem = favoriteData.filter((data) => {
                        return data.imdb !== objId;
                      });
                      setFavoriteData(removeItem);
                      console.log("remove", removeItem);
                      localStorage.setItem("favs", JSON.stringify(removeItem));
                      console.log(
                        "update",
                        JSON.parse(localStorage.getItem("favs"))
                      );
                    }}
                  >
                    Remove
                  </Button>
                </Card.Body>
              ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default FavoriteList;

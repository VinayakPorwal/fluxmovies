import { useState, useEffect } from "react";
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

  //   const favdata = props.getdata;
  // const check = props.check;
  //   const favoriteData = props.favoriteData;
  const [check, setCheck] = useState(true);
  const [favoriteData, setFavoriteData] = useState([]);

  useEffect(() => {
    // if (!favoriteData) {
    if (check) {
      setFavoriteData(props.favoriteData);
    }
    // }
    // console.log(favoriteData);
    // console.log(props.favoriteData);
  });

  const remove = (obj) => {
    var objId = obj.imdb;
    const removeItem = favoriteData.filter((data) => {
      return data.imdb !== objId;
    });
    if (removeItem.length < 1) {
      DynamicFavData.style.display = "none";
    }
    setFavoriteData(removeItem);
    setCheck(false);
    console.log("remove", removeItem);
    localStorage.setItem("favs", JSON.stringify(removeItem));
    console.log("update", JSON.parse(localStorage.getItem("favs")));
  };
  return (
    <div id="DynamicFavData" style={{ display: "none" }}>
      <Card.Header
        as="h5"
        style={{ width: "80vw", alignItems: "center", margin: "1rem auto" }}
        id="scrolltofav"
      >
        {check && favoriteData.length} Favorites
      </Card.Header>
      <Card
        className={`${styles.thirteen} ${styles.widthChange} bgBlack mb-3`}
        id="favorites"
        style={{
          width: "80vw",
          alignItems: "center",
          margin: "auto",
          padding: "10px 0 0 0",
        }}
      >
        <div
          className={`${styles.grid} ${styles.scrolbar} `}
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
                  // src={img}
                  width={120}
                  height={400}
                  className={styles.image}
                  onClick={() => Router.push("movie/" + obj.imdb)}
                />
                <Card.Title className={styles.movieName}>
                  {obj.title}
                </Card.Title>
                <Button variant="secondary" onClick={() => remove(obj)}>
                  Remove
                </Button>
              </Card.Body>
            ))}
        </div>
      </Card>
    </div>
  );
}

export default FavoriteList;

//UNDER DEVELOPMENT------------------------------

import Head from "next/head";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Crousel from "./components/crousal";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import FeaturedList from "./featured";
import FavoriteList from "./favorite";

export default function Home(props) {
  const [movies, setMovies] = useState(props.data);
  const [src, setSrc] = useState(
    "https://m.media-amazon.com/images/M/MV5BOTk3MDNhODEtMWYyMC00NmVjLTg3NzgtNjI1MzA4ZmVhMjE2XkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_SX300.jpg"
  );
  const [favoriteData, setFavoriteData] = useState([]);
  const [check, setCheck] = useState(false);

  const favdata = () => {
    var getdata = JSON.parse(localStorage.getItem("favs"));

    if (getdata) {
      if (getdata.length < 1) return;

      setFavoriteData(getdata);
      console.log(favoriteData);
      DynamicFavData.style.display = "block";
      setCheck(true);
      // document
      //   .getElementById("scrolltofav")
      //   .scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    favdata();
  }, []);

  return (
    <>
      <Head>
        <title>Flux Movies</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p className={styles.cardp}></p>
        <p className={styles.cardp}></p>

        <div
          className={`${styles.font} ${styles.ccenter}`}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h2 className={styles.greet}>Welcome to</h2>
          <div
            className={`${styles.font} ${styles.thirteen}`}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h2 className={styles.typewriter}>FLUXMOVIES</h2>
          </div>
          <Button
            variant="primary"
            onClick={favdata}
            style={{
              zIndex: "4",
            }}
          >
            Go to Favorites
          </Button>
        </div>
        <p className={styles.cardp}>
          Some Movies You might like Are here, Scroll Down below!
        </p>
      </main>
      {/* <Crousel src={src} movies={featured} /> */}

      {/* Featured */}
      <FeaturedList />

      {/* Favorites */}
      <FavoriteList check={check} favoriteData={favoriteData} />

      {/* Footer */}
      <Card
        className={` ${styles.center} text-center`}
        style={{
          background: "transparent",
          padding: "0",
          borderTop: "1px solid grey",
          margin: "0",
        }}
      >
        <Card.Body>
          <Card.Title>Thanks for Visiting!</Card.Title>
          <Card.Text>
            If you found any bug or error,Kindly share on Github with Developer.
          </Card.Text>
          <Button variant="info">Review</Button>
        </Card.Body>
        <Card.Footer className="text-muted">Copyright @2023</Card.Footer>
      </Card>
    </>
  );
}
export async function getServerSideProps(context) {
  const movieName = "dhoom";
  const key = "2d4765cd";
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${key}&s=${movieName}`,
    {
      mode: "no-cors",
    }
  );
  var data = await res.json();
  data = data["Search"];

  return {
    props: { data }, // will be passed to the page component as props
  };
}

//https://cdn.ggcc8.com//movies/disk3/disk3_2/Zakir%20Khan-%20Tathastu.mp4

import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Crousel from "./components/crousal";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Router from "next/router";

export default function Home(props) {
  const [movies, setMovies] = useState(props.data);
  const [src, setSrc] = useState(
    "https://m.media-amazon.com/images/M/MV5BOTk3MDNhODEtMWYyMC00NmVjLTg3NzgtNjI1MzA4ZmVhMjE2XkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_SX300.jpg"
  );
  const [featured, setFeatured] = useState([
    {
      Title: "3 Idiots",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      Type: "movie",
      Year: "2009",
      imdbID: "tt1187043",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYmIzYmY4MGItM2I4YS00OWZhLWFmMzQtYzI2MWY1MmM3NGU1XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg",
      Title: "Jab We Met",
      Type: "movie",
      Year: "2007",
      imdbID: "tt1093370",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTc3NzAxMjg4M15BMl5BanBnXkFtZTcwMDc2ODQwNw@@._V1_SX300.jpg",
      Title: "Rockstar",
      Type: "movie",
      Year: "2011",
      imdbID: "tt1839596",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg",
      Title: "Spider-Man: No Way Home",
      Type: "movie",
      Year: "2021",
      imdbID: "tt10872600",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDhhMjBlMWYtMDVlMy00ZjM3LTg3MTUtZDg0NjA0YzcxOGY4XkEyXkFqcGdeQXVyMTE0MzY0NjE1._V1_SX300.jpg",
      Title: "777 Charlie",
      Type: "movie",
      Year: "2022",
      imdbID: "tt7466810",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYmZhNjhkN2UtN2I3NS00MzUyLTg3M2YtNjRjN2Y2NmNhNzUxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
      Title: "Ajab Prem Ki Ghazab Kahani",
      Type: "movie",
      Year: "2009",
      imdbID: "tt1252596",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2RjZDJhYzUtOTQ5Yy00OWM3LWE5OTctM2Y0YWVmNzAzODllXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_SX300.jpg",
      Title: "Sita Ramam",
      Type: "movie",
      Year: "2022",
      imdbID: "tt20850406",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzU3YjM0YWItZjFjMS00MDRhLWI5OWMtNDA1ZTI5YWRlYjljXkEyXkFqcGdeQXVyMTIyNzY0NTMx._V1_SX300.jpg",
      Title: "TVF Pitchers",
      Type: "series",
      Year: "2015–2022",
      imdbID: "tt4742876",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZDkxODJmNDktZDcxMy00MGJkLWI3NzEtNzVkYTdkZWI0ZmVkXkEyXkFqcGdeQXVyNDY4NjAxNTc@._V1_SX300.jpg",
      Title: "Panchayat",
      Type: "series",
      Year: "2020–",
      imdbID: "tt12004706",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTNkNmVmOTItNzlmNi00MjE5LWE2YzEtNzBlOTNiNmE0OTUzXkEyXkFqcGdeQXVyNDY5MTUyNjU@._V1_SX300.jpg",
      Title: "Ra.One",
      Type: "movie",
      Year: "2011",
      imdbID: "tt1562871",
    },
  ]);
  return (
    <>
      <Head>
        <title>Flux Movies</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/thirteen.svg" />
      </Head>
      <main className={styles.mmain}>
        <p className={styles.cardp}></p>
        <p className={styles.cardp}></p>

        <div
          className={`${styles.font} ${styles.ccenter}`}
          // onClick={() => Router.push("/posts/about")}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h2 className={styles.greet}>Welcome to</h2>
          <div
            className={`${styles.font} ${styles.thirteen}`}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h2 className={styles.typewriter}>FLUXMOVIES</h2>
          </div>
        </div>
        <p className={styles.cardp}>
          Some Movies You might like Are here, Scroll Down below!
        </p>
      </main>
      {/* <Crousel src={src} movies={featured} /> */}

      <Card.Header
        as="h5"
        style={{ width: "80vw", alignItems: "center", margin: "1rem auto" }}
      >
        Featured
      </Card.Header>
      <Card
        className={`${styles.thirteen} bgBlack`}
        style={{ width: "80vw", alignItems: "center", margin: "auto" }}
      >
        <div
          className={`${styles.grid} `}
          // style={{ border: "1px solid white" }}
        >
          {featured.map((m, i) => (
            <Card.Body style={{ textAlign: "center" }} key={i}>
              <img
                src={m.Poster}
                alt="movie"
                style={{
                  height: "25vh",
                  filter: "none",
                }}
              />
              <Card.Title>{m.Title}</Card.Title>
              <Card.Text>{m.Type}</Card.Text>
              {/* <Card.Text>{m.Year}</Card.Text> */}
              <Button
                variant="primary"
                onClick={() => Router.push("movie/" + m.imdbID)}
              >
                Details
              </Button>
            </Card.Body>
          ))}
        </div>
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
  // console.log(data["Search"]);
  data = data["Search"];

  return {
    props: { data }, // will be passed to the page component as props
  };
}

// ALL FILES CODE REFORM , RESTRUCTURE , REDUCE

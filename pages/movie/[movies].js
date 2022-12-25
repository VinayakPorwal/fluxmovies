import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import img from "../../public/thirteen.svg";
import Image from "next/image";
import stylis from "../../styles/Home.module.css";

function movies(props) {
  const data = props.data;
  const src = props.data["Poster"];
  return (
    <>
      <div id="displaycard" style={{}}>
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

      {/* Skeleton loading  */}
      <Card
        style={{
          width: "60vw",
          margin: "Auto",
          // display: "flex", //remove Comment to see skeleton loading
          display: "none",
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
export async function getServerSideProps(context) {
  const key = "2d4765cd";
  var abc = context.query.movies;
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${key}&i=${abc}&ploot=full`
  );
  var data = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default movies;

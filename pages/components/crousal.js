// import Carousel from "react-bootstrap/Carousel";
// import { useState } from "react";
// import Image from "next/image";
// import Router from "next/router";
// function Crousel(props) {
//   const movies = props.movies;
//   const src = props.src;
//   return (
//     <Carousel
//       style={{
//         width: "80vw",
//         margin: "auto",
//         position: "absolute",
//         top: "16vh",
//         left: "11%",
//         zIndex: "-1",
//         opacity: "0.6",
//       }}
//     >
//       {movies.slice(0, 5).map((m, i) => (
//         <Carousel.Item key={i} onClick={() => Router.push(`movie/` + m.imdbID)}>
//           <h4
//             style={{
//               textAlign: "center",
//             }}
//           >
//             {m.Title}
//           </h4>
//           <img
//             // to Understand the concept behind loader function read this Image Optimization article from next js Documentation
//             // https://nextjs.org/docs/basic-features/image-optimization
//             // loader={({ src }) => {
//             //   return m.Poster;
//             // }}
//             className="d-block"
//             src={m.Poster}
//             alt=".."
//             style={{ width: "40vw", height: "80vh", margin: "auto" }}
//           />
//           <Carousel.Caption style={{ opacity: "1", zIndex: "2" }}>
//             {/* <p>{m.Year}</p> */}
//           </Carousel.Caption>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// }

// export default Crousel;
// export async function getServerSideProps(context) {
//   const movieName = "dhoom";
//   const key = "2d4765cd";
//   const res = await fetch(
//     `http://www.omdbapi.com/?apikey=${key}&s=${movieName}`,
//     {
//       mode: "no-cors",
//     }
//   );
//   var data = await res.json();
//   data = data["Search"];

//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }

function Crousel() {
  return <div>Enter</div>;
}

export default Crousel;

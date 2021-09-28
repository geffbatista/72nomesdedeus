import SeventyTwoNamesOfGod from "../api/72-nomes-de-deus";
import Home from "./Home";

const fetchNames = () => {
  fetch("https://72namesofgod.glitch.me", {
    method: "POST",
  }).then(function (response) {
    console.log("-> response from glitch");
    console.log(response);
    console.log("-> response.body from glitch");
    console.log(response.body);
    console.log("---------------------");
    console.log("---------------------");
    console.log("---------------------");
  });
};

export async function getStaticProps() {
  // const namesFromApi = await fetchNames();

  // console.log("namesFromApi: ", namesFromApi);
  // console.log("############################");
  // console.log("############################");
  // console.log("############################");

  return {
    props: { SeventyTwoNames: SeventyTwoNamesOfGod },
  };
}

export default Home;

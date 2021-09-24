import SeventyTwoNamesOfGod from "../api/72-nomes-de-deus";
import Home from "./Home";

export async function getStaticProps() {
  return {
    props: { SeventyTwoNames: SeventyTwoNamesOfGod, isMeditating: true },
  };
}

export default Home;

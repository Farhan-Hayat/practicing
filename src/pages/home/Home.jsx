import HomeSection1 from "../../components/homePage/homeSection1/HomeSection1";
import styles from "./home.module.css"
import HomeSection2 from "../../components/homePage/homeSection2/HomeSection2";
import HomeSection3 from "../../components/homePage/homeSection3/HomeSection3";
import HomeSection4 from "../../components/homePage/homeSection4/HomeSection4";
import HomeSection5 from "../../components/homePage/homeSection5/HomeSection5";
import HomeSection6 from "../../components/homePage/homeSection6/HomeSection6";
const Home = () => {
  return (
    <div className={styles.Home}>
      <HomeSection1/>
      <HomeSection2/>
      <HomeSection3/>
      <HomeSection4/>
      <HomeSection5/>
      <HomeSection6/>
    </div>
  );
};

export default Home;

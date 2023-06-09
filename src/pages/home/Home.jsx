import "./Home.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import Featured from "../../components/featured/Featured"
import List from "../list/List"
import PropertyList from "../../components/propertyList/PropertyList"
import FeaturedProperties from "../../featuredproperties/FeaturedProperties"
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      {/* <List/> */}
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Home guest love </h1>
        <FeaturedProperties/>
      </div>

    </div>
  )
}

export default Home
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipPP__cyFT31tYJwA73DNBti77tV-Lr6YUVbSS8a=s1360-w1360-h1020"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Kigali</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://rcb.rw/IMG/logo/arton12.jpg?1591179448"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Rwanda</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Gasabo</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
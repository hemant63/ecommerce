import React from "react";
import Crousel from "./Crousel";

const Home = () => {
  return (
    <div className="home">
      <Crousel />
      <div className="bundle">
        <h2>Featured Brands</h2>
        <div className="description">
          <img src="https://rukminim1.flixcart.com/fk-p-flap/450/280/image/28599d2e8292ebad.jpeg?q=20" alt="adidas" />
          <img src="https://rukminim1.flixcart.com/fk-p-flap/450/280/image/6b731ee205f466a5.jpeg?q=20" alt="poco f6" />
          <img src="https://rukminim1.flixcart.com/fk-p-flap/450/280/image/4286a78c712a58cd.jpeg?q=20" alt="lenovo" />
        </div>
      </div>
      <div className="bundle">
        <h2>BestSellers</h2>
        <div className="description">
          <img className="set" src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/q/j/8/-original-imah23cqtprzgeje.jpeg?q=70" alt="campus" />
          <img className="set" src="https://rukminim2.flixcart.com/image/612/612/korijrk0/top/y/d/s/l-sftops40039-sassafras-original-imag35ctanxhhz8u.jpeg?q=70" alt="top" />
          <img className="set" src="https://rukminim2.flixcart.com/image/612/612/xif0q/jewellery-set/8/e/o/na-na-netri-lyriss-original-imah2gm4hdkagtwh.jpeg?q=70" alt="silverSet" />
          <img className="set" src="https://rukminim2.flixcart.com/image/612/612/xif0q/watch/n/z/1/-original-imagpfdvsuhqmxew.jpeg?q=70" alt="watch" />
          <img className="set" src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/w/m/h/xl-sum24-csmssrt5995-campus-sutra-original-imagycsgcqvpwm7x.jpeg?q=70" alt="CrochetShirt" />
          <img className="set" src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/9/0/-original-imahyuhfg2z4fvyh.jpeg?q=70" alt="realmeP1" />
          <img className="set" src="https://rukminim2.flixcart.com/image/150/150/xif0q/computer/8/i/j/-original-imagthcbgurdzwuc.jpeg?q=70" alt="intel" />
        </div>
      </div>
    </div>
  );
};

export default Home;

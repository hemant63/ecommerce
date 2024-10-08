function Footer() {
  return (
    <div
      className="footer"
      style={{
        backgroundColor: "#070F2B",
        display: "flex",
        justifyContent: "space-between",
        paddingRight: "100px",
        paddingLeft: "100px",
        paddingTop: "0px",
        paddingBottom: "30px",
        width: "auto",
        flexShrink: "0",
      }}
    >
      <div>
        <h1 style={{ color: "grey" }}>Flipkart</h1>
        <h3 style={{color: "grey"}}>Social</h3>
        <span style={{display:"flex"}}>
          <a href="https://www.linkedin.com/" target="_blank">
            <img src="icons/linkedin.png" alt="linkedin" />
          </a>
          <a href="https://facebook.com/" target="_blank">
            <img src="icons/facebook-app-symbol.png" alt="facebook" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src="icons/instagram.png" alt="instagram" />
          </a>
          <a href="mailto:palhemant663@gmail.com">
            <img src="" alt="email" />
          </a>
        </span>
      </div>
      <div>
        <h3 style={{ color: "gray" }}>Product</h3>
        <span style={{ color: "whitesmoke" }}>
          <p>Clothes</p>
          <p>Electronic Appliances</p>
          <p>Home Decors</p>
          <p>Mobiles & Accessories</p>
        </span>
      </div>
      <div>
        <h3 style={{ color: "gray" }}>Company</h3>
        <span style={{ color: "whitesmoke" }}>
          <p>About us</p>
          <p>News</p>
          <p>Press</p>
        </span>
      </div>
      <div>
        <h3 style={{ color: "gray" }}>Legal</h3>
        <span style={{ color: "whitesmoke" }}>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </span>
      </div>
    </div>
  );
}

export default Footer;

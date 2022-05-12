export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Why Choose Us?</h3>
                <div className="about-why">
                Our integrity, quality of work, and adaptation to change of requirements impressed us the most. Also expertise, availability, and professionalism. More clients most impressed by the collaboration that we worked well together. 

                Our engineers provided high-quality, reliable support. They’re particularly excellent at. Their finished work products have received very positive feedback for their usability. They’ve successfully met the client’s requirements and will continue to be an ongoing partner. 
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

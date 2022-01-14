import './Countries.scss'
function Countries(){
  return<section className="countries grid wide">
          <h2 className="slogan">Popular countries with us</h2>
          <div className="row">
            <div className="col l-3 m-3">
              <ul>
                <li>United States</li>
                <li>Spain</li>
                <li>Brazil</li>
                <li>Mexico</li>
                <li>Japan</li>
              </ul>
            </div>
            <div className="col l-3 m-3">
              <ul>
                <li>Canada</li>
                <li>Australia</li>
                <li>Poland</li>
                <li>United Kingdom</li>
                <li>Italy</li>
              </ul>
            </div>
            <div className="col l-3 m-3">
              <ul>
                <li>Switzerland</li>
                <li>Chile</li>
                <li>New Zealand</li>
                <li>Tiwan (ROC)</li>
                <li>South Africa</li>
              </ul>
            </div>
            <div className="col l-3 m-3">
              <ul>
                <li>Ecuador</li>
                <li>Iraland</li>
                <li>Sri Lanka</li>
                <li>Dominican Republic</li>
                <li>Sweden</li>
              </ul>
            </div>
          </div>
  </section>
}

export default Countries
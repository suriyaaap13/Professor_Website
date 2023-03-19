import img1 from '../../images/IMG_2.png';
import img2 from '../../images/DSC_00641.png';
import img3 from '../../images/agra tour.jpg';
import './index.css';

export default function index() {
  return (
    <div>
        <input type="radio" name="Photos" id="check1" defaultChecked/>
        <input type="radio" name="Photos" id="check2"/>
        <input type="radio" name="Photos" id="check3"/>
    
    <div className="container">
        <h1>Our Photo Gallery</h1>
        <div className="top-content">
            <h3>Photo Gallery</h3>
            <label htmlFor="check1">All Photos</label>
            <label htmlFor="check2">Family Photos</label>
            <label htmlFor="check3">Visited Photos</label>
            
        </div>

        <div className="photo-gallery">
            <div className="pic place">
                <img src={img1} alt='photos' width="800px" height="600px"/>
            </div>
            <div className="pic family">
                <img src={img2} alt='photos' width="800px" height="600px"/>
            </div>
            <div className="pic visited">
                <img src={img3} alt='photos' width="800px" height="600px"/>
            </div>
        </div>
    </div>
    </div>
  );
}

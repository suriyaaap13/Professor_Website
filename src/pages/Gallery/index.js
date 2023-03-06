import img1 from '../../images/IMG_2.png';
import img2 from '../../images/DSC_00641.png';
import img3 from '../../images/agra tour.jpg';
import './index.css';

export default function index() {
  return (
    <div>
        <input type="radio" name="Photos" id="check1" checked/>
        <input type="radio" name="Photos" id="check2"/>
        <input type="radio" name="Photos" id="check3"/>
    
    <div class="container">
        <h1>Our Photo Gallery</h1>
        <div class="top-content">
            <h3>Photo Gallery</h3>
            <label for="check1">All Photos</label>
            <label for="check2">Family Photos</label>
            <label for="check3">Visited Photos</label>
            
        </div>

        <div class="photo-gallery">
            <div class="pic place">
                <img src={img1} alt='photos' width="800px" height="600px"/>
            </div>
            <div class="pic family">
                <img src={img2} alt='photos' width="800px" height="600px"/>
            </div>
            <div class="pic visited">
                <img src={img3} alt='photos' width="800px" height="600px"/>
            </div>
        </div>
    </div>
    </div>
  );
}

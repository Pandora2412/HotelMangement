import gallery1 from "../img/gallery1.png";
import gallery2 from "../img/gallery2.png";
import gallery3 from "../img/gallery3.png";
import gallery4 from "../img/gallery4.png";

function Gallery(){
    return(
      <div className="thuvienanh">
        <div className="container-fluid" id="gallery"> 
          <div className="row"> 
            <div className="col-2"> <h1 className="float-end">Gallery</h1> </div>
            <div className="col-6" id="gallery_line"> </div>
          </div>
        </div>

        <div className="container-fluid" id="anhgallery">
          <div className="row justify-content-center" style={{margin: '0'}}>
            <div className="col-3 d-flex justify-content-center"><img src={gallery1} alt=""/></div>
            <div className="col-2 d-flex justify-content-center"><img src={gallery2} alt=""/></div>
            <div className="col-2 d-flex justify-content-center"><img src={gallery3} alt=""/></div>
            <div className="col-3 d-flex justify-content-center"><img src={gallery4} alt=""/></div>
          </div>
        </div>

      </div>
    )
}

export default Gallery;
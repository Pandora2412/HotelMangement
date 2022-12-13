
function RoomDetails(props){
    return(
        <div className="room">
            <div className="row">
                <div className="col-5">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={require('../img/' + props.img1 + '.png')} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={require('../img/' + props.img2 + '.png')} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={require('../img/' + props.img3 + '.png')} className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>

                </div>
                <div className="col-5">
                    <h2>{props.roomtype}</h2>
                    <p className="price">{props.price}</p>
                    <p>{props.des1}</p>
                    <p>{props.des2}</p>
                    <p>{props.des3}</p>
                    <p>{props.des4}</p>                    
                    <form className="d-flex" role="search">
                        <button className="btn btn-outline-success" type="submit" id="datngay2">Đặt ngay</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RoomDetails;
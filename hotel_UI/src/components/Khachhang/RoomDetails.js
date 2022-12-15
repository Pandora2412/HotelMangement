
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
                            <img src={require('../../Image/Customer/' + props.img1 + '.png')} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={require('../../Image/Customer/' + props.img2 + '.png')} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={require('../../Image/Customer/' + props.img3 + '.png')} className="d-block w-100" alt="..."/>
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
                    <button className="btn btn-outline-success" id="datngay2" onClick={() => {
                        const newSelections = {
                            "type": props.index === 2?"VIP ROOM":props.index === 1?"SUPERIOR ROOM":"STANDARD ROOM",
                            "price": props.index === 0?6000000:props.index === 1?3000000:1500000,
                            "bancong": props.selectList[props.index*5],
                            "view": props.selectList[props.index*5 + 4]?1:props.selectList[props.index*5 + 3]?2:props.selectList[props.index*5 + 2]?3:1,
                        };
                        props.setSelections([...props.selections, newSelections]);
                        props.setTotal(props.total + newSelections.price + (newSelections.bancong?100000:0) + (newSelections.view === 1?500000:newSelections.view === 2?300000:0));
                    }}>Đặt ngay</button>
                </div>
            </div>
        </div>
    );
}

export default RoomDetails;
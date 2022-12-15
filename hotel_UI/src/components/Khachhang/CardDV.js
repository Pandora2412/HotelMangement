
function CardDV(props){
    return(
        <div className="card" style={{width: '20rem'}}>
            <img src={require('../../Image/Customer/' + props.img + '.png')} className="card-img-top" alt="..."/>
            <div className="card-body">
            <p className="card-text">
                <b>{props.name}</b>
                <br/>{props.des1}
                <br/>{props.des2}
                <br/>{props.des3}
            </p>
            </div>
        </div>
    )
}

export default CardDV;
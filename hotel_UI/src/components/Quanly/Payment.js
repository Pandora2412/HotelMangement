import {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextField from "@mui/material/TextField";
import {ConfirmModal} from './Modal';

const Payment = (props) => {
    const now = new Date();
    const today = now.getFullYear() + "-" + (now.getMonth() + 1 > 9?"":"0") + (now.getMonth() + 1) + "-" + (now.getDate() > 9?"":"0") + now.getDate() + "T" + (now.getHours() > 9?"":"0") + now.getHours() + ":" + (now.getMinutes() > 9?"":"0") + now.getMinutes();
    const payment = props.payment ? props.payment : {}
    
    const [openConfirmModal, setOpenConfirmModal] = useState("")
    
    const [companyName, setCompanyName] = useState(props?.payment?.company?.name !== undefined ? props?.payment?.company?.name : "")
    const [companyRepresentative, setCompanyRepresentative] = useState(props?.payment?.company?.representative !== undefined ? props?.payment?.company?.representative : "")
    const [companyPhone, setCompanyPhone] = useState(props?.payment?.company?.phone !== undefined ? props?.payment?.company?.phone : "")
    const [companyEmail, setCompanyEmail] = useState(props?.payment?.company?.email !== undefined ? props?.payment?.company?.email : "")
    const [reason, setReason] = useState(props?.payment?.reason !== undefined ? props?.payment?.reason : "")

    const [products, setProducts] = useState(props?.payment?.company?.name !== undefined ? props.payment.products : [] )

    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
   
    const formnum = "CBC0003"
    const handleNewPayment = () => {
        props.payments.push({
            "formnum": formnum,
            "company": {
                "name": companyName,
                "representative": companyRepresentative,
                "phone": companyPhone,
                "email": companyEmail,
                "time": today
            },
            "products": products,
            "reason": reason,
            "total": totalPrice
        })
        props.setPayments(props.payments)
    }

    console.log(products)

    return (
        <div className = "Form" style={{margin: '30px auto'}}>
            <Container fluid style = {{padding: '0'}}>
                <Row>
                    <Col style={{textAlign: 'right'}}><button className="Xbutton" style={{fontSize: '150%'}} onClick={()=>{props.open("")}}>X</button></Col>
                </Row>
                <Row style={{paddingBottom: 25}}>
                    <Col xs={3}><h4>Ng?????i nh???n</h4></Col>
                    <Col xs={7}></Col>
                    <Col xs={2}style={{textAlign: 'left'}}>
                        <div style={{width: '71%', textAlign: 'right',textDecoration: 'underline', fontWeight: 300, fontSize: '130%'}}>{props?.payment?.company?.name !== undefined ? payment.formnum : formnum}</div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                    <Col xs={5}>
                        <TextField label="T??n" type="text" variant="outlined" style = {{width: '100%'}} 
                        value={companyName} disabled = {props?.payment?.company?.name ? true : false} onChange={(e) => setCompanyName(e.target.value)}/>
                    </Col>
                    <Col xs={1}></Col>
                    <Col xs={5}>
                        <TextField label="T??n ng?????i ?????i di???n" type="text" variant="outlined" style = {{width: '100%'}} 
                        value={companyRepresentative} disabled = {props?.payment?.company?.name ? true : false} onChange={(e) => setCompanyRepresentative(e.target.value)}/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                    <Col xs={5}>
                        <TextField label="S??T" type="text" variant="outlined" style = {{width: '100%'}} 
                        value={companyPhone} disabled = {props?.payment?.company?.name ? true : false} onChange={(e) => setCompanyPhone(e.target.value)}/>
                    </Col>
                    <Col xs={1}></Col>
                    <Col xs={5}>
                        <TextField label="Email" type="text" variant="outlined" style = {{width: '100%'}} 
                        value={companyEmail} disabled = {props?.payment?.company?.name ? true : false} onChange={(e) => setCompanyEmail(e.target.value)}/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                    <Col xs={5}>
                        <TextField label="L?? do chi ti???n" type="text" value={reason} 
                        variant="outlined" style = {{width: '100%'}} disabled = {props?.payment?.company?.name ? true : false} onChange={(e) => setReason(e.target.value)}/>
                    </Col>
                    <Col xs={1}></Col>
                    <Col xs={5}>
                        <TextField style = {{width: '100%'}} type="datetime-local" label="Ng??y chi ti???n" value={payment?.company?.time ? payment?.company?.time : today} variant="outlined" disabled/>
                    </Col>
                </Row>
                <Row style={{paddingBottom: 25}}>
                    <Col xs={3}><h4>C??c s???n ph???m</h4></Col>
                    <Col xs={9}></Col>
                </Row>
                <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                    <Col xs={4} style={{fontWeight: 600, fontSize: '120%'}}>T??n s???n ph???m</Col>
                    <Col xs={2} style={{fontWeight: 600, fontSize: '120%', textAlign: 'right'}}>S??? l?????ng</Col>
                    <Col xs={2} style={{fontWeight: 600, fontSize: '120%', textAlign: 'right'}}>????n gi??</Col>
                    <Col xs={2} style={{fontWeight: 600, fontSize: '120%', textAlign: 'right'}}>Th??nh ti???n</Col>
                    <Col xs={1}></Col>
                </Row>
                
                {props?.payment?.company?.name === undefined ? 
                <>
                    <Row className="justify-content-md-center" style={{paddingBottom: 10}}>
                        <Col xs={4}>
                            <TextField label="T??n" type="text" variant="outlined" style = {{width: '100%'}} value={name} onChange={(e)=>setName(e.target.value)} />
                        </Col>
                        <Col xs={2}>
                            <TextField label="S??? l?????ng" type="number" variant="outlined" style = {{width: '100%'}} value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
                        </Col>
                        <Col xs={2}>
                            <TextField label="????n gi??" type="number" variant="outlined" style = {{width: '100%'}} value={price} onChange={(e)=>setPrice(e.target.value)}/>
                        </Col>
                        <Col xs={2}>
                            <TextField label="Th??nh ti???n" type="number" variant="outlined" style = {{width: '100%'}} value={quantity * price}/>
                        </Col>
                        <Col xs={1}></Col>
                    </Row>

                    <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                        <Col xs={10}></Col>            
                        <Col xs={1}>
                            <button className="functionButton" onClick={() => {
                                setProducts(
                                    [...products, {
                                        "name": name,
                                        "price": price,
                                        "quantity": quantity,
                                        "totalPrice": price * quantity
                                    }]
                                )
                                setTotalPrice(totalPrice + price * quantity)
                            }}>
                                Th??m
                            </button>
                        </Col>
                    </Row>
                </>
                    : <></>
                }
                {
                    products?.map((s,index) => (
                        <Row className="justify-content-md-center" style={(index === products?.length - 1)?{paddingBottom: 25}:{paddingBottom: 0}}>
                            <Col xs={4} style={{fontWeight: 400}}>{s.name}</Col>
                            <Col xs={2} style={{fontWeight: 400, textAlign: 'right'}}>{s.quantity} (h)</Col>
                            <Col xs={2} style={{fontWeight: 400, textAlign: 'right'}}>{s.price}</Col>
                            <Col xs={2} style={{fontWeight: 400, textAlign: 'right'}}>{s.totalPrice}</Col>
                            {props?.payment?.company?.name === undefined ? 
                            <Col xs={1} style={{textAlign: 'right'}}>
                                <button className="Xbutton" onClick={() => {
                                    setTotalPrice(totalPrice - s.totalPrice)
                                    products.splice(index, 1)
                                    setProducts(products)
                                }}>X</button>
                            </Col>
                            : <Col xs ={1}></Col>
                            }
                        </Row>
                    ))
                }
                <Row className="justify-content-md-center" style={{marginBottom: 25}}>
                    <Col xs={7}></Col>
                    <Col xs={2} style={{fontWeight: 600, fontSize: '120%', textAlign: 'right'}}>T???ng c???ng:</Col>
                    <Col xs={2} style={{fontWeight: 600, fontSize: '120%', textAlign: 'right'}}>{props?.payment?.company?.name === undefined ? totalPrice.toLocaleString('de-DE', { minimumFractionDigits: 0 }) : props.payment.total}</Col>
                </Row>

                <Row className="justify-content-md-center" style={{paddingBottom: 25}}>
                    <Col xs={8}></Col>
                    <Col xs={1}></Col>
                    {props?.payment?.company?.name === undefined ? <Col xs={2}><button className="functionButton" onClick={()=>{setOpenConfirmModal("X??c nh???n l??u ????n n??y?")}}>L??u</button></Col> : <></>}
                </Row>
            </Container>
            {openConfirmModal !== "" && <ConfirmModal text = {openConfirmModal} open = {setOpenConfirmModal} openParent = {props.open} action={handleNewPayment}></ConfirmModal>} 
        </div>
    );
}

export default Payment;

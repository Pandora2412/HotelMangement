import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TablePagination from '@mui/material/TablePagination';
import { useState } from 'react';

const Thongbao = () => {

    const ThongbaoDB = {
        thongbaos: require('../model/Thongbao.json'),
        setPhongs: function (data) {
            this.thongbaos = data;
        }
    }
    
    const [page, setPage] = useState(0);
    const [fullNote, setFullNote] = useState(); 

    return (
        <div className="Thongbao">
            <Container fluid style = {{padding: '0'}}> 
                <Row className="justify-content-md-center" style={{paddingTop: 25, paddingBottom: 60}}>
                    {ThongbaoDB.thongbaos.slice(page * 8, page * 8 + 4).map(thongbao =>
                        <Col xl={3} onClick={() => setFullNote(thongbao)}>
                            <div className="paper">
                                <h3 style={{paddingTop: '7%', height: '15%', width: '85%', overflow: 'hidden', fontFamily: 'Raleway', fontSize: '110%', fontWeight: 800, textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{thongbao.name}</h3>
                                <p style={{whiteSpace: 'pre-line', height: '67%', overflow: 'hidden', fontFamily: 'Raleway', fontSize: '90%', fontWeight: 500}}>{thongbao.content}</p>
                                <h5 style={{height: '10%', fontFamily: 'Raleway', fontSize: '70%', fontWeight: 400, textAlign: 'right'}}>{thongbao.time}</h5>
                            </div>
                        </Col>
                    )}
                    {((page * 8 + 4) > ThongbaoDB.thongbaos.length) && <Col xl={(page * 8 + 4 - ThongbaoDB.thongbaos.length)*3} style={{height: 250}}></Col>}
                </Row>   
                <Row className="justify-content-md-center" style={{paddingBottom: 40}}>
                    {ThongbaoDB.thongbaos.slice(page * 8 + 4, page * 8 + 8).map(thongbao => 
                        <Col xl={3} onClick={() => setFullNote(thongbao)}>
                            <div className="paper">
                                <h3 style={{paddingTop: '7%', height: '15%', width: '85%', overflow: 'hidden', fontFamily: 'Raleway', fontSize: '110%', fontWeight: 800, textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{thongbao.name}</h3>
                                <p style={{whiteSpace: 'pre-line', height: '67%', overflow: 'hidden', fontFamily: 'Raleway', fontSize: '90%', fontWeight: 500}}>{thongbao.content}</p>
                                <h5 style={{height: '10%', fontFamily: 'Raleway', fontSize: '70%', fontWeight: 400, textAlign: 'right'}}>{thongbao.time}</h5>
                            </div>
                        </Col>
                    )}
                    {((page * 8 + 8) > ThongbaoDB.thongbaos.length) && <Col xl={(page * 8 + 8 - ThongbaoDB.thongbaos.length)*3} style={{height: 250}}></Col>}
                </Row>    
            </Container>
            <TablePagination className="Pages"
                component="div"
                count={ThongbaoDB.thongbaos.length}
                page={page}
                onPageChange={(e, newPage) => setPage(newPage)}
                rowsPerPage={8}
                rowsPerPageOptions={[]}
            />
            {fullNote && 
                <div className="model" style={{background: "rgba(49,49,49,0.8)"}}>
                    <div style={{width: '40%', background: 'white', height: '60%', padding: 10, marginTop: '5%', marginLeft: '35%'}}>
                        <h4 style={{width: '85%', display: 'inline-block'}}>{fullNote.name}</h4>
                        <button className="Xbutton" style={{float: 'right', marginTop: 0, fontSize: '130%'}} onClick={() => setFullNote("")}>X</button>
                        <hr
                            style={{
                                background: 'black',
                                color: 'black',
                                borderColor: 'black',
                                height: '2px',
                            }}
                        />
                        <p style={{whiteSpace: 'pre-line', height: '75%', overflowY: 'scroll'}}>{fullNote.content}</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default Thongbao;
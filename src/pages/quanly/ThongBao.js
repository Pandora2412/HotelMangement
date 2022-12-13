import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TablePagination from '@mui/material/TablePagination';
import { useState, useEffect, useRef } from 'react';
import { StyledButton } from '../../components/Button';
import TextField from "@mui/material/TextField";

const Notice = (props) => {
    const title = useRef(null);
    const content = useRef(null);
    const now = new Date();
    const handleSend = () => {
        const next_id = Math.max(...props.notices.map(o => o.id))
        props.notices.push({
            "id": next_id + 1,
            "name": title.current.value,
            "time": now.getFullYear() + "-" + (now.getMonth() + 1 > 9?"":"0") + (now.getMonth() + 1) + "-" + (now.getDate() > 9?"":"0") + now.getDate() + "T" + (now.getHours() > 9?"":"0") + now.getHours() + ":" + (now.getMinutes() > 9?"":"0") + now.getMinutes(),
            "content": content.current.value
        })
        props.setNotices(props.notices)
        props.setFullNote()
    }
    return (
        <div className="model" style={{background: "rgba(49,49,49,0.8)"}}>
            <div style={{width: '40%', background: 'white', height: '60%', padding: 10}}>
                {props.fullNote !== "new" ? <h4 style={{width: '85%', display: 'inline-block'}}>{props.fullNote.name}</h4>
                : <TextField id="standard-basic" label="Tiêu đề" variant="standard" inputRef={title} style={{width: '90%', marginBottom: "20px"}} />}
                <button className="Xbutton" style={{float: 'right', marginTop: 0, fontSize: '130%'}} onClick={() => props.setFullNote("")}>X</button>
                {props.fullNote !== "new" ?
                    <hr
                        style={{
                            background: 'black',
                            color: 'black',
                            borderColor: 'black',
                            height: '2px',
                        }}
                    />
                    : <></>
                }
                {props.fullNote !== "new" ? <p style={{whiteSpace: 'pre-line', height: '75%', overflowY: 'scroll'}}>{props.fullNote.content}</p>
                : <> 
                    <TextField
                        id="outlined-textarea"
                        label="Nội dung"
                        multiline
                        style={{width: '100%', marginBottom: "20px"}}
                        inputRef={content}
                        rows={11}/>
                    <StyledButton onClick = {handleSend} className="float-end">Gửi</StyledButton>
                 </>
                }
            </div>
        </div>
    )
}
const ThongBao = () => {
    const [notices, setNotices] = useState([])
    
    useEffect(() => {
        setNotices(require('../../model/thongbao.json'))
    }, [])

    const [page, setPage] = useState(0);
    const [fullNote, setFullNote] = useState(); 

    return (
        <div className="main">
            <Container fluid style = {{padding: '0'}}> 
                <Row className="justify-content-md-center" style={{paddingTop: 25}}>
                    {notices?.sort(
                        function(a, b) {
                            let da = new Date(a["time"]);
                            let db = new Date(b["time"]);
                            return da > db ? -1 : 1;
                        }
                    ).slice(page * 8, page * 8 + 8).map(notice =>
                        <Col xs={4} md={3} onClick={() => setFullNote(notice)} className="mb-5">
                            <div className="paper">
                                <h3 style={{paddingTop: '7%', height: '15%', width: '85%', overflow: 'hidden', fontFamily: 'Raleway', fontSize: '110%', fontWeight: 800, textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{notice.name}</h3>
                                <p style={{whiteSpace: 'pre-line', height: '67%', overflow: 'hidden', fontFamily: 'Raleway', fontSize: '90%', fontWeight: 500}}>{notice.content}</p>
                                <h5 style={{height: '10%', fontFamily: 'Raleway', fontSize: '70%', fontWeight: 400, textAlign: 'right'}}>{new Date(notice.time).toLocaleString()}</h5>
                            </div>
                        </Col>
                    )}
                </Row>   
                  
            </Container>
            <Row>
                <Col>
                    <StyledButton onClick = {() => setFullNote("new")}>Thông báo mới</StyledButton>
                </Col>
                <Col>
                    <TablePagination className="Pages"
                        component="div"
                        count={notices.length}
                        page={page}
                        onPageChange={(e, newPage) => setPage(newPage)}
                        rowsPerPage={8}
                        rowsPerPageOptions={[]}
                    />
                </Col>
            </Row>
            
            {fullNote && <Notice fullNote={fullNote} setFullNote={setFullNote} setNotices={setNotices} notices={notices}></Notice>}
        </div>
    )
}

export default ThongBao;
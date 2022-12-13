import Receipt from '../../components/Receipt'
import {useState, useEffect} from 'react'
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody'
import TablePagination from '@mui/material/TablePagination';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import TextField from "@mui/material/TextField";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


import { Pie, Line, Doughnut, Bar} from "react-chartjs-2";
import 'chart.js/auto';

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const TongThuChiNam = () => {
    let fakedatathu = Array.from({length: 12}, () => randomIntFromInterval(10, 50))
    let fakedatatchi = Array.from({length: 12}, () => randomIntFromInterval(10, 50))
    const labels = Array.from({length: 12}, (_, i) => i + 1)
    const data = {
        labels: labels,
        datasets: [
          {
            label: 'Thu',
            data: fakedatathu,
            backgroundColor: "rgb(255, 99, 132)",
            fill: false,
            cubicInterpolationMode: 'monotone',
            tension: 0.4
          }, {
            label: 'Chi',
            data: fakedatatchi,
            fill: false,
            tension: 0.4
          }
        ]
      };
    return (
        <div style={{backgroundColor: "white", padding: "20px", borderRadius: "10px"}}>
            <Bar options={{
                plugins: {
                title: {
                    display: true,
                    text: "Tổng thu và tổng chi trong năm",
                    align: "center"
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Nghìn người'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Tháng'
                        }
                    }
                },
                },
            }}
            data={data} />
        </div>
    )
}

const SoKhachNam = () => {
    let fakedata = Array.from({length: 12}, () => randomIntFromInterval(1, 25))
    const labels = Array.from({length: 12}, (_, i) => i + 1)
    const data = {
        labels: labels,
        datasets: [
          {
            data: fakedata,
            borderColor: "rgb(255, 99, 132)",
            fill: false,
            tension: 0.4
          }
        ]
      };
    return (
        <div style={{backgroundColor: "white", padding: "20px", borderRadius: "10px"}}>
            <Line options={{
                plugins: {
                title: {
                    display: true,
                    text: "Số lượng khách trong năm",
                    align: "center"
                },
                legend: {
                    display: false,
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'nghìn người'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Ngày'
                        }
                    }
                },
                },
            }}
            data={data} />
        </div>
    )
}

const TongThuChi = ({month, year}) => {
    const days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let fakedatathu = Array.from({length: days[month]}, () => randomIntFromInterval(0, 250))
    let fakedatatchi = Array.from({length: days[month]}, () => randomIntFromInterval(0, 250))
    if (year === 2022 && month === 12) {
        const l = (new Date()).getDate()
        fakedatathu = Array.from({length: l}, () => randomIntFromInterval(0, 250))
        fakedatatchi = Array.from({length: l}, () => randomIntFromInterval(0, 250))
    }
    
    const labels = Array.from({length: 30}, (_, i) => i + 1)
    const data = {
        labels: labels,
        datasets: [
          {
            label: 'Thu',
            data: fakedatathu,
            borderColor: "rgb(255, 99, 132)",
            fill: false,
            cubicInterpolationMode: 'monotone',
            tension: 0.4
          }, {
            label: 'Chi',
            data: fakedatatchi,
            borderColor: "blue",
            fill: false,
            tension: 0.4
          }
        ]
      };
    return (
        <div style={{backgroundColor: "white", padding: "20px", borderRadius: "10px"}}>
            <Line options={{
                plugins: {
                title: {
                    display: true,
                    text: "Tổng thu và tổng chi trong tháng",
                    align: "center"
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Triệu đồng'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Ngày'
                        }
                    }
                },
                },
            }}
            data={data} />
        </div>
    )
}

const SoKhach = ({month, year}) => {
    const days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let fakedata = Array.from({length: days[month]}, () => randomIntFromInterval(1, 25))
    const labels = Array.from({length: 30}, (_, i) => i + 1)
    if (year === 2022 && month === 12) {
        const l = (new Date()).getDate()
        fakedata = Array.from({length: l}, () => randomIntFromInterval(0, 250))
    }
    const data = {
        labels: labels,
        datasets: [
          {
            data: fakedata,
            borderColor: "rgb(255, 99, 132)",
            fill: false,
            cubicInterpolationMode: 'monotone',
            tension: 0.4
          }
        ]
      };
    return (
        <div style={{backgroundColor: "white", padding: "20px", borderRadius: "10px"}}>
            <Line options={{
                plugins: {
                title: {
                    display: true,
                    text: "Số lượng khách trong tháng",
                    align: "center"
                },
                legend: {
                    display: false,
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'nghìn người'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Ngày'
                        }
                    }
                },
                },
            }}
            data={data} />
        </div>
    )
}

const LoaiPhong = () => {
    const fakedata = Array.from({length: 3}, () => randomIntFromInterval(1, 500))
    const labels = ["Standard", "Superior", "VIP"]
    const data = {
        labels: labels,
        datasets: [
          {
            data: fakedata,
            backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00',
                '#00A6B4',
                '#6800B4'
            ],
          }
        ]
      };
    return (
        <div style={{backgroundColor: "white", padding: "20px", borderRadius: "10px"}}>
            <Pie options={{
                plugins: {
                title: {
                    display: true,
                    text: "Tỷ lệ yêu cầu của các loại phòng",
                },
                legend:{
                    display:true,
                    position:'bottom'
                }
            }}}
            data={data} />
        </div>
    )
}

const SoNguoi = () => {
    const fakedata = Array.from({length: 4}, () => randomIntFromInterval(1, 500))
    const labels = ["1", "2", "3", "4"]
    const data = {
        labels: labels,
        datasets: [
          {
            data: fakedata,
            backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00',
                '#00A6B4',
            ],
          }
        ]
      };
    return (
        <div style={{backgroundColor: "white", padding: "20px", borderRadius: "10px"}}>
            <Doughnut options={{
                plugins: {
                title: {
                    display: true,
                    text: "Tỷ lệ số người trong phòng được yêu cầu",
                },
                legend:{
                    display:true,
                    position:'right'
                }
            }}}
            data={data} />
        </div>
    )
}

const View = () => {
    const fakedata = Array.from({length: 3}, () => randomIntFromInterval(1, 500))
    const labels = ["Biển", "Hồ bơi", "Thành phố"]
    const data = {
        labels: labels,
        datasets: [
          {
            data: fakedata,
            backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00'
            ],
          }
        ]
      };
    return (
        <div style={{backgroundColor: "white", padding: "20px", borderRadius: "10px"}}>
            <Doughnut options={{
                plugins: {
                title: {
                    display: true,
                    text: "View được ưa thích",
                },
                legend:{
                    display:true,
                    position:'bottom'
                }
            }}}
            data={data} />
        </div>
    )
}

const DichVu = () => {
    const fakedata = Array.from({length: 4}, () => randomIntFromInterval(1, 500))
    const labels = ["Nhà Hàng", "Bar", "Spa", "Karaoke"]
    const data = {
        labels: labels,
        datasets: [
          {
            data: fakedata,
            backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00',
                '#00A6B4',
            ],
          }
        ]
      };
    return (
        <div style={{backgroundColor: "white", padding: "20px", borderRadius: "10px"}}>
            <Pie options={{
                plugins: {
                title: {
                    display: true,
                    text: "Dịch vụ khách dùng",
                },
                legend:{
                    display:true,
                    position:'bottom'
                }
            }}}
            data={data} />
        </div>
    )
}
const BaoCao = () => {
    const now = new Date();
    const [checkin, setCheckin] = useState(now.getFullYear() + "-" + (now.getMonth() + 1 > 9?"":"0") + (now.getMonth() + 1) + "-" + (now.getDate() > 9?"":"0") + now.getDate());
    const [checkout, setCheckout] = useState(now.getFullYear() + "-" + (now.getMonth() + 1 > 9?"":"0") + (now.getMonth() + 1) + "-" + (now.getDate() > 9?"":"0") + now.getDate());
    const [month, setMonth] = useState(now.getMonth() + 1);
    const [year, setYear] = useState(now.getFullYear());

    console.log(checkin, checkout)
    return (
        <div className='main'>
            <Row style={{alignItems: "center", marginBottom: "20px"}}>
                <Col xs={6}>
                    <TextField 
                        size='small'
                        id="checkinday"
                        label="Ngày Check-in"
                        type="date"
                        defaultValue={checkin}
                        onChange={(e) => e.target.value && setCheckin(e.target.value + "T" + checkin.slice(11,16))}
                        variant="standard"
                        className="Checkin"
                    />
                    <TextField
                        size='small'
                        id="checkoutday"
                        label="Ngày Check-out"
                        type="date"
                        defaultValue={checkout}
                        onChange={(e) => e.target.value && setCheckout(e.target.value + "T" + checkout.slice(11,16))}
                        variant="standard"
                        className="Checkout"
                    />
                </Col>
                <Col xs={6}>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel>Tháng</InputLabel>
                        <Select
                            value={month}
                            label="Tháng"
                            onChange={(e)=>{setMonth(e.target.value)}}
                        >
                            {
                                Array.from({length: 12}, (_, i) => i + 1).map((index) => (
                                    <MenuItem value={index}>{index}</MenuItem>
                                ))
                            }
                            <MenuItem value="Cả năm">Cả năm</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel>Năm</InputLabel>
                        <Select
                            value={year}
                            label="Năm"
                            onChange={(e)=>{setYear(e.target.value)}}
                        >
                            <MenuItem value={2020}>2020</MenuItem>
                            <MenuItem value={2021}>2021</MenuItem>
                            <MenuItem value={2022}>2022</MenuItem>
                        </Select>
                    </FormControl>
                </Col>
            </Row>
            <Row>
                {
                    month === "Cả năm" ? 
                    <>
                        <Col xs={12} md={6} style={{marginBottom: "20px"}}><TongThuChiNam></TongThuChiNam></Col>
                        <Col xs={12} md={6}><SoKhachNam></SoKhachNam></Col>
                    </>
                    : <>
                        <Col xs={6} style={{marginBottom: "20px"}}><TongThuChi month={month} year={year}></TongThuChi></Col>
                        <Col xs={6}><SoKhach month={month} year={year}></SoKhach></Col>
                    </>
                }
                
                <Col xs={6} md={3} style={{marginBottom: "20px"}}><LoaiPhong></LoaiPhong></Col>
                <Col xs={6} md={3}><SoNguoi></SoNguoi></Col>
                <Col xs={6} md={3}><View></View></Col>
                <Col xs={6} md={3}><DichVu></DichVu></Col>
            </Row>
        </div>
    )
}

export default BaoCao
import { useState } from 'react';
import Select from 'react-select';
import TextField from "@mui/material/TextField";
import {EmptyRoomTable} from './table';
import Form from './Form';

const Phong = () => {
    
    const PhongDB = {
        phongs: require('../model/PhongA.json'),
        setPhongs: function (data) {
            this.phongs = data;
        }
    }

    const [toa, setToa] = useState('A');
    const [trong, setTrong] = useState(true);
    const [checkin, setCheckin] = useState(new Date());
    const [checkout, setCheckout] = useState(new Date());
    const [selections, setSelections] = useState([]);
    const [selectNum, setSelectNum] = useState(0);
    const [rowData, setRowData] = useState(PhongDB.phongs.filter(phong => (phong.bookday.every(day => (new Date(day.checkin).getTime() > checkout.getTime()) || (new Date(day.checkout).getTime() < checkin.getTime())))));
    const [orderDirection, setOrderDirection] = useState("asc");
    const [orderColumn, setOrderColumn] = useState("")
    const [form, setForm] = useState(false);

    const now = new Date()

    const states = [
        { value: true, label: "Đang trống"},
        { value: false, label: "Đã đặt"}
    ]

    const toas = [
        { value: 'A', label: "A" },
        { value: 'B', label: "B" },
        { value: 'C', label: "C" },
    ];

    const stateStyle = {
        control: (styles) => ({
            ...styles,
            backgroundColor: '#E1963C',
            border: '1px solid #111',
            fontFamily: 'Raleway',
            fontWeight: '600',
            borderRadius: 10,
        }),
        option: (styles, state) => ({
            ...styles,
            color: 'black',
            backgroundColor: state.isSelected? '#E1963C' : 'white',
            ':hover': {
                backgroundColor: 'black',
                color: 'white'
            }
        }),
        dropdownIndicator: (styles) => ({
            ...styles,
            color: 'black'
        }),
        indicatorSeparator: (styles) => ({
            ...styles,
            backgroundColor: 'black'
        }),
        singleValue: (styles) => ({
            ...styles,
            color: 'black'
        })
    }

    const sortArray = (arr, order, orderBy) => {
        switch (order) {
          case "asc":
          default:
            return arr.sort((a, b) =>
              a[orderBy] > b[orderBy] ? 1 : b[orderBy] > a[orderBy] ? -1 : 0
            );
          case "desc":
            return arr.sort((a, b) =>
              a[orderBy] < b[orderBy] ? 1 : b[orderBy] < a[orderBy] ? -1 : 0
            );
        }
    };

    return (
        <div className="Phong">
            <div className="menu">
                <div className="Trangthaiphong">
                    <Select 
                        defaultValue={states[0]}
                        options={states}
                        onChange={(option)=>setTrong(option.value)}
                        styles={stateStyle}
                        isSearchable={false}
                    />
                </div>
                <div className="Toa">
                    <Select 
                        defaultValue={toas[0]}
                        options={toas}
                        onChange={(option)=>setToa(option.value)}
                        styles={stateStyle}
                        isSearchable={false}
                    />
                </div>
                <TextField
                    size='small'
                    id="checkinday"
                    label="Ngày Check-in"
                    type="date"
                    defaultValue={now.getFullYear() + ((now.getMonth() + 1 > 9)?"-":"-0") + (now.getMonth() + 1) + ((now.getDate() > 9)?"-":"-0") + now.getDate()}
                    onChange={(e)=>{
                        const newCheckin = new Date(e.target.value + "T" + ((checkin.getHours() > 9)?"":"0") + checkin.getHours() + ":" + ((checkin.getMinutes() > 9)?"":"0") + checkin.getMinutes());
                        setCheckin(newCheckin);
                        setRowData(sortArray(PhongDB.phongs.filter(phong => (phong.bookday.every(day => (new Date(day.checkin).getTime() > checkout.getTime()) || (new Date(day.checkout).getTime() < newCheckin.getTime())))), (orderDirection === "asc" ? "desc" : "asc"), orderColumn));
                    }}
                    variant="standard"
                    className="Checkin"
                />
                <TextField
                    size='small'
                    id="checkintime"
                    label="Thời gian"
                    type="time"
                    defaultValue={((now.getHours() > 9)?"":"0") + now.getHours() + ":" + ((now.getMinutes() > 9)?"":"0") + now.getMinutes()}
                    onChange={(e)=>{
                        const newCheckin = new Date(checkin.getFullYear() + ((checkin.getMonth() + 1 > 9)?"-":"-0") + (checkin.getMonth() + 1) + ((checkin.getDate() > 9)?"-":"-0") + checkin.getDate()+ "T" + e.target.value);
                        setCheckin(newCheckin);
                        setRowData(sortArray(PhongDB.phongs.filter(phong => (phong.bookday.every(day => (new Date(day.checkin).getTime() > checkout.getTime()) || (new Date(day.checkout).getTime() < newCheckin.getTime())))), (orderDirection === "asc" ? "desc" : "asc"), orderColumn));
                    }}
                    variant="standard"
                    className="Checkin"
                />
                <TextField
                    size='small'
                    id="checkoutday"
                    label="Ngày Check-out"
                    type="date"
                    defaultValue={now.getFullYear() + ((now.getMonth() + 1 > 9)?"-":"-0") + (now.getMonth() + 1) + ((now.getDate() > 9)?"-":"-0") + now.getDate()}
                    onChange={(e)=>{
                        const newCheckout = new Date(e.target.value + "T" + ((checkout.getHours() > 9)?"":"0") + checkout.getHours() + ":" + ((checkout.getMinutes() > 9)?"":"0") + checkout.getMinutes());
                        setCheckout(newCheckout);
                        setRowData(sortArray(PhongDB.phongs.filter(phong => (phong.bookday.every(day => (new Date(day.checkin).getTime() > newCheckout.getTime()) || (new Date(day.checkout).getTime() < checkin.getTime())))), (orderDirection === "asc" ? "desc" : "asc"), orderColumn));
                    }}
                    variant="standard"
                    className="Checkout"
                />
                <TextField
                    size='small'
                    id="checkouttime"
                    label="Thời gian"
                    type="time"
                    defaultValue={((now.getHours() > 9)?"":"0") + now.getHours() + ":" + ((now.getMinutes() > 9)?"":"0") + now.getMinutes()}
                    onChange={(e)=>{
                        const newCheckout = new Date(checkout.getFullYear() + ((checkout.getMonth() + 1 > 9)?"-":"-0") + (checkout.getMonth() + 1) + ((checkout.getDate() > 9)?"-":"-0") + checkout.getDate() + "T" + e.target.value);
                        setCheckout(newCheckout);
                        setRowData(sortArray(PhongDB.phongs.filter(phong => (phong.bookday.every(day => (new Date(day.checkin).getTime() > newCheckout.getTime()) || (new Date(day.checkout).getTime() < checkin.getTime())))), (orderDirection === "asc" ? "desc" : "asc"), orderColumn));
                    }}
                    variant="standard"
                    className="Checkout"
                />
            </div>
            <div className="Rooms">
                <EmptyRoomTable 
                    checkin={checkin} 
                    checkout={checkout} 
                    selections={selections} 
                    setSelections={setSelections} 
                    selectNum={selectNum} 
                    setSelectNum={setSelectNum} 
                    rowData={rowData} 
                    setRowData={setRowData}
                    orderColumn={orderColumn}
                    setOrderColumn={setOrderColumn}
                    orderDirection={orderDirection}
                    setOrderDirection={setOrderDirection}
                />
            </div> 
            <div>
                {selectNum > 0 
                ?<button style={{marginTop: 10, float: 'right', height: 30,borderRadius: 10}} className="taodon" onClick={()=>setForm(true)}>Tạo đơn</button> 
                :<button style={{backgroundColor: 'gray', color: 'white', cursor: 'not-allowed', marginTop: 10, float: 'right', height: 30, fontWeight: 600, borderRadius: 10}} disabled>Tạo đơn</button> 
                }
            </div>
            {form && <Form />}
        </div>
    )
}

export default Phong
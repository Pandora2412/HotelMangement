import { useState } from 'react';
import Select from 'react-select';
import TextField from "@mui/material/TextField";
import {EmptyRoomTable, BookRoomTable, NowRoomTable} from './table';
import NewForm from './NewForm';

const Phong = () => {
    
    const PhongDB = {
        phongs: require('../model/PhongA.json'),
        setPhongs: function (data) {
            this.phongs = data;
        }
    }

    const [toa, setToa] = useState('A');
    const [trong, setTrong] = useState(1);
    const [checkin, setCheckin] = useState(new Date());
    const [checkout, setCheckout] = useState(new Date());
    const [selections, setSelections] = useState([]);
    const [selectNum, setSelectNum] = useState(0);
    const [rowData, setRowData] = useState(PhongDB.phongs.filter(phong => (phong.bookday.every(day => (new Date(day.checkin).getTime() > checkout.getTime()) || (new Date(day.checkout).getTime() < checkin.getTime())))));
    const [rowDataBook, setRowDataBook] = useState(PhongDB.phongs.filter(phong => (phong.bookday.some(day => (new Date(day.checkin).getTime() === checkin.getTime()) && (new Date(day.checkout).getTime() === checkout.getTime())))));
    const [rowDataNow, setRowDataNow] = useState(PhongDB.phongs.filter(phong => (phong.bookday.some(day => (new Date(day.checkin).getTime() <= new Date().getTime()) && (new Date(day.checkout).getTime() >= new Date().getTime())))));
    const [orderDirection, setOrderDirection] = useState("asc");
    const [orderColumn, setOrderColumn] = useState("")
    const [newForm, setNewForm] = useState(false);
    const [searchString, setSearchString] = useState("");

    const states = [
        { value: 1, label: "Đang trống"},
        { value: 2, label: "Đã đặt"},
        { value: 3, label: "Hiện tại"}
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
                        onChange={(option)=>{
                            setTrong(option.value);
                            (option.value === 3) && setRowDataNow(PhongDB.phongs.filter(phong => (phong.bookday.some(day => (new Date(day.checkin).getTime() <= new Date().getTime()) && (new Date(day.checkout).getTime() >= new Date().getTime())))));
                        }}
                        styles={stateStyle}
                        isSearchable={false}
                    />
                </div>
                <div className="Toa" style={trong === 1?{marginRight: '31.5%'}:{marginRight: '5%'}}>
                    <Select 
                        defaultValue={toas[0]}
                        options={toas}
                        onChange={(option)=>setToa(option.value)}
                        styles={stateStyle}
                        isSearchable={false}
                    />
                </div>
                {trong === 2 && <input 
                    type="text" 
                    style={{height: 39, borderRadius: 10, width: '19%', fontSize: 19, marginRight: '7.7%', padding: '0px 5px', display: 'inline-block'}}
                    placeholder="Tìm kiếm..."
                    value={searchString}
                    onChange={(e) => setSearchString(e.target.value)}
                />}

                {trong !== 3 && <>
                    <TextField
                        size='small'
                        id="checkinday"
                        label="Ngày Check-in"
                        type="date"
                        defaultValue={checkin.getFullYear() + ((checkin.getMonth() + 1 > 9)?"-":"-0") + (checkin.getMonth() + 1) + ((checkin.getDate() > 9)?"-":"-0") + checkin.getDate()}
                        onChange={(e)=>{
                            if (e.target.value) {
                                const newCheckin = new Date(e.target.value + "T" + ((checkin.getHours() > 9)?"":"0") + checkin.getHours() + ":" + ((checkin.getMinutes() > 9)?"":"0") + checkin.getMinutes());
                                setCheckin(newCheckin);
                                setRowData(sortArray(PhongDB.phongs.filter(phong => (phong.bookday.every(day => (new Date(day.checkin).getTime() > checkout.getTime()) || (new Date(day.checkout).getTime() < newCheckin.getTime())))), (orderDirection === "asc" ? "desc" : "asc"), orderColumn));
                                setRowDataBook(sortArray(PhongDB.phongs.filter(phong => (phong.bookday.some(day => (new Date(day.checkin).getTime() === newCheckin.getTime()) && (new Date(day.checkout).getTime() === checkout.getTime())))), (orderDirection === "asc" ? "desc" : "asc"), orderColumn));
                            }
                        }}
                        variant="standard"
                        className="Checkin"
                    />
                    <TextField
                        size='small'
                        id="checkintime"
                        label="Thời gian"
                        type="time"
                        defaultValue={((checkin.getHours() > 9)?"":"0") + checkin.getHours() + ":" + ((checkin.getMinutes() > 9)?"":"0") + checkin.getMinutes()}
                        onChange={(e)=>{
                            if (e.target.value) {
                                const newCheckin = new Date(checkin.getFullYear() + ((checkin.getMonth() + 1 > 9)?"-":"-0") + (checkin.getMonth() + 1) + ((checkin.getDate() > 9)?"-":"-0") + checkin.getDate()+ "T" + e.target.value);
                                setCheckin(newCheckin);
                                setRowData(sortArray(PhongDB.phongs.filter(phong => (phong.bookday.every(day => (new Date(day.checkin).getTime() > checkout.getTime()) || (new Date(day.checkout).getTime() < newCheckin.getTime())))), (orderDirection === "asc" ? "desc" : "asc"), orderColumn));
                                setRowDataBook(sortArray(PhongDB.phongs.filter(phong => (phong.bookday.some(day => (new Date(day.checkin).getTime() === newCheckin.getTime()) && (new Date(day.checkout).getTime() === checkout.getTime())))), (orderDirection === "asc" ? "desc" : "asc"), orderColumn));  
                            }
                        }}
                        variant="standard"
                        className="Checkin"
                    />
                    <TextField
                        size='small'
                        id="checkoutday"
                        label="Ngày Check-out"
                        type="date"
                        defaultValue={checkout.getFullYear() + ((checkout.getMonth() + 1 > 9)?"-":"-0") + (checkout.getMonth() + 1) + ((checkout.getDate() > 9)?"-":"-0") + checkout.getDate()}
                        onChange={(e)=>{
                            if (e.target.value) {
                                const newCheckout = new Date(e.target.value + "T" + ((checkout.getHours() > 9)?"":"0") + checkout.getHours() + ":" + ((checkout.getMinutes() > 9)?"":"0") + checkout.getMinutes());
                                setCheckout(newCheckout);
                                setRowData(sortArray(PhongDB.phongs.filter(phong => (phong.bookday.every(day => (new Date(day.checkin).getTime() > newCheckout.getTime()) || (new Date(day.checkout).getTime() < checkin.getTime())))), (orderDirection === "asc" ? "desc" : "asc"), orderColumn));
                                setRowDataBook(sortArray(PhongDB.phongs.filter(phong => (phong.bookday.some(day => (new Date(day.checkin).getTime() === checkin.getTime()) && (new Date(day.checkout).getTime() === newCheckout.getTime())))), (orderDirection === "asc" ? "desc" : "asc"), orderColumn));
                            }
                        }}
                        variant="standard"
                        className="Checkout"
                    />
                    <TextField
                        size='small'
                        id="checkouttime"
                        label="Thời gian"
                        type="time"
                        defaultValue={((checkout.getHours() > 9)?"":"0") + checkout.getHours() + ":" + ((checkout.getMinutes() > 9)?"":"0") + checkout.getMinutes()}
                        onChange={(e)=>{
                            if (e.target.value) {
                                const newCheckout = new Date(checkout.getFullYear() + ((checkout.getMonth() + 1 > 9)?"-":"-0") + (checkout.getMonth() + 1) + ((checkout.getDate() > 9)?"-":"-0") + checkout.getDate() + "T" + e.target.value);
                                setCheckout(newCheckout);
                                setRowData(sortArray(PhongDB.phongs.filter(phong => (phong.bookday.every(day => (new Date(day.checkin).getTime() > newCheckout.getTime()) || (new Date(day.checkout).getTime() < checkin.getTime())))), (orderDirection === "asc" ? "desc" : "asc"), orderColumn));
                                setRowDataBook(sortArray(PhongDB.phongs.filter(phong => (phong.bookday.some(day => (new Date(day.checkin).getTime() === checkin.getTime()) && (new Date(day.checkout).getTime() === newCheckout.getTime())))), (orderDirection === "asc" ? "desc" : "asc"), orderColumn));
                            }
                        }}
                        variant="standard"
                        className="Checkout"
                    />
                </>}
            </div>
            <div className="Rooms">
                {(trong === 1)
                ?<EmptyRoomTable 
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
                :(trong === 2)
                    ?<BookRoomTable 
                        checkin={checkin} 
                        checkout={checkout} 
                        rowDataBook={rowDataBook} 
                        setRowDataBook={setRowDataBook}
                        orderColumn={orderColumn}
                        setOrderColumn={setOrderColumn}
                        orderDirection={orderDirection}
                        setOrderDirection={setOrderDirection}
                        searchString={searchString}
                    />
                    :<NowRoomTable
                        rowDataNow={rowDataNow}
                        setRowDataNow={setRowDataNow}
                        orderColumn={orderColumn}
                        setOrderColumn={setOrderColumn}
                        orderDirection={orderDirection}
                        setOrderDirection={setOrderDirection}
                        rooms={PhongDB.phongs} 
                    />
                }
            </div> 
            {(trong === 1) &&
            <div>
                {selectNum > 0 
                ?<button style={{marginTop: 10, float: 'right', height: 30,borderRadius: 10}} className="taodon" onClick={()=>setNewForm(true)}>Tạo đơn</button> 
                :<button style={{backgroundColor: 'gray', color: 'white', cursor: 'not-allowed', marginTop: 10, float: 'right', height: 30, fontWeight: 600, borderRadius: 10}} disabled>Tạo đơn</button> }
            </div>
            }
            {newForm && 
                <div className="model" style={{background: "rgba(49,49,49,0.8)"}}>
                    <NewForm 
                        setSelectNum={setSelectNum} 
                        checkin={checkin} 
                        checkout={checkout} 
                        setNewForm={setNewForm} 
                        selections={selections} 
                        setSelections={setSelections} 
                        PhongDB={PhongDB}
                        setRowData={setRowData}
                        setRowDataBook={setRowDataBook}
                    />
                </div>
            }
        </div>
    )
}

export default Phong
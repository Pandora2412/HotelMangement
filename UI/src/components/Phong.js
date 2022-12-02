import { useState } from 'react';
import Select from 'react-select';
import TextField from "@mui/material/TextField";
import EmptyRoomTable from './PhongTrong';
import BookRoomTable from './PhongDaDat';
import NowRoomTable from './PhongHienTai';
import NewForm from './NewForm';
import Form from './Form';

const Phong = () => {

    const now = new Date();
    const [toa, setToa] = useState('A');
    const [trong, setTrong] = useState(1);
    const [checkin, setCheckin] = useState(now.getFullYear() + "-" + (now.getMonth() + 1 > 9?"":"0") + (now.getMonth() + 1) + "-" + (now.getDate() > 9?"":"0") + now.getDate() + "T" + (now.getHours() > 9?"":"0") + now.getHours() + ":" + (now.getMinutes() > 9?"":"0") + now.getMinutes());
    const [checkout, setCheckout] = useState(now.getFullYear() + "-" + (now.getMonth() + 1 > 9?"":"0") + (now.getMonth() + 1) + "-" + (now.getDate() > 9?"":"0") + now.getDate() + "T" + (now.getHours() > 9?"":"0") + now.getHours() + ":" + (now.getMinutes() > 9?"":"0") + now.getMinutes());
    const [selections, setSelections] = useState([]);
    const [orderDirection, setOrderDirection] = useState("asc");
    const [orderColumn, setOrderColumn] = useState("")
    const [newForm, setNewForm] = useState(false);
    const [form, setForm] = useState("");
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

    return (
        <div className="Phong">
            <div className="menu">
                <div className="Trangthaiphong">
                    <Select 
                        defaultValue={states[0]}
                        options={states}
                        onChange={(option) => setTrong(option.value)}
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
                        defaultValue={checkin.slice(0,10)}
                        onChange={(e) => e.target.value && setCheckin(e.target.value + "T" + checkin.slice(11,16))}
                        variant="standard"
                        className="Checkin"
                    />
                    <TextField
                        size='small'
                        id="checkintime"
                        label="Thời gian"
                        type="time"
                        defaultValue={checkin.slice(11,16)}
                        onChange={(e) => e.target.value && setCheckin(checkin.slice(0,10) + "T" + e.target.value)}
                        variant="standard"
                        className="Checkin"
                    />
                    <TextField
                        size='small'
                        id="checkoutday"
                        label="Ngày Check-out"
                        type="date"
                        defaultValue={checkout.slice(0,10)}
                        onChange={(e) => e.target.value && setCheckout(e.target.value + "T" + checkout.slice(11,16))}
                        variant="standard"
                        className="Checkout"
                    />
                    <TextField
                        size='small'
                        id="checkouttime"
                        label="Thời gian"
                        type="time"
                        defaultValue={checkout.slice(11,16)}
                        onChange={(e) => e.target.value && setCheckout(checkout.slice(0,10) + "T" + e.target.value)}
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
                    toa={toa}
                    selections={selections} 
                    setSelections={setSelections} 
                    orderColumn={orderColumn}
                    setOrderColumn={setOrderColumn}
                    orderDirection={orderDirection}
                    setOrderDirection={setOrderDirection}
                    newForm={newForm}
                    trong={trong}
                />
                :(trong === 2)
                    ?<BookRoomTable 
                        checkin={checkin} 
                        checkout={checkout} 
                        toa={toa}
                        orderColumn={orderColumn}
                        setOrderColumn={setOrderColumn}
                        orderDirection={orderDirection}
                        setOrderDirection={setOrderDirection}
                        searchString={searchString}
                        setSearchString={setSearchString}
                        setForm={setForm}
                        form={form}
                        trong={trong}
                    />
                    :<NowRoomTable
                        toa={toa}
                        orderColumn={orderColumn}
                        setOrderColumn={setOrderColumn}
                        orderDirection={orderDirection}
                        setOrderDirection={setOrderDirection}
                        setForm={setForm}
                        form={form}
                        trong={trong}
                    />
                }
            </div> 
            {(trong === 1) &&
            <div>
                {selections.length > 0 
                ?<button style={{marginTop: 10, float: 'right', height: 30,borderRadius: 10}} className="taodon" onClick={()=>setNewForm(true)}>Tạo đơn</button> 
                :<button style={{backgroundColor: 'gray', color: 'white', cursor: 'not-allowed', marginTop: 10, float: 'right', height: 30, fontWeight: 600, borderRadius: 10}} disabled>Tạo đơn</button> }
            </div>
            }
            {newForm && 
                <div className="model" style={{background: "rgba(49,49,49,0.8)"}}>
                    <NewForm 
                        checkin={checkin} 
                        checkout={checkout} 
                        setNewForm={setNewForm} 
                        selections={selections} 
                        setSelections={setSelections} 
                    />
                </div>
            }
            {form !== "" && 
                <div className="model" style={{background: "rgba(49,49,49,0.8)"}}>
                    <Form  
                        form={form}
                        setForm={setForm} 
                        checkin={checkin} 
                        checkout={checkout} 
                    />
                </div>
            }
        </div>
    )
}

export default Phong
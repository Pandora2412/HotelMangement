const fsPromises = require('fs').promises;
const path = require('path');
const data = {
    rooms : require('../model/rooms.json'),
    setRooms: function (data) { this.rooms = data; }
};

const getRooms = (req, res) => {
    let a = req.params.toa === 'A'?0:req.params.toa === 'B'?120:240;
    let b = req.params.toa === 'A'?120:req.params.toa === 'B'?240:360;
    if (parseInt(req.params.state) === 3) {
        res.json(data.rooms.slice(a, b).filter(room => (room.bookday.some(day => (new Date(day.checkin).getTime() <= new Date().getTime()) && (new Date(day.checkout).getTime() >= new Date().getTime())))));
    }
    else if (parseInt(req.params.state) === 2) {
        if (new Date(req.params.checkin).getTime() > new Date(req.params.checkout).getTime()) res.json([]);
        else res.json(data.rooms.slice(a, b).filter(room => (room.bookday.some(day => (new Date(day.checkin).getTime() === new Date(req.params.checkin).getTime()) && (new Date(day.checkout).getTime() === new Date(req.params.checkout).getTime())))));
    }
    else {
        if (new Date(req.params.checkin).getTime() > new Date(req.params.checkout).getTime()) res.json([]);
        else res.json(data.rooms.slice(a, b).filter(room => (room.bookday.every(day => (new Date(day.checkin).getTime() > new Date(req.params.checkout).getTime()) || (new Date(day.checkout).getTime() < new Date(req.params.checkin).getTime())))));
    }
}

const getSpecificRoomServices = (req, res) => {

    resData = req.body.map(room =>
        {
            let index = room.toa === 'A'?0:room.toa === 'B'?120:240;
            index += (Math.floor(parseInt(room.id)/100) - 1) * 15 + (parseInt(room.id)%100) - 1;
            return {
                "toa": room.toa,
                "id": room.id,
                "name": "Phòng " + room.id + " tòa " + room.toa + ": " + data.rooms[index].type + " " + data.rooms[index].singlebed + " giường đơn, " + data.rooms[index].doublebed + " giường đôi, view " + data.rooms[index].view + ", " + data.rooms[index].bancong + " ban công",
                "price": data.rooms[index].price,
                "quantity": (new Date(req.params.checkout).getTime() - new Date (req.params.checkin).getTime()) / 3600000,
                "totalPrice": Math.round(data.rooms[index].price / 24 * ((new Date (req.params.checkout).getTime() - new Date (req.params.checkin).getTime()) / 3600000))
            };
        }
    )

    return res.json(resData);

}

const deleteBookday = async (req, res) => {
    req.body.forEach(room => {
        let index = room.toa === 'A'?0:room.toa === 'B'?120:240;
        index += (Math.floor(parseInt(room.id)/100) - 1) * 15 + (parseInt(room.id)%100) - 1;
        const match = data.rooms[index].bookday.find(day => day.formnum === req.params.formnum);
        if (!match) {
            return res.sendStatus(400); 
        }
        data.rooms[index].bookday = data.rooms[index].bookday.filter(day => day.formnum !== req.params.formnum);
    })

    await fsPromises.writeFile(
        path.join(__dirname, '..', 'model', 'rooms.json'),
        JSON.stringify(data.rooms,null," ")
    ); 

    res.sendStatus(204);
}

const addBookday = async (req, res) => {
    req.body.roomlist.forEach(room => {
        let index = room.toa === 'A'?0:room.toa === 'B'?120:240;
        index += (Math.floor(parseInt(room.id)/100) - 1) * 15 + (parseInt(room.id)%100) - 1;
        data.rooms[index].bookday = [...data.rooms[index].bookday, req.body.bookday];
    })
    await fsPromises.writeFile(
        path.join(__dirname, '..', 'model', 'rooms.json'),
        JSON.stringify(data.rooms,null," ")
    );

    res.sendStatus(204);
}

const updateBookday = async (req, res) => {
    req.body.roomlist.forEach(room => {
        let index = room.toa === 'A'?0:room.toa === 'B'?120:240;
        index += (Math.floor(parseInt(room.id)/100) - 1) * 15 + (parseInt(room.id)%100) - 1;
        data.rooms[index].bookday[data.rooms[index].bookday.findIndex(day => day.formnum === req.body.formnum)] = req.body.bookday;
    })
    await fsPromises.writeFile(
        path.join(__dirname, '..', 'model', 'rooms.json'),
        JSON.stringify(data.rooms,null," ")
    );

    res.sendStatus(204);
}

module.exports = {
    getRooms,  
    deleteBookday,
    addBookday,
    updateBookday,
    getSpecificRoomServices
}
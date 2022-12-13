const data = {
    menu : require('../model/menu.json'),
    setMenu: function (data) { this.menu = data; }
};

const getMenu = (req, res) => {
    res.json(data.menu);
}

module.exports = {getMenu};
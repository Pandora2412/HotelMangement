const path = require('path');
const express = require('express');
const {logger} = require('./middleware/logEvent');
const cors = require('cors');
const {corsOptions} = require('./config/corsOption');
const errorHandler = require('./middleware/errorHandler');
const cookieParser = require('cookie-parser');
const verifyJWT = require('./middleware/verifyJWT');
const credentials = require('./middleware/credentials');

const app = express();

const PORT = process.env.PORT || 3500;

app.use(logger);

app.use(credentials);

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false}));

app.use(express.json());

app.use(cookieParser());

app.use('/', express.static(path.join(__dirname, '/public')));

app.use('/login', require('./routes/api/auth'));
app.use('/refresh', require('./routes/api/refresh'));
app.use('/logout', require('./routes/api/logout'));

app.use(verifyJWT);
app.use('/addaccount', require('./routes/api/addaccount'));
app.use('/employee', require('./routes/api/employee'));
app.use('/customer', require('./routes/api/customer'));
app.use('/room', require('./routes/api/room'));
app.use('/customerbill', require('./routes/api/customerbill'));
app.use('/menu', require('./routes/api/menu'));

app.get('/*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server runing on port ${PORT}`));

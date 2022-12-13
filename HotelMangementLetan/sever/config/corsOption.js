const whitelist = ['http://localhost:3000','https://localhost:3500']; 

const corsOptions = {
    origin: (Origin, callback) => {
        if (whitelist.indexOf(Origin) != -1 || !Origin) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optiionSuccessStatus: 200
}

module.exports = {corsOptions, whitelist};
const verifyRoles = (...roles_list) => {
    return (req, res, next) => {
        if (!req?.roles) return res.sendStatus(401);
        const result = req.roles.map(role => [...roles_list].includes(role)).find(val => val === true);
        if (!result) return res.sendStatus(401);
        next();
    }
};

module.exports = verifyRoles
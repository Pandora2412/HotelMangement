const verifyRoles = (...roles_list) => {
    return (req, res, next) => {
        if (!req?.roles) return res.sendStatus(401);
        const result = [...roles_list].find(role => role === parseInt(req.roles));
        if (!result) {
            return res.sendStatus(401);
        }
        next();
    }
};

module.exports = verifyRoles
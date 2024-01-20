/*const { expressjwt: jwt } = require("express-jwt");
const secret =  process.env.SECRET
const api = process.env.API_URL

const authJwt = jwt({
    secret: secret,
    algorithms: ["HS256"],
    }).unless({ // so that user without a token can access db to login (authentication)
        path: [
            `${api}/users/login`,
            `${api}/users/register`,
            `${api}`
        ]
});

module.exports = authJwt*/
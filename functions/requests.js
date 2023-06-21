var axios = require('axios').default

async function getTest1() {
    try {
        return new Promise(function (resolve, reject) {
            axios.get('http://127.0.0.1:3000/test1').then(function (response) {
                resolve(response.data)
            })
        })
    } catch (error) {
        console.error(error)
    }
}

module.exports = { getTest1 }
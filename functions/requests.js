import axios from 'axios'

async function getTest1() {
    try {
        return new Promise((resolve, reject) => {
            axios.get('http://127.0.0.1:3000/test1')
                .then(response => resolve(response.data))
                .catch(error => reject(error)) // Ensure errors are properly handled
        })
    } catch (error) {
        console.error(error)
    }
}

export { getTest1 }
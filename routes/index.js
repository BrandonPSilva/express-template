import { Router } from 'express'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import * as requests from '../functions/requests.js'

dotenv.config()

const router = Router()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const resourcesPath = path.resolve(__dirname, 'resources')

const invalidKey = 'Invalid API Key'

// Home Page
router.get('/', (req, res) => {
    try {
        const filename = 'public/index.html'
        res.sendFile(resourcesPath + filename)
    } catch (e) {
        console.error(e)
        res.sendError(500)
    }
})

// Download without key
router.get('/download', (req, res) => {
    res.send(invalidKey)
})

// Download with API key
router.get('/download/:id', (req, res) => {
    try {
        if (req.params.id === process.env.API_KEY) {
            const fileName = 'test.txt'
            res.download(resourcesPath + fileName)
        } else {
            res.send(invalidKey)
        }
    } catch (e) {
        console.error(e)
        res.sendError(500)
    }
})

// GET test
router.get('/test', async (req, res) => {
    try {
        console.log('/test executed OK ', Date())
        const result = await requests.getTest1()
        res.send(result)
    } catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
})

// GET test1
router.get('/test1', (req, res) => {
    console.log('/test1 executed OK', Date())
    res.json({
        "Users": [
            { "firstName": "John", "lastName": "Doe" },
            { "firstName": "Anna", "lastName": "Smith" },
            { "firstName": "Peter", "lastName": "Jones" }
        ]
    })
})

export default router
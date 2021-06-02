/* Archivo para correr mi servidor de express */
import app from './app'
import './database'

app.listen(4000)
console.log('Server Listening on port', 4000)
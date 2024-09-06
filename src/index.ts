import express from 'express'

const app = express()

const port = process.env.PORT || 8989
app.get('/',(request,response)=>
{
response.send("<h1>Hello this is our app</h1>")
})
app.get('/login',(request,response)=>
    {
    response.send("<h1>Login page</h1>")
    })
app.listen(port, () => {

    console.log('The app is running on port ' + port)
})
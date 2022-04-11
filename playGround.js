function loro(texto){
    for (let i = 0; i < 5; i++) {
    console.log(texto)
    }
}

loro("Hola mundo");

const express = require('express');
const app = express();
app.get ("/serie/:id", function(req, res) {
    let id = req.params.id
    console.log(id)
    for (let i = 0; i <= series.lenght - 1; i++){
        if (series[i].id == id) {
            return res.send(series[i])
        }
    }
    res.sendStatus(404)
})
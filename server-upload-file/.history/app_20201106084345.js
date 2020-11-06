const express = require('express')
const app = express()
const port = 3005

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.route('/upload')
    .post(function (req, res, next) {

        var fstream;
        req.pipe(req.busboy);
        req.busboy.on('file', function (fieldname, file, filename) {
            console.log("Uploading: " + filename);

            //Path where image will be uploaded
            fstream = fs.createWriteStream(__dirname + '/img/' + filename);
            file.pipe(fstream);
            fstream.on('close', function () {    
                console.log("Upload Finished of " + filename);              
                res.redirect('back');           //where to go next
            });
        });
    });
    
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
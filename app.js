const express = require('express');
const cors = require('cors')
const ytdl = require('ytdl-core');
const app = express();


/*
app.get('/', function (req, res) {
    //const {url} = req.query;
    
    //const date = Date.now();
    //res.header("Content-Disposition", `attachment; filename="video_${date}.mp4"`);
    //res.send(url)
        //res.send('Hello World')
    //return ytdl(url, { filter: format => format.container === 'mp4' }).pipe(res);
    
});
*/

app.use(cors());

app.get('/download', function (req, res) {
    
    const URL = req.query.URL;

    const date = Date.now();
    res.header("Content-Disposition", `attachment; filename="video_${date}.mp4"`);
    //res.header("Content-Disposition", `attachment; filename="video.mp4"`);

    const iTag = 22;

    ytdl(URL, { filter: format => format.container === 'mp4'}).pipe(res);

/*
    ytdl(URL, {
        format: 'mp4'
    }).pipe(res);

*/

});

app.listen(3000, () => {
    console.log('servidor rodando')
});



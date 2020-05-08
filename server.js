require('dotenv').config();
    const express = require('express');
    const bodyParser = require('body-parser');
    const Pusher = require('pusher');

    const app = express();
    const port = process.env.PORT || 4000;
    const pusher = new Pusher({
      appId: process.env.PUSHER_APP_ID,
      key: process.env.PUSHER_KEY,
      secret: process.env.PUSHER_SECRET,
      cluster: 'eu',
    });

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      );
      next();
    });

    app.post('/paint', (req, res) => {
        pusher.trigger('painting', 'draw', req.body);
        res.json(req.body);
    });
    // The request body will be sent as the data for 
    // the triggered Pusher event. The same object 
    // will be sent as a response to the user.
    // The trigger is achieved using the trigger method 
    // which takes the trigger identifier(painting), 
    // an event name (draw), and a payload.
    // source: https://pusher.com/tutorials/live-paint-react

    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });


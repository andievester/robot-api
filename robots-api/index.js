import axios from 'axios';
import express from 'express';
import { calcBestRobot } from '../robots-api/helpers/calcBestRobot.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.post("/api/robots/closest", async (req, res) => {
    const { loadId, x, y } = req.body;
    
    let bestRobot = {};
    
    try {
      const { data: robots } = await axios.get(
        "https://60c8ed887dafc90017ffbd56.mockapi.io/robots"
      );

        bestRobot  = calcBestRobot(
          { x, y },
          robots
        )  

    } catch (error) {
      console.log('Error', error.message);
    }
    
    if (bestRobot) {
      res.send(bestRobot);
    } else {
      res.send(`No robots found within proximity of load ${loadId}.`);
    }    
  });

app.listen(process.env.PORT || 5001, () => {
    console.log(`Running on port ${process.envPORT || 5001}`);
  });
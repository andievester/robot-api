# Robots API
We have a fleet of 100 robots and a load that needs to be moved. This simple API receives a payload holding coordinates of the target load, and calculates the most optimal robot (based on distance from the load and battery life) to transport it. 

This project utilizes the express, axios, and nodemon libraries to simplify the development process and the handling of API requests.

After cloning the project onto your device (git clone https://github.com/andievester/robots-api), navigate to the parent folder and execute the following commands:
  - npm install
  - npm run dev
  
To test different inputs, enter a request body into a tool such as Postman in the following format:
  {
    "loadId": "290", 
    "x": "70", 
    "y": "90" 
  }
  
 
 # Improvements
  - Currently, based on instructions from the assignment, this API calculates the optimal robot from a group of bots that are within 10 distance units of       the target load. The robot is selected from this group based on battery life. For now, the API is set up to return nothing if there are no robots           within this distance, and send a warning alerting that there are no nearby robots. I would like to enhance this project by adding logic to still           provide an optimal robot outside of the distance range of 10 units, or to eliminate a robot from the list bots in close proximity if its battery level     is not sufficient to travel up to the required distance to transport the load. This would require obtaining more information about how far a robot can     travel on a given battery level. 
  - The ability to return a list of robots to transport more than one load would probably be a useful improvement.
  - I imagine the possibility of the robots not being idle when the API is used. It could cause issues if a robot is pulled to perform the task based           solely on its distance to the load when in fact it is not equipped to carry two loads. Perhaps a "status" property could be set on the robot to 
    indicate that it is busy. 
  - Add unit tests 
  - Hide the SVT url in an environment variable
  - Handle a case where invalid coordinates are passed in the payload

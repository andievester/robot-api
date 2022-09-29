import { BestRobot } from "../models/BestRobot.js";

export const calcBestRobot = (payload, robots) => {
    let closestRobots = [];
    if (robots.length === 0) {
        return null;
    } else {
        const isCharged = robots.filter((robot) => robot.batteryLevel > 0);

        isCharged.forEach((robot) => {
            if (getDistance(payload.x, robot.x, payload.y, robot.y) <= 10) {
                const bestRobot = new BestRobot();
                bestRobot.robotId = robot.robotId;
                bestRobot.distance = getDistance(payload.x, robot.x, payload.y, robot.y),
                bestRobot.batteryLevel = robot.batteryLevel;

                closestRobots.push(bestRobot);
            }
        });
    }
    
    closestRobots.sort((a, b) => (a.batteryLevel > b.batteryLevel ? -1 : 1));
    
    if (closestRobots.length > 0) {
        return closestRobots[0];
    } else {
        return null;
    }
}

const getDistance = (x1, x2, y1, y2) => {
    return Math.floor(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
}
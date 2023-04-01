import { handlePlayerJoin } from "../controllers/handlePlayerJoin";
import { handlePlayerMoving } from "../controllers/handlePlayerMoving";
import { handlePlayerPassInNewMap } from "../controllers/handlePlayerPassInNewMap";
import { handlePlayerLeft } from "../controllers/handlePlayerLeft";
import { interfacePlayerSocket } from "../controllers/interfacePlayerSocket";
import { handlePlayerRefreshPosition } from "../controllers/handlePlayerRefreshPosition";
const socketRouter = {
  handlePlayerJoin,
  handlePlayerMoving,
  handlePlayerPassInNewMap,
  handlePlayerLeft,
  interfacePlayerSocket,
  handlePlayerRefreshPosition,
};

export default socketRouter;

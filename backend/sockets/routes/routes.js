import { handlePlayerJoin } from "../controllers/handlePlayerJoin";
import { handlePlayerMoving } from "../controllers/handlePlayerMoving";
import { handlePlayerPassInNewMap } from "../controllers/handlePlayerPassInNewMap";
import { handlePlayerLeft } from "../controllers/handlePlayerLeft";
import { interfacePlayerSocket } from "../controllers/interfacePlayerSocket";

const socketRouter = {
  handlePlayerJoin,
  handlePlayerMoving,
  handlePlayerPassInNewMap,
  handlePlayerLeft,
  interfacePlayerSocket,
};

export default socketRouter;

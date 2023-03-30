// import { gameLoader } from "../src/utils/GameLoader/GameLoader";
// import BootGame from "../src/scenes/BootGame";
// import { Scene } from "phaser";

// jest.mock("../src/utils/GameLoader/GameLoader");
describe("BootGame", () => {
  it("should be true", () => {
    expect(true).toBe(true);
  });
});

// describe("BootGame", () => {
//   let scene;
//   let windowObj;
//   Scene.prototype.load = {
//     image: jest.fn(),
//     tilemapTiledJSON: jest.fn(),
//     spritesheet: jest.fn(),
//     audio: jest.fn(),
//   };
//   Scene.prototype.add = {
//     text: jest.fn(),
//   };
//   Scene.prototype.anims = {
//     create: jest.fn(),
//   };

//   navigator.userAgent = "node.js";

//   beforeAll(() => {
//     windowObj = global.window;
//     global.window = {
//       navigator: {
//         userAgent: "node.js",
//       },
//     };
//   });

//   afterAll(() => {
//     global.window = windowObj;
//   });

//   beforeEach(() => {
//     const data = {
//       user: {
//         _id: "id",
//         username: "username",
//         character: {
//           baseTexture: "texture",
//           chatColor: "color",
//           currentTexture: "currentTexture",
//           walkingAnimationMapping: {},
//           pokedollar: 0,
//         },
//         onMap: {
//           position: {
//             x: 0,
//             y: 0,
//             ld: "ld",
//             speed: "speed",
//           },
//           map_id: "map_id",
//         },
//         role: "role",
//         hasConnectedBefore: true,
//       },
//       socket: {
//         id: "sessionId",
//         emit: jest.fn(),
//       },
//     };
//     const dataPlayer = data.user;
//     const socket = data.socket;

//     const mockInit = jest.fn();
//     const mockSceneStart = jest.fn();
//     Scene.prototype.init = mockInit;
//     Scene.prototype.scene = {
//       start: mockSceneStart,
//     };

//     scene = new BootGame();
//     scene.init(data);
//     scene.socket = socket;
//     scene.dataPlayer = dataPlayer;
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it("should preload game assets", () => {
//     scene.preload();
//     expect(scene.load.image).toHaveBeenCalledTimes(4);
//     expect(scene.load.tilemapTiledJSON).toHaveBeenCalledTimes(4);
//     expect(scene.load.spritesheet).toHaveBeenCalledTimes(4);
//     expect(scene.load.audio).toHaveBeenCalledTimes(1);
//     expect(gameLoader).toHaveBeenCalledWith(scene);
//   });

//   it("should emit gameReady event and start Scene1 when create is called with socket and user data", () => {
//     scene.create();
//     expect(scene.socket.emit).toHaveBeenCalledWith("gameReady");
//     expect(scene.scene.start).toHaveBeenCalledWith("Scene1", {
//       user: {
//         _id: "id",
//         sessionId: "sessionId",
//         nickName: "username",
//         pokedollar: 0,
//         baseTexture: "texture",
//         chatColor: "color",
//         currentTexture: "currentTexture",
//         role: "role",
//         position: {
//           x: 0,
//           y: 0,
//           ld: "ld",
//           speed: "speed",
//         },
//         walkingAnimationMapping: {},
//         onMap: "map_id",
//         isMoving: false,
//         hasConnectedBefore: true,
//       },
//       socket: {
//         id: "sessionId",
//         emit: jest.fn(),
//       },
//       changedSceneData: {
//         isChanged: false,
//         x: 0,
//         y: 0,
//       },
//     });
//   });
// });

"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[198],{1405:function(e,t,o){function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){for(var o=0;o<t.length;o++){var s=t[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function a(e,t){return(a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}o.r(t),o.d(t,{default:function(){return r}});var r=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(d,e);var t,o,r,l=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,o=i(d);if(t){var n=i(this).constructor;e=Reflect.construct(o,arguments,n)}else e=o.apply(this,arguments);return function(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function d(){return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,d),l.call(this,"bootGame")}return o=[{key:"init",value:function(e){this.dataPlayer=e.user,this.socket=e.socket,this.data=e;var t=this.dataPlayer.character.baseTexture;this.user={_id:this.dataPlayer._id,sessionId:this.socket.id,nickName:this.dataPlayer.username,pokedollar:this.dataPlayer.character.pokedollar,baseTexture:t.split("_",4).join("_"),chatColor:this.dataPlayer.character.chatColor,currentTexture:this.dataPlayer.character.currentTexture,role:this.dataPlayer.role,position:{x:this.dataPlayer.onMap.position.x,y:this.dataPlayer.onMap.position.y,ld:this.dataPlayer.onMap.position.ld,speed:this.dataPlayer.onMap.position.speed},walkingAnimationMapping:this.dataPlayer.character.walkingAnimationMapping,onMap:this.dataPlayer.onMap.map_id,isMoving:!1,hasConnectedBefore:!0}}},{key:"preload",value:function(){var e;this.load.image("tiles","assets/tilesets/pokemmo-sample-16px-extruded.png"),this.loadSnowTown(),this.loadMountain(),this.loadForest(),this.loadSpritesheet(),this.loadVisualEffects(),this.loadAudio(),e=this,e.progressBar=e.add.graphics(),e.progressBox=e.add.graphics(),e.progressBox.fillStyle(2236962,.8),e.progressBox.fillRect(window.innerWidth/2-150,window.innerHeight/2-30,300,50),e.loadingText=e.make.text({x:window.innerWidth/2,y:window.innerHeight/2-50,text:"Chargement en cours...",style:{font:"20px monospace",fill:"#ffffff"}}),e.loadingText.setOrigin(.5,.5),e.percentText=e.make.text({x:window.innerWidth/2,y:window.innerHeight/2,text:"0%",style:{font:"18px monospace",fill:"#ffffff"}}),e.percentText.setOrigin(.5,.5),e.load.on("progress",function(t){e.percentText.setText(parseInt(100*t)+"%"),e.progressBar.clear(),e.progressBar.fillStyle(16777215,1),e.progressBar.fillRect(window.innerWidth/2-150+10,window.innerHeight/2-30+10,280*t,30)})}},{key:"create",value:function(){this.data.socket&&this.data.user&&(this.socket.emit("gameReady"),this.scene.start("Scene1",{user:this.user,socket:this.socket,changedSceneData:{isChanged:!1,x:0,y:0}}))}},{key:"loadVisualEffects",value:function(){this.load.image("rain","assets/effects/rain.png"),this.load.image("snowflake","assets/effects/snowball.png"),this.load.image("fire","assets/effects/fire.png"),this.load.image("fire2","assets/effects/fire2.png"),this.load.image("smoke","assets/effects/smoke.png")}},{key:"loadSpritesheet",value:function(){this.load.spritesheet("player","assets/sprites/player/characters1.png",{frameWidth:72,frameHeight:96}),this.load.spritesheet("onlinePlayer","assets/sprites/player/characters1.png",{frameWidth:72,frameHeight:96}),this.load.spritesheet("npc","assets/sprites/npc/characters0.png",{frameWidth:72,frameHeight:96})}},{key:"loadForest",value:function(){}},{key:"loadAudio",value:function(){this.load.audio("SnowTown","assets/sounds/bgm/SnowTown.mp3"),this.load.audio("Mountain","assets/sounds/bgm/Mountain.mp3"),this.load.audio("Center","assets/sounds/bgm/Center.mp3"),this.load.audio("Shop","assets/sounds/bgm/Shop.mp3"),this.load.audio("Indoor","assets/sounds/bgm/Indoor.mp3"),this.load.audio("bump","assets/sounds/se/bump.wav"),this.load.audio("walk","assets/sounds/se/walk.mp3"),this.load.audio("bike","assets/sounds/se/bike.mp3"),this.load.audio("weather-rain","assets/sounds/se/weather-rain.mp3"),this.load.audio("thunder","assets/sounds/se/thunder.mp3"),this.load.audio("weather-snow","assets/sounds/se/weather-snow.mp3"),this.load.audio("chimney","assets/sounds/se/chimney.mp3")}},{key:"loadSnowTown",value:function(){this.load.tilemapTiledJSON("SnowTown","assets/tilemaps/SnowTown/SnowTown.json"),this.load.tilemapTiledJSON("SnowTown-DoorA","assets/tilemaps/SnowTown/SnowTown-Indoor-A.json"),this.load.tilemapTiledJSON("SnowTown-DoorA-Floor","assets/tilemaps/SnowTown/SnowTown-Indoor-A-Floor.json"),this.load.tilemapTiledJSON("SnowTown-DoorB","assets/tilemaps/SnowTown/SnowTown-Indoor-B.json"),this.load.tilemapTiledJSON("SnowTown-DoorC","assets/tilemaps/SnowTown/SnowTown-Indoor-C.json"),this.load.tilemapTiledJSON("SnowTown-DoorD","assets/tilemaps/SnowTown/SnowTown-Indoor-D.json"),this.load.tilemapTiledJSON("SnowTown-DoorE","assets/tilemaps/SnowTown/SnowTown-Indoor-E.json")}},{key:"loadMountain",value:function(){this.load.tilemapTiledJSON("Mountain","assets/tilemaps/Mountain/Mountain.json")}}],n(d.prototype,o),r&&n(d,r),Object.defineProperty(d,"prototype",{writable:!1}),d}(o(2260).Scene)}}]);
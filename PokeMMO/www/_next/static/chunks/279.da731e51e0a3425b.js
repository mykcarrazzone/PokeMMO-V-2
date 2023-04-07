"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[279],{6279:function(e,t,n){n.r(t),n.d(t,{default:function(){return Y}});var i=n(2260),a=JSON.parse('{"i8":"0.2.60","v":"Lorenzo GIRALT"}'),r={gameScale:4,spriteScale:1.12280701794,tileSize:16,rateXp:1.5,rateGold:1.5,rateDrop:1.5,rateStats:1.5,nightOpacity:.84};function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function l(){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(i){var a=Object.getOwnPropertyDescriptor(i,t);return a.get?a.get.call(arguments.length<3?e:n):a.value}}).apply(this,arguments)}function c(e,t){return(c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}console.clear(),console.log("%c          ██████\n%c      ██████████████\n%c    ██████████████████\n%c  ██████████████████████\n%c  ██████████████████████\n%c    ██████████████████\n%c      ██████████████\n%c          ██████","color: red;","color: red;","color: red;","color: black;","color: gray;","color: gray;","color: gray;","color: gray;"),console.log("\n%cGames Infos:\nGame Version: %s\nGame Creator: %s\nGame Scale: %d\nGame Sprite Scale: %f\nGame Tile Size: %d\nGame Rate XP: %f\nGame Rate Gold: %f\nGame Rate Drop: %f\nGame Rate Stats: %f\nGame Night Opacity: %f","background:#000;color:#fff;padding:10px;font-weight:bold",a.i8,a.v,r.gameScale,r.spriteScale,r.tileSize,r.rateXp,r.rateGold,r.rateDrop,r.rateStats,r.nightOpacity),console.log("\n"),console.log("%c          ██████\n%c      ██████████████\n%c    ██████████████████\n%c  ██████████████████████\n%c  ██████████████████████\n%c    ██████████████████\n%c      ██████████████\n%c          ██████","color: red;","color: red;","color: red;","color: black;","color: gray;","color: gray;","color: gray;","color: gray;");var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(p,e);var t,n,i,a=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=u(p);if(t){var i=u(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return function(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return d(e)}(this,e)});function p(e){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,p),(t=a.call(this,e.scene,e.x,e.y,e.playerId,e.texture)).sprites=t.scene.add.sprite(0,0,"onlinePlayer"),t.sprites.scale=r.spriteScale,t.sessionId=e.sessionId,t.scene.add.existing(d(t)),t.scene.physics.world.enableBody(d(t)),t.scene.physics.add.collider(d(t),e.worldLayer),t.map=e.map,t.ld=e.ld,t.role=e.role,t.nickName=e.nickName,t.body.setOffset(0,8);var t,n=e.nickName;return n.charAt(0).toUpperCase(),n.slice(1),t.updateGridEngineConfig(),t}return n=[{key:"updateGridEngineConfig",value:function(){this.scene.gridEngineClass.addOnlinePlayer(this.sessionId,0,{x:this.x,y:this.y,ld:this.ld},this.role,this.nickName)}},{key:"isWalking",value:function(e,t,n,i,a){this.scene.gridEngine.setSpeed(this.sessionId,i),this.scene.gridEngine.moveTo(this.sessionId,{x:t,y:n}),this.scene.gridEngineClass.setWalkingAnimationMapping(this.sessionId,a)}},{key:"createLabelAbovePlayer",value:function(){this.playerNickname=this.scene.add.text(this.x,this.y-15,"admin"!==config.role?capitalizedNickName:"[GM] ".concat(capitalizedNickName),{fontFamily:"Arial",fontSize:"14px",fill:"admin"!==config.role?"#ffffff":"#fae953",stroke:"#070701",strokeThickness:0,padding:2.5,backgroundColor:"#030507d7"}).setDepth(8)}},{key:"stopWalking",value:function(){this.anims.stop()}},{key:"destroy",value:function(){l(u(p.prototype),"destroy",this).call(this)}}],o(p.prototype,n),i&&o(p,i),Object.defineProperty(p,"prototype",{writable:!1}),p}(i.GameObjects.Sprite);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,i,a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r=[],s=!0,o=!1;try{for(a=a.call(e);!(s=(n=a.next()).done)&&(r.push(n.value),!t||r.length!==t);s=!0);}catch(e){o=!0,i=e}finally{try{s||null==a.return||a.return()}finally{if(o)throw i}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}function m(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function g(e,t){return(g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function v(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(s,e);var t,n,i,a=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=b(s);if(t){var i=b(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return function(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return v(e)}(this,e)});function s(e){var t;return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,s),(t=a.call(this,e.scene,e.x,e.y,e.texture,e.frame,e.tileMap,e.newZone,e.speed))._id=t.scene.localPlayer._id,t.scene.add.existing(v(t)),t.scene.physics.world.enableBody(v(t)),t.scale=1.13,t.tileMap=e.tileMap,t.speed=e.speed,t.newZone=e.newZone,t.passPorte=!1,t.passWorld=!1,t}return n=[{key:"update",value:function(){this.doorInteraction()}},{key:"doorInteraction",value:function(){var e=this;this.tileMap.findObject("Doors",function(t){if(0!==t.length){var n=t.x*r.gameScale,i=t.y*r.gameScale-50,a=t.width,s=t.height;if(e.y>=i&&e.y<=i+s&&e.x+r.tileSize>=n&&e.x+r.tileSize<=n+a){var o=t.properties[0].value,l=t.properties[1].value,c=y(t.properties[2].value.split("|"),2),d=c[0],u=c[1],p={x:parseInt(d),y:parseInt(u),ld:o,onMap:l};e.changeSceneByMapName(p)}}})}},{key:"changeSceneByMapName",value:function(e){this.scene.localPlayer.onMap=e.onMap,this.scene.localPlayer.position.x=e.x,this.scene.localPlayer.position.y=e.y,this.scene.localPlayer.position.ld=e.ld,this.scene.localPlayer.hasConnectedBefore=!1,this.scene.socket.emit("PLAYER_PASS_IN_NEW_MAP",{_id:this._id,position:{x:e.x,y:e.y,ld:e.ld,speed:3},onMap:e.onMap}),this.destroyScene(),this.scene.scene.restart({user:this.scene.localPlayer,socket:this.scene.socket})}},{key:"generateRandomLevelPokemonSpawn",value:function(e){var t=y(e[0].value.split("|"),2),n=t[0],i=t[1];n=parseInt(n);var a=Math.random()*((i=parseInt(i))-n+1)+n;return"Pokemon spawned at level ".concat(a)}},{key:"battleZoneInteraction",value:function(){if(this.scene.gridEngine.isMoved("player")&&this.scene.battleZones){var e=this.scene.battleZones.worldToTileXY(this.x,this.y),t=this.scene.battleZones.getTileAt(e.x,e.y),n=this.scene.battleZones.layer.properties;t&&24471==t.index&&Math.random()<=.1/35&&console.log(this.generateRandomLevelPokemonSpawn(n))}}},{key:"destroyVariables",value:function(){this.scene.sounds.se.walk.stop(),this.scene.sounds.se.bike.stop(),this.scene.currentState="normal",this.scene.isCrossActivated=!1,this.scene.dayCycleRectangle=null,this.scene.lightningDurations=[],this.scene.lightningStartDurations=[],this.scene.flashRectangle=null,console.log("weather is not rain"),this.scene.audioRain?this.scene.audioRain=null:console.log("audioRain already destroyed"),this.scene.flashRectangle?this.scene.flashRectangle.destroy():console.log("flashRectangle already destroyed")}},{key:"destroyScene",value:function(){this.destroyVariables(),this.scene.registry.destroy(),this.scene.events.off(),this.scene.sound.stopAll()}}],m(s.prototype,n),i&&m(s,i),Object.defineProperty(s,"prototype",{writable:!1}),s}(i.GameObjects.Sprite);function x(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var E=function(){var e,t;function n(e){var t,i,a;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,n),t=this,a={characters:[]},(i="gridEngineConfig")in t?Object.defineProperty(t,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[i]=a,this.self=e,this.map=e.map,this.gridEngine=e.gridEngine,this.add=e.add}return e=[{key:"addNpc",value:function(e){var t=this.add.sprite(0,0,"npc");t.scale=r.spriteScale,this.gridEngine.addCharacter({id:e.id,sprite:t,walkingAnimationMapping:e.walkingAnimationMapping,startPosition:{x:e.x,y:e.y},speed:e.speed,collides:e.collides})}},{key:"moveNpc",value:function(e,t){this.gridEngine.moveRandomly(e,t)}},{key:"setSpeed",value:function(e,t){this.gridEngine.setSpeed(e,t)}},{key:"getPosition",value:function(e){return this.gridEngine.getPosition(e)}},{key:"setTurnTowards",value:function(e,t){this.gridEngine.turnTowards(e,t)}},{key:"setPosition",value:function(e,t){this.gridEngine.setPosition(e,t)}},{key:"setWalkingAnimationMapping",value:function(e,t){this.gridEngine.setWalkingAnimationMapping(e,t)}},{key:"setPlayer",value:function(){var e=this;this.self.player=new k({scene:this.self,x:this.self.localPlayer.position.x,y:this.self.localPlayer.position.y,texture:"player",frame:"up",tileMap:this.self.map,newZone:this.self.newZone,speed:this.self.localPlayer.position.speed}),this.self.cameras.main.startFollow(this.self.player,!0),this.self.player.isCrossActivated=G.servicesGetMapProperties().bike,this.gridEngineConfig={characters:[{id:"player",sprite:this.self.player,walkingAnimationMapping:this.self.localPlayer.walkingAnimationMapping,startPosition:{x:this.self.player.x,y:this.self.player.y},speed:this.self.player.speed,collides:!0}]},this.gridEngine.create(this.map,this.gridEngineConfig),console.info("%c Actual player position: ","color: blue; font-weight: bold",this.gridEngine.getPosition("player")),this.gridEngine.turnTowards("player",this.self.localPlayer.position.ld),this.gridEngine.directionChanged().subscribe(function(t){var n=t.charId;t.direction,"player"==n&&(e.self.sounds.se.bump.isPlaying?e.self.sounds.se.bump.stop():e.self.sounds.se.bump.play())}),this.gridEngine.positionChangeFinished().subscribe(function(t){"player"==t.charId&&e.self.socket.emit("PLAYER_MOVING",{_id:e.self.player._id,position:{x:e.gridEngine.getPosition("player").x,y:e.gridEngine.getPosition("player").y,ld:e.gridEngine.getFacingDirection("player"),speed:e.gridEngine.getSpeed("player")},onMap:e.self.mapName,walkingAnimationMapping:e.gridEngine.getWalkingAnimationMapping("player"),isMoving:e.gridEngine.isMoving("player")})})}},{key:"playerUpdate",value:function(){if(this.gridEngine.isMoving("player"))switch(this.self.player.update(),this.gridEngine.getWalkingAnimationMapping("player")){case 0:case 1:this.self.sounds.se.walk.isPlaying||(this.self.sounds.se.bike.stop(),this.self.sounds.se.walk.play());break;case 2:this.self.sounds.se.bike.isPlaying||(this.self.sounds.se.walk.stop(),this.self.sounds.se.bike.play())}}},{key:"getSpeed",value:function(e){return this.gridEngine.getSpeed(e)}},{key:"addOnlinePlayer",value:function(e,t,n,i,a){this.onlinePlayerSprite=this.add.sprite(0,0,"onlinePlayer"),this.textLabel=this.add.text(this.onlinePlayerSprite.width/2,5,"admin"!==i?a:"<GM> ".concat(a),{fontFamily:"Roboto",fontSize:"16px",fill:"admin"!==i?"#ffffff":"#f0db25",stroke:"#070701",strokeThickness:0,padding:3,backgroundColor:"#030507d7"}).setOrigin(.5,.5);var r=this.add.container(0,0,[this.onlinePlayerSprite,this.textLabel]);this.onlinePlayerSprite.scale=1.13,this.gridEngine.addCharacter({id:e,sprite:this.onlinePlayerSprite,container:r,walkingAnimationMapping:t,startPosition:{x:n.x,y:n.y},speed:3,collides:!1}),this.gridEngine.turnTowards(e,n.ld)}},{key:"removeOnlinePlayer",value:function(e){this.gridEngine.hasCharacter(e)&&(this.gridEngine.removeCharacter(e),this.textLabel.destroy(),this.onlinePlayerSprite.destroy())}},{key:"moveOnlinePlayer",value:function(e,t){this.gridEngine.move(e,t)}}],x(n.prototype,e),t&&x(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}(),P=function(e,t){t.flameEmitter=t.add.particles("fire").setDepth(101),t.flameEmitter2=t.add.particles("fire2").setDepth(101),t.flameEmitter.createEmitter({x:{min:3.97*e.x,max:3.98*e.x},y:3.97*e.y,gravityY:-52,lifespan:550,quantity:.001,gravityX:27,speed:{min:110,max:110},angle:{min:215,max:250},alpha:{start:.5,end:0},scale:{start:.02,end:.06},blendMode:"ADD"}),t.flameEmitter2.createEmitter({x:{min:3.96*e.x,max:3.98*e.x},y:3.97*e.y,gravityY:-52,gravityX:27,lifespan:1050,quantity:.001,speed:{min:130,max:130},angle:{min:215,max:250},alpha:{start:.4,end:0},scale:{start:.019,end:.025},blendMode:"ADD"})},S=function(e,t){t.smokeEmitter=t.add.particles("smoke").setDepth(100),t.smokeEmitter.createEmitter({x:{min:3.976*e.x,max:4.009*e.x},y:4.009*e.y,gravityY:-100,gravityX:-7,lifespan:2200,quantity:1e-4,speed:{min:10,max:15},angle:{min:190,max:200},scale:{start:.009,end:.019},alpha:{start:.25,end:0},blendMode:"NORMAL"}),t.smokeEmitter.createEmitter({x:{min:3.98*e.x,max:4.009*e.x},y:3.999*e.y,gravityY:-100,gravityX:30,lifespan:1e3,quantity:1e-4,speed:{min:10,max:15},angle:{min:190,max:200},scale:{start:.009,end:.019},alpha:{start:.25,end:0},blendMode:"NORMAL"})},w=function(e,t){t.sounds.sfx={chimney:t.sound.add("chimney",{loop:!0,volume:1})},t.sounds.sfx.chimney.play();var n=new Phaser.GameObjects.PointLight(t,3.98*e.x,3.98*e.y,16777198,100,.55).setAlpha(.25);t.add.existing(n),n.setDepth(99),n.visible=!0,t.flameEmitter=t.add.particles("fire").setDepth(101),t.flameEmitter2=t.add.particles("fire2").setDepth(101),t.flameEmitter.createEmitter({x:{min:3.96*e.x,max:4.02*e.x},y:3.995*e.y,gravityY:-52,lifespan:620,quantity:.001,gravityX:10,speed:{min:70,max:82},angle:{min:215,max:320},alpha:{start:1,end:0},scale:{start:.0029,end:.0059},blendMode:"ADD"}),t.flameEmitter2.createEmitter({x:{min:3.96*e.x,max:4.02*e.x},y:3.995*e.y,gravityY:-52,lifespan:600,quantity:.001,gravityX:10,speed:{min:70,max:82},angle:{min:215,max:320},alpha:{start:1,end:0},scale:{start:.0099,end:.0099},blendMode:"ADD"}),t.flameEmitter.createEmitter({x:{min:3.959*e.x,max:4.02*e.x},y:3.994*e.y,gravityY:-52,lifespan:600,quantity:.001,gravityX:10,speed:{min:70,max:82},angle:{min:215,max:320},alpha:{start:.75,end:0},scale:{start:.0019,end:.0099},blendMode:"ADD"}),t.flameEmitter2.createEmitter({x:{min:3.96*e.x,max:4.02*e.x},y:3.995*e.y,gravityY:-62,lifespan:500,quantity:.001,gravityX:5,speed:{min:30,max:50},angle:{min:200,max:320},alpha:{start:.1,end:0},scale:{start:.021,end:.04},blendMode:"ADD"})},O=function(e,t){t.smokeEmitter=t.add.particles("smoke").setDepth(100),t.smokeEmitter.createEmitter({x:{min:3.93*e.x,max:3.99*e.x},y:3.965*e.y,gravityY:-100,gravityX:-7,lifespan:1200,quantity:1e-4,speed:{min:5,max:10},angle:{min:190,max:200},scale:{start:.004,end:.012},alpha:{start:.1,end:0},blendMode:"NORMAL"}),t.smokeEmitter.createEmitter({x:{min:3.93*e.x,max:3.99*e.x},y:3.97*e.y,gravityY:-100,gravityX:10,lifespan:900,quantity:1e-4,speed:{min:5,max:10},angle:{min:190,max:200},scale:{start:.004,end:.014},alpha:{start:.09,end:0},blendMode:"NORMAL"})};function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}var C=function(e,t,n){t.dayCycleRectangle||(t.dayCycleRectangle=t.add.rectangle(0,0,t.cameras.main.width,t.cameras.main.height,0,0).setDepth(100).setOrigin(0,0).setScrollFactor(0));var i="day"===e?0:r.nightOpacity;t.tweens.add({targets:t.dayCycleRectangle,alpha:i,ease:"Linear",duration:n?0:6e3,onUpdate:function(){t.dayCycleRectangle.setFillStyle(0,t.dayCycleRectangle.alpha)},onComplete:function(){t.dayCycleRectangle.setFillStyle(0,i)}})},M=function(e){e.sounds.sfx={snow:e.sound.add("weather-snow",{loop:!0,volume:1})},e.sounds.sfx.snow.play(),e.emitter=e.add.particles("snowflake").setDepth(99),e.emitter.allowGravity=!1,e.emitter.createEmitter({emitZone:{type:"random",source:new Phaser.Geom.Rectangle(0,0,3*e.map.widthInPixels,4*e.map.heightInPixels)},lifespan:3650,speedY:{min:96,max:96},gravityY:50,gravityX:-30,maxParticles:23500,quantity:7.5,frequency:60,scale:{start:.32,end:.33},follow:e.cameras.main,followOffset:{x:0,y:-100},blendMode:"ADD"})},I=function(e){var t=Math.floor(Math.random()*e.length);return e[t]},D=function(e){if(G.servicesGetMapProperties().weather.split("|")[0]){e.lightningDurations=[6e3,12e3,14e3,21e3,35e3,45e3],e.lightningStartDurations=[6e3,3e3,7e3],e.sounds.sfx={rain:e.sound.add("weather-rain",{loop:!0,volume:1}),thunder:e.sound.add("thunder",{loop:!1,volume:1})},e.sounds.sfx.rain.play(),e.emitter=e.add.particles("rain").setDepth(99),e.emitter.allowGravity=!1,e.emitter.createEmitter({emitZone:{type:"random",source:new Phaser.Geom.Rectangle(0,0,3*e.map.widthInPixels,4*e.map.heightInPixels)},lifespan:1700,speedY:{min:150,max:150},gravityY:550,gravityX:-250,maxParticles:22500,frequency:0,quantity:7,alpha:{start:.5,end:.5},scale:{start:.11,end:.11},follow:e.cameras.main,followOffset:{x:0,y:-1e3},blendMode:"ADD"});var t=function(e){G.servicesGetMapProperties().weather.split("|")[0]?(e.flashRectangle||(e.flashRectangle=e.add.rectangle(0,0,e.cameras.main.width,e.cameras.main.height,16777215,0).setDepth(100).setOrigin(0,0).setScrollFactor(0).setAlpha(0)),function t(){e.tweens.add({targets:e.flashRectangle,alpha:.85,duration:300,ease:"Linear",onStart:function(){e.sounds.sfx.thunder.isPlaying||e.sounds.sfx.thunder.play(),e.flashRectangle.setFillStyle(16251647)},onComplete:function(){e.tweens.add({targets:e.flashRectangle,alpha:0,duration:1200,ease:"Linear",onComplete:function(){var n=I(e.lightningDurations);e.flashRectangle&&e.time.delayedCall(n,t,[],e)}})}})}()):(e.audioRain.stop(),e.flashRectangle&&e.flashRectangle.destroy())};e.time.delayedCall(I(e.lightningStartDurations),function(){return t(e)},[],e)}},R={audio:function(e,t){t.sounds.se={walk:t.sound.add("walk",{loop:!1,volume:1,rate:1}),bike:t.sound.add("bike",{loop:!1,volume:1,rate:1}),bump:t.sound.add("bump",{loop:!1,volume:1})};try{var n=e.split("|")[0],i="true"===e.split("|")[1],a=parseFloat(e.split("|")[2]),r=parseFloat(e.split("|")[3]);if(!n.match(/^[A-Z][a-zA-Z]+$/))throw Error("Invalid name format");if("boolean"!=typeof i)throw Error("Invalid loop value");if(isNaN(a)||a<0||a>1)throw Error("Invalid volume value");if(isNaN(r)||r<.5||r>4)throw Error("Invalid rate value");t.sounds.bgm={map:t.sound.add(n,{loop:i,volume:a,rate:r})},t.sounds.bgm.map.play()}catch(e){console.error(e)}},bike:function(e,t){if(t.gridEngineClass){if("boolean"==typeof e)return e;throw Error("[funcIsBike] - Invalid value")}},isNight:function(e,t){if("boolean"!=typeof e)throw Error("[funcStartDayCycle] - Invalid value");e&&(G.isDay(t)?C("day",t,!0):C("night",t,!0),t.events.on("dayChange",function(e){e?C("day",t):C("night",t)}))},mapName:function(e,t){var n,i,a,r,s,o,l,c,d,u,p,f,y,h,m,g,v,b;try{if("string"!=typeof e)throw Error("[funcAddMapNameSign] - Invalid value in @if");if(e.length>0)n=e.includes("Maison de")?e="Maison":e;else throw Error("[funcAddMapNameSign] - Invalid value in @else")}catch(e){console.log("Error in addMapNameSign: ",e)}a=(i={scene:t,x:186,y:76.5,text:n,radius:5,fontFamily:"Comic Sans Ms",textColor:"#ffffff",shadow:1,backgroundColor:"#1F2937",fontSize:17,padding:12.5}).scene,r=i.x,s=i.y,o=i.text,l=i.radius,c=i.fontFamily,d=i.textColor,u=i.shadow,p=i.backgroundColor,f=i.fontSize,y=i.padding,h=a.add.text(r,s,o,{fontFamily:c,shadow:{offsetX:u,offsetY:u,color:"#000000",blur:0,stroke:!0,fill:!0},fontSize:f,color:d}).setScrollFactor(0).setDepth(3020).setScale(1),m=a.add.graphics().setScrollFactor(0).setDepth(3010).setScale(1),g=h.width+2*y,v=h.height+2*y,m.fillStyle(p.replace("#","0x"),1),m.fillRoundedRect(r-y,s-y,g,v,l),m.alpha=0,m.y-=v,a.tweens.add({targets:m,y:m.y+v,alpha:1,duration:2e3,ease:"Cubic.easeOut"}),h.alpha=0,h.setPosition(r,s-v),a.tweens.add({targets:h,y:s,alpha:1,duration:2e3,ease:"Cubic.easeOut"}),(b=a.add.group()).add(m),b.add(h)},weather:function(e,t){var n=e.split("|")[0],i=e.split("|")[1];if(n)switch(i){case"Snow":M(t);break;case"Rain":D(t)}}},j={audio:null,bike:null,isNight:null,mapName:null,weather:null},N=function(e){return e.hour=new Date().getHours(),e.hour>=6&&e.hour<17},_=function(e,t){t.lights=[],e.forEach(function(e){var n=new Phaser.GameObjects.PointLight(t,e.x,e.y,16777198,118,0);n.setDepth(10001),t.add.existing(n),n.visible=!1,t.lights.push(n)});var n=function(e,n){var i=e?.14:0;setTimeout(function(){t.lights.forEach(function(a){t.tweens.add({targets:a,intensity:i,ease:"Linear",duration:n?1e3:1e3/3.5,onStart:function(){a.visible=!0},onComplete:function(){e||(a.visible=!1)}})})},n?500:4500)};R.isNight&&!G.isDay(t)?n(!0,!0):n(!1,!0),t.events.on("dayChange",function(e){R.isNight&&!e?n(!0,!1):n(!1,!0)})},G={servicesAddNpc:function(e,t){Array.isArray(e.objects)&&0!==e.objects.length&&t.gridEngineClass&&e.objects.map(function(e){var n,i=e.name,a=e.properties[0].value,r=function(e){if(Array.isArray(e))return e}(n=e.properties[1].value.split("|"))||function(e,t){var n,i,a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r=[],s=!0,o=!1;try{for(a=a.call(e);!(s=(n=a.next()).done)&&(r.push(n.value),!t||r.length!==t);s=!0);}catch(e){o=!0,i=e}finally{try{s||null==a.return||a.return()}finally{if(o)throw i}}return r}}(n,2)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}}(n,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),s=r[0],o=r[1];t.gridEngineClass.addNpc({id:i,x:parseInt(s),y:parseInt(o),speed:0,walkingAnimationMapping:e.properties[2].value,collides:!0}),t.gridEngineClass.setTurnTowards(e.name,a)})},utilsInitKeyboardControls:function(e){!e.gridEngine.isMoving("player")&&(!e.hasUpdatedSpriteToDefault&&G.servicesGetMapProperties().bike&&(G.servicesUpdatedSpriteToDefault(e),e.hasUpdatedSpriteToDefault=!0),Phaser.Input.Keyboard.JustDown(e.keys.cross)&&G.servicesGetMapProperties().bike&&e.time.now-e.crossLastPressed>e.crossDelay?(e.crossLastPressed=e.time.now,e.isCrossActivated=!e.isCrossActivated,e.isCrossActivated?e.currentState="cross":e.currentState="normal",e.previousState!==e.currentState&&(G.servicesUpdateSprite(e),e.previousState=e.currentState)):e.keys.shift.isDown&&!e.isCrossActivated&&e.time.now-e.shiftLastPressed>e.shiftDelay?(e.isCrossActivated||e.keys.shift.isDown)&&(e.shiftLastPressed=e.time.now,e.isCrossActivated=!1,e.currentState="shift",e.previousState!==e.currentState&&(G.servicesUpdateSprite(e),e.previousState=e.currentState)):e.keys.shift.isUp&&!e.isCrossActivated&&(e.currentState="normal",e.previousState!==e.currentState&&(G.servicesUpdateSprite(e),e.previousState=e.currentState))),e.keys.left.isDown?e.gridEngine.move("player","left"):e.keys.right.isDown?e.gridEngine.move("player","right"):e.keys.up.isDown?e.gridEngine.move("player","up"):e.keys.down.isDown&&e.gridEngine.move("player","down")},utilsInitGameCreateObjects:function(e,t){Object.values(t).forEach(function(t){switch(t.name){case"MapProperties":G.servicesMapProperties(t,e);break;case"Effects":case"LightPoints":G.utilsStartVisualEffects(t,e);break;case"Npc":G.servicesAddNpc(t,e)}})},servicesHandlerSocket:function(e,t,n){e.socket.on("CURRENT_PLAYERS_ON_MAP",function(e){Object.values(e).filter(function(e){return e.sessionId!==t.socket.id&&e.onMap===t.mapName}).forEach(function(e){n[e.sessionId]=new p({scene:t,sessionId:e.sessionId,key:e.sessionId,map:e.onMap,x:e.position.x,y:e.position.y,nickName:e.nickName,role:e.role,ld:e.position.ld,texture:"onlinePlayer"})})}),e.socket.on("PLAYER_UPDATED",function(e,i){Object.values(e).filter(function(e){return e.sessionId!==t.socket.id&&e.onMap===t.mapName}).forEach(function(e){n[e.sessionId]==t.socket.id?(n[t.socket.id].destroy(),t.gridEngineClass.removeOnlinePlayer(t.socket.id),delete n[t.socket.id]):(t.gridEngineClass.removeOnlinePlayer(e.sessionId),delete n[e.sessionId]),n[e.sessionId]=new p({scene:t,sessionId:e.sessionId,key:e.sessionId,map:e.onMap,x:e.position.x,y:e.position.y,nickName:e.nickName,role:e.role,ld:e.position.ld,texture:"onlinePlayer"})})}),e.socket.on("PLAYER_LEFT",function(e){n[e]&&(t.gridEngineClass.removeOnlinePlayer(e),n[e].destroy(),delete n[e])}),e.socket.on("PLAYER_MOVED",function(e){if(t.mapName==e.onMap){var i=n[e.sessionId];void 0==i?n[e.sessionId]=new p({scene:t,sessionId:e.sessionId,key:e.sessionId,map:e.onMap,x:e.position.x,y:e.position.y,nickName:e.nickName,role:e.role,ld:e.position.ld,texture:"onlinePlayer"}):i.isWalking(e.position.ld,e.position.x,e.position.y,e.position.speed,e.walkingAnimationMapping)}}),e.socket.on("PLAYER_CHANGED_MAP",function(e){n[e]&&n[e].sessionId!=t.socket.id&&(t.gridEngineClass.removeOnlinePlayer(e),n[e].destroy(),delete n[e])})},utilsFpsDisplay:function(e){setInterval(function(){e.socket.emit("sendFps",parseInt(e.game.loop.actualFps))},500)},utilsStartVisualEffects:function(e,t){Array.isArray(e.objects)&&0!==e.objects.length&&Object.values(e.objects).forEach(function(e){switch(e.name){case"Fire":P(e,t);break;case"Smoke":S(e,t);break;case"WoodSmoke":O(e,t);break;case"WoodFire":w(e,t)}})},utilsUpdateVisualEffects:function(e,t){Array.isArray(e.objects)&&0!==e.objects.length&&(Object.values(e.objects).forEach(function(e){var n=e.x*r.gameScale+35,i=e.y*r.gameScale+58;t.myLights.push({x:n,y:i})}),_(t.myLights,t))},utilsInitGameUpdateObjects:function(e,t){Object.values(t).forEach(function(t){"LightPoints"===t.name&&G.utilsUpdateVisualEffects(t,e)})},OnlinePlayer:p,GridEngineCreate:E,onlinePlayers:[],servicesMapProperties:function(e,t){Object.keys(R).map(function(n){var i=e.properties.find(function(e){return e.name===n});i&&(j[n]=i.value,R[n](i.value,t))})},servicesGetMapProperties:function(){return j},servicesDisableInputByFocus:function(e){document.addEventListener("mousedown",function(t){"CANVAS"==document.elementFromPoint(t.clientX,t.clientY).nodeName?(e.gameHasFocused=!0,e.input.keyboard.enabled=!0,e.input.keyboard.enableGlobalCapture()):(e.gameHasFocused=!1,e.input.keyboard.enabled=!1,e.input.keyboard.disableGlobalCapture())})},servicesUpdateSprite:function(e){if(e.currentState!==e.previousState){switch(e.previousState=e.currentState,e.currentState){case"cross":e.gridEngine.setSpeed("player",5.5),e.gridEngine.setWalkingAnimationMapping("player",2);break;case"shift":e.sounds.se.walk.rate=1.5,e.gridEngine.setSpeed("player",4),e.gridEngine.setWalkingAnimationMapping("player",1);break;case"normal":e.sounds.se.walk.rate=1,e.gridEngine.setSpeed("player",2.5),e.gridEngine.setWalkingAnimationMapping("player",0)}e.gridEngine.turnTowards("player",e.gridEngine.getFacingDirection("player"))}},servicesUpdatedSpriteToDefault:function(e){e.sounds.se.walk.rate=1,e.gridEngine.setSpeed("player",3),e.gridEngine.setWalkingAnimationMapping("player",0)},utilsDefineVariables:function(e){e.isDay=N(e),e.sounds={},e.intervalId,e.intervalSet=!1,e.currentState="normal",e.crossLastPressed=0,e.crossDelay=500,e.shiftLastPressed=0,e.shiftDelay=500,e.previousState=null,e.hasUpdatedSpriteToDefault=!1,e.keys=e.input.keyboard.addKeys({up:Phaser.Input.Keyboard.KeyCodes.Z,down:Phaser.Input.Keyboard.KeyCodes.S,left:Phaser.Input.Keyboard.KeyCodes.Q,right:Phaser.Input.Keyboard.KeyCodes.D,shift:Phaser.Input.Keyboard.KeyCodes.SHIFT,cross:Phaser.Input.Keyboard.KeyCodes.R})},handlerUpdateEvents:function(e){var t=N(e);t!==e.isDay&&(e.isDay=t,t?e.events.emit("dayChange",!0):e.events.emit("dayChange",!1))},isDay:N};function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function F(e,t){return(F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F(e,t)}(s,e);var t,n,i,a=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=U(s);if(t){var i=U(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return function(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function s(){return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,s),a.call(this,"Scene1")}return n=[{key:"init",value:function(e){this.data&&(G.utilsDefineVariables(this),this.socket=e.socket,this.mapName=e.user.onMap,this.localPlayer=e.user,this.playerTexturePosition=e.user.position.ld,this.container=[],this.localPlayer&&(this.socket.emit("PLAYER_JOIN",this.localPlayer),this.socket.emit("localPlayer",{id:this.localPlayer._id,nickName:this.localPlayer.nickName.charAt(0).toUpperCase()+this.localPlayer.nickName.slice(1),role:this.localPlayer.role})))}},{key:"create",value:function(){this.textures.on("addtexturekey",function(e,t){t.source[0].glTexture.setFilter(Phaser.Textures.FilterMode.LINEAR)}),this.socket&&this.localPlayer&&(console.warn=function(){},this.gameHasFocused=!0,this.initGame(),G.utilsFpsDisplay(this))}},{key:"initGame",value:function(){this.scene.launch("AudioGame",this),this.scene.launch("GamePad",this),this.initMap(),this.gridEngineClass=new G.GridEngineCreate(this),this.gridEngineClass.setPlayer(),G.utilsInitGameCreateObjects(this,this.map.objects),G.utilsInitGameUpdateObjects(this,this.map.objects),G.servicesHandlerSocket(this,this,G.onlinePlayers),G.servicesDisableInputByFocus(this)}},{key:"initMap",value:function(){this.myLights=[],this.map=this.make.tilemap({key:this.mapName}),this.map.addTilesetImage("pokemmo-sample-16px-extruded","tiles",16,16);for(var e=0;e<this.map.layers.length;e++)this.map.createLayer(e,"pokemmo-sample-16px-extruded",0,0).scale=r.gameScale;this.cameras.main.fadeIn(1e3)}},{key:"update",value:function(){G.handlerUpdateEvents(this),this.gridEngineClass.playerUpdate(),G.utilsInitKeyboardControls(this)}}],T(s.prototype,n),i&&T(s,i),Object.defineProperty(s,"prototype",{writable:!1}),s}(i.Scene)}}]);
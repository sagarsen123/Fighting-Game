const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = 1280
canvas.height = 576
// canvas.width = window.innerWidth
// canvas.height = window.innerHeight
c.fillRect(0, 0, canvas.width, canvas.height);
const gravity = 1.9;

const background = new Sprite({
   position: {
      x:00,
      y:0
   },
   compatible:1.25,
   imageSrc: "./image/background.png"
})
const shop = new Sprite({
   position: {
      x: 830,
      y: 148
   },
   scale: 2.60,
   frame: 6,
   imageSrc: "./image/shop.png"
})

const player = new fighter({
   position:
   {
      x: 200,
      y: 0
   },
   velocity: {
      x: 0,
      y: 0
   },
   imageSrc: "./image/samuraiMack/Idle.png",
   frame: 8,
   scale: 1.9,
   offset: {
      x: 200,
      y: 83
   },
   sprites: {
      idle: {
         imageSrc: "./image/samuraiMack/Idle.png",
         frame: 8,
      },
      run: {
         imageSrc: "./image/samuraiMack/Run.png",
         frame: 8,
      },
      jump: {
         imageSrc: "./image/samuraiMack/Jump.png",
         frame: 2,
      },
      fall: {
         imageSrc: "./image/samuraiMack/Fall.png",
         frame: 2,
      },
      attack1: {
         imageSrc: "./image/samuraiMack/Attack1.png",
         frame: 6,
      },
      attack2: {
         imageSrc: "./image/samuraiMack/Attack2.png",
         frame: 6,
      },
      takehit:{
         imageSrc: "./image/samuraiMack/take_hit.png",
         frame : 4
      } ,
      death:{
         imageSrc: "./image/samuraiMack/Death.png",
         frame : 6
      }

   },
   attackBox:{
      offset:{
         x:10,
         y:50
      },
      width:160,
      height:50
   }
});

// const player = new fighter({
//    position: {
//       x: 0,
//       y: 0
//     },
//     velocity: {
//       x: 0,
//       y: 0
//     },
//     offset: {
//       x: 0,
//       y: 0
//     },
//    imageSrc: "./image/samuraiMack/Idle.png",
//    framesMax: 8,
//   scale: 2.5,
//   offset: {
//     x: 215,
//     y: 157
//   },
//    sprites: {
//       idle: {
//          imageSrc: "./image/samuraiMack/Idle.png",
//          frame: 8,
//       },
//       run: {
//          imageSrc: "./image/samuraiMack/Run.png",
//          frame: 8,
//       },
//       jump: {
//          imageSrc: "./image/samuraiMack/Jump.png",
//          frame: 2,
//       },
//       fall: {
//          imageSrc: "./image/samuraiMack/Fall.png",
//          frame: 2,
//       },
//       attack1: {
//          imageSrc: "./image/samuraiMack/Attack1.png",
//          frame: 6,
//       },
//       attack2: {
//          imageSrc: "./image/samuraiMack/Attack2.png",
//          frame: 6,
//       },
//       takehit:{
//          imageSrc: "./image/samuraiMack/take_hit.png",
//          frame : 4
//       } ,
//       death:{
//          imageSrc: "./image/samuraiMack/Death.png",
//          frame : 6
//       }

//    },
//    attackBox: {
//       offset: {
//         x: 100,
//         y: 50
//       },
//       width: 160,
//       height: 50
//     }
//   })
  
// const enemy = new fighter({
//    position: {
//       x: 400,
//       y: 100
//     },
//     velocity: {
//       x: 0,
//       y: 0
//     },
//     color: 'blue',
//     offset: {
//       x: -50,
//       y: 0
//     },
//    imageSrc: "./image/kenji/Idle.png",
//    framesMax: 4,
//    scale: 2.5,
//    offset: {
//      x: 215,
//      y: 167
//    },
//    sprites: {
//       idle: {
//          imageSrc: "./image/kenji/Idle.png",
//          frame: 4,
//       },
//       run: {
//          imageSrc: "./image/kenji/Run.png",
//          frame: 8,
//       },
//       jump: {
//          imageSrc: "./image/kenji/Jump.png",
//          frame: 2,
//       },
//       fall: {
//          imageSrc: "./image/kenji/Fall.png",
//          frame: 2,
//       },
//       attack1: {
//          imageSrc: "./image/kenji/Attack1.png",
//          frame: 4,
//       },
//       attack2: {
//          imageSrc: "./image/kenji/Attack2.png",
//          frame: 6,
//       },
//       takehit:{
//          imageSrc: "./image/kenji/Take_hit.png",
//          frame : 3
//       },
//       death:{
//          imageSrc: "./image/kenji/Death.png",
//          frame : 7
//       },
//    },
//    attackBox: {
//       offset: {
//         x: -170,
//         y: 50
//       },
//       width: 170,
//       height: 50
//     }
//   })

const enemy = new fighter({
position:
{
   x: 1000,
   y: 50
},
velocity: {
   x: 0,
   y: 0
},
color: "blue",
imageSrc: "./image/kenji/Idle.png",
frame: 4,
scale: 2.3,
offset: {
   x: 0,
   y: 144
   },
sprites: {
   idle: {
      imageSrc: "./image/kenji/Idle.png",
      frame: 4,
   },
   run: {
      imageSrc: "./image/kenji/Run.png",
      frame: 8,
   },
   jump: {
      imageSrc: "./image/kenji/Jump.png",
      frame: 2,
   },
   fall: {
      imageSrc: "./image/kenji/Fall.png",
      frame: 2,
   },
   attack1: {
      imageSrc: "./image/kenji/Attack1.png",
      frame: 4,
   },
   attack2: {
      imageSrc: "./image/kenji/Attack2.png",
      frame: 6,
   },
   takehit:{
      imageSrc: "./image/kenji/Take_hit.png",
      frame : 3
   },
   death:{
      imageSrc: "./image/kenji/Death.png",
      frame : 7
   },
},
attackBox:{
   offset:{
      x:140,
      y:50
   },
   width:60,
   height:50
}
});


const keys = {
   a: {
      pressed: false
   },
   d: {
      pressed: false
   },
   ArrowRight: {
      pressed: false
   },
   ArrowLeft: {
      pressed: false
   }
}

let lastKey;

decreaseTimer();

function animate() {
   window.requestAnimationFrame(animate);
   c.fillStyle = "black";
   c.fillRect(0, 0, canvas.width, canvas.height);
   background.update();
   shop.update();
   c.fillStyle= " rgba(255,255,255,0.15)";
   c.fillRect(0,0,canvas.width,canvas.height);
   player.update();
   enemy.update();
   player.velocity.x = 0;
   enemy.velocity.x = 0;

   //player movement
   if (keys.a.pressed && player.lastKey == 'a') {
      player.velocity.x = -20;
      player.switchSprites("run");
   } else if (keys.d.pressed && player.lastKey == 'd') {
      player.velocity.x = 20;
      player.switchSprites("run");
   } else {
      player.switchSprites("idle");
   }

   if (player.velocity.y < 0) {
      player.switchSprites("jump");
   } else if (player.velocity.y > 0) {
      player.switchSprites("fall");
   }


   //enemy movement
   if (keys.ArrowRight.pressed && enemy.lastKey == 'ArrowRight') {
      enemy.velocity.x = 20;
      enemy.switchSprites("run");
   } else if (keys.ArrowLeft.pressed && enemy.lastKey == 'ArrowLeft') {
      enemy.velocity.x = -20;
      enemy.switchSprites("run");
   } else {
      enemy.switchSprites("idle");
   }

   if (enemy.velocity.y < 0) {
      enemy.switchSprites("jump");
   } else if (enemy.velocity.y > 0) {
      enemy.switchSprites("fall");
   }

   //player_attacks
   if (
      rectangularCollision(
         {
            rectangle1: player,
            rectangle2: enemy
         }) && player.isattacking && player.cframe==3
   ) {
      enemy.takehit();
      player.isattacking = false;
      document.querySelector("#enemyHealth").style.width = enemy.health + "%";
   }

   //player_misses
   if(player.isattacking && player.cframe===3){
      player.isattacking = false;
   }

   //enemy attacking
   if (
      rectangularCollision(
         {
            rectangle1: enemy,
            rectangle2: player
         }) && enemy.isattacking  && enemy.cframe==2
   ) {
      player.takehit();
      enemy.isattacking = false;
      // player.health -= 10;
      document.querySelector("#playerHealth").style.width = player.health + "%";
   }

   //enemy missees
   if(enemy.isattacking && enemy.cframe===2  ){
      enemy.isattacking = false;
   }
   if (enemy.health == 0 || player.health == 0) {
      determineWinner({ player, enemy, timerid });
   }
}

animate();

window.addEventListener('keydown', (event) => {
     if(!player.dead){
         switch (event.key) {
         case 'd':
            keys.d.pressed = true;
            player.lastKey = 'd';
            break;
         case 'a':
            keys.a.pressed = true;
            player.lastKey = 'a'
            break;
         case 'w':
            player.velocity.y = -20;
            break;
         case ' ':
            player.attack();
            break;
      }
   }
   if(!enemy.dead){
      switch(event.key){
         case 'ArrowRight':
            keys.ArrowRight.pressed = true;
            enemy.lastKey = 'ArrowRight';
            break;
         case 'ArrowLeft':
            keys.ArrowLeft.pressed = true;
            enemy.lastKey = 'ArrowLeft'
            break;
         case 'ArrowUp':
            enemy.velocity.y = -20;
            break;
         case 'ArrowDown':
            enemy.attack();
            break;
      }
   }
});

window.addEventListener('keyup', (event) => {

   switch (event.key) {
      case 'd': keys.d.pressed = false;
         break;
      case 'a': keys.a.pressed = false;
         break;

      //for enemy
      case 'ArrowRight': keys.ArrowRight.pressed = false;
         enemy.lastKey = 'ArrowRight';
         break;
      case 'ArrowLeft': keys.ArrowLeft.pressed = false;
         enemy.lastKey = 'ArrowLeft'
         break;
      

   }
});
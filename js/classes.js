class Sprite {
   constructor({ position, imageSrc, scale = 1, frame = 1,compatible=1, offset = { x: 0, y: 0 } }) {
      this.position = position;
      this.compatible=compatible;
      this.height = 200;
      this.width = 50;
      this.image = new Image();
      this.image.src = imageSrc;
      this.scale = scale;
      this.frame = frame;
      this.cframe = 0;
      this.frameElapsed = 0;
      this.frameHold = 7;
      this.offset = offset;
   }
   animateFrames() {
      this.frameElapsed++;
      if (this.frameElapsed % this.frameHold == 0) {
         if (this.cframe < this.frame - 1) {
            this.cframe++;
         }
         else {
            this.cframe = 0;
         }
      }
   }
   draw() {
      c.drawImage(
         this.image,
         this.cframe * (this.image.width / this.frame),
         // window.innerWidth,
         0,
         (this.image.width / this.frame ),
         this.image.height,
         this.position.x - this.offset.x ,
         this.position.y - this.offset.y,
         (this.image.width/ this.frame) * this.scale *this.compatible,
         // (this.image.width / this.frame) * this.scale,
         this.image.height * this.scale 
      )
   }
   update() {
      this.draw();
      this.animateFrames();
   }
}


class fighter extends Sprite {
   constructor({ position, velocity, color = "red", offset = { x: 0, y: 0 }, imageSrc, scale = 1, frame = 1, sprites , attackBox ={ offset:{x:0,y:0},width:undefined,height:undefined}}) {
      super({
         position,
         offset,
         scale,
         frame,
         imageSrc
      })

      this.velocity = velocity;
      this.height = 150;
      this.width = 50;
      
      this.lastKey;
      this.color = color;
      this.attackBox = {
         position: {
            y: this.position.y,
            x: this.position.x
         },
         offset: attackBox.offset,
         width: attackBox.width,
         height: attackBox.height
      }
      this.health = 100
      this.isattacking;
      this.cframe = 0;
      this.frameElapsed = 0;
      this.frameHold = 5;
      this.sprites = sprites;
      this.dead=false;
      this.gameEnd=false;
      for (const sprite in this.sprites) {
         sprites[sprite].image = new Image();
         sprites[sprite].image.src = sprites[sprite].imageSrc;
      }
   }
   update() {
      this.draw();
      if(!this.dead)
      this.animateFrames()

      this.attackBox.position.x = this.position.x + this.attackBox.offset.x
      this.attackBox.position.y = this.position.y + this.attackBox.offset.y


      // c.fillRect(this.attackBox.position.x , this.attackBox.position.y,this.attackBox.width,this.attackBox.height);
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.height + this.velocity.y >= canvas.height - 95) {
         this.velocity.y = 0;
         this.position.y = 331;
      } else {
         this.velocity.y += gravity;
      }
   }
   attack() {

      this.switchSprites("attack1");
      this.isattacking = true;
   }

   takehit() {
      // if(this.dead) this.health=0;
      // else

      this.health-=10;
      
      if(this.health <= 0 || this.gameEnd) {
         this.switchSprites("death");
      }else{
         this.switchSprites("takehit");
      }
   }

   switchSprites(sprite) { 
      if(this.image == this.sprites.death.image ){
               if( this.cframe==this.sprites.death.frame-1)
               this.dead=true;
         return
       }

      if(this.image == this.sprites.attack1.image && this.cframe<this.sprites.attack1.frame-1) return ;
      if(this.image == this.sprites.takehit.image && this.cframe<this.sprites.takehit.frame-1) return ;
      switch (sprite) {
         case "idle":
            if (this.image != this.sprites.idle.image) {
               this.image = this.sprites.idle.image;
               this.frame = this.sprites.idle.frame;
               this.cframe = 0;
            }
            break;
         case "run":
            if (this.image != this.sprites.run.image) {
               this.image = this.sprites.run.image;
               this.frame = this.sprites.run.frame;
               this.cframe = 0;
            }
            break;
         case "jump":
            if (this.image != this.sprites.jump.image) {
               this.image = this.sprites.jump.image;
               this.frame = this.sprites.jump.frame;
               this.cframe = 0;
            }
            break;
         case "fall":
            if (this.image != this.sprites.fall.image) {
               this.image = this.sprites.fall.image;
               this.frame = this.sprites.fall.frame;
               this.cframe = 0;
            }
            break;
         case "attack1":
            if (this.image != this.sprites.attack1.image) {
               this.image = this.sprites.attack1.image;
               this.frame = this.sprites.attack1.frame;
               this.cframe = 0;
            }
            break;
         case "attack2":
            if (this.image != this.sprites.attack2.image) {
               this.image = this.sprites.attack2.image;
               this.frame = this.sprites.attack2.frame;
               this.cframe = 0;
            }
            break;
         case "takehit":
            if (this.image != this.sprites.takehit.image) {
               this.image = this.sprites.takehit.image;
               this.frame = this.sprites.takehit.frame;
               this.cframe = 0;
            }
            break;
         case "death":
            if (this.image != this.sprites.death.image) {
               this.image = this.sprites.death.image;
               this.frame = this.sprites.death.frame;
               this.cframe = 0;
            }
            break;
      }

   }
}
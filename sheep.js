export class Sheep{
    constructor(img, stageWidth){ // 스테이지 우측에서 등장해야 해서 stageWidth 받음
        this.img = img;

        //프레임 정의
        this.totlaFrame = 8;
        this.curFrame = 0;

        // 양그림 한장의 넓이와 높이
        this.imgWidth = 360;
        this.imgHeight = 300;

        // 양의 크기 ( 레티나 디스플레이 감안 )
        this.sheepWidth = 180;
        this.sheepHeight = 150;

        this.sheepWidthHalf = this.sheepWidth / 2;
        this.x = stageWidth + this.sheepWidth;
        this.y = 0;
        this.speed = Math.random * 2 + 1;

        this.fps = 24;
        this.fpsTime = 1000 / this.fps; // 실제 타임스탬프와 비교값
    }

    draw(ctx, t, dots){
        // this.curFrame += 1;
        // if (this.curFrame == this.totlaFrame){
        //     this.curFrame = 0;
        // }

        // requestAnimationFrame 함수에서 받은 타임스탬프를 시간으로 정의, 이 시간을 내가 정한 FPS의 시간과 비교하는 코드
        if (!this.time){
            this.time = t; 
        }
        const now = t - this.time;
        if (now > this.fpsTime){
            this.time = t;
            this.curFrame += 1;
            if (this.curFrame == this.totlaFrame){
                this.curFrame = 0;
            }
        }

        this.animate(ctx, dots);
    }

    animate(ctx, dots){
        this.x = 650;
        this.y = 550;

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.fillStyle = '#000000';
        ctx.drawImage(
            this.img,
            this.imgWidth * this.curFrame,
            0,
            this.imgWidth,
            this.imgHeight,
            -this.sheepWidthHalf,
            -this.sheepHeight + 20,
            this.sheepWidth,
            this.sheepHeight
        )
        // ctx.fillRect(
        //     -this.sheepWidthHalf,
        //     -this.sheepHeight + 20,
        //     this.sheepWidth,
        //     this.sheepHeight
        // );
        ctx.restore();
    }
}
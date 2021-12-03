export class Hill {
    // 언덕을 다양하게, 색상, 속도, 포인트개수
    constructor(color, speed, total){
        this.color = color;
        this.speed = speed;
        this.total = total;
    }

    resize(stageWidth, stageHeight){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    draw(ctx){

    }

    // 언덕의 좌표를 랜덤하게
    getY(){

    }
}
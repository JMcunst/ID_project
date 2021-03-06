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

        this.points = [];
        this.gap = Math.ceil(this.stageWidth / (this.total - 2)); // 화면밖에서부터 자연스럽게 오는 양을 만들기 위해 더 넓은 간격의 언덕 생성위함

        for (let i = 0; i <this.total; i++){
            this.points[i] = {
                x: i * this.gap,
                y: this.getY()
            };
        }
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.beginPath();

        let cur = this.points[0];
        let prev = cur;

        let dots = [];

        cur.x += this.speed;    // 언덕을 x 축으로 움직이게끔
        ctx.moveTo(cur.x, cur.y);

        // 계속 이어지게 그리기
        if (cur.x > -this.gap){
            this.points.unshift({
                x: -(this.gap * 2),
                y: this.getY()
            });
        }else if (cur.x > this.stageWidth + this.gap){
            this.points.splice(-1);
        }
        ctx.moveTo(cur.x, cur.y);

        let prevCx = cur.x;
        let prevCy = cur.y;

        for (let i = 1; i < this.points.length; i++){
            cur = this.points[i];
            cur.x += this.speed;  // 언덕을 x 축으로 움직이게끔

            const cx = (prev.x + cur.x) / 2;
            const cy = (prev.y + cur.y) / 2;
            ctx.quadraticCurveTo(prev.x, prev.y, cx, cy);

            // 곡선의 좌표를 나중에 양의 좌표를 찾는데 쓰기 위함
            dots.push({
                x1: prevCx,
                y1: prevCy,
                x2: prev.x,
                y2: prev.y,
                x3: cx,
                y3: cy
            });

            prev = cur;
            prevCx = cx;
            prevCy = cy;
        }
        
        ctx.lineTo(prev.x, prev.y);
        ctx.lineTo(this.stageWidth, this.stageHeight);
        ctx.lineTo(this.points[0].x, this.stageHeight);
        ctx.fill();

        return dots;
    }

    // 언덕의 좌표를 랜덤하게
    getY(){
        const min = this.stageHeight / 8;
        const max = this.stageHeight - min;
        return min + Math.random() * max;
    }
}
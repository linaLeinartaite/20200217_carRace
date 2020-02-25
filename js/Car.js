class Car {
    constructor(name, img) {
        this.img = img;
        this.name = name;
        this.maxSpeed = 200;
        this.speed = 0; // 
        this.position = 10;
    }
    speedUp(km) {
        this.speed += km;
        if (this.speed >= 200) {
            this.speed = 200;
        }
    }
    slowDown(km) {
        this.speed -= km;
        if (this.speed <= 0) {
            this.speed = 0;
        }
    }
    go() {
        this.position += this.speed;
    }
}


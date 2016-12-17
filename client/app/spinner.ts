export class Spinner {
    active: number = 0;
    
    on() {
        this.active++;
    }
    off() {
        this.active--;
    }
}
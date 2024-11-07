import { Component } from '@angular/core';

@Component({
    selector: 'app-child1',
    standalone: true,
    imports: [],
    templateUrl: './child1.component.html'
})
export class Child1Component {
    clickCount: any;
    message: string;
    handleClick(): void {
        this.clickCount++;
        this.message = `Child 1 clicked ${this.clickCount} time(s)`;
    }
}
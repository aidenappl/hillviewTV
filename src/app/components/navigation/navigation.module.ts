import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation.component';

@NgModule({
    imports: [CommonModule],
    declarations:[NavigationComponent],
    exports:[NavigationComponent]
})

export class NavModule {}

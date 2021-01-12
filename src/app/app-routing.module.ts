import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KeypadComponent } from './keypad/keypad.component';
import { BoxComponent } from './box/box.component';
const routes: Routes = [
  {
    path:'',
    component: KeypadComponent,
  },
  {
    path:'box',
    component: BoxComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

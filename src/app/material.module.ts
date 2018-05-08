import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [ MatToolbarModule, MatButtonModule ],
  exports: [ MatToolbarModule, MatButtonModule ],
  declarations: []
})
export class MaterialModule { }

// MODULE EXTERNES
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/** COMPONENTS GABI */
import { EmailComponent } from './email.component';
import { EmailService } from '../../services/email/email.service';

@NgModule({
  imports: [FormsModule],
  declarations: [EmailComponent],
  providers: [EmailService],
  exports: [EmailComponent],
  bootstrap: [ EmailComponent ]
})
export class EmailModule { }

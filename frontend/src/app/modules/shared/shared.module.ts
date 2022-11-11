import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatSliderModule,
    MatIconModule,
    MatInputModule
  ],
  exports:[
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatSliderModule,
    MatIconModule,
    MatInputModule
  ]
})
export class SharedModule { }

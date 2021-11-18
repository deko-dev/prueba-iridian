import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModules } from './material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModules,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    MaterialModules,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }

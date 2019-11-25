import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule, MatGridListModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule, MatExpansionModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatTableModule, MatPaginatorModule, MatDialogModule, MatTooltipModule, MatCheckboxModule, MatRadioModule, MatProgressSpinnerModule, MatBadgeModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { ResponsiveRowsDirective } from '../core/directives/responsive-rows.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { UppercaseDirective } from '../core/directives/uppercase.directive';

@NgModule({
  declarations: [
    ResponsiveRowsDirective,
    UppercaseDirective //DIRECTIVA UPPERCASE
  ],
  imports: [
    ReactiveFormsModule,

    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule, 
    MatIconModule, 
    MatListModule,
    LayoutModule,
    MatMenuModule, 
    MatExpansionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatBadgeModule
  ],
  exports: [
    ReactiveFormsModule,
    
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule, 
    MatIconModule, 
    MatListModule,
    LayoutModule,
    MatMenuModule,
    MatExpansionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatBadgeModule,

    ResponsiveRowsDirective,
    UppercaseDirective //DIRECTIVA UPPERCASE
  ]
})
export class MaterialModule { }

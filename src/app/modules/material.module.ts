import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule, MatGridListModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule, MatExpansionModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatTableModule, MatPaginatorModule, MatDialogModule, MatTooltipModule, MatCheckboxModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { ResponsiveRowsDirective } from '../core/directives/responsive-rows.directive';

@NgModule({
  declarations: [],
  imports: [
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
    MatCheckboxModule
  ],
  exports: [
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
    MatCheckboxModule
  ]
})
export class MaterialModule { }

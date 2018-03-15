import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';


import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { TestButtonComponent } from './test-button/test-button.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';
import { DialogOverviewInnerComponent } from './dialog-overview-inner/dialog-overview-inner.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatFormFieldControl} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';


import {MatListModule} from '@angular/material/list';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FormComponent } from './form/form.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { LayoutComponent } from './layout/layout.component';
import { SnackbarContainerComponent } from './snackbar-container/snackbar-container.component';
import { CustomSnackbarComponent } from './custom-snackbar/custom-snackbar.component';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { IconsComponent } from './icons/icons.component';
import { MenuComponent } from './menu/menu.component';
import { TabContainerComponent } from './tab-container/tab-container.component';
import { TabContent1Component } from './tab-content1/tab-content1.component';
import { TabContent2Component } from './tab-content2/tab-content2.component';



@NgModule({
  declarations: [
    AppComponent,
    TestButtonComponent,
    DialogOverviewComponent,
    DialogOverviewInnerComponent,
    DatepickerComponent,
    FormComponent,
    LayoutComponent,
    SnackbarContainerComponent,
    CustomSnackbarComponent,
    IconsComponent,
    MenuComponent,
    TabContainerComponent,
    TabContent1Component,
    TabContent2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogOverviewInnerComponent, DatepickerComponent, CustomSnackbarComponent]
})
export class AppModule { }

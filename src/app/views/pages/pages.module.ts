// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Partials
import { PartialsModule } from '../partials/partials.module';
// Pages
import { CoreModule } from '../../core/core.module';
import { MailModule } from './apps/mail/mail.module';
import { ECommerceModule } from './apps/e-commerce/e-commerce.module';
import { UserManagementModule } from './user-management/user-management.module';
import { MyPageComponent } from './my-page/my-page.component';
import { DossierComponent } from './concerto/dossier/dossier.component';
import { MytasksComponent } from './concerto/mytasks/mytasks.component';
import { MapComponent } from './concerto/map/map.component';
import { ListComponent } from './concerto/list/list.component';
import { TimelineComponent } from './concerto/timeline/timeline.component';
import { DashboardComponent } from './concerto/dashboard/dashboard.component';

@NgModule({
    declarations: [
        MyPageComponent,
        DossierComponent,
        MytasksComponent,
        MapComponent,
        ListComponent,
        TimelineComponent,
        DashboardComponent],
    exports: [],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        CoreModule,
        PartialsModule,
        MailModule,
        ECommerceModule,
        UserManagementModule,
    ],
    providers: []
})
export class PagesModule {
}

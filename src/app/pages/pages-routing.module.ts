import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { KanbanComponent } from './kanban/kanban.component';
import { ProvidersComponent } from "./providers/providers.component";
import { AppointmentComponent } from './appointment/appointment.component';
import { HelpComponent } from './help/help.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { ServicePaymentComponent } from './service-payment/service-payment.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'calendar', component: CalendarComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'kanban-board', component: KanbanComponent },
    { path: 'email', loadChildren: () => import('./email/email.module').then(m => m.EmailModule) },
    { path: 'pages', loadChildren: () => import('./utility/utility.module').then(m => m.UtilityModule) },
    { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UIModule) },
    { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
    { path: 'charts', loadChildren: () => import('./chart/chart.module').then(m => m.ChartModule) },
    { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
    { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
    { path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule) },
    { path: 'providers', component : ProvidersComponent },
    { path: 'appointment', component : AppointmentComponent },
    { path: 'help', component : HelpComponent },
    { path: 'profile', component : ProfileComponent },
    { path: 'account', component : AccountComponent },
    { path: 'glossary', component : GlossaryComponent },
    { path: 'privacy', component : PrivacyComponent},
    { path: 'terms', component : TermsComponent},
    { path: 'service-payment', component : ServicePaymentComponent},
    
    

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }

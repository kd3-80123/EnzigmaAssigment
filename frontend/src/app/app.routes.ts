import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { DetailFormComponent } from './details/detail-form/detail-form.component';
export const routes: Routes = [
    {
        path:"",
        component:DetailsComponent

    },
    {
        path:"details",
        component:DetailsComponent

    },
    {
        path:"details/add",
        component:DetailFormComponent

    }

];

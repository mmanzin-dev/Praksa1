import { Routes } from '@angular/router';
import { Variables } from './components/variables/variables';
import { DataBinding } from './components/data-binding/data-binding';
import { DirectiveExample } from './components/directive-example/directive-example';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
    {
        // Default page/route, shows when you go to root of domain
        path: '',
        redirectTo: 'databinding',
        pathMatch: 'full'
    },
    {
        path:'variables', // URL path
        component: Variables // Loads the following component
    },
    {
        path:'databinding',
        component: DataBinding
    },
    {
        path:'directives',
        component: DirectiveExample
    },
    {
        // Route/page for when user wants to go to non-existing route/page
        // Wildcard route
        path:'**',
        component: NotFound
    }
];

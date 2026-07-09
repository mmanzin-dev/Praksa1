import { Routes } from '@angular/router';
import { Variables } from './components/variables/variables';
import { DataBinding } from './components/data-binding/data-binding';
import { DirectiveExample } from './components/directive-example/directive-example';
import { NotFound } from './components/not-found/not-found';
import { ControlFlow } from './components/control-flow/control-flow';
import { TemplateForm } from './components/template-form/template-form';
import { ReactiveForm } from './components/reactive-form/reactive-form';
import { Signal } from './components/signal/signal';
import { SignalForm } from './components/signal-form/signal-form';
import { GetApi } from './components/get-api/get-api';
import { ClientCrud } from './components/client-crud/client-crud';

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
        path: 'controlflow',
        component: ControlFlow
    },
    {
        path:'directives',
        component: DirectiveExample
    },
    {
        path:'templateform',
        component: TemplateForm
    },
    {
        path:'reactiveform',
        component: ReactiveForm
    },
    {
        path:'signal',
        component: Signal
    },
    {
        path:'signalform',
        component: SignalForm
    },
    {
        path:'getapi',
        component: GetApi
    },
    {
        path: 'clientcrud',
        component: ClientCrud
    },
    {
        // Route/page for when user wants to go to non-existing route/page
        // Wildcard route
        path:'**',
        component: NotFound
    }
];

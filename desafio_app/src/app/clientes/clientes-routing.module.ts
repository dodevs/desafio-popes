import {RouterModule, Routes} from "@angular/router";
import {ClienteListComponent} from "./cliente-list/cliente-list.component";
import {ModuleWithProviders, NgModule} from "@angular/core";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ClienteListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

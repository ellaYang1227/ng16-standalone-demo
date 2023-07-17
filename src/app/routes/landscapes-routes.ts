import { Routes } from "@angular/router";
import { LandscapeItemComponent } from "src/app/components/landscape-item/landscape-item.component";
import { LandscapeListComponent } from "src/app/components/landscape-list/landscape-list.component";

export default [
  { path: '', component: LandscapeListComponent },
  { path: ':id', component: LandscapeItemComponent },
] as Routes;

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './index';

export const CommentsRoutes: Routes = [
    { path: 'comments', component: CommentsComponent },
];

export class CommentsRoutingModule { }

export const routedComponents = [CommentsComponent];
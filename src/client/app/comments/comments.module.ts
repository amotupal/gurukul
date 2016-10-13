import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/index';
import { CommentsComponent, CommentComponent } from './index';

@NgModule({
    imports: [CommonModule, SharedModule],
    exports: [],
    declarations: [],
    providers: [NameListService],
})
export class CommentsModule { }

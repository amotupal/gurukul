import { Component,Input, OnInit } from '@angular/core';

@Component({
    moduleId:module.id,
    selector: 'comment',
    templateUrl: 'comment.component.html',
    inputs: ['comment']
    // styleUrls:['../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class CommentComponent implements OnInit {
    @Input() Comment: any;

    constructor() { }

    ngOnInit() { }
}
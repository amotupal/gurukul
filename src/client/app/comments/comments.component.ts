import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/index';
import { CommentComponent } from './index';


@Component({
    moduleId: module.id,
    selector: 'comments',
    templateUrl: 'comments.component.html'
    // styleUrls: ['../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class CommentsComponent implements OnInit {
    comments: any[] = [];
    constructor() {
        
     }

    ngOnInit() {
        var anil = {
            author: "Anil Kumar Motupalli",
            comment: "Vineel gadu lowde ke ball gadu aadi matta",
            date: "10/11/2016 12:54"
        }
        var vineel = {
            author: "Vineel Vutukuri",
            comment: "I am a Gay",
            date: "10/11/2016 12:56"
        }
        var buddha = {
            author: "Buddha Puneeth Nandanoor",
            comment: "Saava Dengude naa hobby",
            date: "10/11/2016 12:57"
        }

        this.comments = [anil, vineel, buddha];
     }
}
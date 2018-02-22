import {
    IMatch
} from './../../user.interface';
import {
    UserService
} from './../../user/user.service';
import {
    Router
} from '@angular/router';
import {
    Component,
    OnInit
} from '@angular/core';
import {
    IUser
} from '../../user.interface';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
    currentUser: IUser;
    matchedUser: IUser;
    messateToMatch = '';
    messateToHR = '';
    bla = '';
    constructor(private router: Router, private userService: UserService) {}

    ngOnInit() {
        this.currentUser = this.userService.getUser(true);
        this.matchedUser = this.userService.getUser(false);
    }

    cancel() {
        this.router.navigateByUrl('home/match');
    }

    sendMessage() {
        this.currentUser.matches.push(this.createNewMatch());
        this.currentUser.currentMatch = null;
        this.userService.put(this.currentUser).subscribe((x) => {
            this.matchedUser.currentMatch = null;
            this.userService.put(this.matchedUser).subscribe(() => {
                this.userService.clearUser(false);
                this.router.navigateByUrl('home');
            });
        });
    }

    createNewMatch(): IMatch {
        const newMatch: IMatch = {
            id: this.currentUser.currentMatch,
            date: new Date().toString(),
            rate: null,
            cancelMessage: this.messateToMatch,
            cancelMessageToHHRR: this.messateToHR
        };
        return newMatch;
    }
}
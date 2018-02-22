import {
    UserService
} from './../../user/user.service';
import {
    Component,
    OnInit
} from '@angular/core';
import {
    Router
} from '@angular/router';
import {
    IUser,
    IMatch
} from '../../user.interface';

@Component({
    selector: 'app-rate',
    templateUrl: './rate.component.html',
    styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
    matchedUserImage: string;
    matchedUser: IUser;
    currentUser: IUser;
    rate: number;
    rateOptions: [{}];
    constructor(private router: Router, private userService: UserService) {}

    ngOnInit() {
        this.currentUser = this.userService.getUser(true);
        this.matchedUser = this.userService.getUser(false);
        this.matchedUserImage = this.userService.getUserImage(false);
        this.rateOptions = [{
                value: 0,
                description: 'Awesome'
            },
            {
                value: 1,
                description: 'Good'
            },
            {
                value: 2,
                description: 'Meh'
            },
            {
                value: 3,
                description: 'Not so Great'
            }
        ];
    }

    rateMatch() {
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
        const date = new Date().toString();
        const newMatch: IMatch = {
            id: this.currentUser.currentMatch,
            date: date,
            rate: this.rate,
            cancelMessage: '',
            cancelMessageToHHRR: ''
        };
        return newMatch;
    }

    cancel() {
        this.router.navigateByUrl('home/match');
    }
}
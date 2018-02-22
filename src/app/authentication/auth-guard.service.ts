import {
    AuthenticationService
} from './authentication.service';
import {
    Injectable
} from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private authService: AuthenticationService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log(state.url);
        return this.checkLogin(state.url);
    }

    checkLogin(url: string): boolean {
        if (this.authService.isLoggedIn) {
            return true;
        }
        this.router.navigateByUrl('');
        return false;
    }

}
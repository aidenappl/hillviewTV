import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { environment } from "src/environments/environment";
import { RequestService } from "src/services/http/request.service";

@Injectable()

export class UserGuard {
    constructor(
        private router: Router,
        private request: RequestService
    ) {}

    async isLink(link: string): Promise<any> {
        try {
            const response: any = await this.request.get(`${environment.LINKS_URL}/links/v1.1/check/${link}`)
            if (response.destination) {
                return {
                    exists: true,
                    destination: response.destination
                };
            } else {
                return {
                    exists: false,
                    destination: ''
                };
            }
        } catch (error) {
            console.log(error);
            return {
                exists: false,
                destination: ''
            };
        }
    }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        const url = state.url.slice(1)
        console.log(url)
        let link: any = await this.isLink(url)
        if (link.exists) {
            window.location.href = link.destination
            return false;
        }
        return true
    }

    async canLoad(): Promise<boolean> {
        return true
    }
    
}
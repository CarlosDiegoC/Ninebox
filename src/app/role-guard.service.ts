import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate } from "@angular/router";
import { MsalService } from "@azure/msal-angular";
import { AccountInfo } from "@azure/msal-browser";

interface Account extends AccountInfo {
  idToken?: string
  idTokenClaims?: {
    roles?: string[]
  }
}

@Injectable({
    providedIn: 'root'
  })

export class RoleGuardService implements CanActivate {

  constructor(private authService: MsalService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    let account: Account = this.authService.instance.getAllAccounts()[0];

    if (!account.idTokenClaims?.roles) {
      window.alert('Este token não está vinculado a nenhuma role, acesso recusado.');
      return false;
    } else if (!account.idTokenClaims?.roles?.includes(expectedRole)) {
      window.alert('Você não tem acesso a esta funcionalidade. Esse recurso não será renderizado na tela caso a role não tenha acesso a ele, está aqui como ilustração de proteção da rota.');
      return false;
    }
    return true;
  }
}

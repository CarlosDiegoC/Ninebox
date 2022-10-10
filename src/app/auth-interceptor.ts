import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<unknown>, next: HttpHandler) {
        let request: HttpRequest<any> = req;
        request = req.clone({
            headers: req.headers.set('Ocp-Apim-Subscription-Key', 'ab9f16b606c3442fb60a1764cb9dcc9d')
        });
        return next.handle(request)
            .pipe(
                catchError(this.handleError)
            );
    }
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('Ocorreu um erro', error.error.message);
        }
        else {
            console.error(
                `Código do erro: ${error.status}`, +
            `Erro: ${JSON.stringify(error.error)}`
            );
        }
        return throwError('Ocorreu um erro');
    }
}

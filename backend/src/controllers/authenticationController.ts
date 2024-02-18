import {AuthenticationService} from "../services/authenticationService"
import 'reflect-metadata'

@Service()
export class AuthenticationController { 
    
    constructor(private AuthenticationService: AuthenticationService){}
    
    
    authenticate(params: any) {
        
    }
}
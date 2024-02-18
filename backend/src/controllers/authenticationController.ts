import {AuthenticationService} from "../services/authenticationService";
import { Service } from "typedi";
import 'reflect-metadata';

@Service()
export class AuthenticationController { 
    
    constructor(private AuthenticationService: AuthenticationService){}
    
    
    authenticate(params: any) {
        
    }
}
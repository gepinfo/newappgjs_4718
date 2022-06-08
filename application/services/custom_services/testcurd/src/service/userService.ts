import { Request, Response } from 'express';
import {userDao} from '../dao/userDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let user = new userDao();

export class userService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into userService.ts: GpDelete')
     let  userId = req.params.id;
     user.GpDelete(userId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from userService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into userService.ts: GpGetAllValues')
     
     user.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from userService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into userService.ts: GpCreate')
     let  userData = req.body;
     user.GpCreate(userData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from userService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into userService.ts: GpUpdate')
     let  userData = req.body;
     user.GpUpdate(userData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from userService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into userService.ts: GpSearch')
     let  userData = req.query;
     user.GpSearch(userData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from userService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into userService.ts: GpSearchForUpdate')
     let  userData = req.body;
     user.GpSearchForUpdate(userData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from userService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into userService.ts: GpGetNounById')
     let  userId = req.params.id;
     user.GpGetNounById(userId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from userService.ts: GpGetNounById')
         callback(response);
         });
    }
    
    
    
    
}
import { Request, Response } from 'express';
import { userService } from '../service/userService';
import { CustomLogger } from '../config/Logger'
let user = new userService();

export class userController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
user.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into userController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from userController.ts: GpDelete');
    })}
public GpGetAllValues(req: Request, res: Response) {
user.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into userController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from userController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
user.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into userController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from userController.ts: GpCreate');
    })}
public GpUpdate(req: Request, res: Response) {
user.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into userController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from userController.ts: GpUpdate');
    })}
public GpSearch(req: Request, res: Response) {
user.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into userController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from userController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
user.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into userController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from userController.ts: GpSearchForUpdate');
    })}
public GpGetNounById(req: Request, res: Response) {
user.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into userController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from userController.ts: GpGetNounById');
    })}


}
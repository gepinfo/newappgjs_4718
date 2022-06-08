import * as mongoose from 'mongoose';
import userModel from '../models/user';
import { CustomLogger } from '../config/Logger'


export class userDao {
    private user = userModel;
    constructor() { }
    
    public async GpDelete(userId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into userDao.ts: GpDelete');

    

    
    
    
    this.user.findByIdAndRemove(userId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from userDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into userDao.ts: GpGetAllValues');

    

    
    
    
    this.user.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from userDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(userData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into userDao.ts: GpCreate');

    let temp = new userModel(userData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from userDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(userData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into userDao.ts: GpUpdate');

    

    
    
    
    this.user.findOneAndUpdate({ _id: userData._id }, userData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from userDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(userData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into userDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(userData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.user.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from userDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(userData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into userDao.ts: GpSearchForUpdate');

    

    
    
    
    this.user.findOneAndUpdate({ _id: userData._id }, userData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from userDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounById(userId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into userDao.ts: GpGetNounById');

    

    
    
    
    this.user.findById(userId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from userDao.ts: GpGetNounById');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}
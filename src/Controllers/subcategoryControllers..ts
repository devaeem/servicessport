import express, { Application, Request, Response } from 'express';
import {subCategoryModel} from '../Models/subcategory'
import { v4 as uuidv4 } from 'uuid';
exports.sublistcategory = async (req:Request, res:Response) => {
try{
  const subcatlist:any =await subCategoryModel.find({}).exec()
  res.status(200).json({
    message: 'listsubcategory',
    data:  subcatlist
  });   
}catch(err){
  res.status(500).json({
    message: 'listdatamodtest',
    ctx:'api สร้างเพื่อทดสอบเท่านั้น',
    data:  'Server Test Error!!!'
  }); 
}             
};
exports.subcreatecategory = async (req:Request, res:Response) => {        
    try{
      const inputDataTest:any = req.body
       const id:string = uuidv4();
      inputDataTest.id = id;
      
      const createData:any =await new subCategoryModel(inputDataTest).save()
      res.status(201).json({
        message: 'Create-subCategore-sucessfully ',
        data:  createData
      });   
    }catch(err){
      res.status(500).json({
        message: 'Create-datamodtest',
        ctx:'api สร้างเพื่อทดสอบเท่านั้น',
        data:  'Server Test Error!!!'
      }); 
    }
   };
exports.subupdatecategory = async (req:Request, res:Response) => {
    
    try{
      const id:string = req.params.id
      const updateDataInput:any =req.body
      const updateDatatest = await subCategoryModel.findOneAndUpdate(
        { id: id },
        updateDataInput,
        { new: true }
      ).exec();
      res.status(200).json({
        message: 'Update-datamodtest',
        ctx:'api สร้างเพื่อทดสอบเท่านั้น',
        data:  updateDatatest
      });   
  
    }catch(err){
      res.status(500).json({
        message: 'Update-datamodtest',
        ctx:'api สร้างเพื่อทดสอบเท่านั้น',
        data:  'Server Test Error!!!'
      }); 
    }
    
};

exports.subdeletecategory = async (req:Request, res:Response) => {
  
  try{
    const id:string = req.params.id
    const {isDelete}:any = req.body
    if(isDelete === true){
      const deleteDatatest = await subCategoryModel.findByIdAndUpdate(
        { _id: id },
        
        { isDelete: false }
      ).exec();
      res.status(200).json({
        message: 'delete-datamodtest',
        ctx:'api สร้างเพื่อทดสอบเท่านั้น',
        data:  deleteDatatest
      });   
    }else{
      res.status(400).json({
        message: 'delete-datamodtest',
        ctx:'api สร้างเพื่อทดสอบเท่านั้น',
        data:  'the isDelete no data'
      }); 
    }

  }catch(err){
    res.status(500).json({
      message: 'delete-datamodtest',
      ctx:'api สร้างเพื่อทดสอบเท่านั้น',
      data:  'Server Test Error!!!'
    }); 
  }
  
};

exports.subactivecategory = async (req:Request, res:Response) => {
  
    try{
      const id:string = req.params.id
      const {active}:any = req.body
      if(active === true){
        const deleteDatatest = await subCategoryModel.findByIdAndUpdate(
          { _id: id },
          
          { isDelete: false }
        ).exec();
        res.status(200).json({
          message: 'delete-datamodtest',
          ctx:'api สร้างเพื่อทดสอบเท่านั้น',
          data:  deleteDatatest
        });   
      }else{
        res.status(400).json({
          message: 'delete-datamodtest',
          ctx:'api สร้างเพื่อทดสอบเท่านั้น',
          data:  'the isDelete no data'
        }); 
      }
  
    }catch(err){
      res.status(500).json({
        message: 'delete-datamodtest',
        ctx:'api สร้างเพื่อทดสอบเท่านั้น',
        data:  'Server Test Error!!!'
      }); 
    }
    
  };
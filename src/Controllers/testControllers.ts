import express, { Application, Request, Response } from 'express';





exports.listtest = async (req:Request, res:Response) => {


        
            res.status(200).json({
              message: 'listproducts',
              data:  'sucessData'
            });        
  };

  exports.createtest = async (req:Request, res:Response) => {
        const {name } = req.body
        console.log('req.body.name =',{name})
        res.status(200).json({
            message: 'create testapi',
            data: req.body.name,
          });
   };

   exports.edittest = async (req:Request, res:Response) => {
    const id = req.params.id
    console.log('req.body.id =',{id})
    res.status(200).json({
        message: 'update testapi',
        data: id,
      });
};

exports.deletetest = async (req:Request, res:Response) => {
  const id = req.params.id
  console.log('req.body.id =',{id})
  res.status(200).json({
      message: 'softdelete testapi',
      data: id,
    });
};

exports.harddeletetest = async (req:Request, res:Response) => {
  const id = req.params.id
  console.log('req.body.id =',{id})
  res.status(200).json({
      message: 'harddelete testapi',
      data: id,
    });
};
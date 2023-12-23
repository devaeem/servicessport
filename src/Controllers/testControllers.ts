import express, { Application, Request, Response } from 'express';

import fs from 'fs';
import path from 'path';
const filePath = path.join(__dirname, '../Controllers/list.json');



exports.listtest = async (req:Request, res:Response) => {

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading JSON file:', err);
          res.status(500).json({
            message: 'Error reading JSON file',
          });
          return;
        }
        try {
            // แปลงข้อมูล JSON เป็น Object
            const jsonData = JSON.parse(data);
      
            // ส่งข้อมูลใน response
            res.status(200).json({
              message: 'listproducts',
              data: jsonData,
            });
          } catch (jsonError) {
            console.error('Error parsing JSON:', jsonError);
            res.status(500).json({
              message: 'Error parsing JSON',
            });
          }

  })};

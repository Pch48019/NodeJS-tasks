
import http from 'http';
import {copyFolderRecursiveSync} from './copy-folder.js';
import dotenv from 'dotenv';
import {logger} from './logger.js';
import { logger } from 'winston';

dotenv.config()

var http = require('http'); // Import Node.js core module

var server = http.createServer( (req, res) => {   //create web server
    if (req.url == '/') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/copy-folder") {
      if(process.env.SOURCE_FOLDER != "" & fs.existsSync(process.env.SOURCE_FOLDER)) 
           try{
                copyFolderRecursiveSync(process.env.SOURCE_FOLDER,process.env.TARGRT_FOLDER);
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('<html><body><p>The copy performed successfully</p></body></html>');
                res.end();
        }
        catch{
        // logger.info('Info string');
        // logger.error(console.error(););
        }
      else{
        logger.error('source folder is not exists');
      }
    
    }
    else if (req.url == "*"){
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>The page not found.</p></body></html>');
        logger.error('The page not found.');
        res.end();
      
    }
    
});

server.listen(procces.env.PORT); // listen for any incoming requests

logger.info('Node.js web server at port 3000 is running..');
//**** */



// logger.info({
//     message: 'Use a helper method if you want',
//     additional: 'properties',
//     are: 'passed along'
//   });
  
// if(process.env.SOURCE_FOLDER!=""){
//     logger.log({
//         level: 'info',
//         message: 'Pass an object and this works',
//         additional: 'properties',
//         are: 'passed along'
//       });
      
      
//    copyFolderRecursiveSync(process.env.SOURCE_FOLDER,process.env.TARGRT_FOLDER);

//    logger.log({
//     level: 'info',
//     message: 'Pass an object and this works',
//     additional: 'properties',
//     are: 'passed along'
//   });
  

  
// }

// logger.log({
//     level: 'info',
//     message: 'Pass an object and this works',
//     additional: 'properties',
//     are: 'passed along'
//   });
  

  




 


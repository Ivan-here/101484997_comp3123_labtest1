const fs = require('fs/promises')
const path = require('path');
const logDir = path.join(process.cwd(), 'logs');

async function createLogs(){
   try{
       await fs.mkdir(logDir, {recursive:true});

       for(i=0;i<10;i++){
           const fileName = `log${i}.txt`;
           const filePath = path.join(logDir, fileName);
           await fs.writeFile(filePath, `Log file number ${i}`)
           console.log(fileName);
       }
   }
   catch(err){
       console.error(err.message)
   }
}

async function deleteLogs(){
    try{
        await fs.access(logDir);
        let files = await fs.readdir(logDir);
        for (let file of files){
            const filePath = path.join(logDir, file);
            await fs.unlink(filePath);
            console.log(`${file} to delete`)
        }
        await fs.rmdir(logDir);
        console.log(`removed ${logDir} directory`)
    }
    catch(err){
        console.error(err.message)
    }
}

createLogs();
setTimeout(deleteLogs, 3000);
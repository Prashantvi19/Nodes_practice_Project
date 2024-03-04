const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'files');
for(i = 0; i < 6; i++)
{
        console.log(fliPath);
        // Create the file----------------------------------------------------------------
    fs.writeFileSync(filePath +"/file"+i+".txt", "uHello world ");
    if(i == 0){
// Load the fils/Dir data----------------------------------------------------------------
         fs.readdir(filePath,(err, data) =>{
        data.forEach((e)=>{
            console.log(e);
        })});
     
    }
    // Read File Data----------------------------------------------------------------        
    fs.readFile(filePath+"/file"+i+".txt","utf8",(err, data) =>{
               console.log(data);
})
   
fs.appendFileSync(filePath+"/file"+i+".txt"," 2nd time appended operation "+(i+1));
// // Read File Data----------------------------------------------------------------        
    fs.readFile(filePath+"/file"+i+".txt","utf8",(err, data) =>{
               console.log(data);
})
fs.renameSync(filePath+"/file"+i+".txt",`${filePath}/fileRename${i+".txt"}`);
if(i == 0){
    // Load the fils/Dir data----------------------------------------------------------------
             fs.readdir(filePath,(err, data) =>{
            data.forEach((e)=>{
                console.log(e);
 })})}
fs.unlinkSync(`${filePath}/fileRename${i+".txt"}`);
}
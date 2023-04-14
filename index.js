const http = require('http');
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'files');
// for(i=0;i<5;i++){
//   fs.writeFileSync(dirPath+"/apple"+i+".txt","this is the file")
// }

// fs.readdir(dirPath,(error,files)=>{
//   files.forEach((item)=>{
//     console.log("file name is",item)
//   })
// })


const data = require('./data');
const server = http.createServer((req, res) => {
  res.writeHead('200',{'Content-type':'application/json'});  
  res.write(JSON.stringify(data));
  res.end();
});

server.listen(4000, () => {
  console.log('Server is listening on port 4000');
});

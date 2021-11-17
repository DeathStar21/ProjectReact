const fs = require('fs')
lnamefile = '.xlsx'; 
folderPath = '../TEST'; 

var DO=(path)=>{
    const list = [];
    // console.log("fs",fs.readdirSync(path))
    fs.readdirSync(path).forEach(file=>{

        const key = `${path}/${file}`;
        
        const treeNode = {
            title: file,
            key:key,
        };
        if(!file.includes(lnamefile)){
            treeNode.children = DO(`${path}/${file}`);
        }else{
            treeNode.value = `${path}/${file}`;
        }
        list.push(treeNode);
    })
    console.log("list",list)
    return list;
}
const arr = DO(folderPath);
let data = JSON.stringify(arr,null, 10);
fs.writeFileSync('Qler.json', data ,(err) => {
    if (err){throw err;}
    console.log('Data written to file');
});
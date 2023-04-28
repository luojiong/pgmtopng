const path = require("path")
const  {writePngFromPgm,readPgm} = require("./pgm.js")



const  p = path.join(__dirname,"./test2.pgm");
const now = Date.now();
async function main(){
  const pgmData = await readPgm(p); // read pgm pixels
  await writePngFromPgm(pgmData,path.join(__dirname,"./test.png")); // pgmData to png 
  console.log(Date.now() - now + "ms")
}

main();
var shell = require("shelljs");
var command = "yarn start";
var terminal = "Terminal";
var pathToProject = "~/Documents/SH-SITE";

//shell.exec(`osascript -e 'tell application "${terminal}" to do script "echo hello"'`);
//shell.cd(`~/Applications/`);

// module.export=testRunExpress = () =>{
//     shell.exec(`ttab -d ${pathToProject} ${command}`);
//     console.log("opened dir!");
// }

// shell.exec(`ttab -d ${pathToProject} ${command}`);
// console.log("opened dir!");

module.exports = () => {
  shell.exec(`ttab -d ${pathToProject} ${command}`);
  console.log("opened dir!");
};

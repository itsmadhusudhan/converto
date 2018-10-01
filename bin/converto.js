#!/usr/bin/env node
const program = require("commander");
const chalk = require("chalk");
const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const { questions } = require("../lib/questions");
const {convertTextToPdf}=require('../lib/operations');

program
  .version(require("../package.json").version, "-v,--version")
  .usage("<command> [options]");

inquirer.prompt(questions).then(answers => {
  const filePath = path.resolve("./"+answers.filename);
  console.log(filePath);
  //if the format is pdf
  if (answers.format === "pdf") {
    pdfUtil.pdfToText(filePath, function(err, info) {
      if (err) {
        console.log(chalk.red(err))
      };
      console.log(info);
    });
  }

  //if the format is text
  if (answers.format === "text") {
    
  var data = fs.readFileSync(filePath, (err, data) => {
    if(err)console.log(chalk.red("Error reading the file..."))
    return data;
  });
  if (answers.formats.includes("pdf")) {
    convertTextToPdf(data);
  }
  }
});

// program
//   .action(function(file){
//     const filePath=path.join('__dirname',file);
//     // console.log(filePath);
//     var data=fs.readFileSync(file,(err,data)=>{
//       return data
//     });
//     console.log(data)
//     console.log(filePath)
//   })

program.parse(process.argv);

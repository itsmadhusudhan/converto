const pdfUtil = require("pdf-to-text");
const pdfkit = require("pdfkit");
const archiver = require("archiver");
const chalk=require('chalk');
const fs = require("fs");

const pdfdoc = new pdfkit();

module.exports.convertTextToPdf=(data)=>{
    pdfdoc.pipe(fs.createWriteStream("output.pdf"));
    console.log(chalk.cyan("Converting text file into pdf file..."));
    pdfdoc.text(data, {
      width: 410,
      align: "left"
    });
    pdfdoc.end();
    console.log(chalk.green("Conversion complete..."));
  }

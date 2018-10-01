var format="my file";
module.exports.questions=[
  {
    type:'list',
    name:"format",
    choices:["text","doc","pdf"],
    message:'Select the format of file that you want to convert',
  },
  {
    type:'input',
    name:'filename',
    message:"Enter the file name",
    validate:function(input){
      return input!=="hello"
    },
    when:(answers)=>{
      return validateFileFormat(answers)
    }
  }, 

  {
    type:'checkbox',
    name:'formats',
    choices:["text","doc","pdf"],
    message:'Select the formats of output file you need',
    validate:(input)=>{
      console.log(input)
      return input.length!==0;
    },
    when:function(answers,ss){
      return answers;
    }
  }
];

function validateFileFormat(format){
  return format;
}
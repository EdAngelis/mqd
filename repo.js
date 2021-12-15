const PDFGenerator = require('pdfkit')
const fs = require('fs')

const formatText = (text, len) => {
    
  let count = 8;
  let line = '        '
  let result = [];
  const specialChars = /a-zA-Z0-9!@#\$%\^\&*\)\(+=._-/g

  text = text.replace(/(\r\n|\n|\r)/gm, "");
  text = text.replace(/-/g, '');
  text = text.replace(/  +/g, ' ');
  
  for (let i = 0; i < text.length; i++) {
    
      if( text[i].match(/^[A-Z]*$/) && text[i - 2]  === '.'){
          result.push(line);
          result.push('\n');
          line = '        ';
          count = 8;    
      }
      line = line + text[i];
      count++;
   
      if (count === len) {
        if(text[i] === ' ' ){
            result.push(line);
            count = 0;
            line = '';
        } else {
            line = line + '-'
            result.push(line);
            count = 0;
            line = '';
        }
    }
   }
   result.push(line);

   return result.join('\n');
}



const justify = function(str, len) {
  str = str.replace(/(\r\n|\n|\r)/gm, "");
  str = str.replace(/-/g, '');
  str = str.replace(/  +/g, ' ');

  var re = RegExp("(?:\\s|^)(.{1," + len + "})(?=\\s|$)", "g");
  var res = [];
  var finalResult = [];

  while ((m = re.exec(str)) !== null) {
    res.push(m[1]);
  }

  for (var i = 0; i < res.length - 1; i++){    
    if(res[i].indexOf(' ') != -1){  
      while(res[i].length < len){      
        for(var j=0; j < res[i].length-1; j++){
          if(res[i][j] == ' '){
            res[i] = res[i].substring(0, j) + " " + res[i].substring(j);
            if(res[i].length == len) break;
            while(res[i][j] == ' ') j++;
          }
        }
      }      
    }    
    finalResult.push(res[i]);    
  }

  finalResult.push(res[res.length - 1]);

  return finalResult.join('\n');

}

const savePdf = (data, fileName) => { 
  let theOutput = new PDFGenerator 
  theOutput.pipe(fs.createWriteStream(fileName))

  theOutput.text(data)
   
  theOutput.end()
}

module.exports = {
  formatText,
  justify,
  savePdf
}
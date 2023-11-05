const langs =require("langs");
const franc =require("franc");
const usrInput = process.argv[2];

const langCode =franc(usrInput);


if (langCode == "und"){
    console.log("Sorry couldnt figure it out, try with more sample text")
}else{
    const language =(langs.where("3",langCode));
    console.log(language.name)
}


// Declaring the dependencies and variables
const Downloader = require('nodejs-file-downloader');
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadMe = require("./utils/generateReadMe");
const writeFileAsync = util.promisify(fs.writeFile);


//Prompt the user questions to populate the README.md
function userInput(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the title of your project",
        },
        {
            type: "input",
            name: "description",
            message: "Please describe your project"
        },
        {
            type: "input",
            name: "installation",
            message: "Please specify the installation process required (if any) ",
        },
        {
            type: "input",
            name: "usage",
            message: "How would you like your project used"
        },
        {
            type: "expand",// using expanded list
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                {
                    key: '1',
                    value: 'Apache',
                  },
                  {
                    key: '2',
                    value: 'Academic',
                  },
                
                  {
                    key: '3',
                    value: 'GNU',
                  },
                  {
                    key: '4',
                    value: 'ISC',
                  },
                  {
                    key: '5',
                    value: 'MIT',
                  },
                  {
                    key: '6',
                    value: 'Mozilla',
                  },
               
                  {
                    key: '7',
                    value: 'Open',
                  },
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Please list the people who have contributed to this project"
        },
        {
            type: "checkbox",
            name: "tests",
            message: "Have you included any tests for this project?",
            choices: ['Yes','No'],
        }, 
  
      
        {
            type: "input",
            name: "questions",
            message: "Please specify what to do if people have questions regarding your project"
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ]);
} 
    
// Async function using util.promisify 
  async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await userInput();
        const generateContent = generateReadMe(answers);
        
        // Write new README.md to the download directory
        await writeFileAsync('./download/README.md', generateContent);//
        console.log('✔️  Successfully wrote to README.md');
        (async () => {//Wrapping the code with an async function, just for the sake of example.
  
          const downloader = new Downloader({
            url: 'https://github.com/Chelle77322/README-Generator/blob/Trunk/download/README.md'     
                         
          })
          try {
            await downloader.download();//Downloader.download() returns a promise.
      
            console.log('All done');
          } catch (error) {//IMPORTANT: Handle a possible error. An error is thrown in case of network errors, or status codes of 400 and above.
            //Note that if the maxAttempts is set to higher than 1, the error is thrown only if all attempts fail.
            console.log('Download failed',error)
          }
      
      
      })();
      const downloader = new Downloader({     
        url: 'https://github.com/Chelle77322/README-Generator/blob/Trunk/download/README.md',     
        directory: "./download/", 
        fileName:'README.html'//This will be the file name.        
    }) 
        }   
    catch(err) {
        console.log(err);
    }
  }
  
  const downloader = new Downloader({     
    url: 'https://github.com/Chelle77322/README-Generator/download/',     
    
    cloneFiles:true//This will cause the downloader to re-write an existing file.   
}) 
    
 
  init();  
  
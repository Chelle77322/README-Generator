

const program = require('commander');
const inquirer = require('inquirer');
const open = require('open');
program.version('1.0.0')
    .description('ReadMe Generator')
    .parse(process.argv);

    console.log(shalvah.bio);
inquirer.prompt({
    name: 'link',
    type: 'list',
    message: shalvah.prompt,
    choices: shalvah.links.concat({
        'name': `...Or shoot me an email (${shalvah.email})`,
        'value': 'mailto:' + shalvah.email
    })
}).then(answers => {
    console.log(`Opening ${answers.link}`);
    opn(answers.link);
});
#! /usr/bin/env node
import { helpCommand } from './commands/help.js';
import { Generator } from './generator.js';

let gen = new Generator();

// console.log(process.argv[2]);

let slashCommand = process.argv[2];

function parseCommand(command) {
    // Array split the command and remove 
    command.map((command) => { console.log(command); });
}

switch(slashCommand) {
    case '--init':
        gen.create();
        break;
    case '--password':
        break;
    case '--find':  
        break;
    case '--save':
        gen.save();
        break;
    case '--remove': 
        gen.remove();
        break;
    case '--help':
        parseCommand(helpCommand);
        break;
    default: 
        break;
}
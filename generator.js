import fs from 'fs';
import prompts from 'prompts';


let cwd = process.cwd(); // Current working directory
let data = [];

class Generator {
    async create()  {
        

        // Find the name of the directory
        const response1 = await prompts ({
            type: 'text',
            name: 'location',
            message: 'What is the name of the directory that you would like to save your passwords in?'
        });

        let file = `${cwd}/.${response1.location}/passwords.csv`;
        let dir = `${cwd}/.${response1.location}`;
        // If the directory doesn't exist, create it
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
            fs.writeFileSync(file, 'Testing', 'utf8');
        }

        // If the directory does exist, check if the file exists
        const exists = await prompts(
            {
            type: 'confirm',
            name: 'exists',
            message: 'The file already exists. Would you like to overwrite it?'
            }
        );

        if (exists) {
            fs.writeFileSync(file, 'Testing', 'utf8');
        }
    }

    
    async save() {
        let file = `${cwd}/.temp/passwords.csv`;

        if (fs.existsSync(file)) {
            // prompts for the saving of the password
            let response = await prompts (
                {
                    type: 'text',
                    name: 'password',
                    message: 'What is the password?'
                }
            );

            let response1 = await prompts (
                {
                    type: 'text',
                    name: 'password_reason',
                    message: 'What is the password for?'
                }
            );

            fs.appendFileSync(file, `${response.password},${response1.password_reason}\n`, 'utf8');
        }   

        else {
            console.error(new Error('File does not exist'));
        }
    }

    async remove () {
        let file = `${cwd}/.temp/passwords.csv`;

        if (fs.existsSync(file)) {
            // Read the file
            data.push(fs.readFileSync(file, 'utf8'));

            let response = await prompts ({
                type: 'text',
                name: 'password',
                message: 'What is the password?'
            });

            // search for password name
            let res;

            let name = response.password;
            res = data.filter((entry) => {
                // If the password name is found, remove it
                if (entry.indexOf(name) !== -1) {
                    fs.appendFileSync(file, `${entry}\n`, ' ');
                }
            });
        }
    }
}

export { Generator };
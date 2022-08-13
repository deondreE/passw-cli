import fs from 'fs';
import prompts from 'prompts';

class Generator {
    async create()  {
        let cwd = process.cwd(); 
        const response = await prompts({
            type: 'text',
            name: 'name',
            message: 'What is the name of your password?'
        });

        const response1 = await prompts ({
            type: 'text',
            name: 'location',
            message: 'What is the name of the file that you would like to save your passwords in?'
        });

        let file = `${cwd}/${response.location}/${response.name}.csv`;
        let dir = `${cwd}/${response1.location}`;
        // If the directory doesn't exist, create it
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
            fs.writeFileSync(file, 'Testing', 'utf8');
        }

        // If the directory does exist, check if the file exists
        const exists = await prompts({
            type: 'confirm',
            name: 'exists',
            message: 'The file already exists. Would you like to overwrite it?'
        });

        if (exists) {
            fs.writeFileSync(file, 'Testing', 'utf8');
        }
    }

    async write() {
        let cwd = process.cwd( );
        // prompts for the writing of the password
        const resposne = await prompts({
            type: 'text',
            name: 'name',
            message: 'What is the name of password file?'
        },
        {
            type: 'text',
            name: 'password',
            message: 'What is the name of the password?'
        });

        if (response.name) {
            let file = `${cwd}/${response.name}.csv`;
            fs.writeFileSync(file, reponse.password, 'utf8');
        }
    }
}

export { Generator };
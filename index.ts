class Program {
    async main() {
        console.log('Executing main...');
        await this.greet();
        console.log('Executed main...');
    }

    async greet() {
        const message = await this.retrieveMessage().catch(() => 'ERROR');
        console.log(`${message} async/await!`);
    }

    retrieveMessage(): Promise<string> {
        const messages = [
            'Hello',
            'Hey',
            'Hi'
        ];

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const message = messages[Math.floor(Math.random() * messages.length)];
                Math.random() > 0.3 ? resolve(message) : reject('NG');
            }, 1000);
        });
    }
}

const program = new Program();
program.main();

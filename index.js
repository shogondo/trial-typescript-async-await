var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Program {
    main() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Executing main...');
            yield this.greet();
            console.log('Executed main...');
        });
    }
    greet() {
        return __awaiter(this, void 0, void 0, function* () {
            const message = yield this.retrieveMessage().catch(() => 'ERROR');
            console.log(`${message} async/await!`);
        });
    }
    retrieveMessage() {
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

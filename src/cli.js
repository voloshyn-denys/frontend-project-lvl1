import readlineSync from 'readline-sync';

export const askUserName = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name || 'stranger'}!`);
}
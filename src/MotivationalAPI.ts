export async function motivationalMessage(): Promise<string> {
    const messages = await fetch('https://gomezmig03.github.io/MotivationalAPI/en.json')
        .then(response => response.json());

    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}
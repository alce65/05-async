function makeAsync(time = 1000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.random();
            if (randomNumber > 0.5) {
                resolve(`Ok: ${randomNumber}`);
            } else {
                reject(new Error(`Error: ${randomNumber}`));
            }
        }, time);
    });
}

[1, 2, 3, 4, 5, 6, 7].forEach(async (item) => {
    try {
        const data = await makeAsync(item * 1000);
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
});

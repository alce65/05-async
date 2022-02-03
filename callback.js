function makeAsync(time = 1000, callback, errorCallback) {
    setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            callback(`Ok: ${randomNumber}`);
        } else {
            errorCallback(new Error(`Error: ${randomNumber}`));
        }
    }, time);
}

const errorHandler = (error) => {
    console.log(error.message);
};

[1, 2, 3, 4, 5, 6, 7].forEach((item) => {
    makeAsync(
        item * 1000,
        (data) => {
            console.log(data);
        },
        errorHandler
    );
});

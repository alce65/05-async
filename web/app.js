const app = function () {
    const askData = function () {
        const url = 'https://yesno.wtf/api';
        console.log('Asking data');
        fetch(url, {
            /* headers: new Headers({
                'x-my-data': 'Pepe',
            }), */
        })
            .then((resp) => {
                console.log(resp);
                if (!resp.ok) {
                    throw new Error(resp.status);
                }
                return resp.json();
            })
            .then((data) => {
                console.log(data);
                showImage(data.image);
            })
            .catch((err) => {
                console.log('Error', err.message);
            });
    };

    const showImage = function (urlImage) {
        document.querySelector('.image').innerHTML = `
            <img src="${urlImage}" alt="Image Sample">
        `;
    };

    document.querySelector('button').addEventListener('click', askData);
};

document.addEventListener('DOMContentLoaded', app);

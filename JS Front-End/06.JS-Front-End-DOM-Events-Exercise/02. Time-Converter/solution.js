function attachEventsListeners() {
    const convertButtonElements = document.querySelectorAll('input[type=button][value=Convert]');
    const inputElements = document.querySelectorAll('input[type=text]');

    const toSeconds = (value, unit) => {
        switch (unit) {
            case 'days':
                return value * 24 * 60 * 60;
            case 'hours':
                return value * 60 * 60;
            case 'minutes':
                return value * 60;
            case 'seconds':
                return value;
        }
    };



    const converters = {
        days(seconds) {
            return seconds / 60 / 60 / 24;
        },
        hours(seconds) {
            return seconds / 60 / 60;
        },
        minutes(seconds) {
            return seconds / 60;
        },
        seconds(seconds) {
            return seconds;
        }
    }

    for (const buttonElement of convertButtonElements) {
        buttonElement.addEventListener('click', (e) => {
            const currentInputElement = e.currentTarget.previousElementSibling;
            const seconds = toSeconds(Number(currentInputElement.value), currentInputElement.id);
            
            for (const inputElement of inputElements) {
                inputElement.value = converters[inputElement.id](seconds);
            }
        });
    }
}

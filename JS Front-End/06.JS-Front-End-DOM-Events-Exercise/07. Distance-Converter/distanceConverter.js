function attachEventsListeners() {
    const inputDistanceElement = document.getElementById('inputDistance');
    const outputDistanceElement = document.getElementById('outputDistance');
    const convertButton = document.getElementById('convert');
    const inputUnitsElement = document.getElementById('inputUnits');
    const outputUnitsElement = document.getElementById('outputUnits');
    const toMetres = (value, unit) => {
        switch (unit) {

            case 'mi':
                return value * 1609.34;
            case 'km':
                return value * 1000;
            case 'yrd':
                return value * 0.9144;
            case 'ft':
                return value * 0.3048;
            case 'in':
                return value * 0.0254;
            case 'cm':
                return value * 0.01;
            case 'mm':
                return value * 0.001;
            case 'm':
                return value;
        }
    };
    const converters = {
        mi(metres) {
            return metres / 1609.34;
        },
        km(metres) {
            return metres / 1000;
        },
        yrd(metres) {
            return metres / 0.9144;
        },
        ft(metres) {
            return metres / 0.3048;
        },
        in(metres) {
            return metres / 0.0254;
        },
        cm(metres) {
            return metres / 0.01;
        },
        mm(metres) {
            return metres / 0.001;
        },
        m(metres) {
            return metres;
        }
    }


    convertButton.addEventListener('click', () => {
        const inputUnit=inputUnitsElement.value;
        const outputUnit=outputUnitsElement.value;
        const metres=toMetres(Number(inputDistanceElement.value),inputUnit);
        outputDistanceElement.value=converters[outputUnit](metres);
    })

}
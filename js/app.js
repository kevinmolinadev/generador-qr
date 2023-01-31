const QR = document.getElementById('qr');
/* const verificarURL = (url) => {
    const Url = new RegExp("^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");
    if (Url.test(url)) {
        return url;
    } else {
        console.error('ERROR')
    }
} */
//Esta funcion filtra la url 
const filtro = (url) => {
    let http = 'http://';
    let https = 'https://';
    if (url.startsWith(http) || url.startsWith(https)) {
        return url;
    } else {
        console.log('no es una url');
    }
}
//Esta funcion genera el QR, y las distintas funcionales 
const GenerarEnvio=document.getElementById('generar');
GenerarEnvio.addEventListener('click', () => {
    QR.innerHTML = '';
    document.getElementById('form').onsubmit = (e) => {
        e.preventDefault();
    }
    const url = document.getElementById('url').value;
    //const Url = new RegExp("^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");
    if (filtro(url)) {
        QR.style=`background:white; padding:1rem;`;
        document.getElementById('tamaño').style = 'display:inline;';
        setTimeout(() => {
            document.getElementById('descargar').style = 'display:inline;';
            const save = QR.querySelector('img').src;
            descargar(save);
        }, 1000)
        const qr = new QRCode(QR, {
            text: url,
            width: 250,
            height: 250,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        })
    } else {
        QR.style = 'padding:0;';
        url.value = '';
        document.getElementById('tamaño').style = 'display:none;';
        document.getElementById('descargar').style = 'display:none;';
    }
})
/****** Distintos tamaños para el QR *******/
const pequeño = document.getElementById('pequeño');
pequeño.addEventListener('click', () => {
    QR.innerHTML = '';
    const url = document.getElementById('url').value;
    if (filtro(url)) {
        const qr = new QRCode(QR, {
            text: url,
            width: 250,
            height: 250,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        })
        setTimeout(() => {
            const save = QR.querySelector('img').src;
            descargar(save);
        }, 50);
    } else {
        QR.style = 'padding:0;';
        document.getElementById('tamaño').style = 'display:none;';
        document.getElementById('descargar').style = 'display:none;';
        alert('URL no valida');
    }
})
const mediano = document.getElementById('mediano');
mediano.addEventListener('click', () => {
    QR.innerHTML = '';
    const url = document.getElementById('url').value;
    if (filtro(url)) {
        const qr = new QRCode(QR, {
            text: url,
            width: 400,
            height: 400,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        })
        setTimeout(() => {
            const save = QR.querySelector('img').src;
            descargar(save);
        }, 50);
    } else {
        QR.style = 'padding:0;';
        document.getElementById('tamaño').style = 'display:none;';
        document.getElementById('descargar').style = 'display:none;';
        alert('URL no valida');
    }
})
const grande = document.getElementById('grande');
grande.addEventListener('click', () => {
    QR.innerHTML = '';
    const url = document.getElementById('url').value;
    if (filtro(url)) {
        const qr = new QRCode(QR, {
            text: url,
            width: 600,
            height: 600,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        })
        setTimeout(() => {
            const save = QR.querySelector('img').src;
            descargar(save);
        }, 50);
    } else {
        QR.style = 'padding:0;';
        document.getElementById('tamaño').style = 'display:none;';
        document.getElementById('descargar').style = 'display:none;';
        alert('URL no valida');
    }
})
//Esta fucnion descarga el QR una vez generado
const descargar = (url) => {
    const link = document.getElementById('descargar');
    link.href = url;
    link.download = 'codigoqr';
}
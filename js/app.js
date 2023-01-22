const QR = document.getElementById('qr');
const GenerarEnvio = () => {
    QR.innerHTML = '';
    const url = document.getElementById('url').value;
    if (url === '') {
        alert('Favor ingresar una direccion URL');
    } else {
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
    }
}
const pequeño = () => {
    QR.innerHTML = '';
    const url = document.getElementById('url').value;
    setTimeout(() => {
        const save = QR.querySelector('img').src;
        descargar(save);
    }, 50)
    const qr = new QRCode(QR, {
        text: url,
        width: 250,
        height: 250,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    })
}
const mediano = () => {
    QR.innerHTML = '';
    const url = document.getElementById('url').value;
    setTimeout(() => {
        const save = QR.querySelector('img').src;
        descargar(save);
    }, 50)
    const qr = new QRCode(QR, {
        text: url,
        width: 400,
        height: 400,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    })
    const save = QR.querySelector('img').src;
    descargar(save);
}
const grande = () => {
    QR.innerHTML = '';
    const url = document.getElementById('url').value;
    setTimeout(() => {
        const save = QR.querySelector('img').src;
        descargar(save);
    }, 50)
    const qr = new QRCode(QR, {
        text: url,
        width: 600,
        height: 600,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    })
    const save = QR.querySelector('img').src;
    descargar(save);
}
const descargar = (url) => {
    const link = document.getElementById('descargar');
    link.href = url;
    link.download = 'codigoqr';
}
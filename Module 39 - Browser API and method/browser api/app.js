const myAlert = () => {
    alert('This is an alert!')
}

const myPrompt = () => {
    const data = prompt('Enter your data');
    console.log(data);
}

const myConfirm = () => {
    const data = confirm('You are going to picnic');
    if (data === true) {
        window.location = 'https://www.gov.sg/'
    } else {
        alert('na geli, to amar ki')
    }
}
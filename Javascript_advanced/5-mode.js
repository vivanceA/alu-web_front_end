function changeMode (size, weight, transform, background, color) {
    return () => {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main () {
    const spooky = changeMode(9, bold, uppercase, pink, green);
    const darkMode = changeMode(12, bold, capitalize, black, white);
    const screenMode = changeMode(12, normal, lowercase, white, black);

    const p = document.createElement('p')
    p.innerText = 'Welcome Holberton!';
    document.body.appendChild(p);

    const spookyBotton = document.createElement('button');
    spookyButton.innerText = 'Spooky';
    const darkModeButton = document.createElement('button');
    darkModeButton.innerText = 'Dark Mode';
    const screenModeButton = document.createElement('button');
    screenModeButton.innerText = 'Screen Mode';

    document.body.appendChild(spookyButton);
    document.body.appendChild(darkModeButton);
    document.body.appendChild(screenModeButton);

    spookyButton.addEventListener('click', spooky);
    darkModeButton.addEventListener('click', darkMode);
    screenModeButton.addEventListener('click', screenMode);
}

main()
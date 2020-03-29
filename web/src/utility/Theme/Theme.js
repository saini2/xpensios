const White = '#FFFF';
const Black = '#161617';
const Grey = 'F8F8F9';

const themeLight = {
    background: Grey,
    body: Black
}

const themeDark = {
    background: Black,
    body: White
}

const themeMode = mode => (mode === 'dark' ? themeDark : themeLight)

export default themeMode;


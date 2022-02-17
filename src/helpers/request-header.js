const user = JSON.parse(localStorage.getItem('user'));
const getToken = () => user.token;
const Language = () => localStorage.getItem('i18nextLngBullsFoundation');
const Authorization = user ? `Bearer ${getToken()}` : '';

export { Language, Authorization };

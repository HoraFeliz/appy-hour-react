const detectedLanguage = () => {
	const language = window.navigator.language || navigator.userLanguage;

	language.includes('es') ? localStorage.setItem('language', 'es') : localStorage.setItem('language', 'en');
	localStorage.setItem('detectedLanguage', 'active');
};

localStorage.getItem('detectedLanguage') === null && detectedLanguage();

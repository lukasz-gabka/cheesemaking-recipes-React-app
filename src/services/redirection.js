export const redirectToHome = (history) => {
    history.push({
        pathname: '/'
    });
    window.scrollTo(0, 0);
};
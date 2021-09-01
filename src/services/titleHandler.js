const DEFAULT_TITLE = "Notatnik serowarski";

export const setDefaultTitle = () => {
    document.title = DEFAULT_TITLE;
};

export const setTitle = (title) => {
    const fullTitle = title + " - " + DEFAULT_TITLE;
    document.title = fullTitle;
};
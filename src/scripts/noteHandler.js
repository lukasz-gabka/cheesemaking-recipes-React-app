export const mountInputs = (notes) => {
    notes.forEach((note) => {
        var i = 0;
        note.template.categories.forEach((category) => {
            category.labels.forEach((label) => {
                label.input = note.inputs[i];
                i++;
            });
        });
        delete note.inputs;
    });
};
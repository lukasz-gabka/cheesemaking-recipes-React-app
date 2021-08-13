export const nameInputs = (note) => {
    var names = {};
    var categoryNumber = 1;
    var inputIndex = 0;

    note.template.categories.forEach((category) => {
        var inputNumber = 1;
        category.labels.forEach(() => {
            names[`cat${categoryNumber}Input${inputNumber++}`] = note.inputs[inputIndex++].value;
        });
        categoryNumber++;
    });

    return names;
};
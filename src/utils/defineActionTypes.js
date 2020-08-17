const prefix = '@';
const divider = '/';

// define actions types
export default (nameSpace, actionTypesNames) => {
    const actionTypes = {};

    actionTypesNames.forEach((name) => {
        actionTypes[name] = prefix + nameSpace + divider + name;
    });

    return actionTypes;
}

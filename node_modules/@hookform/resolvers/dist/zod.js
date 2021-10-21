import { appendErrors, transformToNestObject, } from 'react-hook-form';
import convertArrayToPathName from './utils/convertArrayToPathName';
const parseErrorSchema = (zodError, validateAllFieldCriteria) => {
    if (zodError.isEmpty) {
        return {};
    }
    const errors = [...zodError.errors];
    let previous = {};
    for (const error of errors) {
        const { path, message, code: type } = error;
        const currentPath = convertArrayToPathName(path);
        if ('unionErrors' in error) {
            for (const subErrors of error.unionErrors.map((e) => e.errors)) {
                errors.push(...subErrors);
            }
        }
        previous = Object.assign(Object.assign({}, previous), (path
            ? previous[currentPath] && validateAllFieldCriteria
                ? {
                    [currentPath]: appendErrors(currentPath, validateAllFieldCriteria, previous, type, message),
                }
                : {
                    [currentPath]: previous[currentPath] || Object.assign({ message,
                        type }, (validateAllFieldCriteria
                        ? {
                            types: { [type]: message || true },
                        }
                        : {})),
                }
            : {}));
    }
    return previous;
};
export const zodResolver = (schema, options) => async (values, _, validateAllFieldCriteria = false) => {
    const result = schema.safeParse(values, options);
    if (result.success) {
        return { values: result.data, errors: {} };
    }
    return {
        values: {},
        errors: transformToNestObject(parseErrorSchema(result.error, validateAllFieldCriteria)),
    };
};
//# sourceMappingURL=zod.js.map
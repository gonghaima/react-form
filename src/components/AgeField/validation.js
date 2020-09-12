const validateDay = (e) => e.target.value.length <= 2;
const validateMonth = (e) => e.target.value.length <= 2;
const validateYear = (e) => e.target.value.length <= 4;

export { validateDay, validateMonth, validateYear }
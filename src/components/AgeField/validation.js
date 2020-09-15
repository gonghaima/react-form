const validateDay = (e) => {
    if (e.target.value.length > 2) return false;
    const val = Number(e.target.value) || Number.MIN_VALUE;
    return val >= 0 && val <= 31;
};
const validateMonth = (e) => {
    if (e.target.value.length > 2) return false;
    const val = Number(e.target.value) || Number.MIN_VALUE;
    return val > 0 && val <= 12;
};
const validateYear = (e) => e.target.value.length <= 4;

export { validateDay, validateMonth, validateYear }
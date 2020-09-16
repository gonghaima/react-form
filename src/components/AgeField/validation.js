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

// const validateYear = (e) => e.target.value.length <= 4;
const validateYear = (e) => {
    if (e.target.value.length > 4) return false;
    if (e.target.value.length < 4) return true;
    // return true;
    const val = Number(e.target.value) || Number.MIN_VALUE;
    const maxYear = (new Date()).getFullYear() || 2020;

    /***************
     * 1945 - 2013 *
     ***************/
    const pattern = /^(194[5-9]|19[5-9]\d|200\d|201[0-3])$/;
    return pattern.test(val);
};

export { validateDay, validateMonth, validateYear }
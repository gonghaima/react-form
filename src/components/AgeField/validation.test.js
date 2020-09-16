import { validateDay, validateMonth, validateYear } from './validation'

test('validation should validate day, month, and year as expected', () => {

    /******************
     * Day validation *
     ******************/

    const evtDay = { target: { value: "09" } };
    const validDay = validateDay(evtDay);
    expect(validDay).toEqual(true);

    evtDay.target.value = "99";
    const invalidDay = validateDay(evtDay);
    expect(invalidDay).toEqual(false);

    evtDay.target.value = "001";
    const invalidDay_1 = validateDay(evtDay);
    expect(invalidDay_1).toEqual(false);


    /******************
     * Month validation *
     ******************/

    const evtMonth = { target: { value: "12" } };
    const validMonth = validateMonth(evtMonth);
    expect(validMonth).toEqual(true);

    evtMonth.target.value = "99";
    const invalidMonth = validateMonth(evtMonth);
    expect(invalidMonth).toEqual(false);

    evtMonth.target.value = "001";
    const invalidMonth_1 = validateMonth(evtMonth);
    expect(invalidMonth_1).toEqual(false);

    /******************
     * Year validation *
     ******************/

    const evtYear = { target: { value: "1990" } };
    const validYear = validateYear(evtYear);
    expect(validYear).toEqual(true);

    evtYear.target.value = "99";
    const invalidYear = validateYear(evtYear);
    expect(invalidYear).toEqual(true);

    evtYear.target.value = "00134";
    const invalidYear_1 = validateYear(evtYear);
    expect(invalidYear_1).toEqual(false);

});

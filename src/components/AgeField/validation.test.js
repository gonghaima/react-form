import { validateDay, validateMonth, validateYear } from './validation'

test('validation should validate day, month, and year as expected', () => {

    /******************
     * Day validation *
     ******************/

    const evt = { target: { value: "09" } };
    const validDay = validateDay(evt);
    expect(validDay).toEqual(true);

    evt.target.value = "99";
    const invalidDay = validateDay(evt);
    expect(invalidDay).toEqual(false);

    evt.target.value = "001";
    const invalidDay_1 = validateDay(evt);
    expect(invalidDay_1).toEqual(false);

});

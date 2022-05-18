import { Selector } from 'testcafe';

fixture`Fourth Test`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Fourth test', async t => {
    const reusing_js_code = Selector('#reusing-js-code')
    const traffic_markup_analysis = Selector('#traffic-markup-analysis')

    await t.click(reusing_js_code)
    await t.click(traffic_markup_analysis)
});
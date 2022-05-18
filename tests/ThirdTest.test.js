import { Selector } from 'testcafe';

fixture`Third Test`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Third test', async t => {
    await t.typeText('#developer-name', 'Eirik')
    await t.click('#submit-button')

    await t.expect(Selector('#article-header').innerText).contains('Eirik')
});
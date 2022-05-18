import { Selector } from 'testcafe';

fixture`Second Test`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Second test', async t => {
    await t.typeText('#developer-name', 'Eirik')
});
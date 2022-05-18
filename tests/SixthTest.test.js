import { Selector } from 'testcafe';

fixture`Sixth Test`
    .page`https://devexpress.github.io/testcafe/example/`;

const dropdown = Selector("#preferred-interface");
const option = dropdown.find('option');

test('Sixth test', async t => {
    await t
        .click(dropdown)
        .click(option.withText('Both'))
        .expect(dropdown.value).eql('Both')
});
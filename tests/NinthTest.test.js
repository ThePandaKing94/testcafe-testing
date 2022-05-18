import { Selector } from 'testcafe';

const googleInput = Selector('.gLFyf');


fixture`Ninth test`
    .page`${'https://www.google.no'}`
    .beforeEach(async t => {
        const acceptButton = Selector('#L2AGLb')
        await t
            .click(acceptButton)
    })

test('Ninth Test', async t => {

    await t
        .typeText(googleInput, 'install testcafe')
        .expect(googleInput.value).eql('install testcafe')
        .click(".gNO89b")
        .wait(8000)
});
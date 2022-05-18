import { Selector } from 'testcafe';

const googleInput = Selector('.gLFyf');

fixture`TimeToShine test`
    .page`${'https://www.google.no'}`
    .beforeEach(async t => {
        const acceptButton = Selector('#L2AGLb')
        await t
            .click(acceptButton)
    })


test('TimeToShine Test', async t => {

    await t
        .typeText(googleInput, 'epic memes')
        .expect(googleInput.value).eql('epic memes')
        .click('.gNO89b')
        .wait(8000)
        .openWindow('https://www.buzzfeed.com/victoriavouloumanos/best-websites-when-youre-bored')
        .wait(8000)
});
import { Selector } from 'testcafe'

const googleInput = Selector('.gLFyf')
const youtubeInput = Selector('#search-form').find('#search')
const thumbnail = Selector('.style-scope ytd-item-section-renderer').find('#thumbnail')

fixture`TimeToShine test`
    .page`${'https://www.google.no'}`
    .beforeEach(async t => {
        const acceptButton = Selector('#L2AGLb')
        await t
            .click(acceptButton)
    })


test('TimeToShine Test', async t => {

    await t
        .typeText(googleInput, 'youtube')
        .expect(googleInput.value).eql('youtube')
        .click('.gNO89b')
        .click('.yuRUbf a')
        //Kan hende det ikke funker avhengig av om testen skal gi advarsel.
        .typeText(youtubeInput, 'Why are you gay')
        .expect(youtubeInput.value).eql('Why are you gay')
        .click('#search-icon-legacy')
        .click(thumbnail)
        /*Beklager, men jeg møter på en feil her, og tror det har noe med hvilken versjon av node,
         npm eller testcafe jeg bruker.*/
        .wait(73000)
});
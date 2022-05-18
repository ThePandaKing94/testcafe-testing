fixture`Eight test`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Eight Test', async t => {

    await t
        .setNativeDialogHandler(() => true)
        .click('#populate')
        .click('#submit-button')
});
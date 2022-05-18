import { Selector } from 'testcafe';

const comments = Selector('#comments')
const checkbox = Selector('#tried-test-cafe')
const slider = Selector('.ui-slider-handle');

fixture`Seventh Test`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Seventh Test', async t => {

    await t
        .click(checkbox)
        .drag(slider, 360, 0, {
            offsetX: 10,
            offsetY: 10,
            modifiers: {
                shift: true,
            },
        })
        .typeText(comments, 'Comment')
        .expect(comments.value).eql('Comment');
});
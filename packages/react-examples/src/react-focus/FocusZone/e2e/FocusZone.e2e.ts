import { IFocusZoneProps, FocusZoneDirection } from '@fluentui/react-focus';
import type { FZTestGlobals } from './types';

/** Window with zero or more extra functions defined by some of the stories. */
type FZTestWindow = Cypress.AUTWindow & FZTestGlobals;

const fzStoriesTitle = 'Components/FocusZone/e2e';

/**
 * Calls `window.setProps()` -- this must be defined by the story being tested
 */
function setProps(props: IFocusZoneProps) {
  // Use should() to ensure that the call retries if setProps isn't defined yet
  // (this can happen in headless mode, if the example isn't finished rendering)
  cy.window().should(win => {
    (win as FZTestWindow).setProps!(props);
  });
}

describe('FocusZone', () => {
  before(() => {
    cy.visitStorybook({ qs: { e2e: '1' } });
  });

  it('can use arrows vertically', () => {
    cy.loadStory(fzStoriesTitle, 'Basic');

    setProps({
      direction: FocusZoneDirection.vertical,
      style: { display: 'flex', flexDirection: 'column', width: '100px' },
    });

    // Needed for timing error to make sure story is rendered
    cy.contains('a').should('exist');
    cy.get('body').realClick();

    // Focus the first button.
    cy.realPress('Tab');
    cy.focused().should('have.text', 'a');

    // Pressing down should go to b.
    cy.realType('{downarrow}');
    cy.focused().should('have.text', 'b');

    // Pressing down should go to c.
    cy.realType('{downarrow}');
    cy.focused().should('have.text', 'c');

    // Pressing down should stay on c.
    cy.realType('{downarrow}');
    cy.focused().should('have.text', 'c');

    // Pressing up should go to b.
    cy.realType('{uparrow}');
    cy.focused().should('have.text', 'b');

    // Pressing up should go to a.
    cy.realType('{uparrow}');
    cy.focused().should('have.text', 'a');

    // Pressing up should stay on a.
    cy.realType('{uparrow}');
    cy.focused().should('have.text', 'a');

    // Click on c to focus it.
    cy.contains('button', 'c').realClick();
    cy.focused().should('have.text', 'c');

    // Pressing up should move to b.
    cy.realType('{uparrow}');
    cy.focused().should('have.text', 'b');

    // Test that pressing horizontal buttons don't move focus.
    cy.realType('{leftarrow}');
    cy.focused().should('have.text', 'b');

    cy.realType('{rightarrow}');
    cy.focused().should('have.text', 'b');

    // Press home should go to the first target.
    cy.realType('{home}');
    cy.focused().should('have.text', 'a');

    // // Press end should go to the last target.
    cy.realType('{end}');
    cy.focused().should('have.text', 'c');
  });
});

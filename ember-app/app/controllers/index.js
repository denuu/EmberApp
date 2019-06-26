import { computed, observer } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
    isDisabled: true,

    emailAddress: '',

    actualEmailAddress: computed('emailAddress', () => {
        console.log('actualEmailAddress function is called: ', this('emailAddress'));
    }),

    emailAddressChanged: observer('emailAddress', () => {
        console.log('observer is called', this('emailAddress'));
    })
});

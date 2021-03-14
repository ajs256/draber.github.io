import TrBaseMarker from './trBaseMarker.js';

/**
 * Greyout Completed plugin
 *
 * @param {App} app
 * @returns {Plugin} TrMarkCompleted
 */
class TrMarkCompleted extends TrBaseMarker {

    constructor(app) {

        super(app, 'Grey out completed', 'Greys out lines in which you have found all items', {
            canChangeState: true,
            marker: 'completed'
        });

        this.add();
    }
}

export default TrMarkCompleted;
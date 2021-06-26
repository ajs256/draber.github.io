import DarkMode from '../plugins/darkMode.js';
import DarkModeConfig from '../plugins/darkModeConfig.js';
import Header from '../plugins/header.js';
import ProgressBar from '../plugins/ProgressBar.js';
import Score from '../plugins/score.js';
import SpillTheBeans from '../plugins/spillTheBeans.js';
import LetterCount from '../plugins/letterCount.js';
import FirstLetter from '../plugins/firstLetter.js';
import Rankings from '../plugins/rankings.js';
import Answers from '../plugins/answers.js';
import Pangrams from '../plugins/pangrams.js';
import Googlify from '../plugins/googlify.js';
import Styles from '../plugins/styles.js';
import Menu from '../plugins/menu.js';

/**
 * Plugins (minus Positioning on mobiles)
 * @param app
 * @returns {{
 *   Styles,
 *   DarkMode,
 *   DarkModeConfig,
 *   Header,
 *   ProgressBar,
 *   Score,
 *   LetterCount,
 *   FirstLetter,
 *   SpillTheBeans,
 *   Rankings,
 *   Answers,
 *   Pangrams,
 *   Googlify,
 *   Menu
 * }}
 */
const getPlugins = () => {
     return {
          Header,
          Score,
          LetterCount,
          FirstLetter,
          SpillTheBeans,
          ProgressBar,
          DarkMode,
          DarkModeConfig,
          Pangrams,
          Googlify,
          Styles,
          Menu,
          Rankings,
          Answers
     }
}

export default getPlugins;

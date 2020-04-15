// ---------------------------------- Dependencies ---------------------------------- //
const slack = require('../helpers/slack');

// ---------------------------------- Skills ---------------------------------- //
const Skill_GoodBye = require('../helpers/skills/good_bye');
const Skill_GoodMorning = require('../helpers/skills/good_morning');
const Skill_Hello = require('../helpers/skills/hello');
const Skill_MorganFreeman = require('../helpers/skills/morgan_freeman');
const Skill_ProgQuotes = require('../helpers/skills/programming_quote');
const Skill_Xkcd = require('../helpers/skills/xkcd');
const Skill_Weather = require('../helpers/skills/weather');

// ---------------------------------- Controller ---------------------------------- //
module.exports = function (controller) {

    // Handle Skill: Morgan Freeman
    Skill_MorganFreeman.listen(controller)

    // Handle Skill: Good Bye
    Skill_GoodBye.listen(controller)

    // Handle Skill: Good Morning
    Skill_GoodMorning.listen(controller)

    // Handle Skill: Hello
    Skill_Hello.listen(controller)

    // Handle Skill: Programming Quotes
    Skill_ProgQuotes.listen(controller)

    // Handle Skill: Xkcd Comics
    Skill_Xkcd.listen(controller)

    // Handle Skill: Weather Info
    Skill_Weather.listen(controller)
}
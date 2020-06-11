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
const Skill_Lunchtime = require('../helpers/skills/lunchtime');
const Skill_HappyBirthday = require('../helpers/skills/happy_birthday');
const Skill_ShowFAQ = require('../helpers/skills/faq/show_faq');
const Skill_ShowOnboarding = require('../helpers/skills/onboarding/show_onboarding');
const Skill_WhatDayIsIt = require('../helpers/skills/what_day_is_it');
const Skill_ThankYou = require('../helpers/skills/thank_you');
const Skill_ManPages = require('../helpers/skills/man/show_man');
// ---------------------------------- Controller ---------------------------------- //
module.exports = function (controller) {

    // Handle Skill: Morgan Freeman
    Skill_MorganFreeman.listen(controller)

    // Handle Skill: Good Bye
    Skill_GoodBye.listen(controller)

    // Handle Skill: Good Morning
    Skill_GoodMorning.listen(controller)

    // Handle Skill: Lunch time
    Skill_Lunchtime.listen(controller)

    // Handle Skill: Hello
    Skill_Hello.listen(controller)

    // Handle Skill: Programming Quotes
    Skill_ProgQuotes.listen(controller)

    // Handle Skill: Xkcd Comics
    Skill_Xkcd.listen(controller)

    // Handle Skill: Weather Info
    Skill_Weather.listen(controller)

    // Handle Skill: Happy Birthday
    Skill_HappyBirthday.listen(controller)

    // Handle Skill: Show FAQ
    Skill_ShowFAQ.listen(controller)

    // Handle Skill: Show Onboarding
    Skill_ShowOnboarding.listen(controller)

    // Handle Skill: What day is it
    Skill_WhatDayIsIt.listen(controller)

    // Handle Skill: Thank you
    Skill_ThankYou.listen(controller)

    // Handle Skill: Thank you
    Skill_ManPages.listen(controller)
}
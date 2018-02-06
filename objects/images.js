import addDream from '../assets/img/add_dream.png';
import addDreamInactive from '../assets/img/add_dream_inactive.png';
import addDreamInactiveInverted from '../assets/img/add_dream_inactive_inverted.png';

import addProject from '../assets/img/add_project.png';
import addProjectInactive from '../assets/img/add_project_inactive.png';

// Tags
import gezelschap from '../assets/img/tags/gezelschap.png';
import gezelschapSelected from '../assets/img/tags/gezelschap_selected.png';

import huishoudenSelected from '../assets/img/tags/huishouden_selected.png';
import huishouden from '../assets/img/tags/huishouden.png';

import verzorgingSelected from '../assets/img/tags/verzorging_selected.png';
import verzorging from '../assets/img/tags/verzorging.png';

import vervoerSelected from '../assets/img/tags/vervoer_selected.png';
import vervoer from '../assets/img/tags/vervoer.png';

import schoolSelected from '../assets/img/tags/school_selected.png';
import school from '../assets/img/tags/school.png';

import taalSelected from '../assets/img/tags/taal_selected.png';
import taal from '../assets/img/tags/taal.png';

import administratieSelected from '../assets/img/tags/administratie_selected.png';
import administratie from '../assets/img/tags/administratie.png';

import sociaalSelected from '../assets/img/tags/sociaal_selected.png';
import sociaal from '../assets/img/tags/sociaal.png';

import technologieSelected from '../assets/img/tags/technologie_selected.png';
import technologie from '../assets/img/tags/technologie.png';

import klussenSelected from '../assets/img/tags/klussen_selected.png';
import klussen from '../assets/img/tags/klussen.png';

import tuinierenSelected from '../assets/img/tags/tuinieren_selected.png';
import tuinieren from '../assets/img/tags/tuinieren.png';

import creatiefSelected from '../assets/img/tags/creatief_selected.png';
import creatief from '../assets/img/tags/creatief.png';

import ontspanningSelected from '../assets/img/tags/ontspanning_selected.png';
import ontspanning from '../assets/img/tags/ontspanning.png';

// Tab bar
import messagesInactive from '../assets/img/messages_tab_inactive.png';
import messages from '../assets/img/messages_tab.png';

import exploreInactive from '../assets/img/explore_tab_inactive.png';
import explore from '../assets/img/explore_tab.png';

import neighbourhoodInactive from '../assets/img/neighbourhood_tab_inactive.png';
import neighbourhood from '../assets/img/neighbourhood_tab.png';

import payInactive from '../assets/img/pay_tab_inactive.png';
import pay from '../assets/img/pay_tab.png';

import profileInactive from '../assets/img/profile_tab_inactive.png';
import profile from '../assets/img/profile_tab.png';

const images = {
  addDream: {
    inactive: addDreamInactive,
    active: addDream,
    inactiveInverted: addDreamInactiveInverted,
  },
  addProject: {
    inactive: addProjectInactive,
    active: addProject,
  },

  // Tab bar
  messages: {
    inactive: messagesInactive,
    active: messages,
  },
  explore: {
    inactive: exploreInactive,
    active: explore,
  },
  profile: {
    inactive: profileInactive,
    active: profile,
  },
  neighbourhood: {
    inactive: neighbourhoodInactive,
    active: neighbourhood,
  },
  pay: {
    inactive: payInactive,
    active: pay,
  },

  // Tags
  huishouden: {
    inactive: huishouden,
    active: huishoudenSelected,
  },
  gezelschap: {
    inactive: gezelschap,
    active: gezelschapSelected,
  },
  verzorging: {
    inactive: verzorging,
    active: verzorgingSelected,
  },
  vervoer: {
    inactive: vervoer,
    active: vervoerSelected,
  },
  school: {
    inactive: school,
    active: schoolSelected,
  },
  taal: {
    inactive: taal,
    active: taalSelected,
  },
  sociaal: {
    inactive: sociaal,
    active: sociaalSelected,
  },
  technologie: {
    inactive: technologie,
    active: technologieSelected,
  },
  administratie: {
    inactive: administratie,
    active: administratieSelected,
  },
  tuinieren: {
    inactive: tuinieren,
    active: tuinierenSelected,
  },
  klussen: {
    inactive: klussen,
    active: klussenSelected,
  },
  creatief: {
    inactive: creatief,
    active: creatiefSelected,
  },
  ontspanning: {
    inactive: ontspanning,
    active: ontspanningSelected,
  },
};

export default images;

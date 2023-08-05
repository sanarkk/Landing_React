import React from "react";
import WebIntro from "./Intro/WebIntro";
import FeaturesFirst from "./FeaturesFirst/FeaturesFirst";
import FeaturesLast from "./FeaturesLast/FeaturesLast";
import css from "./Content.module.css";
import PanoramaImage from "../../Images/description_pano_1.png";
import PanoramaImage2 from "../../Images/description_pano_2.png";
import MediaPanoramaImage from "../../Images/landing_pano_1.png";
import CardImage1 from "../../Images/image_1.png";
import CardImage2 from "../../Images/image_2.png";
import CardImage3 from "../../Images/image_3.png";
import CardImage4 from "../../Images/image_4.png";
import CardImage5 from "../../Images/image_5.png";
import CardImage6 from "../../Images/image_6.png";
import HighlightImage1 from "../../Images/icon_1.svg";
import HighlightImage2 from "../../Images/icon_2.svg";
import HighlightImage3 from "../../Images/icon_3.svg";
import HighlightImage4 from "../../Images/icon_4.svg";
import HighlightImage5 from "../../Images/icon_5.svg";
import HighlightImage6 from "../../Images/icon_6.svg";
import HighlightImage7 from "../../Images/icon_7.svg";
import HighlightImage8 from "../../Images/icon_8.svg";
import HighlightImage9 from "../../Images/icon_9.svg";

const webData = [
  {
    mainTitle: "Remember anything. Just ask a question.",
    mainDescription:
      "Gems is the shortcut for all your knowledge. Just summon Gems and ask any question.",
    panTitle: "One simple shortcut",
    panDescription:
      "No more 100s of apps, no more folders, no more mental overload.",
    panImage: PanoramaImage,
    mediaPanImage: MediaPanoramaImage,
    titleCardOne: "Ask in your own words...",
    descriptionCardOne:
      "Ask Gems like how you’d ask a friend. It’s fast and feels truly effortless.",
    imageCardOne: CardImage1,
    titleCardTwo: "...or in somebody else’s",
    descriptionCardTwo:
      "Clip any text to provide context for what you ask Gems.",
    imageCardTwo: CardImage2,
    highlightTitleOne: "Remember anything.",
    highlightDescriptionOne: " Instantly. And without the cognitive overload",
    highlightImageOne: HighlightImage1,
    highlightTitleTwo: "Simple to use.",
    highlightDescriptionTwo:
      " Having the perfect answer is just a question away.",
    highlightImageTwo: HighlightImage2,
    highlightTitleThree: "Easy to set up.",
    highlightDescriptionThree:
      " Connect your tools in seconds. It’s zero upkeep form here.",
    highlightImageThree: HighlightImage3,
  },
  {
    mainTitle: "More answers. No more organization.",
    mainDescription:
      "Get synthesized, ready-to-use answers based on everything you and your team have ever known.",
    panTitle: "Get instant answers",
    panDescription:
      "Gems creates structured, written-out answers. We call each answers a Gem.",
    panImage: PanoramaImage2,
    mediaPanImage: MediaPanoramaImage,
    titleCardOne: "Connect your team’s entire knowledge",
    descriptionCardOne:
      "Gems searches all your knowledge to formulate a synthesized answer.",
    imageCardOne: CardImage3,
    titleCardTwo: "Never lose sources",
    descriptionCardTwo:
      "Gems provides sources with any answer, so you can go back to prove things any<br />time.",
    imageCardTwo: CardImage4,
    highlightTitleOne: "All knowledge centalized.",
    highlightDescriptionOne: " Get it all into one place without any work",
    highlightImageOne: HighlightImage4,
    highlightTitleTwo: "See connections.",
    highlightDescriptionTwo:
      " Understand how your entire knowledge is connected.",
    highlightImageTwo: HighlightImage5,
    highlightTitleThree: "No manual organization.",
    highlightDescriptionThree: " Be perfectly organized with zero effort.",
    highlightImageThree: HighlightImage6,
  },
  {
    mainTitle: "Share and document. Zero writing required.",
    mainDescription:
      "Sharing knowledge has never been easier. Paste Gems anywhere with zero friction.",
    titleCardOne: "Paste in one click",
    descriptionCardOne:
      "Press ↵ to paste a Gem into whatever app you’re working in.",
    imageCardOne: CardImage5,
    titleCardTwo: "Share in a space",
    descriptionCardTwo:
      "Post Gems into spaces that you share with colleagues and friends.",
    imageCardTwo: CardImage6,
    highlightTitleOne: "Use your full potential.",
    highlightDescriptionOne: " Uncover and use hidden gems that you forgot.",
    highlightImageOne: HighlightImage7,
    highlightTitleTwo: "Self organized knowlege base.",
    highlightDescriptionTwo: " A knowledge repo that nearly fills itself.",
    highlightImageTwo: HighlightImage8,
    highlightTitleThree: "For desktop and mobile.",
    highlightDescriptionThree: " Create and access Gems wherever you are.",
    highlightImageThree: HighlightImage9,
  },
];

const Content = () => {
  return (
    <div className={css.container}>
      <div className={css.intro}>
        <div className={css.container}>
          <WebIntro />
        </div>
      </div>
      <div className={css.features}>
        <div className={css.container}>
          <FeaturesFirst webData={webData[0]} />
          <FeaturesFirst webData={webData[1]} />
          <FeaturesLast webData={webData[2]} />
        </div>
      </div>
    </div>
  );
};

export default Content;

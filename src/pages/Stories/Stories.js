import React, { Component } from "react";
import StoryArticlesLarge from "./StoryArticles/StoryArticlesLarge/StoryArticlesLarge";
import StoryArticlesSmall from "./StoryArticles/StoryArticlesSmall/StoryArticlesSmall";
import StoryArticlesMiddle from "./StoryArticles/StoryArticlesMiddle/StoryArticlesMiddle";
import BlackBorderButton from "../../components/Buttons/BlackBorderButton";
import MainHeader from "../../components/Headers/MainHeader/MainHeader";
import Fade from "react-reveal/Fade";
import GoTop from "../../components/GoTop/GoTop";
import "./Stories.scss";
export default class Stories extends Component {
  constructor() {
    super();
    this.state = {
      clicked: 0,
      display: "inline-block",
    };
  }
  /**
   * tasks
   * 1. MainHeader 컴포넌트 안의 .headerLink를 onclick했을 때
   *    Stories의 margin-top이 Cart컴포넌트 크기만큼 증가
   * 2. document.getElementById(id_attribute_value).clientHeight;
   *    를 이용해 Cart 컴포넌트의 크기를 구한 후 Stories의 늘어날 margin 값과 대치시켜주기
   */
  clickHandler = () => {
    this.setState({ clicked: 1, display: "none" });
  };

  callBackClickCart = () => {
    this.setState({ clickCart: !this.state.clickCart });
  };

  render() {
    //console.log(this.state.clickCart);
    return (
      <main className="StoryContainer">
        <GoTop />
        <MainHeader />
        <section className="storyContainer">
          <Fade>
            <div className="storyBox">
              <Fade>
                <Fade bottom>
                  <div className="columns">
                    <StoryArticlesLarge
                      text="HOW SELENA GOMEZ’S “BOYFRIEND” CAME TO LIFE"
                      src="https://www.beatsbydre.com/content/dam/beats/web/article/2020/05/behind-the-studio-door-how-selena-gomez-boyfriend-came-to-life/bbd.hpthumb.selenagomez.desktopwide.jpg.large.2x.jpg"
                    />
                    <StoryArticlesSmall
                      text="PRO ATHLETES ADJUST TO LIFE WITHOUT SPORTS"
                      src="https://www.beatsbydre.com/content/dam/beats/web/article/2020/05/quarantined-a-world-without-sports/bbd.hpthumb.athletesinside.desktop.jpg.large.2x.jpg"
                    />
                  </div>
                </Fade>
              </Fade>
              <Fade>
                <Fade bottom>
                  <div className="columns">
                    <StoryArticlesMiddle
                      text="FACING THE GIANT WITH ARTIST SHEPARD FAIREY"
                      src="https://www.beatsbydre.com/content/dam/beats/web/article/2020/05/facing-the-giant-three-decades-of-dissent-and-art-with-shepard-fairey/bbd.hpthumb.shepardfairey.desktop.jpg.large.2x.jpg"
                    />
                    <StoryArticlesSmall
                      text="HOW BAD BUNNY JOINED NATANAEL CANO ON “SOY EL DIABLO”"
                      src="https://www.beatsbydre.com/content/dam/beats/web/article/2020/05/el-corrido-how-bad-bunny-joined-natanael-cano-on-soy-el-diablo/bbd.hpthumb.natanaelxbadbunny.desktop.jpg.large.2x.jpg"
                    />

                    <StoryArticlesMiddle
                      text="THE QUEEN OF ALL TRADES PUTS POWERBEATS TO THE TEST"
                      src="https://www.beatsbydre.com/content/dam/beats/web/article/2020/03/putting-powerbeats-to-the-test-a-day-with-the-queen-of-all-trades/bbd.hpthumb.powerbeats-yuki.desktop.jpg.large.2x.jpg"
                    />
                  </div>
                </Fade>
              </Fade>
              <Fade>
                <Fade bottom>
                  <div className="columns">
                    <StoryArticlesLarge
                      text="INSIDE THE CREATIVE PROCESS WITH BILLIE EILISH AND SOLO PRO"
                      src="https://www.beatsbydre.com/content/dam/beats/web/article/2020/03/in-billies-words-inside-the-creative-process-with-billie-eilish-and-solo-pro/bbd.hpthumb.billieeillish.desktopwide.jpg.large.2x.jpg"
                    />
                    <StoryArticlesSmall
                      text="BRODINSKI: FRENCH ELECTRONIC MEETS SOUTHERN TRAP"
                      src="https://www.beatsbydre.com/content/dam/beats/web/article/2020/04/brodinski-when-french-electronic-meets-southern-trap/bbd.hpthumb.brodinski.desktop.jpg.large.2x.jpg"
                    />
                  </div>
                </Fade>
              </Fade>
              <Fade>
                <Fade bottom>
                  <div className="columns">
                    <StoryArticlesSmall
                      text="RADIOHEAD ARTIST DETAILS HIS BEATS CUSTOMS"
                      src="https://www.beatsbydre.com/content/dam/beats/web/article/2020/04/behind-the-design-radiohead-artist-details-his-beats-customs/bbd.hpthumb.donwood.desktop.jpg.large.2x.jpg"
                    />
                    <StoryArticlesLarge
                      text="HOW DON C’S COLLAB PAYS HOMAGE TO THE NBA, CHICAGO, AND MUSIC"
                      src="https://www.beatsbydre.com/content/dam/beats/web/article/2020/03/just-don-and-beats-an-homage-to-the-nba-chicago-and-music/bbd.hpthumb.donc.desktopwide.jpg.large.2x.jpg"
                    />
                  </div>
                </Fade>
              </Fade>
              <div
                className="buttonBox"
                onClick={this.clickHandler}
                style={{ display: this.state.display }}
              >
                <BlackBorderButton text="view more" />
              </div>
            </div>
          </Fade>

          {this.state.clicked > 0 && (
            <Fade bottom>
              <div className="storyBox">
                <Fade>
                  <Fade bottom>
                    <div className="columns">
                      <StoryArticlesLarge
                        text="BEATS / SACAI: A CELEBRATION OF CREATIVITY AND UNIQUE STYLE"
                        src="https://www.beatsbydre.com/content/dam/beats/web/article/2020/04/beats-and-sacai-a-celebration-of-creativity-and-unique-style/bbd.hpthumb.sacai.desktopwide.jpg.large.2x.jpg"
                      />
                      <StoryArticlesSmall
                        text="CONTROL YOUR SOUND WITH LISTENING MODES"
                        src="https://www.beatsbydre.com/content/dam/beats/web/article/2020/03/listening-modes-control-your-sound/bbd.hpthumb.listeningmodes.desktop.jpg.large.2x.jpg"
                      />
                    </div>
                  </Fade>
                </Fade>
                <Fade>
                  <Fade bottom>
                    <div className="columns">
                      <StoryArticlesMiddle
                        text="THE PROCESS AND INSPIRATION BEHIND PHARRELL'S MORE MATTE COLLECTION"
                        src="https://www.beatsbydre.com/content/dam/beats/web/article/2020/03/in-pharrells-words-the-process-and-inspiration-behind-the-more-matte-collection/bbd.hpthumb.pharrell.desktop.jpg.large.2x.jpg"
                      />
                      <StoryArticlesSmall
                        text="A 24-HOUR RELAY CHASING THE ICELANDIC SUN READ"
                        src="https://www.beatsbydre.com/content/dam/beats/web/article/2020/03/zero-dark-project-a-24-hour-relay-chasing-the-icelandic-sun/bbd.hpthumb.zerodark.desktop.jpg.large.2x.jpg"
                      />

                      <StoryArticlesMiddle
                        text="SAMPA THE GREAT BREAKS DOWN HER HIT TRACK “FINAL FORM”"
                        src="https://www.beatsbydre.com/content/dam/beats/web/article/2020/03/behind-the-studio-door-sampa-the-great-breaks-down-her-hit-track-final-form/bbd.hpthumb.sampathegreat.desktop.jpg.large.2x.jpg"
                      />
                    </div>
                  </Fade>
                </Fade>
                <Fade>
                  <Fade bottom>
                    <div className="columns">
                      <StoryArticlesLarge
                        text="VERDY'S CELEBRATION OF STREET CULTURE, MUSIC, AND FASHION"
                        src="https://www.beatsbydre.com/content/dam/beats/web/article/2020/03/verdy-harajuku-day-a-celebration-of-street-culture-music-and-fashion/bbd.hpthumb.verdy.desktopwide.jpg.large.2x.jpg"
                      />
                      <StoryArticlesSmall
                        text="AUDIO SHARING: THE FEATURE THAT LETS YOU LISTEN WITH A FRIEND"
                        src="https://www.beatsbydre.com/content/dam/beats/web/article/2020/03/audio-sharing-the-feature-that-lets-you-listen-with-a-friend/bbd.hpthumb.audiosharing.desktop.jpg.large.2x.jpg"
                      />
                    </div>
                  </Fade>
                </Fade>
                <Fade>
                  <Fade bottom>
                    <div className="columns">
                      <StoryArticlesSmall
                        text="CONVERSATIONS ON SET OF SAINT JHN’S NEW MUSIC VIDEO “BORDERS”"
                        src="https://www.beatsbydre.com/content/dam/beats/web/article/2020/03/saint-jhn-irl-conversations-on-set-of-his-new-music-video-borders/bbd.hpthumb.saintjhn.desktop.jpg.large.2x.jpg"
                      />
                      <StoryArticlesLarge
                        text="NAYVA’S COLOR-MATCHING STREETWEAR GOES BOLD"
                        src="https://www.beatsbydre.com/content/dam/beats/web/article/2020/03/nayva-welcome-to-the-club-the-crews-color-matching-streetwear-goes-bold/bbd.hpthumb.nayva.desktopwide.jpg.large.2x.jpg"
                      />
                    </div>
                  </Fade>
                </Fade>
                <div className="buttonBox">
                  <BlackBorderButton text="view more" />
                </div>
              </div>
            </Fade>
          )}
        </section>
      </main>
    );
  }
}

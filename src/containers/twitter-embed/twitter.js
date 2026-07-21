import React, {Suspense, useContext, useEffect} from "react";
import "./twitter.scss";
import Loading from "../loading/Loading";
import {TwitterTimelineEmbed} from "react-twitter-embed";
import {twitterDetails} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const renderLoader = () => <Loading />;
const cantDisplayError =
  "<div className='centerContent'><h2>Can't load? Check privacy protection settings</h2></div>";

var widthScreen = window.screen.width;

export default function Twitter() {
  const {isDark} = useContext(StyleContext);

  useEffect(() => {
    if (!twitterDetails.display || !twitterDetails.userName) {
      return;
    }
    const timer = setTimeout(() => {
      const twitterEl = document.getElementById("twitter");
      if (twitterEl && !twitterEl.innerHTML.includes("iframe")) {
        twitterEl.innerHTML = cantDisplayError;
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (!twitterDetails.display) {
    return null;
  }
  if (!twitterDetails.userName) {
    console.error("Twitter username for twitter section is missing");
  }
  if (twitterDetails.userName) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="tw-main-div" id="twitter">
          <div className="centerContent">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName={twitterDetails.userName}
              options={{height: 400, width: {widthScreen}}}
              placeholder={renderLoader()}
              autoHeight={false}
              borderColor="#fff"
              key={isDark ? "1" : "2"}
              theme={isDark ? "dark" : "light"}
              noFooter={true}
            />
          </div>
        </div>
      </Suspense>
    );
  } else {
    return null;
  }
}

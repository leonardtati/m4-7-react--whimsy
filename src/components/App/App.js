import React from "react";
import styled from "styled-components";
import "focus-visible";

import avatar from "../../assets/carmen-sandiego.png";

import Tweet from "../Tweet";

const initialState = {
  numOfLikes: 100,
  numOfRetweets: 100,
  isLiked: false,
  isRetweeted: false
};
function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "toggle-like":
      const isAlreadyLiked = state.isLiked;
      return {
        ...state,
        isLiked: !isAlreadyLiked,
        numOfLikes: isAlreadyLiked ? state.numOfLikes - 1 : state.numOfLikes + 1
      };

    case "toggle-retweet":
      const isAlreadyRetweeted = state.isRetweeted;
      return {
        ...state,
        isRetweeted: !isAlreadyRetweeted,
        numOfRetweets: isAlreadyRetweeted
          ? state.numOfRetweets - 1
          : state.numOfRetweets + 1
      };

    default:
      throw new Error("Unrecognized action");
  }
}

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  console.log(state);

  const toggleLike = () => dispatch({ type: "toggle-like" });
  const toggleRetweet = () => dispatch({ type: "toggle-retweet" });

  return (
    <Wrapper>
      <Tweet
        tweetContents="Where in the world am I?"
        displayName="Carmen Sandiego ✨"
        username="carmen-sandiego"
        avatarSrc={avatar}
        timestamp={new Date()}
        numOfRetweets={state.numOfRetweets}
        numOfLikes={state.numOfLikes}
        isLikedByCurrentUser={state.isLiked}
        isRetweetedByCurrentUser={state.isRetweeted}
        handleToggleLike={toggleLike}
        handleToggleRetweet={toggleRetweet}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;
export default App;

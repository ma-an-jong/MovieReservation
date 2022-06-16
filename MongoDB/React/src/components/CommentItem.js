import React, { useCallback, useState, useRef, useEffect } from "react";
import axios from "axios";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

const CommentList = (props) => {
  const [likes, setLike] = useState({
    likes: props.comment.likes,
    flag: false,
  });
  const onClickLike = () => {
    setLike((likes) => {
      if (!likes.flag) {
        return {
          likes: likes.likes + 1,
          flag: !likes.flag,
        };
      } else {
        return {
          likes: likes.likes - 1,
          flag: !likes.flag,
        };
      }
    });
  };

  return (
    <div className="comment_item col-md-12">
      <div className="comment_item_name">
        <p>{props.comment.user.user_name}</p>
        <ul>
          <li>{props.comment.score}점</li>
        </ul>
      </div>
      <div className="comment_item_info">
        <p>{props.comment.context}</p>
        <ul>
          <li className="underLine"></li>
          <li>{props.comment.date}</li>
          <li className="like" onClick={onClickLike}>
            {likes.flag ? (
              <BsFillHandThumbsUpFill className="like-active" size="20" />
            ) : (
              <BsFillHandThumbsUpFill size="20" />
            )}
            &nbsp;&nbsp;<span>{likes.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CommentList;

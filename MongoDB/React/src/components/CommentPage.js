import React, { useCallback, useState, useRef, useEffect } from "react";
import axios from "axios";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

const CommentPage = (props) => {
  const [comments, setComments] = useState([]);

  const [movieComments, setMovieComments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/comment/" + props.movieId)
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onInsert = useCallback(
    (score, context) => {
      console.log(score);
      console.log(context);

      const comment = {
        user: props.user.id,
        user_name: props.user.user_name,
        movie: props.movieId,
        score: Number(score),
        context: context,
        likes: 0,
        date: new Date(),
      };
      axios
        .post("http://localhost:8800/comment", {
          comment,
        })
        .then(function (response) {
          axios
            .get("http://localhost:8800/comment/" + props.movieId)
            .then((res) => {
              setComments(res.data);
            })
            .catch((err) => console.log(err));
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    [comments]
  );
  return (
    <>
      <CommentForm onInsert={onInsert} />
      <CommentList comments={comments}></CommentList>
    </>
  );
};

export default CommentPage;

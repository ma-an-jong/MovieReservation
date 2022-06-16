import React, { useState, useCallback } from "react";

const CommentForm = ({ onInsert }) => {
  const [value, setValue] = useState({
    score: "1",
    context: "",
  });

  const onChangePoint = useCallback(
    (e) => {
      setValue({
        score: e.target.value,
        context: value.context,
      });
    },
    [value]
  );

  const onChangeContent = useCallback(
    (e) => {
      setValue({
        score: value.score,
        context: e.target.value,
      });
    },
    [value]
  );

  const onSubmit = useCallback(
    (e) => {
      onInsert(value.score, value.context);
      setValue({
        score: "1",
        context: " ",
      });
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <div className="comment_form">
      <form onSubmit={onSubmit}>
        <select value={value.score} onChange={onChangePoint}>
          <option value="1">1점</option>
          <option value="2">2점</option>
          <option value="3">3점</option>
          <option value="4">4점</option>
          <option value="5">5점</option>
        </select>
        <input
          type="text"
          placeholder="Comment를 작성해주세요."
          value={value.text}
          onChange={onChangeContent}
        />
        <button type="submit">COMMENT등록</button>
      </form>
    </div>
  );
};

export default CommentForm;

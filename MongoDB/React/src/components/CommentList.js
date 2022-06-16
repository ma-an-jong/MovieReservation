import React from "react";
import CommentItem from "./CommentItem";

const CommentList = (props) => {
    console.log(props.comments);
    return(
        <div className="Comment_row">
            {props.comments.map((comment) => (
                <CommentItem comment={comment} key={comment.id}></CommentItem>
            ))}
        </div>
    );
}

export default CommentList;
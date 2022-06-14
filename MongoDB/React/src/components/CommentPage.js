import React from "react";

import { BsFillArrowRightCircleFill } from "react-icons/bs";

const CommentPage = () => {
    return(
        <>
            <div className="comment_form col-md-12">
                <form>
                    <input type="text" placeholder="추천Comment를 작성해주세요." />
                    <button><BsFillArrowRightCircleFill size="30"/></button>
                </form>
            </div>  
        </>
    );
}

export default CommentPage;
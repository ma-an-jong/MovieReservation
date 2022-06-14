import React from "react";
import CommentPage from "./CommentPage";


const  MovieDetail = ({ movieData, clickedMovie }) => {
    var element = movieData[clickedMovie];

    return(
        <div className="movieDetail col-md-12 row">
            <div className="DetailInfoSection col-md-12 row">
                <div className="detailImage col-md-3">
                    <img src={process.env.PUBLIC_URL+"/img/"+element.img} alt={element.name} title={element.name} />
                </div>
                <div className="detailInfo col-md-9">
                    <div className="detail_title">
                        <ul>
                            <span>상영중</span>
                            <li><h2>{element.name}</h2></li>
                            <li><p>예매율 {element.reservation}% &nbsp; 평점 {element.grade}</p></li>
                            
                        </ul>
                    </div>
                    
                    <div className="underLine"></div> 

                    <div className="detail_detailInfo">
                        <p>감독 : 강수성</p> 
                        <p>장르 : 장르 / 기본 : 15세 이상, 제작국</p> 
                        <p>개봉 : 2022.06.22</p>
                        <button>예매하기</button>
                    </div>
                </div>
            </div>
            <div className="comment_section col-md-12">
                <CommentPage />
            </div>
        </div>
    );
}


export default MovieDetail; 

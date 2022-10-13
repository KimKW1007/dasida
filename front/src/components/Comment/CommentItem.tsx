import styled from 'styled-components';
import { useState } from 'react';
import CampaignCommentWrite from './CommentWrite';
import CampaignUtilsBox from './CommentUtilsBox';
import UserImgBox from './UserImgBox';
import UserName from '../common/UserName';
import { Link } from 'react-router-dom';
import ReCommentBox from './ReCommentBox';

const CommentBox = styled.div`
  display: flex;
  padding: 25px 0 0;

  .userImgBox {
    margin: 10px 20px 0 !important;
  }
  
  .commentTextBox {
    > a{
      display:inline-block;
      margin-bottom: 5px;
      .userNameBox{

        .userName {
          font-weight: bold;
          font-size: 15px;
        }
      }
      .isFamousUser{

      }
    }
    
    
    .comment {
      font-size: 14px;

      p{

      }
      button{
        font-size: 13px;
        color: ${({theme})=> theme.colors.darkBeige};
      }
    }
  }
`;

export interface CommentItemType {
  campaign_id : number;
  userId: number;
  root_comment_id: String;
  content: String;
  userName: String;
  pathID ?: number;
  idx ?: number;
  lastIdx ?: number;
  setLastIdx ?: React.Dispatch<React.SetStateAction<number>>;
};

export default function CommentItem({campaign_id, userId, root_comment_id, content,userName, pathID, idx, setLastIdx, lastIdx }: CommentItemType) {
  const [isReComment, setIsReComment] = useState(false);
  const [isShowReComment, setShowIsReComment] = useState(false);
  const [isLong, setIsLong] = useState(false); 

  return (
    <>
      <CommentBox>
        <UserImgBox />
        <div className="commentTextBox">
          <Link to={`/user/:id`}>
            <UserName userName={userName}/>
          </Link>
          <div className="comment">
            {content.length >= 100 ? 
                <>
                <p>{isLong ? content : content.slice(0,50)+"..." }<br/></p>
                <button onClick={()=>{setIsLong(!isLong)}}>
                  {isLong ? <>간략히 보기</> : <>자세히 보기</> }
                </button>
                </>:
                content}
          </div>
          <CampaignUtilsBox idx={idx!}
              setShowIsReComment={setShowIsReComment}
              isReComment={isReComment}
              setIsReComment={setIsReComment}
              root_comment_id={root_comment_id}
              userId={userId}
              setLastIdx={setLastIdx!}/>
        </div>
      </CommentBox>
      {isReComment && 
        <ReCommentBox 
          lastIdx={lastIdx!}
          idx={idx!}  
          isShowReComment={isShowReComment} 
          pathID={pathID!} 
          userId={userId}  />
      }
    </>
  );
}

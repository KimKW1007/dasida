import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import CampaignItem, { DummyPropsType } from '../CampaignItems/CampaignItem';
import { ConfirmButton, DelButton } from '../common/Buttons';
import CampaignComment from '../Comment/Comments';
import CampaignIsJoin from './CampaignIsJoin';
import ToggleBtn from '../common/ToggleTabBtn';

import contentIcon from '../../assets/images/icons/icon_content.png';
import chatIcon from '../../assets/images/icons/icon_chat.png';
import CampaignContents from './CampaignContents';
import CUDBtn from './CUDBtn';
import CampaignIntroDetail from './CampaignIntroDetail';
import QuillEditor from './QuillEditor';


export default function CampaignDetail(props: DummyPropsType) {
  const test = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    if(test.current !== null){
      test.current.innerHTML= `${props.title}`
      console.log(test.current.innerHTML);
    }
  },[])
  const [isActive, setIsActive] = useState(false);
  const [isJoin, setIsJoin] = useState(false)
  return (
    <>
      <CUDBtn campaign_id={props.campaign_id!} />
      <CampaignItem {...props} />
      <CampaignIsJoin
          setIsJoin={setIsJoin}
          isJoin={isJoin}
          />
      <CampaignIntroDetail desc={props.desc!}/>
      <ToggleBtn leftIconImg={contentIcon} leftText={'캠페인 내용'} rightIconImg={chatIcon} rightText={'댓글보기'} isActive={isActive} setIsActive={setIsActive} />
      {/*  */}
      {!isActive ? (
        <>
          <CampaignContents>
            <div ref={test}></div>
          </CampaignContents>
          <CampaignIsJoin
            setIsJoin={setIsJoin}
            isJoin={isJoin}/>
          <CUDBtn campaign_id={props.campaign_id!} JCTCenter={true} />
        </>
      ) : (
        <CampaignComment />
      )}
    </>
  );
}

import styled from "styled-components";
import { useState, ChangeEvent, useEffect } from "react";
import heartIconBrown from "../../assets/images/icons/icon_heart_br.png";
import heartIconWhite from "../../assets/images/icons/icon_heart_wh.png";

const LikeListLabel = styled.label`
  background: rgba(175, 168, 141, 0.6);
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadowDefault};

  position: relative;
  display: block;
  width: 180px;
  padding: 10px 15px 10px 40px;
  text-align: center;
  transition: all 0.3s;
  cursor: pointer;

  & + input[type="checkbox"] {
    display: none;
    visibility: hidden;
  }

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translate(0, -50%);
    width: 1em;
    height: 1em;
    background: url(${heartIconBrown}) no-repeat 50% 50% / contain;
    opacity: 0.4;
  }

  &:hover {
    background: rgba(175, 168, 141, 0.9);
  }

  &.active {
    background: ${({ theme }) => theme.colors.darkBeige};
  }

  &.active:before {
    background-image: url(${heartIconWhite});
    opacity: 1;
  }
`;
interface LikeListToggleProps {
  setLikeActive?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LikeListToggle({ setLikeActive }: LikeListToggleProps) {
  const [isActive, setIsActive] = useState(false);

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setIsActive(!isActive);
  }

  useEffect(() => {
    if (setLikeActive) setLikeActive(isActive);
  }, [isActive, setLikeActive]);

  return (
    <div>
      <LikeListLabel
        htmlFor="LikeListToggle"
        className={isActive ? "active" : ""}>
        좋아요한 목록 보기
      </LikeListLabel>
      <input
        id="LikeListToggle"
        type="checkbox"
        checked={isActive}
        onChange={handleOnChange}
      />
    </div>
  );
}

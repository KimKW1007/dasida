import { UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import { FeedFormValues } from "../../types/feedTypes";

interface TagEditFormProps {
  tags: string;
  register: UseFormRegister<FeedFormValues>;
}

function TagEditForm({ register, tags }: TagEditFormProps) {
  return (
    <DescriptionTagContainer>
      <DescriptionTag
        type="text"
        defaultValue={tags && "#" + tags.replaceAll(",", "#")}
        placeholder="#으로 구분하여 태그를 입력해 주세요.."
        {...register("tags", {
          required: "최소 1개 이상의 태그가 필요합니다.",
          validate: {
            tagRule: (value) =>
              value.toString().startsWith("#") ||
              "태그는 반드시 #으로 시작하여야합니다.",
          },
        })}
      />
    </DescriptionTagContainer>
  );
}

const DescriptionTagContainer = styled.div`
  width: 1200px;
  padding: 14px 45px 14px 45px;
  min-height: 49px;
  background-color: #004d49;
  display: flex;
  margin-bottom: 43px;
`;

const DescriptionTag = styled.input`
  color: #ffffff;
  font-size: 14px;
  line-height: 19px;
  font-weight: 600;
  width: 100%;
  text-align: left;
  margin-right: 15px;
  &:last-child {
    margin-right: 0px;
  }
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  &:focus {
    outline: none;
  }
`;

export default TagEditForm;

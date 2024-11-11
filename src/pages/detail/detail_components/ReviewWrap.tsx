import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { colorStyle, fontSize, fontweight, paddingStyle } from "../../../GlobalStyled";
import { useForm } from "react-hook-form";
import { useState } from "react";
import CommentDetailBox from "./CommentDetailBox";

const Container = styled.div`
  position: sticky;
  top: 70px;
  left: 0;
  width: 100%;
  height: 40vw;
  background-color: rgb(28, 32, 36);
  border-radius: 10px;
  .title {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${fontSize.pcTitle};
    font-weight: ${fontweight.pcbold};
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }
`;

const Comment = styled.form`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  input {
    all: unset;
    height: 100%;
    width: 80%;
  }
  button {
    all: unset;
    background-color: ${colorStyle.buttonHoverColor};
    padding: ${paddingStyle.buttonPadding};
    border-radius: 10px;
    cursor: pointer;
  }
`;

const CommentDetail = styled.ul`
margin-top: 50px;
padding: 0 ${paddingStyle.pcPadding};
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 80%;
overflow-y: scroll;
&::-webkit-scrollbar {
  display: none;
}
`;

interface CommentFormInputs {
  comment: string;
}

interface CommentIn {
  text: string;
}


const ReviewWrap = (): JSX.Element => {
  const {register, handleSubmit, reset, formState: {errors}} = useForm<CommentFormInputs>();

  const [comments, setComments] = useState<CommentIn[]>([]);

  const onSubmit = (data:CommentFormInputs) => {
    const {comment} = data;
    setComments([...comments, {text: comment}]);
    reset();
  }

  return (
    <Container>
      <div className="title">
        댓글
      </div>
      <CommentDetail>
        {comments.map((data, index)=> (
          // <li key={index}>{data.text}</li>
          <CommentDetailBox key={index} detail={data.text}/>
        ))}
      </CommentDetail>
      <Comment onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="댓글을 입력하세요" {...register("comment", { required: "댓글을 입력해야 합니다", maxLength: 200 })}/>
        {errors.comment && <p>{errors.comment.message}</p>}
        <button type="submit"><FontAwesomeIcon icon={faPaperPlane} /></button>
      </Comment>
    </Container>
  );
};

export default ReviewWrap;

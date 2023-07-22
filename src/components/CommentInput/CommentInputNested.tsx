import React, { ChangeEvent, useState } from "react";
import "./CommentInputStyle.css";
import ButtonNormal from "../Button/Normal/ButtonNormal";
import { useNavigate } from "react-router-dom";
import { Comment } from "../CommentCard/CommentCard";

interface CommentInputNestedProps {
    isVisible: boolean,
    onHide: any,
    onComment: (newComment: Comment) => void;
}

const CommentInputNested: React.FC<CommentInputNestedProps> = ({onComment, isVisible, onHide}) => {
  const [comment, setComment] = useState("");

  const handleComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newComment = event.target.value;
    setComment(newComment);
    event.target.value = "";
  };

  return (
    <>
      {isVisible && (
        <div className={"comment-input-container comment-nested-container"}>
          <div className="comment-input-header">
            <div className="body-p6">comment as</div>
            <span>
              <div className="username">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="29"
                  viewBox="0 0 28 29"
                  fill="none"
                >
                  <g clip-path="url(#clip0_145_43064)">
                    <path
                      opacity="0.993"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.7675 0.0318909C13.5696 0.0318909 14.3716 0.0318909 15.1737 0.0318909C20.6591 0.714502 24.5693 3.55824 26.9042 8.5631C27.4673 9.9405 27.8227 11.3624 27.9706 12.8287C27.9706 13.6308 27.9706 14.4328 27.9706 15.2349C27.92 15.6577 27.8471 16.077 27.7518 16.4927C25.2336 13.9927 22.718 11.4953 20.205 9.00059C19.1193 7.66015 17.7521 6.73047 16.1034 6.21154C15.5354 5.58882 14.9339 5.00548 14.2988 4.46155C14.2076 4.35218 14.1165 4.24281 14.0253 4.13343C13.375 3.29796 12.655 3.22504 11.8652 3.91468C11.7059 4.10539 11.6239 4.32414 11.6191 4.57093C10.714 4.61025 10.2673 5.08421 10.2792 5.9928C10.3331 6.25535 10.4515 6.48323 10.6347 6.67639C7.4319 8.40554 5.96442 11.0943 6.23239 14.7427C6.52316 16.8381 7.48019 18.5517 9.10347 19.8833C9.33715 20.2083 9.61058 20.5 9.92378 20.7583C9.36717 22.7842 8.80209 24.8076 8.22847 26.8286C4.11418 24.8921 1.48009 21.7203 0.32617 17.313C0.167134 16.6193 0.0486453 15.9266 -0.0292969 15.2349C-0.0292969 14.4328 -0.0292969 13.6308 -0.0292969 12.8287C0.653314 7.3433 3.49705 3.43315 8.50191 1.09829C9.87931 0.535195 11.3012 0.179728 12.7675 0.0318909Z"
                      fill="#AE62FE"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.0271 4.13339C13.9725 7.67882 13.9542 11.2335 13.9724 14.7974C12.9879 14.7883 12.0035 14.7974 11.0193 14.8247C10.3158 15.1105 10.0514 15.6301 10.2263 16.3833C10.3448 16.7935 10.6091 17.0578 11.0193 17.1763C12.0035 17.2036 12.9879 17.2128 13.9724 17.2036C13.9724 18.662 13.9724 20.1203 13.9724 21.5786C12.5644 21.5912 11.2519 21.2449 10.0349 20.5396C9.71746 20.3349 9.4076 20.1162 9.10524 19.8833C7.48196 18.5516 6.52493 16.8381 6.23416 14.7427C5.96619 11.0943 7.43367 8.4055 10.6365 6.67635C10.4533 6.48319 10.3348 6.25531 10.281 5.99276C10.2691 5.08417 10.7157 4.61021 11.6208 4.57089C11.6257 4.3241 11.7077 4.10535 11.8669 3.91464C12.6568 3.225 13.3768 3.29792 14.0271 4.13339Z"
                      fill="#FECD00"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.0254 4.13336C14.1165 4.24274 14.2076 4.35211 14.2988 4.46149C14.7612 5.02445 15.2352 5.58044 15.7207 6.12944C15.8432 6.18287 15.9707 6.21022 16.1035 6.21148C17.7521 6.7304 19.1193 7.66008 20.205 9.00052C21.9137 11.4042 22.2509 13.9928 21.2167 16.7661C20.5506 18.3449 19.4842 19.5754 18.0175 20.4575C17.9764 20.4942 17.9581 20.5397 17.9628 20.5942C17.4119 20.8513 16.8467 21.0791 16.2675 21.2778C15.5153 21.4852 14.7497 21.6037 13.9707 21.6333C13.9707 23.7661 13.9707 25.8989 13.9707 28.0317C13.5697 28.0317 13.1686 28.0317 12.7676 28.0317C11.1937 27.8796 9.68063 27.4786 8.22852 26.8286C8.80213 24.8075 9.36721 22.7841 9.92382 20.7583C9.98802 20.7028 10.0244 20.6299 10.0332 20.5395C11.2502 21.2448 12.5627 21.5912 13.9707 21.5786C13.9707 20.1202 13.9707 18.6619 13.9707 17.2036C14.9552 17.2127 15.9396 17.2036 16.9238 17.1763C17.6656 16.887 17.9299 16.3493 17.7167 15.563C17.5763 15.1856 17.312 14.9395 16.9238 14.8247C15.9396 14.7974 14.9552 14.7882 13.9707 14.7974C13.9525 11.2335 13.9707 7.67879 14.0254 4.13336Z"
                      fill="#FEA300"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.2988 4.46149C14.934 5.00541 15.5355 5.58875 16.1035 6.21148C15.9708 6.21022 15.8432 6.18288 15.7207 6.12945C15.2352 5.58044 14.7613 5.02445 14.2988 4.46149Z"
                      fill="#2AAE59"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20.2058 9.00055C22.7188 11.4953 25.2344 13.9927 27.7526 16.4927C26.9556 20.7045 24.7316 23.922 21.0808 26.145C20.6389 26.4024 20.1831 26.6303 19.7136 26.8286C19.1475 24.7464 18.5641 22.6683 17.9636 20.5942C17.9589 20.5398 17.9772 20.4942 18.0183 20.4575C19.485 19.5754 20.5514 18.345 21.2175 16.7661C22.2517 13.9928 21.9145 11.4042 20.2058 9.00055Z"
                      fill="#9D58E5"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.72227 12.3911C9.65212 12.3271 10.0258 12.7463 9.84336 13.6489C9.5212 14.1451 9.09283 14.2636 8.55821 14.0044C8.00636 13.4021 8.06105 12.8643 8.72227 12.3911Z"
                      fill="#3F4E61"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.5656 12.3912C19.4985 12.33 19.8722 12.7492 19.6867 13.649C19.3669 14.1444 18.9385 14.2628 18.4016 14.0045C17.9651 13.6035 17.9104 13.1569 18.2375 12.6646C18.3508 12.5725 18.4601 12.4813 18.5656 12.3912Z"
                      fill="#323E4D"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.9702 14.7974C13.9702 15.5995 13.9702 16.4016 13.9702 17.2037C12.9856 17.2128 12.0013 17.2037 11.0171 17.1763C10.6069 17.0578 10.3426 16.7935 10.2241 16.3834C10.0492 15.6301 10.3136 15.1106 11.0171 14.8248C12.0013 14.7974 12.9856 14.7883 13.9702 14.7974Z"
                      fill="#FD6B15"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.9727 14.7974C14.9572 14.7882 15.9416 14.7974 16.9258 14.8247C17.3139 14.9395 17.5783 15.1856 17.7187 15.563C17.9319 16.3493 17.6675 16.887 16.9258 17.1763C15.9416 17.2036 14.9572 17.2127 13.9727 17.2036C13.9727 16.4015 13.9727 15.5995 13.9727 14.7974Z"
                      fill="#F24500"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.10352 19.8833C9.40588 20.1162 9.71574 20.3349 10.0332 20.5395C10.0244 20.6299 9.98803 20.7028 9.92382 20.7583C9.61063 20.5 9.33719 20.2083 9.10352 19.8833Z"
                      fill="#37B056"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.9648 20.5942C18.5653 22.6683 19.1487 24.7464 19.7148 26.8286C18.2627 27.4786 16.7497 27.8797 15.1758 28.0317C14.7748 28.0317 14.3737 28.0317 13.9727 28.0317C13.9727 25.8989 13.9727 23.7661 13.9727 21.6333C14.7517 21.6037 15.5173 21.4852 16.2695 21.2778C16.8487 21.0791 17.4138 20.8513 17.9648 20.5942Z"
                      fill="#FE9500"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_145_43064">
                      <rect
                        width="27.9999"
                        height="27.9999"
                        fill="white"
                        transform="translate(0 0.0592041)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <div className="body-p7 text-orange">u/PokemonAir77</div>
              </div>
            </span>
          </div>
          <textarea
            className="text-area-style"
            placeholder="Textarea"
            name="postContent"
            rows={4}
            cols={100}
            value={comment}
            onChange={handleComment}
          />
          <div className="comment-input-footer">
            <ButtonNormal
              buttonText={"Discard"}
              isSecondary={true}
              isGhost={false}
              onClick={onHide}
            />
            <ButtonNormal
              buttonText={"Reply"}
              isSecondary={false}
              isGhost={false}
              onClick={() => {
                onComment({
                  content: comment,
                  createdAt: "now",
                  author: "dummy",
                  replies: []
                })
              }
}
                
            />
          </div>
        </div>
      )}
    </>
  );
}

export default CommentInputNested;
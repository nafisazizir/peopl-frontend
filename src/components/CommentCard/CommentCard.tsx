import React, { useState } from "react";
import "./CommentCardStyle.css";
import ButtonLarge from "../Button/Large/ButtonLarge";
import ButtonNormal from "../Button/Normal/ButtonNormal";
import CommentInput from "../CommentInput/CommentInput";
import { useCollapse } from "react-collapsed";
import CommentInputNested from "../CommentInput/CommentInputNested";
import ChildComment from "./ChildComment";
import { Comment } from "../../services/post";



type CommentCardProps = {
  comment: Comment;
};

function getRelativeTime(createdAt: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor(
    (now.getTime() - createdAt.getTime()) / 1000
  );

  const timeUnits: { [unit: string]: number } = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (const unit in timeUnits) {
    const seconds = timeUnits[unit as keyof typeof timeUnits];
    const interval = Math.floor(diffInSeconds / seconds);

    if (interval >= 1) {
      return `${interval}${unit.charAt(0)}`;
    }
  }

  return "now";
}

function CommentCard({ comment }: CommentCardProps) {
  const [isReplying, setIsReplying] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  const [comments, setComments] = useState(comment.replies);
  const username = localStorage.username ? localStorage.username : "john.doe46";

  const profpic = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="37"
      viewBox="0 0 36 37"
      fill="none"
    >
      <g clip-path="url(#clip0_150_43255)">
        <path
          opacity="0.993"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.416 0.0239258C17.4473 0.0239258 18.4785 0.0239258 19.5098 0.0239258C26.5625 0.901573 31.5898 4.55782 34.5918 10.9927C35.3158 12.7636 35.7728 14.5918 35.9629 16.477C35.9629 17.5083 35.9629 18.5395 35.9629 19.5708C35.8979 20.1144 35.8041 20.6535 35.6816 21.188C32.4439 17.9736 29.2095 14.7627 25.9785 11.5552C24.5826 9.83175 22.8248 8.63643 20.7051 7.96924C19.9748 7.16859 19.2014 6.41857 18.3848 5.71924C18.2676 5.57861 18.1504 5.43799 18.0332 5.29736C17.1971 4.22318 16.2714 4.12942 15.2559 5.01611C15.0511 5.26131 14.9456 5.54256 14.9395 5.85986C13.7757 5.91042 13.2015 6.51979 13.2168 7.68799C13.286 8.02556 13.4383 8.31855 13.6738 8.56689C9.55591 10.7901 7.66914 14.2472 8.01367 18.938C8.38752 21.6321 9.61799 23.8352 11.7051 25.5474C12.0055 25.9652 12.3571 26.3402 12.7598 26.6724C12.0441 29.277 11.3176 31.8786 10.5801 34.477C5.29025 31.9873 1.90354 27.9092 0.419922 22.2427C0.215446 21.3507 0.0631025 20.46 -0.0371094 19.5708C-0.0371094 18.5395 -0.0371094 17.5083 -0.0371094 16.477C0.840538 9.42435 4.49679 4.39699 10.9316 1.39502C12.7026 0.671034 14.5307 0.214003 16.416 0.0239258Z"
          fill="#AE62FE"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.036 5.29735C17.9658 9.85578 17.9423 14.4261 17.9657 19.0083C16.6998 18.9965 15.4342 19.0083 14.1688 19.0434C13.2643 19.4109 12.9244 20.0789 13.1493 21.0474C13.3016 21.5747 13.6415 21.9145 14.1688 22.0669C15.4342 22.102 16.6998 22.1138 17.9657 22.102C17.9657 23.9771 17.9657 25.852 17.9657 27.727C16.1554 27.7432 14.4679 27.2979 12.9032 26.3911C12.495 26.128 12.0966 25.8467 11.7079 25.5474C9.62078 23.8352 8.39031 21.6321 8.01646 18.938C7.67193 14.2471 9.5587 10.7901 13.6766 8.56688C13.4411 8.31854 13.2888 8.02555 13.2196 7.68797C13.2043 6.51978 13.7785 5.9104 14.9422 5.85985C14.9484 5.54254 15.0539 5.26129 15.2586 5.0161C16.2742 4.12941 17.1999 4.22316 18.036 5.29735Z"
          fill="#FECD00"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.0332 5.2973C18.1504 5.43793 18.2676 5.57855 18.3848 5.71918C18.9793 6.44299 19.5887 7.15784 20.2129 7.86371C20.3704 7.9324 20.5344 7.96756 20.7051 7.96918C22.8248 8.63637 24.5826 9.83168 25.9785 11.5551C28.1754 14.6456 28.609 17.9737 27.2793 21.5395C26.4229 23.5694 25.0518 25.1514 23.166 26.2856C23.1131 26.3328 23.0897 26.3913 23.0957 26.4614C22.3873 26.7919 21.6607 27.0848 20.916 27.3403C19.9489 27.6069 18.9645 27.7593 17.9629 27.7973C17.9629 30.5395 17.9629 33.2817 17.9629 36.0239C17.4473 36.0239 16.9316 36.0239 16.416 36.0239C14.3924 35.8284 12.4471 35.3128 10.5801 34.477C11.3176 31.8785 12.0441 29.277 12.7598 26.6723C12.8423 26.601 12.8891 26.5073 12.9004 26.3911C14.4651 27.2979 16.1526 27.7432 17.9629 27.727C17.9629 25.852 17.9629 23.977 17.9629 22.102C19.2287 22.1137 20.4944 22.102 21.7598 22.0668C22.7135 21.6949 23.0534 21.0036 22.7793 19.9926C22.5987 19.5074 22.2588 19.191 21.7598 19.0434C20.4944 19.0082 19.2287 18.9965 17.9629 19.0082C17.9395 14.426 17.963 9.85573 18.0332 5.2973Z"
          fill="#FEA300"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.3848 5.71918C19.2014 6.41851 19.9748 7.16853 20.7051 7.96918C20.5344 7.96756 20.3704 7.9324 20.2129 7.86371C19.5887 7.15784 18.9793 6.44299 18.3848 5.71918Z"
          fill="#2AAE59"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M25.9794 11.5552C29.2104 14.7627 32.4448 17.9737 35.6826 21.188C34.6578 26.6032 31.7984 30.7399 27.1044 33.5981C26.5362 33.9291 25.9503 34.2221 25.3466 34.4771C24.6188 31.8 23.8687 29.1281 23.0966 26.4614C23.0906 26.3914 23.1141 26.3328 23.1669 26.2856C25.0527 25.1515 26.4238 23.5695 27.2802 21.5396C28.6099 17.9738 28.1764 14.6456 25.9794 11.5552Z"
          fill="#9D58E5"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.2146 15.9145C12.4102 15.8322 12.8906 16.3712 12.656 17.5317C12.2418 18.1696 11.6911 18.322 11.0037 17.9887C10.2942 17.2143 10.3645 16.5229 11.2146 15.9145Z"
          fill="#3F4E61"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.8698 15.9146C25.0692 15.8358 25.5497 16.3749 25.3112 17.5318C24.9 18.1686 24.3492 18.3209 23.6589 17.9888C23.0977 17.4732 23.0274 16.899 23.448 16.2661C23.5936 16.1477 23.7342 16.0304 23.8698 15.9146Z"
          fill="#323E4D"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.9636 19.0084C17.9636 20.0396 17.9636 21.0708 17.9636 22.1021C16.6978 22.1139 15.4322 22.1021 14.1668 22.067C13.6394 21.9146 13.2996 21.5748 13.1472 21.0474C12.9224 20.0789 13.2623 19.411 14.1668 19.0435C15.4322 19.0084 16.6978 18.9966 17.9636 19.0084Z"
          fill="#FD6B15"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.9668 19.0082C19.2326 18.9965 20.4983 19.0082 21.7637 19.0434C22.2628 19.191 22.6026 19.5074 22.7832 19.9926C23.0573 21.0036 22.7174 21.695 21.7637 22.0668C20.4983 22.102 19.2326 22.1137 17.9668 22.102C17.9668 21.0707 17.9668 20.0395 17.9668 19.0082Z"
          fill="#F24500"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.7051 25.5474C12.0938 25.8468 12.4922 26.128 12.9004 26.3911C12.8891 26.5073 12.8423 26.6011 12.7598 26.6724C12.3571 26.3402 12.0055 25.9652 11.7051 25.5474Z"
          fill="#37B056"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.0996 26.4614C23.8717 29.1281 24.6217 31.8 25.3496 34.4771C23.4826 35.3129 21.5373 35.8285 19.5137 36.0239C18.9981 36.0239 18.4824 36.0239 17.9668 36.0239C17.9668 33.2817 17.9668 30.5396 17.9668 27.7974C18.9684 27.7593 19.9528 27.607 20.9199 27.3403C21.6646 27.0849 22.3912 26.792 23.0996 26.4614Z"
          fill="#FE9500"
        />
      </g>
      <defs>
        <clipPath id="clip0_150_43255">
          <rect
            width="36"
            height="36"
            fill="white"
            transform="translate(0 0.059082)"
          />
        </clipPath>
      </defs>
    </svg>
  );

  function handleOnClick() {
    // Do more stuff with the click event!
    // Or, set isExpanded conditionally
    setExpanded(!isExpanded);
  }
  return (
    <>
      <div className="comment-container">
        <div className="comment-header">
          <div className="comment-username">
            {profpic}
            <div className="body-p6">{username}</div>
          </div>
          <div className="comment-left">
            <div className="body-p8">{getRelativeTime(new Date(comment.createdAt))}</div>
          </div>
        </div>
        <div className="comment-body">
          <div className="body-p8 neutral-100 text-align-start">
            {comment.content}
          </div>
        </div>
        <div
          className="comment-footer"
          {...getToggleProps({ onClick: handleOnClick })}
        >
          {isExpanded && isReplying ? (
            ""
          ) : (
            <ButtonNormal
              buttonText={"Reply"}
              isSecondary={false}
              isGhost={true}
              onClick={() => {
                setIsReplying(true);
              }}
            />
          )}
        </div>
        {isReplying ? (
          <div className="display-stretch" {...getCollapseProps()}>
            <CommentInputNested
              isVisible={true}
              onHide={() => {
                setExpanded(false), setIsReplying(false);
              }}
              parentID={comment._id}
            />
          </div>
        ) : (
          ""
        )}

        <ChildComment childComment={comment.replies} />
      </div>
    </>
  );
}

export default CommentCard;

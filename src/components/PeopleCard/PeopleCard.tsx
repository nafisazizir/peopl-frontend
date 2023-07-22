import React from "react";
import "./PeopleCard.css";
import ButtonNormal from "../Button/Normal/ButtonNormal";
import { useNavigate } from "react-router-dom";

type Props = {
  user: string;
  totalCommunities: number;
};

export default function PeopleCard({ user, totalCommunities }: Props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/profile/${user}`);
  };
  return (
    <>
      <div className="people-container" onClick={handleClick}>
        <div className="people-detail">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="37"
            viewBox="0 0 36 37"
            fill="none"
          >
            <g clip-path="url(#clip0_122_41296)">
              <path
                opacity="0.993"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.416 0.524078C17.4473 0.524078 18.4785 0.524078 19.5098 0.524078C26.5625 1.40173 31.5898 5.05798 34.5918 11.4928C35.3158 13.2638 35.7728 15.0919 35.9629 16.9772C35.9629 18.0085 35.9629 19.0397 35.9629 20.071C35.8979 20.6145 35.8041 21.1536 35.6816 21.6881C32.4439 18.4738 29.2095 15.2628 25.9785 12.0553C24.5826 10.3319 22.8248 9.13659 20.7051 8.46939C19.9748 7.66874 19.2014 6.91873 18.3848 6.21939C18.2676 6.07877 18.1504 5.93814 18.0332 5.79752C17.1971 4.72333 16.2714 4.62958 15.2559 5.51627C15.0511 5.76146 14.9456 6.04271 14.9395 6.36002C13.7757 6.41057 13.2015 7.01995 13.2168 8.18814C13.286 8.52571 13.4383 8.8187 13.6738 9.06705C9.55591 11.2903 7.66914 14.7473 8.01367 19.4381C8.38752 22.1322 9.61799 24.3353 11.7051 26.0475C12.0055 26.4653 12.3571 26.8404 12.7598 27.1725C12.0441 29.7772 11.3176 32.3787 10.5801 34.9772C5.29025 32.4874 1.90354 28.4093 0.419922 22.7428C0.215446 21.8508 0.0631025 20.9602 -0.0371094 20.071C-0.0371094 19.0397 -0.0371094 18.0085 -0.0371094 16.9772C0.840538 9.92451 4.49679 4.89714 10.9316 1.89517C12.7026 1.17119 14.5307 0.714156 16.416 0.524078Z"
                fill="#AE62FE"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.036 5.79747C17.9658 10.3559 17.9423 14.9262 17.9657 19.5084C16.6998 19.4967 15.4342 19.5084 14.1688 19.5436C13.2643 19.911 12.9244 20.579 13.1493 21.5475C13.3016 22.0748 13.6415 22.4146 14.1688 22.567C15.4342 22.6022 16.6998 22.6139 17.9657 22.6022C17.9657 24.4772 17.9657 26.3521 17.9657 28.2272C16.1554 28.2433 14.4679 27.798 12.9032 26.8912C12.495 26.6281 12.0966 26.3469 11.7079 26.0475C9.62078 24.3353 8.39031 22.1322 8.01646 19.4381C7.67193 14.7473 9.5587 11.2902 13.6766 9.067C13.4411 8.81866 13.2888 8.52567 13.2196 8.1881C13.2043 7.0199 13.7785 6.41053 14.9422 6.35997C14.9484 6.04267 15.0539 5.76142 15.2586 5.51622C16.2742 4.62953 17.1999 4.72329 18.036 5.79747Z"
                fill="#FECD00"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.0332 5.79742C18.1504 5.93805 18.2676 6.07867 18.3848 6.2193C18.9793 6.94311 19.5887 7.65796 20.2129 8.36383C20.3704 8.43253 20.5344 8.46768 20.7051 8.4693C22.8248 9.13649 24.5826 10.3318 25.9785 12.0552C28.1754 15.1457 28.609 18.4739 27.2793 22.0396C26.4229 24.0695 25.0518 25.6516 23.166 26.7857C23.1131 26.8329 23.0897 26.8915 23.0957 26.9615C22.3873 27.292 21.6607 27.5849 20.916 27.8404C19.9489 28.107 18.9645 28.2594 17.9629 28.2974C17.9629 31.0396 17.9629 33.7818 17.9629 36.524C17.4473 36.524 16.9316 36.524 16.416 36.524C14.3924 36.3285 12.4471 35.8129 10.5801 34.9771C11.3176 32.3786 12.0441 29.7771 12.7598 27.1724C12.8423 27.1011 12.8891 27.0074 12.9004 26.8912C14.4651 27.798 16.1526 28.2433 17.9629 28.2271C17.9629 26.3521 17.9629 24.4771 17.9629 22.6021C19.2287 22.6139 20.4944 22.6021 21.7598 22.567C22.7135 22.1951 23.0534 21.5037 22.7793 20.4927C22.5987 20.0075 22.2588 19.6911 21.7598 19.5435C20.4944 19.5084 19.2287 19.4966 17.9629 19.5084C17.9395 14.9262 17.963 10.3559 18.0332 5.79742Z"
                fill="#FEA300"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.3848 6.2193C19.2014 6.91863 19.9748 7.66865 20.7051 8.4693C20.5344 8.46768 20.3704 8.43253 20.2129 8.36383C19.5887 7.65796 18.9793 6.94311 18.3848 6.2193Z"
                fill="#2AAE59"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.9794 12.0553C29.2104 15.2628 32.4448 18.4737 35.6826 21.6881C34.6578 27.1033 31.7984 31.24 27.1044 34.0982C26.5362 34.4292 25.9503 34.7222 25.3466 34.9771C24.6188 32.3001 23.8687 29.6282 23.0966 26.9615C23.0906 26.8915 23.1141 26.8329 23.1669 26.7857C25.0527 25.6516 26.4238 24.0696 27.2802 22.0396C28.6099 18.4739 28.1764 15.1457 25.9794 12.0553Z"
                fill="#9D58E5"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.2146 16.4146C12.4102 16.3323 12.8906 16.8713 12.656 18.0318C12.2418 18.6697 11.6911 18.8221 11.0037 18.4888C10.2942 17.7144 10.3645 17.023 11.2146 16.4146Z"
                fill="#3F4E61"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.8698 16.4147C25.0692 16.336 25.5497 16.8751 25.3112 18.0319C24.9 18.6688 24.3492 18.8211 23.6589 18.4889C23.0977 17.9733 23.0274 17.3992 23.448 16.7663C23.5936 16.6478 23.7342 16.5306 23.8698 16.4147Z"
                fill="#323E4D"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.9636 19.5085C17.9636 20.5397 17.9636 21.5709 17.9636 22.6022C16.6978 22.614 15.4322 22.6022 14.1668 22.5671C13.6394 22.4147 13.2996 22.0749 13.1472 21.5475C12.9224 20.579 13.2623 19.9111 14.1668 19.5436C15.4322 19.5085 16.6978 19.4967 17.9636 19.5085Z"
                fill="#FD6B15"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.9668 19.5084C19.2326 19.4966 20.4983 19.5084 21.7637 19.5435C22.2628 19.6911 22.6026 20.0075 22.7832 20.4927C23.0573 21.5037 22.7174 22.1951 21.7637 22.567C20.4983 22.6021 19.2326 22.6139 17.9668 22.6021C17.9668 21.5708 17.9668 20.5396 17.9668 19.5084Z"
                fill="#F24500"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.7051 26.0475C12.0938 26.3469 12.4922 26.6281 12.9004 26.8912C12.8891 27.0075 12.8423 27.1012 12.7598 27.1725C12.3571 26.8403 12.0055 26.4653 11.7051 26.0475Z"
                fill="#37B056"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.0996 26.9615C23.8717 29.6282 24.6217 32.3001 25.3496 34.9772C23.4826 35.813 21.5373 36.3286 19.5137 36.524C18.9981 36.524 18.4824 36.524 17.9668 36.524C17.9668 33.7819 17.9668 31.0397 17.9668 28.2975C18.9684 28.2594 19.9528 28.1071 20.9199 27.8405C21.6646 27.585 22.3912 27.2921 23.0996 26.9615Z"
                fill="#FE9500"
              />
            </g>
            <defs>
              <clipPath id="clip0_122_41296">
                <rect
                  width="36"
                  height="36"
                  fill="white"
                  transform="translate(0 0.559204)"
                />
              </clipPath>
            </defs>
          </svg>
          <div className="body-p6">{user}</div>
          <h6 className="grey-402">·</h6>
          <div className="body-p8">{totalCommunities} Communities followed</div>
        </div>
      </div>
    </>
  );
}

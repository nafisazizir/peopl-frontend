import React from "react";
import "./ConnectionMessageStyle.css";

interface MessageProps {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  username: string;
}

function getRelativeTime(time: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - time.getTime()) / 1000);

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

const ConnectionMessage: React.FC<MessageProps> = ({
  username,
  preview,
  time,
  onClick,
}) => {
  return (
    <div className="message-component" onClick={onClick}>
      <svg
        width="48"
        height="49"
        viewBox="0 0 48 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_157_50335)">
          <path
            opacity="0.993"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.8867 0.0123634C23.2617 0.0123634 24.6367 0.0123634 26.0117 0.0123634C35.4153 1.18256 42.1184 6.05756 46.1211 14.6374C47.0864 16.9986 47.6958 19.4361 47.9492 21.9499C47.9492 23.3249 47.9492 24.6998 47.9492 26.0749C47.8625 26.7996 47.7375 27.5184 47.5742 28.2311C43.2572 23.9453 38.9447 19.664 34.6367 15.3874C32.7755 13.0895 30.4317 11.4957 27.6055 10.6061C26.6318 9.53858 25.6005 8.53856 24.5117 7.60611C24.3554 7.41861 24.1992 7.23111 24.043 7.04361C22.9282 5.61137 21.6939 5.48636 20.3398 6.66861C20.0668 6.99554 19.9262 7.37054 19.918 7.79361C18.3663 7.86102 17.6007 8.67352 17.6211 10.2311C17.7133 10.6812 17.9164 11.0719 18.2305 11.403C12.7399 14.3673 10.2242 18.9767 10.6836 25.2311C11.1821 28.8232 12.8227 31.7607 15.6055 34.0436C16.0061 34.6007 16.4748 35.1007 17.0117 35.5436C16.0575 39.0165 15.0888 42.4852 14.1055 45.9499C7.05237 42.6302 2.53675 37.1927 0.558594 29.6374C0.285959 28.448 0.0828345 27.2605 -0.0507812 26.0749C-0.0507812 24.6998 -0.0507812 23.3249 -0.0507812 21.9499C1.11942 12.5463 5.99442 5.84312 14.5742 1.84049C16.9355 0.875175 19.373 0.2658 21.8867 0.0123634Z"
            fill="#AE62FE"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.0454 7.04355C23.9517 13.1215 23.9205 19.2152 23.9516 25.3248C22.2639 25.3091 20.5764 25.3248 18.8891 25.3717C17.6831 25.8616 17.2299 26.7522 17.5298 28.0436C17.7329 28.7467 18.186 29.1998 18.8891 29.4029C20.5764 29.4498 22.2639 29.4655 23.9516 29.4498C23.9516 31.9498 23.9516 34.4498 23.9516 36.9498C21.5379 36.9714 19.2879 36.3776 17.2016 35.1686C16.6574 34.8177 16.1262 34.4427 15.6079 34.0436C12.8251 31.7606 11.1845 28.8232 10.686 25.2311C10.2266 18.9766 12.7423 14.3672 18.2329 11.4029C17.9188 11.0718 17.7158 10.6811 17.6235 10.2311C17.6031 8.67346 18.3687 7.86096 19.9204 7.79355C19.9286 7.37048 20.0693 6.99548 20.3423 6.66855C21.6963 5.4863 22.9306 5.61131 24.0454 7.04355Z"
            fill="#FECD00"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.043 7.04351C24.1993 7.23101 24.3554 7.41851 24.5117 7.60601C25.3045 8.57109 26.117 9.52423 26.9492 10.4654C27.1592 10.557 27.3779 10.6039 27.6055 10.606C30.4317 11.4956 32.7755 13.0894 34.6367 15.3873C37.5659 19.5079 38.144 23.9454 36.3711 28.6998C35.2292 31.4063 33.4011 33.5157 30.8867 35.0279C30.8162 35.0908 30.7849 35.1689 30.793 35.2623C29.8484 35.703 28.8796 36.0935 27.8867 36.4341C26.5972 36.7896 25.2847 36.9928 23.9492 37.0435C23.9492 40.6998 23.9492 44.356 23.9492 48.0123C23.2618 48.0123 22.5742 48.0123 21.8867 48.0123C19.1886 47.7516 16.5948 47.0642 14.1055 45.9498C15.0888 42.4851 16.0575 39.0164 17.0117 35.5435C17.1218 35.4484 17.1842 35.3235 17.1992 35.1685C19.2855 36.3776 21.5355 36.9713 23.9492 36.9498C23.9492 34.4497 23.9492 31.9498 23.9492 29.4498C25.637 29.4654 27.3245 29.4498 29.0117 29.4029C30.2833 28.907 30.7365 27.9852 30.3711 26.6373C30.1303 25.9903 29.6772 25.5684 29.0117 25.3716C27.3245 25.3248 25.637 25.3091 23.9492 25.3248C23.9181 19.2152 23.9493 13.1214 24.043 7.04351Z"
            fill="#FEA300"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.5117 7.60601C25.6005 8.53846 26.6318 9.53848 27.6055 10.606C27.3779 10.6039 27.1592 10.557 26.9492 10.4654C26.117 9.52423 25.3045 8.5711 24.5117 7.60601Z"
            fill="#2AAE59"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34.638 15.3873C38.946 19.664 43.2585 23.9453 47.5755 28.2311C46.2091 35.4514 42.3966 40.967 36.138 44.7779C35.3804 45.2192 34.5991 45.6099 33.7942 45.9498C32.8237 42.3804 31.8237 38.8179 30.7942 35.2623C30.7861 35.1689 30.8175 35.0908 30.888 35.0279C33.4023 33.5157 35.2305 31.4064 36.3723 28.6998C38.1452 23.9455 37.5672 19.5079 34.638 15.3873Z"
            fill="#9D58E5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.9541 21.1998C16.5482 21.09 17.1888 21.8087 16.876 23.356C16.3237 24.2066 15.5894 24.4098 14.6729 23.9654C13.7269 22.9328 13.8206 22.011 14.9541 21.1998Z"
            fill="#3F4E61"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.8251 21.1999C33.4243 21.0949 34.0649 21.8137 33.747 23.3561C33.1987 24.2053 32.4643 24.4084 31.5439 23.9655C30.7957 23.278 30.7019 22.5125 31.2626 21.6686C31.4568 21.5107 31.6443 21.3544 31.8251 21.1999Z"
            fill="#323E4D"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.9489 25.3249C23.9489 26.6999 23.9489 28.0749 23.9489 29.4499C22.2611 29.4656 20.5736 29.4499 18.8864 29.403C18.1833 29.1999 17.7302 28.7468 17.527 28.0436C17.2272 26.7523 17.6804 25.8617 18.8864 25.3718C20.5736 25.3249 22.2611 25.3092 23.9489 25.3249Z"
            fill="#FD6B15"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.9531 25.3248C25.6409 25.3091 27.3284 25.3248 29.0156 25.3717C29.6811 25.5684 30.1343 25.9903 30.375 26.6373C30.7404 27.9852 30.2873 28.9071 29.0156 29.4029C27.3284 29.4498 25.6409 29.4654 23.9531 29.4498C23.9531 28.0747 23.9531 26.6998 23.9531 25.3248Z"
            fill="#F24500"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.6055 34.0436C16.1238 34.4428 16.655 34.8178 17.1992 35.1686C17.1842 35.3235 17.1218 35.4485 17.0117 35.5436C16.4748 35.1007 16.0061 34.6006 15.6055 34.0436Z"
            fill="#37B056"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.7969 35.2623C31.8263 38.8179 32.8264 42.3804 33.7969 45.9498C31.3075 47.0642 28.7137 47.7517 26.0156 48.0123C25.3282 48.0123 24.6406 48.0123 23.9531 48.0123C23.9531 44.3561 23.9531 40.6998 23.9531 37.0436C25.2886 36.9928 26.6011 36.7897 27.8906 36.4342C28.8835 36.0936 29.8523 35.703 30.7969 35.2623Z"
            fill="#FE9500"
          />
        </g>
        <defs>
          <clipPath id="clip0_157_50335">
            <rect
              width="48"
              height="48"
              fill="white"
              transform="translate(0 0.0592041)"
            />
          </clipPath>
        </defs>
      </svg>
      <div className="message-container">
        <div className="message-head">
          <div className="message-username">{username}</div>
          <div className="message-time">{getRelativeTime(new Date(time))}</div>
        </div>
        <div className="message-preview">{preview}</div>
      </div>
    </div>
  );
};

export default ConnectionMessage;

import "./HeaderStyle.css";
import ButtonAuth from "../../components/Button/AuthButton/ButtonAuth";
import { useNavigate } from "react-router-dom";
import HeaderButton from "../Button/HeaderButton/HeaderButton";

interface HeaderCommunityProps {
  name: string;
  description: string;
  totalMembers: number;
  totalPosts: number;
  isMember: boolean;
  joinOrLeaveClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const HeaderCommunity: React.FC<HeaderCommunityProps> = ({
  name,
  description,
  totalMembers,
  totalPosts,
  isMember,
  joinOrLeaveClick,
}) => {
  const buttonText = !!isMember === false ? "Join" : "Leave";
  return (
    <div className="header-layout">
      <div className="header-community-background"></div>
      <div className="header-content-layout">
        <svg
          width="87"
          height="87"
          viewBox="0 0 87 87"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="2" y="2" width="83" height="83" rx="41.5" fill="#FC7201" />
          <path
            opacity="0.977"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.8506 16.9732C28.3763 16.6844 32.1728 19.0848 34.2399 24.1742C35.5172 28.9404 34.268 32.8838 30.4925 36.0045C29.2986 36.8706 27.9759 37.4585 26.5246 37.768C24.7181 37.9448 22.9055 38.0428 21.0871 38.0619C17.3396 38.6743 15.1597 40.8541 14.5474 44.6016C14.1428 46.8058 14.951 48.3489 16.9722 49.2308C20.2053 49.2797 23.4384 49.3288 26.6715 49.3778C28.7814 49.8499 29.4427 51.0991 28.6555 53.1252C28.3228 53.5563 27.9063 53.8747 27.4063 54.0805C23.7323 54.1785 20.0584 54.1785 16.3844 54.0805C12.5234 53.1586 10.2946 50.7338 9.69771 46.806C9.37233 41.3322 11.5522 37.2173 16.2374 34.4614C13.2765 30.46 12.9581 26.2471 15.2822 21.8229C17.1348 19.1461 19.6576 17.5296 22.8506 16.9732ZM23.2915 21.8229C26.7976 21.6824 28.9775 23.2989 29.8312 26.6725C29.9888 30.041 28.4458 32.1719 25.2019 33.0653C22.7432 33.373 20.8081 32.5156 19.397 30.4935C17.8257 27.2014 18.536 24.5316 21.5279 22.4842C22.1262 22.2446 22.7141 22.0242 23.2915 21.8229Z"
            fill="#FED3B0"
          />
          <path
            opacity="0.976"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M61.2008 16.9739C65.7372 16.6338 69.2397 18.3483 71.7084 22.1174C73.875 26.467 73.5076 30.5819 70.6062 34.462C75.8332 37.6189 77.9152 42.2237 76.8519 48.2762C75.8392 51.4444 73.7083 53.3794 70.4592 54.0811C66.7852 54.1791 63.1112 54.1791 59.4372 54.0811C57.9994 53.3933 57.5341 52.2912 58.0411 50.7745C58.4777 49.8979 59.188 49.4326 60.172 49.3784C63.4051 49.3295 66.6383 49.2804 69.8714 49.2315C71.8925 48.3496 72.7008 46.8065 72.2962 44.6022C71.9685 42.4644 70.9643 40.7254 69.2835 39.3852C68.4741 38.8335 67.5923 38.4417 66.6383 38.2095C64.8318 38.0327 63.0192 37.9347 61.2008 37.9156C56.0644 36.943 53.0517 33.8814 52.1627 28.7306C51.8609 23.4768 54.0898 19.7783 58.8494 17.6352C59.6439 17.3847 60.4276 17.1642 61.2008 16.9739ZM61.6416 21.8235C66.1452 21.8447 68.3251 24.098 68.1813 28.5837C67.1993 31.8182 65.0193 33.3124 61.6416 33.0659C58.3978 32.1726 56.8547 30.0416 57.0124 26.6732C57.5362 24.0677 59.0792 22.4512 61.6416 21.8235Z"
            fill="#FED3B0"
          />
          <path
            opacity="0.983"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M42.396 28.4367C47.2955 28.2763 50.896 30.3338 53.1975 34.609C55.0533 39.2655 54.294 43.4293 50.9196 47.1005C56.6347 50.891 59.1085 56.2307 58.3411 63.1191C57.7919 67.0485 55.612 69.5714 51.8014 70.6875C49.0144 70.8531 46.2222 70.9266 43.4247 70.9079C40.6272 70.9266 37.8349 70.8531 35.048 70.6875C31.6765 69.7164 29.5455 67.5366 28.6553 64.1478C27.5922 58.1306 29.2331 53.0115 33.5784 48.7906C34.3417 48.1987 35.1255 47.6355 35.9298 47.1005C32.6468 43.5444 31.8386 39.4786 33.5049 34.9029C35.3382 31.1828 38.3018 29.0273 42.396 28.4367ZM42.6899 33.2863C47.3091 33.4724 49.4891 35.8727 49.2296 40.4873C48.2088 43.7598 45.9799 45.3029 42.5429 45.1166C38.9501 44.1687 37.3091 41.8419 37.6198 38.136C38.291 35.4314 39.981 33.8148 42.6899 33.2863ZM42.249 50.0397C47.723 49.9089 51.3726 52.4072 53.1975 57.5346C53.6107 59.487 53.6597 61.4464 53.3445 63.413C52.8507 64.7889 51.8954 65.6461 50.4787 65.9848C45.776 66.0828 41.0733 66.0828 36.3706 65.9848C34.7171 65.5558 33.7129 64.5026 33.358 62.8252C32.7109 58.4439 34.0581 54.8434 37.3994 52.0237C38.8831 50.9994 40.4996 50.338 42.249 50.0397Z"
            fill="#FFF1E6"
          />
          <rect
            x="2"
            y="2"
            width="83"
            height="83"
            rx="41.5"
            stroke="white"
            stroke-width="4"
          />
        </svg>

        <div className="header-content-text">
          <div className="header-content-title-layout">
            <h3 className="header-content-title">{name}</h3>
            <div className="header-content-text-layout">
              <div className="header-content-title-detail">.</div>
              <div className="header-content-title-detail-2">
                {totalMembers} Members
              </div>
              <div className="header-content-title-detail">.</div>
              <div className="header-content-title-detail-2">
                {totalPosts} Posts
              </div>
            </div>
          </div>
          <div className="header-content-body">{description}</div>
        </div>
        <HeaderButton onClick={joinOrLeaveClick} buttonText={buttonText} />
      </div>
    </div>
  );
};

export default HeaderCommunity;

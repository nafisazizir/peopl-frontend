import "./CommunityCardStyle.css";
import ButtonNormal from "../Button/Normal/ButtonNormal";
import { useNavigate } from "react-router-dom";

type Props = {
  community: string;
  numOfMem: number;
  description: string;
};

export default function CommunityCard({
  community,
  numOfMem,
  description,
}: Props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/community/${community}`);
  };
  return (
    <>
      <div className="com-container" onClick={handleClick}>
        <div className="com-detail">
          <svg
            className="post-card-community-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              opacity="0.977"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.45568 5.08283C9.74217 4.96335 11.3132 5.95659 12.1685 8.06256C12.697 10.0348 12.1801 11.6665 10.6178 12.9578C10.1238 13.3163 9.57652 13.5595 8.97595 13.6876C8.22847 13.7607 7.47843 13.8013 6.72595 13.8092C5.17528 14.0626 4.27325 14.9646 4.01987 16.5153C3.85244 17.4274 4.1869 18.0659 5.02325 18.4308C6.36109 18.4511 7.69893 18.4714 9.03676 18.4916C9.90982 18.687 10.1835 19.2039 9.85771 20.0423C9.72003 20.2207 9.5477 20.3524 9.34082 20.4376C7.82055 20.4781 6.30028 20.4781 4.78001 20.4376C3.18239 20.0561 2.26009 19.0527 2.01312 17.4274C1.87847 15.1624 2.7805 13.4597 4.7192 12.3193C3.494 10.6636 3.36225 8.9203 4.32393 7.08959C5.09051 5.98198 6.13443 5.31306 7.45568 5.08283ZM7.63811 7.08959C9.08894 7.03146 9.99095 7.70038 10.3442 9.09635C10.4094 10.4902 9.77093 11.3719 8.42866 11.7416C7.41123 11.869 6.61053 11.5142 6.02663 10.6774C5.3764 9.31521 5.67032 8.21046 6.90839 7.36324C7.15595 7.26412 7.39919 7.1729 7.63811 7.08959Z"
              fill="#FED3B0"
            />
            <path
              opacity="0.976"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23.3253 5.08284C25.2024 4.94211 26.6517 5.65157 27.6732 7.21122C28.5698 9.01104 28.4177 10.7137 27.2171 12.3193C29.3801 13.6256 30.2416 15.531 29.8016 18.0355C29.3826 19.3465 28.5008 20.1472 27.1563 20.4376C25.6361 20.4781 24.1158 20.4781 22.5955 20.4376C22.0006 20.153 21.808 19.6969 22.0178 19.0693C22.1985 18.7066 22.4924 18.5141 22.8996 18.4916C24.2374 18.4714 25.5753 18.4511 26.9131 18.4308C27.7494 18.0659 28.0839 17.4274 27.9165 16.5153C27.7809 15.6307 27.3653 14.9111 26.6699 14.3565C26.3349 14.1282 25.97 13.9661 25.5753 13.87C24.8278 13.7968 24.0777 13.7563 23.3253 13.7484C21.1999 13.3459 19.9532 12.0791 19.5854 9.9477C19.4605 7.77372 20.3828 6.24329 22.3523 5.35649C22.681 5.25282 23.0053 5.16161 23.3253 5.08284ZM23.5077 7.0896C25.3712 7.09835 26.2732 8.03076 26.2138 9.88689C25.8074 11.2253 24.9054 11.8436 23.5077 11.7416C22.1654 11.372 21.5269 10.4902 21.5921 9.09635C21.8089 8.01824 22.4474 7.34932 23.5077 7.0896Z"
              fill="#FED3B0"
            />
            <path
              opacity="0.983"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.545 9.82608C17.5724 9.75973 19.0623 10.6111 20.0146 12.3801C20.7825 14.307 20.4683 16.0299 19.072 17.549C21.4369 19.1175 22.4605 21.327 22.143 24.1774C21.9157 25.8034 21.0137 26.8473 19.4369 27.3092C18.2837 27.3777 17.1283 27.4081 15.9707 27.4004C14.8131 27.4081 13.6577 27.3777 12.5045 27.3092C11.1094 26.9073 10.2276 26.0053 9.8592 24.6031C9.4193 22.1132 10.0983 19.995 11.8964 18.2484C12.2122 18.0035 12.5365 17.7704 12.8693 17.549C11.5109 16.0775 11.1764 14.3952 11.866 12.5018C12.6246 10.9624 13.8509 10.0705 15.545 9.82608ZM15.6666 11.8328C17.578 11.9098 18.4801 12.903 18.3727 14.8126C17.9503 16.1667 17.028 16.8052 15.6058 16.7281C14.1191 16.3359 13.4401 15.3731 13.5687 13.8396C13.8464 12.7204 14.5457 12.0515 15.6666 11.8328ZM15.4842 18.7653C17.7493 18.7111 19.2595 19.7449 20.0146 21.8666C20.1856 22.6745 20.2059 23.4853 20.0754 24.299C19.8711 24.8684 19.4758 25.2231 18.8896 25.3632C16.9437 25.4038 14.9977 25.4038 13.0518 25.3632C12.3675 25.1857 11.952 24.7499 11.8051 24.0558C11.5374 22.2429 12.0949 20.753 13.4774 19.5862C14.0914 19.1624 14.7603 18.8887 15.4842 18.7653Z"
              fill="#FFF1E6"
            />
          </svg>
          <div className="com-detail-user">
            <div className="com-detail-user-name">
              <div className="body-p6">{community}</div>
              <h6 className="grey-402">·</h6>
              <div className="body-p8">{numOfMem} Members</div>
            </div>
            <div className="body-p8 grey-40">{description}</div>
          </div>
        </div>
        {/* <ButtonNormal buttonText={"Join"} isSecondary={false} isGhost={false} onClick={function (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
                  throw new Error("Function not implemented.");
              } }/> */}
      </div>
    </>
  );
}

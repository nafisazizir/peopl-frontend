import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateUsernameStyle.css";
import Label from "../../../components/Label/Label";
import ButtonLarge from "../../../components/Button/Large/ButtonLarge";
import ButtonNormal from "../../../components/Button/Normal/ButtonNormal";
import UserDataService, { User, UserDetails } from "../../../services/user";

type Props = {};

export default function CreateUsername({}: Props) {
  const navigate = useNavigate();
  const [usernames, setUsernames] = useState<string[]>();
  const [username, setUsername] = useState("");

  const handleUsername = (event: ChangeEvent<HTMLInputElement>) => {
    const newUsername = event.target.value;
    setUsername(newUsername);

  };
  const iconBack = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17 10C17 10.4142 16.6642 10.75 16.25 10.75L5.61208 10.75L9.76983 14.7094C10.0684 14.9965 10.0777 15.4713 9.79062 15.7698C9.50353 16.0684 9.02875 16.0777 8.73017 15.7906L3.23017 10.5406C3.08311 10.3992 3 10.204 3 10C3 9.79599 3.08311 9.60078 3.23017 9.45938L8.73017 4.20938C9.02875 3.92228 9.50353 3.93159 9.79062 4.23017C10.0777 4.52875 10.0684 5.00353 9.76983 5.29063L5.61208 9.25L16.25 9.25C16.6642 9.25 17 9.58579 17 10Z"
        fill="#FC7201"
      />
    </svg>
  );
  const iconDice = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="28"
      viewBox="0 0 29 28"
      fill="none"
    >
      <path
        opacity="0.963"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.2928 1.72269C15.8106 1.69474 16.321 1.74031 16.824 1.85941C19.5037 2.82556 22.1834 3.7917 24.8631 4.75784C26.3433 5.57652 26.9357 6.82525 26.6404 8.50394C25.6596 11.3007 24.657 14.0898 23.6326 16.8711C22.7481 18.3453 21.4629 18.8831 19.7772 18.4844C19.3789 18.39 19.0234 18.2169 18.7107 17.9649C18.3577 17.1738 18.6038 16.6816 19.449 16.4883C19.7818 16.5719 20.1099 16.6721 20.4334 16.7891C21.0684 16.8876 21.5698 16.678 21.9373 16.1602C22.925 13.5253 23.8911 10.8821 24.8357 8.2305C25.0702 7.3415 24.7695 6.71259 23.9334 6.34378C21.3449 5.41409 18.7563 4.48441 16.1678 3.55472C15.3967 3.42527 14.8407 3.70782 14.4998 4.40238C13.8833 6.14259 13.2453 7.87432 12.5857 9.59769C12.2509 9.9321 11.8591 10.0141 11.41 9.84378C11.0272 9.58954 10.8905 9.23407 10.9998 8.77738C11.6495 6.9011 12.3422 5.04172 13.0779 3.19925C13.6204 2.4102 14.3587 1.91802 15.2928 1.72269Z"
        fill="#FC7201"
      />
      <path
        opacity="0.946"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.3869 5.22266C17.3614 5.27646 17.7898 5.78687 17.6721 6.75391C17.4942 7.31462 17.1114 7.60632 16.5236 7.62891C15.6225 7.51116 15.2397 7.00077 15.3752 6.09766C15.5382 5.59705 15.8754 5.30538 16.3869 5.22266Z"
        fill="#FC7201"
      />
      <path
        opacity="0.951"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.918 8.99604C19.0381 8.90389 19.5394 9.41429 19.4219 10.5273C19.1538 11.1675 18.6708 11.4318 17.9727 11.3203C17.2726 11.0597 16.99 10.5584 17.125 9.81636C17.2046 9.62976 17.3048 9.45657 17.4258 9.29682C17.5769 9.167 17.741 9.0667 17.918 8.99604Z"
        fill="#FC7201"
      />
      <path
        opacity="0.968"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.90235 11.6211C7.98311 11.612 11.0639 11.6211 14.1445 11.6484C15.612 11.9492 16.4961 12.8334 16.7969 14.3008C16.8334 17.3815 16.8334 20.4623 16.7969 23.543C16.4899 25.0349 15.5876 25.919 14.0898 26.1953C11.0456 26.2318 8.00132 26.2318 4.95703 26.1953C3.4349 25.9128 2.53256 25.0104 2.25 23.4883C2.21354 20.4258 2.21354 17.3633 2.25 14.3008C2.56113 12.8322 3.44525 11.9389 4.90235 11.6211ZM5.06641 13.4258C8.0378 13.4167 11.0092 13.4258 13.9805 13.4531C14.5 13.6081 14.8373 13.9453 14.9922 14.4649C15.0287 17.418 15.0287 20.3711 14.9922 23.3242C14.856 23.898 14.5005 24.2534 13.9258 24.3906C10.9909 24.4271 8.05601 24.4271 5.1211 24.3906C4.58334 24.2174 4.22787 23.862 4.05469 23.3242C4.01823 20.3893 4.01823 17.4545 4.05469 14.5195C4.19615 13.9681 4.53339 13.6035 5.06641 13.4258Z"
        fill="#FC7201"
      />
      <path
        opacity="0.95"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.7226 12.7149C20.8134 12.656 21.2965 13.1665 21.1718 14.2461C20.9028 14.9322 20.4015 15.1966 19.6679 15.0391C19.0277 14.771 18.7634 14.288 18.8749 13.5899C19.0217 13.1606 19.3043 12.8689 19.7226 12.7149Z"
        fill="#FC7201"
      />
      <path
        opacity="0.946"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.43359 14.793C7.40665 14.8089 7.85328 15.3011 7.77344 16.2695C7.55802 16.9473 7.09318 17.2481 6.37891 17.1719C5.78387 17.0051 5.45574 16.6132 5.39453 15.9961C5.47324 15.353 5.81959 14.9519 6.43359 14.793Z"
        fill="#FC7201"
      />
      <path
        opacity="0.943"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.285 14.793C13.3188 14.8694 13.7472 15.4162 13.5702 16.4336C13.2414 17.0855 12.7218 17.3134 12.0116 17.1172C11.3594 16.7878 11.1315 16.2682 11.328 15.5586C11.5208 15.1394 11.8398 14.8842 12.285 14.793Z"
        fill="#FC7201"
      />
      <path
        opacity="0.951"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.168 17.746C10.2881 17.6539 10.7894 18.1643 10.6719 19.2773C10.4038 19.9175 9.92077 20.1818 9.22269 20.0703C8.52258 19.8097 8.24001 19.3084 8.37503 18.5664C8.4546 18.3798 8.55484 18.2066 8.67581 18.0468C8.82691 17.917 8.99097 17.8167 9.168 17.746Z"
        fill="#FC7201"
      />
      <path
        opacity="0.946"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.32439 20.6446C7.35317 20.607 7.83628 21.0991 7.7736 22.1211C7.58931 22.6695 7.2065 22.9794 6.62517 23.0508C5.62126 22.8658 5.25668 22.2825 5.53142 21.3008C5.7173 20.985 5.9816 20.7662 6.32439 20.6446Z"
        fill="#FC7201"
      />
      <path
        opacity="0.945"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.1758 20.6445C13.0274 20.5953 13.5196 20.9872 13.6524 21.8203C13.5756 22.5443 13.1745 22.9544 12.4493 23.0507C11.419 22.8498 11.0635 22.2482 11.3829 21.2461C11.577 20.9448 11.8414 20.7444 12.1758 20.6445Z"
        fill="#FC7201"
      />
    </svg>
  );

  
  const handleRandomize = async (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    try {
      const response = await UserDataService.getUsernameRecommendation();
      console.log(response.data);
      setUsernames(response.data);

      
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };

  const handleSetUsername =async (event:React.MouseEvent<HTMLDivElement>) => {
    try {
      console.log("berhasil set");
      const response = await UserDataService.setNewUsername(username);
      console.log(response.data);
     
    }catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };

  return (
    <>
      <div className="logo-app">Peopl.</div>
      <div className="auth-page">
        <div className="username-container">
          <div className="navigation">
            <ButtonNormal
              iconLeft={iconBack}
              buttonText={"Back to Register"}
              onClick={() => {
                navigate("/register");
              }}
              isSecondary={false}
              isGhost={true}
            ></ButtonNormal>
          </div>
          <div className="create-user-header">
            <h3>Create your Username</h3>
            <div className="body-p7 text-center">
              Your username is what you’ll go by here. Create wisely—because
              once you get a name, you can’t change it.
            </div>
          </div>
          <div className="username-form">
            <div className="stretch">
              <Label
                labelText={"Username"}
                isRequired={true}
                placeholderText={"Ex: PokemonAir-Bulbasour11"}
                value={username}
                onChange={handleUsername}
              />
            </div>

            <ButtonLarge
              iconLeft={iconDice}
              buttonText={"Randomize"}
              onClick={handleRandomize}
              isSecondary={true}
              isGhost={false}
            ></ButtonLarge>
          </div>
          <div className="recommendation-container">
            <div className="body-p7">Here are some username suggestions</div>
            {usernames ? usernames.map((username) => 
                <ButtonNormal
                  buttonText={username}
                  isSecondary={false}
                  isGhost={true}
                  onClick={() => {setUsername(username), navigate("/home")}}
                />
              ): ""}
              
          </div>
          <ButtonLarge
            buttonText={"Continue"}
            onClick={handleSetUsername}
            isSecondary={false}
            isGhost={false}
          ></ButtonLarge>
        </div>
      </div>
    </>
  );
}

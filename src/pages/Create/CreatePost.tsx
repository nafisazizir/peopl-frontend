import React, { ChangeEvent, useState, useEffect } from "react";
import ButtonNormal from "../../components/Button/Normal/ButtonNormal";
import { useNavigate } from "react-router-dom";
import "./CreatePostStyle.css";
import ButtonLarge from "../../components/Button/Large/ButtonLarge";
import Label from "../../components/Label/Label";
import NavigationBar from "../../components/Navigation/NavigationBar";
import CommunityDataService from "../../services/communitites";
import DropdownCommunity from "../../components/DropdownCommunity/DropdownCommunity";
import PostDataService from "../../services/post";
import { AxiosError } from "axios";

type Props = {};

export default function CreatePost({}: Props) {
  document.body.style.backgroundColor = "var(--neutral-10)";
  document.body.style.margin = "0px 0px 0px 0px";
  const navigate = useNavigate();

  const [selectedCommunity, setSelectedCommunity] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [communities, setCommunities] = useState<string[]>([]);
  const [message, setMessage] = useState("Please fill in all the input");

  const handleTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
  };

  const handleDescription = (event: ChangeEvent<HTMLInputElement>) => {
    const newDescription = event.target.value;
    setDescription(newDescription);
  };

  const handleSelectedCommunity = (event: ChangeEvent<HTMLInputElement>) => {
    const newSelectedCommunity = event.target.value;
    setSelectedCommunity(newSelectedCommunity);
  };

  const iconDropdown = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.18414 5.82668C4.423 5.597 4.80282 5.60445 5.0325 5.84332L8 8.99352L10.9675 5.84332C11.1972 5.60445 11.577 5.597 11.8159 5.82668C12.0547 6.05636 12.0622 6.43618 11.8325 6.67505L8.4325 10.275C8.31938 10.3927 8.16321 10.4592 8 10.4592C7.83679 10.4592 7.68062 10.3927 7.5675 10.275L4.1675 6.67505C3.93782 6.43618 3.94527 6.05636 4.18414 5.82668Z"
        fill="#1D242D"
      />
    </svg>
  );
  const iconTooltip = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M21 12.0591C21 17.0296 16.9706 21.0591 12 21.0591C7.02944 21.0591 3 17.0296 3 12.0591C3 7.08852 7.02944 3.05908 12 3.05908C16.9706 3.05908 21 7.08852 21 12.0591Z"
        fill="#FFEAD9"
      />
      <path d="M12 8.30908H12.0075V8.31658H12V8.30908Z" fill="#FFEAD9" />
      <path
        d="M11.25 11.3091L11.2915 11.2883C11.8646 11.0018 12.5099 11.5194 12.3545 12.1411L11.6455 14.9771C11.4901 15.5987 12.1354 16.1164 12.7085 15.8298L12.75 15.8091M21 12.0591C21 17.0296 16.9706 21.0591 12 21.0591C7.02944 21.0591 3 17.0296 3 12.0591C3 7.08852 7.02944 3.05908 12 3.05908C16.9706 3.05908 21 7.08852 21 12.0591ZM12 8.30908H12.0075V8.31658H12V8.30908Z"
        stroke="#FC7201"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
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

  useEffect(() => {
    const fetchJoinedCommunities = async () => {
      try {
        const response = await CommunityDataService.getJoinedCommunities();
        setCommunities(response.data);
      } catch (error) {
        console.error("Failed to fetch communities:", error);
      }
    };

    fetchJoinedCommunities();
  }, []);

  const options = communities.map((community) => {
    return { value: community, label: community };
  });

  const handlePost = async () => {
    if (selectedCommunity === "" || title === "" || description === "") {
      setMessage("Please fill in all required fields!");
    } else {
      try {
        const response = await PostDataService.createPost(
          title,
          description,
          selectedCommunity
        );
        navigate("/home");
      } catch (error) {
        if (error instanceof AxiosError && error.response?.data?.message) {
          setMessage(error.response.data.message);
        } else {
          console.log("An unknown error occurred.");
        }
      }
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="home-layout">
        <div className="tab-navigator">
          <ButtonNormal
            iconLeft={iconBack}
            buttonText={"Back to Previous Page"}
            isSecondary={false}
            isGhost={true}
            onClick={() => {
              navigate(-1);
            }}
          />
        </div>
        <div className="create-container">
          <div className="create-container-detail">
            <div className="create-header">
              <h4>Create a Post</h4>
              <ButtonLarge
                buttonText={""}
                iconLeft={iconTooltip}
                isSecondary={false}
                isGhost={true}
                onClick={function (
                  event: React.MouseEvent<HTMLDivElement, MouseEvent>
                ): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </div>
            <DropdownCommunity
              labelText={"Choose Your Audience"}
              isRequired={true}
              options={communities}
              value={selectedCommunity}
              onChange={handleSelectedCommunity}
            />
            <Label
              labelText={"Title"}
              isRequired={true}
              placeholderText={"Input"}
              value={title}
              onChange={handleTitle}
            />
            <Label
              labelText={"Description"}
              isRequired={true}
              placeholderText={"Textarea"}
              value={description}
              onChange={handleDescription}
            />

            <div className="create-footer-info">
              <div className="body-p7">{message}</div>
              <div className="create-footer">
                <ButtonLarge
                  buttonText={"Discard"}
                  isSecondary={true}
                  isGhost={false}
                  onClick={() => {
                    navigate(-1);
                  }}
                />
                <ButtonLarge
                  buttonText={"Create Post"}
                  isSecondary={false}
                  isGhost={false}
                  onClick={handlePost}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

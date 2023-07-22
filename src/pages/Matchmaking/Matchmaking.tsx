import { ChangeEvent, useEffect, useState } from "react";
import "./MatchmakingStyle.css";
import NavigationBar from "../../components/Navigation/NavigationBar";
import ScrollButton from "../../components/Button/ScrollButton/ScrollButton";
import PeopleMutualsCard from "../../components/PeopleCard/PeopleMutualsCard";
import { useNavigate } from "react-router-dom";
import CommunityDataService from "../../services/communitites";
import DropdownCommunityMatchmaking from "../../components/DropdownCommunity/DropdownCommunityMatchmaking";
import MatchmakingDataService, {
  Matchmaking as MatchmakingInterface,
} from "../../services/matchmaking";

const Matchmaking = () => {
  document.body.style.backgroundColor = "var(--neutral-10)";
  document.body.style.margin = "0px 0px 0px 0px";
  const navigate = useNavigate();

  const [communities, setCommunities] = useState<string[]>([]);
  const [selectedCommunity, setSelectedCommunity] = useState("");
  const handleSelectedCommunity = (event: ChangeEvent<HTMLInputElement>) => {
    const newSelectedCommunity = event.target.value;
    setSelectedCommunity(newSelectedCommunity);
  };
  const [matchUsers, setMatchusers] = useState<MatchmakingInterface[]>([]);

  const fetchMatchmaking = async () => {
    try {
      const response = await MatchmakingDataService.getMatchUsers({
        community: selectedCommunity,
      });
      setMatchusers(response.data);
    } catch (error) {
      console.error("Failed to fetch match users:", error);
    }
  };

  const fetchJoinedCommunities = async () => {
    try {
      const response = await CommunityDataService.getJoinedCommunities();
      setCommunities(response.data);
    } catch (error) {
      console.error("Failed to fetch communities:", error);
    }
  };

  useEffect(() => {
    fetchJoinedCommunities();
    fetchMatchmaking();
  }, []);

  useEffect(() => {
    fetchMatchmaking();
  }, [selectedCommunity]);

  const options = communities.map((community) => {
    return { value: community, label: community };
  });
  return (
    <>
      <NavigationBar />
      <div className="matchmaking-layout">
        <div
          className="back"
          onClick={() => {
            navigate(-1);
          }}
        >
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.7906 5.28937C13.0777 5.58795 13.0684 6.06273 12.7698 6.34983L8.83208 10.0592L12.7698 13.7686C13.0684 14.0557 13.0777 14.5305 12.7906 14.829C12.5035 15.1276 12.0287 15.1369 11.7302 14.8498L7.23017 10.5998C7.08311 10.4584 7 10.2632 7 10.0592C7 9.85519 7.08311 9.65998 7.23017 9.51858L11.7302 5.26858C12.0287 4.98149 12.5035 4.99079 12.7906 5.28937Z"
              fill="#FC7201"
            />
          </svg>
          <div className="back-text">Back to Previous Page</div>
        </div>
        <div className="matchmaking-head-container">
          <h3>Matchmaking</h3>
          <svg
            width="196"
            height="197"
            viewBox="0 0 196 197"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_157_41926)">
              <path
                opacity="0.998"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M77.9032 -0.132202C80.0726 -0.132202 82.2416 -0.132202 84.411 -0.132202C85.2942 0.433362 85.9959 1.19899 86.5165 2.16467C86.7079 16.711 86.7718 31.2578 86.7079 45.8053C86.7079 47.7194 86.7079 49.6334 86.7079 51.5475C86.7079 55.7584 86.7079 59.9694 86.7079 64.1803C86.7079 64.3078 86.7079 64.4356 86.7079 64.5631C86.327 59.6543 86.1992 54.6777 86.3251 49.6334C69.4408 55.7994 55.8509 51.5884 45.5556 37.0006C41.6279 29.64 40.4795 21.8561 42.1103 13.649C43.302 9.73858 44.8971 6.03808 46.8954 2.54749C57.3033 1.83983 67.6393 0.946594 77.9032 -0.132202Z"
                fill="#AA876A"
              />
              <path
                opacity="0.995"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M46.8965 2.54749C44.8982 6.03808 43.303 9.73858 42.1113 13.649C40.4805 21.8561 41.629 29.64 45.5566 37.0006C55.852 51.5884 69.4418 55.7994 86.3262 49.6334C86.2002 54.6777 86.3281 59.6543 86.709 64.5631C86.709 66.7325 86.709 68.9015 86.709 71.0709C86.709 79.3653 86.709 87.6593 86.709 95.9537C86.709 107.183 86.709 118.412 86.709 129.641C86.709 137.297 86.709 144.954 86.709 152.61C86.709 154.141 86.709 155.672 86.709 157.204C86.7729 169.327 86.709 181.449 86.5176 193.571C85.997 194.537 85.2953 195.302 84.4121 195.868C82.2427 195.868 80.0737 195.868 77.9043 195.868C52.4488 193.555 26.928 191.322 1.3418 189.169C0.633506 188.904 0.123088 188.458 -0.189453 187.829C-0.189453 127.855 -0.189453 67.881 -0.189453 7.90686C0.123088 7.27767 0.633506 6.83104 1.3418 6.56702C16.5389 5.24746 31.7238 3.90762 46.8965 2.54749Z"
                fill="#A27B5A"
              />
              <path
                opacity="0.981"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M131.879 34.7038C128.431 34.7805 124.986 34.9081 121.543 35.0866C121.742 30.0586 119.445 26.8046 114.652 25.3249C107.52 24.9283 104.011 28.3098 104.125 35.4694C104.537 36.5173 104.984 37.5381 105.465 38.5319C103.711 39.1651 101.924 39.8032 100.105 40.446C96.1188 30.2089 98.5431 21.9146 107.379 15.5632C116.117 13.6052 123.199 16.1573 128.625 23.2194C130.681 26.7722 131.766 30.6003 131.879 34.7038Z"
                fill="#AE62FE"
              />
              <path
                opacity="0.981"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M107.381 15.5631C98.5452 21.9146 96.1209 30.2089 100.107 40.4459C98.6019 41.0328 97.0706 41.5434 95.5137 41.9772C92.2292 33.2734 93.8879 25.6809 100.49 19.1998C102.628 17.6844 104.925 16.4722 107.381 15.5631Z"
                fill="#8B4ECB"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M121.544 35.0866C116.142 35.9899 110.783 37.1384 105.466 38.5319C104.984 37.5381 104.538 36.5172 104.126 35.4694C104.012 28.3097 107.521 24.9282 114.653 25.3248C119.446 26.8046 121.743 30.0585 121.544 35.0866Z"
                fill="#F0C650"
              />
              <path
                opacity="0.997"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M133.791 34.7037C145.706 34.4622 156.042 38.2903 164.799 46.1881C170.315 51.9888 173.696 58.8795 174.943 66.86C175.659 70.7846 175.978 74.7402 175.9 78.7271C175.746 82.1847 175.491 85.63 175.135 89.0631C174.443 94.4933 173.422 99.8527 172.072 105.141C170.627 108.327 169.479 111.644 168.627 115.094C163.873 126.779 157.11 137.115 148.338 146.102C146.041 147.633 143.744 149.165 141.447 150.696C123.328 132.321 105.08 114.073 86.7051 95.9537C86.7051 87.6593 86.7051 79.3653 86.7051 71.0709C88.8094 73.1109 90.9788 75.0889 93.2129 77.0045C97.0383 77.4662 98.2507 75.871 96.8496 72.2193C94.4888 69.8585 92.1284 67.4981 89.7676 65.1373C88.8454 64.4838 87.8248 64.165 86.7051 64.1803C86.7051 59.9693 86.7051 55.7584 86.7051 51.5475C101.095 42.2849 116.79 36.6702 133.791 34.7037Z"
                fill="#FC7201"
              />
              <path
                opacity="0.994"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M131.877 34.7037C132.515 34.7037 133.153 34.7037 133.791 34.7037C116.79 36.6702 101.095 42.285 86.7051 51.5475C86.7051 49.6334 86.7051 47.7194 86.7051 45.8053C89.6864 44.6335 92.6214 43.3576 95.5098 41.9772C97.0667 41.5434 98.5979 41.0328 100.104 40.4459C101.923 39.8032 103.709 39.165 105.463 38.5319C110.78 37.1383 116.14 35.9899 121.541 35.0865C124.984 34.9081 128.429 34.7805 131.877 34.7037Z"
                fill="#E36701"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M99.722 57.6725C103.573 57.3724 104.913 59.0311 103.742 62.6491C102.091 65.1243 100.113 65.5071 97.808 63.7975C97.0669 62.7608 96.8754 61.6124 97.2338 60.3522C98.1418 59.5088 98.9713 58.6154 99.722 57.6725Z"
                fill="#39424B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M86.7051 64.1803C87.8248 64.165 88.8454 64.4838 89.7676 65.1373C92.1284 67.4981 94.4888 69.8585 96.8496 72.2193C98.2507 75.871 97.0383 77.4662 93.2129 77.0045C90.9788 75.0889 88.8094 73.1109 86.7051 71.0709C86.7051 68.9015 86.7051 66.7325 86.7051 64.5631C86.7051 64.4356 86.7051 64.3078 86.7051 64.1803Z"
                fill="#EEB0B6"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M113.122 76.8131C117.612 76.8644 118.697 78.7785 116.376 82.5553C115.738 85.3613 116.822 86.5737 119.629 86.192C121.426 84.495 123.277 84.4311 125.18 86.0006C125.534 86.5878 125.725 87.226 125.754 87.9147C125.4 89.2771 124.89 90.5534 124.223 91.7428C124.429 94.1786 125.705 95.0078 128.051 94.2311C129.706 92.5191 131.429 92.4556 133.219 94.0397C134.117 95.7298 133.926 97.261 132.645 98.6334C127.783 102.097 123.381 101.586 119.438 97.1022C118.711 95.6846 118.136 94.2169 117.715 92.6998C111.866 91.404 109.25 87.7673 109.868 81.7897C110.45 79.7516 111.535 78.0929 113.122 76.8131Z"
                fill="#39414A"
              />
              <path
                opacity="0.969"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M175.9 78.7272C186.894 79.2616 193.53 84.8763 195.807 95.5709C195.807 96.9747 195.807 98.3781 195.807 99.7819C193.213 111.615 185.813 117.166 173.604 116.434C171.921 116.046 170.262 115.599 168.627 115.094C169.479 111.644 170.627 108.327 172.072 105.141C174.77 106.453 177.577 106.644 180.494 105.715C185.504 102.549 186.717 98.274 184.131 92.8912C181.819 90.0148 178.82 88.7389 175.135 89.0631C175.491 85.63 175.747 82.1847 175.9 78.7272Z"
                fill="#AE62FE"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M175.139 89.0631C178.824 88.7389 181.823 90.0148 184.135 92.8912C186.721 98.274 185.508 102.549 180.498 105.715C177.581 106.644 174.773 106.453 172.076 105.141C173.426 99.8527 174.447 94.4933 175.139 89.0631Z"
                fill="#F0C650"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M69.4786 94.4225C70.129 94.3612 70.7671 94.4248 71.3927 94.6139C69.0671 97.1783 68.8757 99.922 70.8184 102.844C72.9859 104.756 75.4742 105.266 78.2833 104.376C77.6911 106.497 76.4152 108.028 74.4552 108.969C66.8043 110.373 63.2311 107.183 63.7364 99.399C64.8202 96.784 66.7342 95.1253 69.4786 94.4225Z"
                fill="#F1C64F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M69.4824 94.4225C75.0099 93.7487 78.2002 96.237 79.0527 101.887C79.1155 102.861 78.8602 103.69 78.2871 104.376C75.478 105.266 72.9898 104.756 70.8223 102.844C68.8795 99.922 69.0709 97.1784 71.3965 94.6139C70.771 94.4248 70.1328 94.3612 69.4824 94.4225Z"
                fill="#F6DA92"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M86.7051 95.9537C105.08 114.073 123.328 132.321 141.447 150.696C138.245 152.935 134.927 154.976 131.494 156.821C126.882 158.516 122.16 159.792 117.33 160.649C107.396 150.077 97.188 139.741 86.7051 129.641C86.7051 118.412 86.7051 107.183 86.7051 95.9537Z"
                fill="#C594F8"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M63.7353 99.399C63.23 107.183 66.8032 110.373 74.4541 108.969C74.737 108.919 74.9923 108.983 75.2197 109.161C72.3222 113.352 68.6215 114.245 64.1181 111.84C59.6989 107.763 59.5711 103.615 63.7353 99.399Z"
                fill="#846448"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M148.338 106.29C152.189 105.99 153.529 107.648 152.357 111.266C149.432 114.634 147.199 114.315 145.658 110.309C145.722 109.862 145.786 109.416 145.85 108.969C146.758 108.126 147.587 107.233 148.338 106.29Z"
                fill="#39424B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M135.323 112.797C136.443 112.782 137.464 113.101 138.386 113.754C140.747 116.115 143.107 118.476 145.468 120.837C146.872 123.732 146.043 125.518 142.98 126.196C142.304 125.97 141.666 125.651 141.066 125.239C138.577 122.751 136.089 120.262 133.601 117.774C133.122 116.788 132.994 115.767 133.218 114.712C133.88 113.983 134.582 113.345 135.323 112.797Z"
                fill="#EDB0B6"
              />
              <path
                opacity="0.97"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M131.498 156.821C134.931 154.976 138.249 152.935 141.451 150.696C143.748 149.165 146.045 147.633 148.342 146.102C155.648 147.091 161.836 144.922 166.908 139.594C169.762 135.738 172.378 131.718 174.756 127.536C179.138 124.883 183.157 125.33 186.814 128.876C188.756 131.801 189.011 134.864 187.58 138.063C177.926 158.554 162.039 166.274 139.92 161.223C136.933 160.05 134.126 158.582 131.498 156.821Z"
                fill="#F2C74F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M86.7051 129.641C97.188 139.741 107.396 150.077 117.33 160.649C116.564 160.649 115.799 160.649 115.033 160.649C104.873 160.452 95.4298 157.772 86.7051 152.61C86.7051 144.954 86.7051 137.297 86.7051 129.641Z"
                fill="#AE62FE"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M86.7051 152.61C95.4298 157.772 104.873 160.452 115.033 160.649C105.365 161.803 95.9217 160.654 86.7051 157.204C86.7051 155.672 86.7051 154.141 86.7051 152.61Z"
                fill="#8B4ECB"
              />
            </g>
            <defs>
              <clipPath id="clip0_157_41926">
                <rect
                  width="196"
                  height="196"
                  fill="white"
                  transform="translate(0 0.0592041)"
                />
              </clipPath>
            </defs>
          </svg>
          <div className="matchmaking-head-text-container">
            <div className="body-p6">
              Find friends who share your interests, Start matching now!
            </div>
          </div>
          <div className="matchmaking-head-text-container-2">
            <div className="matchmaking-head-text-style">
              Discover Deeper Connections with Our Friendship Filters
            </div>
            <div className="matchmaking-input">
              <DropdownCommunityMatchmaking
                options={communities}
                value={selectedCommunity}
                onChange={handleSelectedCommunity}
              />
            </div>
          </div>
        </div>
        <div className="mutuals-container">
          {matchUsers.map((user) => (
            <PeopleMutualsCard
              user={user.username}
              numOfMutuals={user.mutualCommunities}
              callToAction={user.callToAction}
            />
          ))}
        </div>
        <ScrollButton buttonText={"Back to Top"} />
      </div>
    </>
  );
};

export default Matchmaking;

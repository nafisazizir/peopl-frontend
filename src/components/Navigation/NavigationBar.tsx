import "./NavigationBarStyle.css";
import NotifButton from "../Button/NotificationButton/NotifButton";
import { NavLink, useNavigate } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-layout">
        <NavLink to="/home">
          <div className="logo-app">Peopl.</div>
        </NavLink>
        <div className="nav-item">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5596 15.9692C13.2537 16.1713 13.9877 16.2796 14.747 16.2796C15.9793 16.2796 17.145 15.9943 18.1816 15.4861C18.1835 15.4384 18.1845 15.3903 18.1845 15.3421C18.1845 13.4436 16.6455 11.9046 14.747 11.9046C13.5653 11.9046 12.5229 12.5009 11.9042 13.4089M12.5596 15.9692V15.9671C12.5596 15.0397 12.3219 14.1678 11.9042 13.4089M12.5596 15.9692C12.5596 15.9989 12.5593 16.0286 12.5588 16.0582C11.0074 16.9923 9.18997 17.5296 7.24707 17.5296C5.30418 17.5296 3.48677 16.9923 1.93534 16.0582C1.93483 16.0279 1.93457 15.9975 1.93457 15.9671C1.93457 13.0331 4.31306 10.6546 7.24707 10.6546C9.25367 10.6546 11.0004 11.7671 11.9042 13.4089M10.0596 5.3421C10.0596 6.8954 8.80037 8.1546 7.24707 8.1546C5.69377 8.1546 4.43457 6.8954 4.43457 5.3421C4.43457 3.7888 5.69377 2.5296 7.24707 2.5296C8.80037 2.5296 10.0596 3.7888 10.0596 5.3421ZM16.9346 7.2171C16.9346 8.42522 15.9552 9.4046 14.7471 9.4046C13.5389 9.4046 12.5596 8.42522 12.5596 7.2171C12.5596 6.00898 13.5389 5.0296 14.7471 5.0296C15.9552 5.0296 16.9346 6.00898 16.9346 7.2171Z"
              stroke="#0F172A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="nav-item">Matchmaking</div>
        </div>
        <div className="searchbar">
          <div className="searchbar-input">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.86 4.22963C7.21488 4.22963 4.25996 7.18455 4.25996 10.8296C4.25996 14.4747 7.21488 17.4296 10.86 17.4296C12.6827 17.4296 14.3315 16.6919 15.5269 15.4965C16.7222 14.3012 17.46 12.6524 17.46 10.8296C17.46 7.18455 14.505 4.22963 10.86 4.22963ZM2.45996 10.8296C2.45996 6.19043 6.22077 2.42963 10.86 2.42963C15.4992 2.42963 19.26 6.19043 19.26 10.8296C19.26 12.8247 18.5636 14.6583 17.402 16.0989L21.3964 20.0932C21.7478 20.4447 21.7478 21.0146 21.3964 21.366C21.0449 21.7175 20.475 21.7175 20.1236 21.366L16.1292 17.3717C14.6886 18.5333 12.855 19.2296 10.86 19.2296C6.22077 19.2296 2.45996 15.4688 2.45996 10.8296Z"
                fill="#9CAABA"
              />
            </svg>
            Search your favorite topic
          </div>
        </div>
        <svg
          width="1"
          height="47"
          viewBox="0 0 1 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="0.0296021" width="1" height="46" fill="#D9D9D9" />
        </svg>
        <div className="dropdown-modal">
          <div className="nav-item">
            <svg
              className="icon"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.8569 17.1113C16.7514 16.8866 18.5783 16.4412 20.3111 15.8015C18.8743 14.2066 17.9998 12.0952 17.9998 9.7796V9.07879C17.9999 9.06241 18 9.04601 18 9.0296C18 5.71589 15.3137 3.0296 12 3.0296C8.68629 3.0296 6 5.71589 6 9.0296L5.9998 9.7796C5.9998 12.0952 5.12527 14.2066 3.68848 15.8015C5.4214 16.4412 7.24843 16.8866 9.14314 17.1114M14.8569 17.1113C13.92 17.2224 12.9666 17.2796 11.9998 17.2796C11.0332 17.2796 10.0799 17.2225 9.14314 17.1114M14.8569 17.1113C14.9498 17.4007 15 17.7093 15 18.0296C15 19.6865 13.6569 21.0296 12 21.0296C10.3431 21.0296 9 19.6865 9 18.0296C9 17.7093 9.05019 17.4008 9.14314 17.1114"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="notification-modal">
            <div className="notification-modal-content">
              <div className="notification-modal-content-text-head">
                Notifications
              </div>
              <div className="notification-modal-content-item">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_157_56525)">
                    <path
                      opacity="0.993"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.415 -0.0351257C17.4463 -0.0351257 18.4775 -0.0351257 19.5088 -0.0351257C26.5615 0.842522 31.5888 4.49877 34.5908 10.9336C35.3148 12.7046 35.7719 14.5327 35.9619 16.418C35.9619 17.4493 35.9619 18.4805 35.9619 19.5117C35.8969 20.0553 35.8032 20.5944 35.6807 21.1289C32.4429 17.9146 29.2085 14.7036 25.9775 11.4961C24.5816 9.77269 22.8238 8.57738 20.7041 7.91019C19.9738 7.10954 19.2004 6.35952 18.3838 5.66019C18.2666 5.51956 18.1494 5.37894 18.0322 5.23831C17.1961 4.16413 16.2704 4.07037 15.2549 4.95706C15.0501 5.20225 14.9447 5.4835 14.9385 5.80081C13.7747 5.85137 13.2005 6.46074 13.2158 7.62894C13.285 7.96651 13.4373 8.2595 13.6729 8.50784C9.55493 10.7311 7.66816 14.1881 8.0127 18.8789C8.38655 21.573 9.61702 23.7761 11.7041 25.4883C12.0045 25.9061 12.3561 26.2812 12.7588 26.6133C12.0431 29.218 11.3166 31.8195 10.5791 34.418C5.28927 31.9282 1.90256 27.8501 0.418945 22.1836C0.21447 21.2916 0.0621259 20.401 -0.0380859 19.5117C-0.0380859 18.4805 -0.0380859 17.4493 -0.0380859 16.418C0.839562 9.3653 4.49581 4.33794 10.9307 1.33597C12.7016 0.611983 14.5297 0.154951 16.415 -0.0351257Z"
                      fill="#AE62FE"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.035 5.23827C17.9648 9.7967 17.9414 14.367 17.9647 18.9492C16.6989 18.9375 15.4332 18.9492 14.1678 18.9844C13.2633 19.3518 12.9234 20.0198 13.1483 20.9883C13.3007 21.5156 13.6405 21.8554 14.1678 22.0078C15.4332 22.043 16.6989 22.0547 17.9647 22.043C17.9647 23.918 17.9647 25.7929 17.9647 27.668C16.1544 27.6841 14.4669 27.2388 12.9022 26.332C12.494 26.0689 12.0956 25.7877 11.7069 25.4883C9.61981 23.7761 8.38934 21.573 8.01548 18.8789C7.67095 14.1881 9.55772 10.731 13.6756 8.5078C13.4401 8.25946 13.2878 7.96646 13.2186 7.62889C13.2033 6.4607 13.7775 5.85132 14.9413 5.80077C14.9475 5.48346 15.0529 5.20221 15.2577 4.95702C16.2732 4.07033 17.1989 4.16408 18.035 5.23827Z"
                      fill="#FECD00"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.0322 5.23822C18.1494 5.37885 18.2666 5.51947 18.3838 5.6601C18.9784 6.38391 19.5878 7.09876 20.2119 7.80463C20.3694 7.87332 20.5335 7.90848 20.7041 7.91009C22.8238 8.57729 24.5816 9.7726 25.9775 11.496C28.1745 14.5865 28.608 17.9146 27.2783 21.4804C26.4219 23.5103 25.0508 25.0924 23.165 26.2265C23.1122 26.2737 23.0887 26.3322 23.0947 26.4023C22.3863 26.7328 21.6597 27.0257 20.915 27.2812C19.9479 27.5478 18.9635 27.7002 17.9619 27.7382C17.9619 30.4804 17.9619 33.2226 17.9619 35.9648C17.4463 35.9648 16.9306 35.9648 16.415 35.9648C14.3914 35.7693 12.4461 35.2537 10.5791 34.4179C11.3166 31.8194 12.0431 29.2179 12.7588 26.6132C12.8413 26.5419 12.8882 26.4482 12.8994 26.332C14.4641 27.2388 16.1516 27.6841 17.9619 27.6679C17.9619 25.7929 17.9619 23.9179 17.9619 22.0429C19.2277 22.0546 20.4934 22.0429 21.7588 22.0077C22.7125 21.6359 23.0524 20.9445 22.7783 19.9335C22.5978 19.4483 22.2579 19.1319 21.7588 18.9843C20.4934 18.9492 19.2277 18.9374 17.9619 18.9492C17.9386 14.367 17.962 9.79665 18.0322 5.23822Z"
                      fill="#FEA300"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.3848 5.6601C19.2014 6.35943 19.9748 7.10945 20.7051 7.9101C20.5344 7.90848 20.3704 7.87332 20.2129 7.80463C19.5887 7.09876 18.9793 6.38391 18.3848 5.6601Z"
                      fill="#2AAE59"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M25.9794 11.4961C29.2104 14.7036 32.4448 17.9145 35.6826 21.1289C34.6578 26.5441 31.7984 30.6808 27.1044 33.539C26.5362 33.87 25.9503 34.163 25.3466 34.4179C24.6188 31.7409 23.8687 29.069 23.0966 26.4023C23.0906 26.3323 23.1141 26.2737 23.1669 26.2265C25.0527 25.0924 26.4238 23.5104 27.2802 21.4804C28.6099 17.9147 28.1764 14.5865 25.9794 11.4961Z"
                      fill="#9D58E5"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.2146 15.8554C12.4102 15.7731 12.8906 16.3121 12.656 17.4726C12.2418 18.1105 11.6911 18.2629 11.0037 17.9296C10.2942 17.1552 10.3645 16.4638 11.2146 15.8554Z"
                      fill="#3F4E61"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.8698 15.8555C25.0692 15.7768 25.5497 16.3159 25.3112 17.4727C24.9 18.1096 24.3492 18.2619 23.6589 17.9297C23.0977 17.4141 23.0274 16.84 23.448 16.2071C23.5936 16.0886 23.7342 15.9714 23.8698 15.8555Z"
                      fill="#323E4D"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.9627 18.9493C17.9627 19.9805 17.9627 21.0117 17.9627 22.043C16.6968 22.0548 15.4312 22.043 14.1658 22.0079C13.6384 21.8555 13.2986 21.5157 13.1462 20.9883C12.9214 20.0198 13.2613 19.3519 14.1658 18.9844C15.4312 18.9493 16.6968 18.9375 17.9627 18.9493Z"
                      fill="#FD6B15"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.9658 18.9492C19.2317 18.9374 20.4973 18.9492 21.7627 18.9843C22.2618 19.1319 22.6017 19.4483 22.7822 19.9335C23.0563 20.9445 22.7164 21.6359 21.7627 22.0078C20.4973 22.0429 19.2317 22.0547 17.9658 22.0429C17.9658 21.0116 17.9658 19.9804 17.9658 18.9492Z"
                      fill="#F24500"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.7041 25.4883C12.0929 25.7877 12.4913 26.0689 12.8994 26.332C12.8882 26.4483 12.8413 26.542 12.7588 26.6133C12.3561 26.2811 12.0045 25.9061 11.7041 25.4883Z"
                      fill="#37B056"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.0986 26.4023C23.8707 29.069 24.6208 31.7409 25.3486 34.418C23.4816 35.2538 21.5363 35.7694 19.5127 35.9648C18.9971 35.9648 18.4814 35.9648 17.9658 35.9648C17.9658 33.2227 17.9658 30.4805 17.9658 27.7383C18.9674 27.7002 19.9518 27.5479 20.9189 27.2812C21.6636 27.0258 22.3902 26.7329 23.0986 26.4023Z"
                      fill="#FE9500"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_157_56525">
                      <rect width="36" height="36" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className="notification-modal-content-item-text">
                  u/pikachupika replied to your posts in c/pecintapikachu
                </div>
              </div>
              <div className="notification-modal-content-item">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_157_56525)">
                    <path
                      opacity="0.993"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.415 -0.0351257C17.4463 -0.0351257 18.4775 -0.0351257 19.5088 -0.0351257C26.5615 0.842522 31.5888 4.49877 34.5908 10.9336C35.3148 12.7046 35.7719 14.5327 35.9619 16.418C35.9619 17.4493 35.9619 18.4805 35.9619 19.5117C35.8969 20.0553 35.8032 20.5944 35.6807 21.1289C32.4429 17.9146 29.2085 14.7036 25.9775 11.4961C24.5816 9.77269 22.8238 8.57738 20.7041 7.91019C19.9738 7.10954 19.2004 6.35952 18.3838 5.66019C18.2666 5.51956 18.1494 5.37894 18.0322 5.23831C17.1961 4.16413 16.2704 4.07037 15.2549 4.95706C15.0501 5.20225 14.9447 5.4835 14.9385 5.80081C13.7747 5.85137 13.2005 6.46074 13.2158 7.62894C13.285 7.96651 13.4373 8.2595 13.6729 8.50784C9.55493 10.7311 7.66816 14.1881 8.0127 18.8789C8.38655 21.573 9.61702 23.7761 11.7041 25.4883C12.0045 25.9061 12.3561 26.2812 12.7588 26.6133C12.0431 29.218 11.3166 31.8195 10.5791 34.418C5.28927 31.9282 1.90256 27.8501 0.418945 22.1836C0.21447 21.2916 0.0621259 20.401 -0.0380859 19.5117C-0.0380859 18.4805 -0.0380859 17.4493 -0.0380859 16.418C0.839562 9.3653 4.49581 4.33794 10.9307 1.33597C12.7016 0.611983 14.5297 0.154951 16.415 -0.0351257Z"
                      fill="#AE62FE"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.035 5.23827C17.9648 9.7967 17.9414 14.367 17.9647 18.9492C16.6989 18.9375 15.4332 18.9492 14.1678 18.9844C13.2633 19.3518 12.9234 20.0198 13.1483 20.9883C13.3007 21.5156 13.6405 21.8554 14.1678 22.0078C15.4332 22.043 16.6989 22.0547 17.9647 22.043C17.9647 23.918 17.9647 25.7929 17.9647 27.668C16.1544 27.6841 14.4669 27.2388 12.9022 26.332C12.494 26.0689 12.0956 25.7877 11.7069 25.4883C9.61981 23.7761 8.38934 21.573 8.01548 18.8789C7.67095 14.1881 9.55772 10.731 13.6756 8.5078C13.4401 8.25946 13.2878 7.96646 13.2186 7.62889C13.2033 6.4607 13.7775 5.85132 14.9413 5.80077C14.9475 5.48346 15.0529 5.20221 15.2577 4.95702C16.2732 4.07033 17.1989 4.16408 18.035 5.23827Z"
                      fill="#FECD00"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.0322 5.23822C18.1494 5.37885 18.2666 5.51947 18.3838 5.6601C18.9784 6.38391 19.5878 7.09876 20.2119 7.80463C20.3694 7.87332 20.5335 7.90848 20.7041 7.91009C22.8238 8.57729 24.5816 9.7726 25.9775 11.496C28.1745 14.5865 28.608 17.9146 27.2783 21.4804C26.4219 23.5103 25.0508 25.0924 23.165 26.2265C23.1122 26.2737 23.0887 26.3322 23.0947 26.4023C22.3863 26.7328 21.6597 27.0257 20.915 27.2812C19.9479 27.5478 18.9635 27.7002 17.9619 27.7382C17.9619 30.4804 17.9619 33.2226 17.9619 35.9648C17.4463 35.9648 16.9306 35.9648 16.415 35.9648C14.3914 35.7693 12.4461 35.2537 10.5791 34.4179C11.3166 31.8194 12.0431 29.2179 12.7588 26.6132C12.8413 26.5419 12.8882 26.4482 12.8994 26.332C14.4641 27.2388 16.1516 27.6841 17.9619 27.6679C17.9619 25.7929 17.9619 23.9179 17.9619 22.0429C19.2277 22.0546 20.4934 22.0429 21.7588 22.0077C22.7125 21.6359 23.0524 20.9445 22.7783 19.9335C22.5978 19.4483 22.2579 19.1319 21.7588 18.9843C20.4934 18.9492 19.2277 18.9374 17.9619 18.9492C17.9386 14.367 17.962 9.79665 18.0322 5.23822Z"
                      fill="#FEA300"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.3848 5.6601C19.2014 6.35943 19.9748 7.10945 20.7051 7.9101C20.5344 7.90848 20.3704 7.87332 20.2129 7.80463C19.5887 7.09876 18.9793 6.38391 18.3848 5.6601Z"
                      fill="#2AAE59"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M25.9794 11.4961C29.2104 14.7036 32.4448 17.9145 35.6826 21.1289C34.6578 26.5441 31.7984 30.6808 27.1044 33.539C26.5362 33.87 25.9503 34.163 25.3466 34.4179C24.6188 31.7409 23.8687 29.069 23.0966 26.4023C23.0906 26.3323 23.1141 26.2737 23.1669 26.2265C25.0527 25.0924 26.4238 23.5104 27.2802 21.4804C28.6099 17.9147 28.1764 14.5865 25.9794 11.4961Z"
                      fill="#9D58E5"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.2146 15.8554C12.4102 15.7731 12.8906 16.3121 12.656 17.4726C12.2418 18.1105 11.6911 18.2629 11.0037 17.9296C10.2942 17.1552 10.3645 16.4638 11.2146 15.8554Z"
                      fill="#3F4E61"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.8698 15.8555C25.0692 15.7768 25.5497 16.3159 25.3112 17.4727C24.9 18.1096 24.3492 18.2619 23.6589 17.9297C23.0977 17.4141 23.0274 16.84 23.448 16.2071C23.5936 16.0886 23.7342 15.9714 23.8698 15.8555Z"
                      fill="#323E4D"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.9627 18.9493C17.9627 19.9805 17.9627 21.0117 17.9627 22.043C16.6968 22.0548 15.4312 22.043 14.1658 22.0079C13.6384 21.8555 13.2986 21.5157 13.1462 20.9883C12.9214 20.0198 13.2613 19.3519 14.1658 18.9844C15.4312 18.9493 16.6968 18.9375 17.9627 18.9493Z"
                      fill="#FD6B15"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.9658 18.9492C19.2317 18.9374 20.4973 18.9492 21.7627 18.9843C22.2618 19.1319 22.6017 19.4483 22.7822 19.9335C23.0563 20.9445 22.7164 21.6359 21.7627 22.0078C20.4973 22.0429 19.2317 22.0547 17.9658 22.0429C17.9658 21.0116 17.9658 19.9804 17.9658 18.9492Z"
                      fill="#F24500"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.7041 25.4883C12.0929 25.7877 12.4913 26.0689 12.8994 26.332C12.8882 26.4483 12.8413 26.542 12.7588 26.6133C12.3561 26.2811 12.0045 25.9061 11.7041 25.4883Z"
                      fill="#37B056"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.0986 26.4023C23.8707 29.069 24.6208 31.7409 25.3486 34.418C23.4816 35.2538 21.5363 35.7694 19.5127 35.9648C18.9971 35.9648 18.4814 35.9648 17.9658 35.9648C17.9658 33.2227 17.9658 30.4805 17.9658 27.7383C18.9674 27.7002 19.9518 27.5479 20.9189 27.2812C21.6636 27.0258 22.3902 26.7329 23.0986 26.4023Z"
                      fill="#FE9500"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_157_56525">
                      <rect width="36" height="36" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className="notification-modal-content-item-text">
                  u/pikachupika replied to your posts in c/pecintapikachu
                </div>
              </div>
              <div className="modal-button">
                <NotifButton onClick={() => {}} buttonText={"Show More"} />
              </div>
            </div>
          </div>
        </div>
        <div className="nav-item-2">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.625 12.0296C8.625 12.2367 8.45711 12.4046 8.25 12.4046C8.04289 12.4046 7.875 12.2367 7.875 12.0296C7.875 11.8225 8.04289 11.6546 8.25 11.6546C8.45711 11.6546 8.625 11.8225 8.625 12.0296ZM8.625 12.0296H8.25M12.375 12.0296C12.375 12.2367 12.2071 12.4046 12 12.4046C11.7929 12.4046 11.625 12.2367 11.625 12.0296C11.625 11.8225 11.7929 11.6546 12 11.6546C12.2071 11.6546 12.375 11.8225 12.375 12.0296ZM12.375 12.0296H12M16.125 12.0296C16.125 12.2367 15.9571 12.4046 15.75 12.4046C15.5429 12.4046 15.375 12.2367 15.375 12.0296C15.375 11.8225 15.5429 11.6546 15.75 11.6546C15.9571 11.6546 16.125 11.8225 16.125 12.0296ZM16.125 12.0296H15.75M21 12.0296C21 16.586 16.9706 20.2796 12 20.2796C11.1125 20.2796 10.2551 20.1619 9.44517 19.9425C8.47016 20.6275 7.28201 21.0296 6 21.0296C5.80078 21.0296 5.60376 21.0199 5.40967 21.0009C5.25 20.9854 5.0918 20.9635 4.93579 20.9356C5.41932 20.3649 5.76277 19.6723 5.91389 18.9104C6.00454 18.4534 5.7807 18.0095 5.44684 17.6845C3.9297 16.2078 3 14.2182 3 12.0296C3 7.47325 7.02944 3.7796 12 3.7796C16.9706 3.7796 21 7.47325 21 12.0296Z"
              stroke="#1D242D"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="dropdown-profile">
          <div className="profile">
            <svg
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_157_54693)">
                <path
                  opacity="0.993"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.7675 0.00231934C13.5696 0.00231934 14.3716 0.00231934 15.1737 0.00231934C20.6591 0.684931 24.5693 3.52867 26.9042 8.53352C27.4673 9.91093 27.8227 11.3328 27.9706 12.7991C27.9706 13.6012 27.9706 14.4033 27.9706 15.2054C27.92 15.6281 27.8471 16.0474 27.7518 16.4632C25.2336 13.9631 22.718 11.4657 20.205 8.97102C19.1193 7.63058 17.7521 6.7009 16.1034 6.18197C15.5354 5.55925 14.9339 4.97591 14.2988 4.43198C14.2076 4.32261 14.1165 4.21323 14.0253 4.10386C13.375 3.26839 12.655 3.19547 11.8652 3.88511C11.7059 4.07582 11.6239 4.29457 11.6191 4.54136C10.714 4.58068 10.2673 5.05464 10.2792 5.96322C10.3331 6.22578 10.4515 6.45366 10.6347 6.64681C7.4319 8.37597 5.96442 11.0648 6.23239 14.7132C6.52316 16.8086 7.48019 18.5221 9.10347 19.8538C9.33715 20.1787 9.61058 20.4704 9.92378 20.7288C9.36717 22.7546 8.80209 24.778 8.22847 26.799C4.11418 24.8626 1.48009 21.6907 0.32617 17.2835C0.167134 16.5897 0.0486453 15.897 -0.0292969 15.2054C-0.0292969 14.4033 -0.0292969 13.6012 -0.0292969 12.7991C0.653314 7.31373 3.49705 3.40357 8.50191 1.06872C9.87931 0.505623 11.3012 0.150156 12.7675 0.00231934Z"
                  fill="#AE62FE"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.0271 4.10382C13.9725 7.64925 13.9542 11.2039 13.9724 14.7678C12.9879 14.7587 12.0035 14.7678 11.0193 14.7952C10.3158 15.081 10.0514 15.6005 10.2263 16.3538C10.3448 16.7639 10.6091 17.0282 11.0193 17.1467C12.0035 17.1741 12.9879 17.1832 13.9724 17.1741C13.9724 18.6324 13.9724 20.0907 13.9724 21.549C12.5644 21.5616 11.2519 21.2153 10.0349 20.51C9.71746 20.3053 9.4076 20.0866 9.10524 19.8537C7.48196 18.522 6.52493 16.8085 6.23416 14.7131C5.96619 11.0647 7.43367 8.37593 10.6365 6.64678C10.4533 6.45362 10.3348 6.22574 10.281 5.96319C10.2691 5.0546 10.7157 4.58064 11.6208 4.54132C11.6257 4.29453 11.7077 4.07578 11.8669 3.88507C12.6568 3.19543 13.3768 3.26835 14.0271 4.10382Z"
                  fill="#FECD00"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.0254 4.10382C14.1165 4.2132 14.2076 4.32257 14.2988 4.43194C14.7612 4.9949 15.2352 5.5509 15.7207 6.0999C15.8432 6.15333 15.9707 6.18068 16.1035 6.18193C17.7521 6.70086 19.1193 7.63054 20.205 8.97098C21.9137 11.3746 22.2509 13.9632 21.2167 16.7366C20.5506 18.3154 19.4842 19.5458 18.0175 20.4279C17.9764 20.4646 17.9581 20.5102 17.9628 20.5647C17.4119 20.8218 16.8467 21.0496 16.2675 21.2483C15.5153 21.4556 14.7497 21.5741 13.9707 21.6037C13.9707 23.7365 13.9707 25.8693 13.9707 28.0021C13.5697 28.0021 13.1686 28.0021 12.7676 28.0021C11.1937 27.8501 9.68063 27.4491 8.22852 26.799C8.80213 24.778 9.36721 22.7546 9.92382 20.7287C9.98802 20.6733 10.0244 20.6004 10.0332 20.51C11.2502 21.2153 12.5627 21.5616 13.9707 21.549C13.9707 20.0907 13.9707 18.6324 13.9707 17.1741C14.9552 17.1832 15.9396 17.1741 16.9238 17.1467C17.6656 16.8575 17.9299 16.3197 17.7167 15.5334C17.5763 15.156 17.312 14.91 16.9238 14.7952C15.9396 14.7678 14.9552 14.7587 13.9707 14.7678C13.9525 11.2039 13.9707 7.64925 14.0254 4.10382Z"
                  fill="#FEA300"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.2988 4.43195C14.934 4.97587 15.5355 5.55921 16.1035 6.18194C15.9708 6.18068 15.8432 6.15334 15.7207 6.09991C15.2352 5.5509 14.7613 4.99491 14.2988 4.43195Z"
                  fill="#2AAE59"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.2058 8.97101C22.7188 11.4657 25.2344 13.9631 27.7526 16.4632C26.9556 20.675 24.7316 23.8924 21.0808 26.1154C20.6389 26.3729 20.1831 26.6007 19.7136 26.799C19.1475 24.7169 18.5641 22.6388 17.9636 20.5647C17.9589 20.5102 17.9772 20.4647 18.0183 20.428C19.485 19.5459 20.5514 18.3154 21.2175 16.7366C22.2517 13.9632 21.9145 11.3747 20.2058 8.97101Z"
                  fill="#9D58E5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.72227 12.3616C9.65212 12.2976 10.0258 12.7168 9.84336 13.6194C9.5212 14.1156 9.09283 14.2341 8.55821 13.9749C8.00636 13.3725 8.06105 12.8348 8.72227 12.3616Z"
                  fill="#3F4E61"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.5656 12.3617C19.4985 12.3004 19.8722 12.7197 19.6867 13.6195C19.3669 14.1149 18.9385 14.2333 18.4016 13.975C17.9651 13.5739 17.9104 13.1274 18.2375 12.6351C18.3508 12.543 18.4601 12.4518 18.5656 12.3617Z"
                  fill="#323E4D"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.9712 14.7679C13.9712 15.57 13.9712 16.372 13.9712 17.1741C12.9866 17.1833 12.0022 17.1741 11.018 17.1468C10.6079 17.0283 10.3436 16.764 10.2251 16.3538C10.0502 15.6006 10.3145 15.081 11.018 14.7952C12.0022 14.7679 12.9866 14.7588 13.9712 14.7679Z"
                  fill="#FD6B15"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.9736 14.7678C14.9582 14.7587 15.9425 14.7678 16.9267 14.7952C17.3149 14.91 17.5793 15.1561 17.7197 15.5335C17.9329 16.3197 17.6685 16.8575 16.9267 17.1467C15.9425 17.1741 14.9582 17.1832 13.9736 17.1741C13.9736 16.372 13.9736 15.5699 13.9736 14.7678Z"
                  fill="#F24500"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.10352 19.8538C9.40588 20.0866 9.71574 20.3054 10.0332 20.51C10.0244 20.6004 9.98803 20.6733 9.92382 20.7288C9.61063 20.4704 9.33719 20.1787 9.10352 19.8538Z"
                  fill="#37B056"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.9658 20.5647C18.5663 22.6388 19.1497 24.7169 19.7158 26.799C18.2637 27.4491 16.7506 27.8501 15.1768 28.0022C14.7757 28.0022 14.3747 28.0022 13.9736 28.0022C13.9736 25.8694 13.9736 23.7366 13.9736 21.6038C14.7527 21.5742 15.5183 21.4557 16.2705 21.2483C16.8497 21.0496 17.4148 20.8218 17.9658 20.5647Z"
                  fill="#FE9500"
                />
              </g>
              <defs>
                <clipPath id="clip0_157_54693">
                  <rect
                    width="27.9999"
                    height="27.9999"
                    fill="white"
                    transform="translate(0 0.0296631)"
                  />
                </clipPath>
              </defs>
            </svg>
            <div className="profile-name">PokemonAir77</div>
            <div className="svg-container">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.2762 8.68088C6.6345 8.33636 7.20424 8.34754 7.54875 8.70583L12 13.4311L16.4513 8.70583C16.7958 8.34754 17.3655 8.33636 17.7238 8.68088C18.0821 9.02539 18.0933 9.59513 17.7487 9.95343L12.6488 15.3534C12.4791 15.5299 12.2448 15.6296 12 15.6296C11.7552 15.6296 11.5209 15.5299 11.3513 15.3534L6.25125 9.95343C5.90674 9.59513 5.91791 9.02539 6.2762 8.68088Z"
                  fill="#FC7201"
                />
              </svg>
            </div>
            <div>
              <div className="profile-modal">
                <div className="profile-modal-content">
                  <div className="profile-modal-content-item">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3 4.25C3 3.00736 4.00736 2 5.25 2H10.75C11.9926 2 13 3.00736 13 4.25V6.25C13 6.66421 12.6642 7 12.25 7C11.8358 7 11.5 6.66421 11.5 6.25V4.25C11.5 3.83579 11.1642 3.5 10.75 3.5H5.25C4.83579 3.5 4.5 3.83579 4.5 4.25V15.75C4.5 16.1642 4.83579 16.5 5.25 16.5H10.75C11.1642 16.5 11.5 16.1642 11.5 15.75V13.75C11.5 13.3358 11.8358 13 12.25 13C12.6642 13 13 13.3358 13 13.75V15.75C13 16.9926 11.9926 18 10.75 18H5.25C4.00736 18 3 16.9926 3 15.75V4.25Z"
                        fill="#FC7201"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6 10C6 9.58579 6.33579 9.25 6.75 9.25H16.2955L15.2483 8.30747C14.9404 8.03038 14.9154 7.55616 15.1925 7.24828C15.4696 6.94039 15.9438 6.91543 16.2517 7.19253L18.7517 9.44253C18.9098 9.58476 19 9.78738 19 10C19 10.2126 18.9098 10.4152 18.7517 10.5575L16.2517 12.8075C15.9438 13.0846 15.4696 13.0596 15.1925 12.7517C14.9154 12.4438 14.9404 11.9696 15.2483 11.6925L16.2955 10.75H6.75C6.33579 10.75 6 10.4142 6 10Z"
                        fill="#FC7201"
                      />
                    </svg>
                    <div className="profile-modal-content-item-text">
                      Log Out
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;

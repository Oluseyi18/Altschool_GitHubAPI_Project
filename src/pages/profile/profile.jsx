import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import LoadingImage from "../../assets/loading.gif";
import { IoIosArrowRoundBack } from "react-icons/io";

import {
  BsFillCalendar3RangeFill,
  BsFillChatSquareDotsFill,
  BsFillCloudPlusFill,
  BsFillEjectFill,
  BsTwitter,
  BsFillCloudFog2Fill,
} from "react-icons/bs";

import { BiCurrentLocation } from "react-icons/bi";

const url = "https://api.github.com/users/oluseyi18";

const Profile = () => {
  const [data, setData] = useState([]);

  const FetchGitHubData = () => {
    // Fetch Github Data
    axios.get(url).then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    FetchGitHubData();
  }, []);

  console.log(data);

  return (
    <>
      {data?.length !== 0 ? (
        <>
          <div className="top">
          </div>
          <br />
          {/* profile Infomattion  */}
          <div className="profile-back-button">
              <Link to={-1}>
                <IoIosArrowRoundBack
                  style={{ fontSize: "30px", fontWeight: "bolder" }}
                />
              </Link>
            </div>
          <div className="profile-container">
            <p>My Profile</p>
          </div>
          <br />
          <div className="profile-container">
            <div className="home-profile-card">
              <div>
                <div className="profile-image-container">
                  <img src={data.avatar_url} alt="avatar" />
                </div>
                <div className="profile-information-card">
                  <h1>
                    {data.name} ({data.login})
                  </h1>
                  <p>Full-stack Developer</p>
                </div>
                <p>{data.bio}</p>
                <div className="home-container-grid-card-slots">
                  <div className="slot-card">
                    <h4>
                      <BiCurrentLocation /> {data.location}
                    </h4>
                  </div>
                  <div className="slot-card">
                    <h4>
                      <BsTwitter />{" "}
                      <a href="https://twitter.com/seyeezi18">
                        {data.twitter_username}
                      </a>
                    </h4>
                  </div>
                  <div className="slot-card">
                    <h4>
                      <BsFillCloudFog2Fill />{" "}
                      <a href="https://oluseyi18.github.io/Eezi-Codez/">{data.blog}</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="profile-container">
            <p>Additional Information</p>
          </div>
          {/* Additional Infomattions  */}
          <div className="profile-container">
            <div className="stat-container">
              <div className="box">
                <div>
                  <div className="box-shades shades-1">
                    <BsFillCalendar3RangeFill />
                  </div>
                </div>
                <div className="box-text-section">
                  <h2>{data.public_repos} </h2>
                  <p>
                    <Link to="/profile/repos">Repos</Link>
                  </p>
                </div>
              </div>
              <div className="box">
                <div>
                  <div className="box-shades shades-2">
                    <BsFillCloudPlusFill />
                  </div>
                </div>
                <div className="box-text-section">
                  <h2>{data.followers}</h2>
                  <p>Followers</p>
                </div>
              </div>
              <div className="box">
                <div>
                  <div className="box-shades shades-3">
                    <BsFillEjectFill />
                  </div>
                </div>
                <div className="box-text-section">
                  <h2> {data.following} </h2>
                  <p>Followings</p>
                </div>
              </div>
              <div className="box">
                <div>
                  <div className="box-shades shades-4">
                    <BsFillChatSquareDotsFill />
                  </div>
                </div>
                <div className="box-text-section">
                  <h2>{data.public_gists} </h2>
                  <p>Gist</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="loading-state">
          <img src={LoadingImage} alt="loading" />
        </div>
      )}
    </>
  );
};

export default Profile;

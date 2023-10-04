import { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import constants from "../helper/constants";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../store/store";
import { getMenuList } from "../store/thunk/menuThunk";

// sidebar component
const Sidebar = () => {
  // dispatch actions of redux
  const dispatch = useAppDispatch();

  // retrive slice data
  const menuListData = useAppSelector((state) => state.menuSlice.menuList);

  // component states
  const [teams, setTeams] = useState([]);
  const [activeTeam, setActiveTeam] = useState(null);
  const [submenuActive, setSubmenuActive] = useState(null);
  const [rangeValue, setRangeValue] = useState([0, 0]);

  // menu click event function
  const handleItemClick = (teamObj) => {
    setActiveTeam(teamObj);
  };

  // submenu click event function
  const handleSubmenuClick = (item) => {
    setSubmenuActive(item);
  };

  // load menu list when page is load
  useEffect(() => {
    dispatch(getMenuList());
  }, []);

  // set state when we get api reponse for menu list
  useEffect(() => {
    setTeams(menuListData);
  }, [menuListData]);

  // return jsx
  return (
    <div className="sidebar">
      <ul className="mainmenu">
        {teams?.map((item, index) => (
          <li
            key={index}
            className={
              activeTeam && item?.team_id === activeTeam?.team_id
                ? "active"
                : ""
            }
          >
            <Link href="#" onClick={() => handleItemClick(item)}>
              <img src={`../images/${item.image_url}`} alt={item.team_title} />
            </Link>
          </li>
        ))}
      </ul>
      {activeTeam && (
        <div className="submenu">
          <span className="closeBtn" onClick={() => setActiveTeam(null)}>
            <img src="../images/close.png" alt="" />
          </span>
          <div className="topsliderbar">
            <div className="submenulogo">
              <img src={`../images/${activeTeam.image_url}`} alt="" />
              {activeTeam?.team_title}
            </div>
            <div className="custom-range">
              <h2>
                <img src="../images/Avatar.png" alt="" />
                {activeTeam?.team_title_medium}
              </h2>
              <div className="ranges">
                <span className="numberCounter">{rangeValue[1]}/1000</span>
                <RangeSlider
                  max={1000}
                  className="single-thumb"
                  value={rangeValue}
                  onInput={setRangeValue}
                />
              </div>
              <div className="points">
                <div className="point">
                  <span>+</span>
                  <img src="../images/Goldcoin.png" alt="" />
                  {activeTeam?.points?.gold}
                </div>
                <div className="point">
                  <span>+</span>
                  <img src="../images/Rewards.png" alt="" />
                  {activeTeam?.points?.rewards}
                </div>
                <div className="point">
                  <span>+</span>
                  <img src="../images/Group.png" alt="" />
                  {activeTeam?.groups?.attended} / {activeTeam?.groups?.total}
                </div>
              </div>
            </div>
            <ul className="submenu-menu">
              {constants?.pages?.map((menuItem, index) => (
                <li
                  key={index}
                  onClick={() => handleSubmenuClick(menuItem)}
                  className={submenuActive === menuItem ? "active" : ""}
                >
                  <Link href={menuItem.url}>
                    <span className="img">
                      <img src={menuItem.imageSrc} alt="" />
                    </span>
                    {menuItem.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="accountlogin">
            <p>Account management</p>
            <div className="useraccount">
              <Link href="#">
                <img src="../images/user.svg" alt="" />
                Account
              </Link>
            </div>
            <div className="useraccount">
              <Link href="#">
                <img src="../images/setting.svg" alt="" />
                Settings
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// export sidebar
export default Sidebar;

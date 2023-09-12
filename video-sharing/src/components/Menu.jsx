import React from "react";
import styled from "styled-components";
import GudiTube from "../img/logo.avif";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import ReportIcon from "@mui/icons-material/Report";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
  height: 105vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 4px 0;

  &:hover {
    background-color: #${({ theme }) => theme.soft};
  }
`;
const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid #${({ theme }) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;
const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={GudiTube} />
            GudiTube
          </Logo>
        </Link>
        <Item>
          <HomeIcon />
          Home
        </Item>
        <Item>
          <ExploreIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsIcon />
          Subcsriptions
        </Item>
        <Hr />
        <Item>
          <VideoLibraryIcon />
          Library
        </Item>
        <Item>
          <HistoryIcon />
          History
        </Item>
        <Hr />
        <Login>
          Signin in to like videos,comment ans subscribe
          <Link to="signin" style={{ textDecoration: "none" }}>
            <Button>
              <AccountCircleIcon />
              Signin
            </Button>
          </Link>
        </Login>

        <Hr />
        <Title>Best of Gudi Tube</Title>
        <Item>
          <NewspaperIcon />
          News
        </Item>
        <Item>
          <SportsEsportsIcon />
          Sports
        </Item>
        <Item>
          <LibraryMusicIcon />
          Music
        </Item>

        <Hr />
        <Item>
          <HelpIcon />
          Help
        </Item>
        <Item>
          <ReportIcon />
          Report
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <LightModeIcon />
          LightMode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;

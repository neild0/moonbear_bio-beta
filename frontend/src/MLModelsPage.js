/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from "@emotion/react";
import "./App.css";
import React from "react";
import {Button} from "antd";
import pathologyLogo from "./pathology.png";
import omicsLogo from "./omics.png";
import ddLogo from "./dd.png";
import unicornLogo from "./unicorn.png";
import uploadLogo from "./uploadData.png";
import {history} from "./routes";
import Upload from "./components/UploadButton";
import kennyLogo from "./kenny.png";
import NavigationBar from "./components/NavigationBar";
//import SearchBar from "./components/SearchBar";
//import HeaderSearch from "./components/HeaderSearch";
import PicturesWall from "./components/UploadImage";
import nextLogo from "./nextLogo.png";
import pathLogo from "./path.png";

const backgroundContainerCss = css`
  background: #fffaf5;
  height: 65vh;
  width: 100vw;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

function MLModelsPage() {
    const navigateToMLModelsPage = () => {
        history.push("/models");
    };
    return (
        <div
            css={css`
        background: #fffaf5;
        padding-left: 20px;
        padding-top: 20px;
        padding-bottom: 200px;
      `}
        >
            <a href="/">
                <img src={unicornLogo} width={50}></img>
            </a>
            <a
                css={css`
          padding-left: 1050px;
        `}
            >
                {" "}
                <img src={kennyLogo} width={45}></img>
            </a>
            <a
                css={css`
          font-family: sf pro display;
          padding-left: 10px;
          color: #776f6f;
        `}
            >
                Kenny Workman
            </a>
            {/* <HeaderSearch></HeaderSearch>
      {""} */}

            <div
                css={css`
          font-family: sf pro display;
          font-size: 34px;
          margin: 10px 10px 25px 40px;
          //padding-left: 100px;
        `}
            >
                <h
                    css={css`
            padding-bottom: 20px;
            padding-left: 16px;
            font-family: 'Open Sans', sans-serif;
          `}
                >
                    {" "}
                    🔬Your workspace
                </h>
                <NavigationBar></NavigationBar>
            </div>

            <h
                css={css`
          margin: 10px 10px 10px 62px;
          font-family: SF Pro Display;
          font-size: 25px;
          font-family: 'Open Sans', sans-serif;
        `}
            >
                Pathology ML Models
            </h>

            <div css={backgroundContainerCss}>
                {/* <NavigationBar></NavigationBar> */}
                {/* <Button css={buttonUploadCard}>
          <h1
            css={css`
              color: white;
              height: 50px;
              padding-top: 20px;
            `}
          ></h1>
        </Button> */}
                &nbsp;
                {/* <Button css={buttonCss}>Text</Button> */}
                <a
                    css={css`
            padding-right: 1140px;
            padding-bottom: 355px;
          `}
                >
                    <img src={pathLogo} width={155}></img>
                    <a
                        css={css`
              font-family: SF pro display;
              color: #776f6f;
              position: relative;
            `}
                    >
                        PC-ChiP
                    </a>
                </a>
            </div>
        </div>
    );
}

export default MLModelsPage;

/*
`;

const PathologyPage = () => {
  return (
    <div>
      {<Button css={ButtonCss}>next</Button> }
      <div
        css={css`
          background: #fffaf5;
          padding-left: 20px;
          padding-bottom: 20px;
        `}
      >
        <a href="/">
          {" "}
          <img src={unicornLogo} width={70}></img>
        </a>
        <hr></hr>
        <div
          css={css`
            font-family: sf pro display;
            font-size: 34px;
            //padding-left: 100px;
          `}
        >
          <h>Data Import✨</h>
        </div>
        <div css={backgroundContainerCss}>
          <h1
            css={css`
              padding-bottom: 300px;
            `}
          >
            <Upload></Upload>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PathologyPage;
 */

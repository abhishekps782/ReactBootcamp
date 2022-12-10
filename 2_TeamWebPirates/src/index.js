import React, {ReactFragment} from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css"
import CardComponent from "./components/cardComponent/CardComponent";
import HeaderComponent from "./components/headerComponent/HeaderComponent";
import teamData from "./appData";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

const CardContainer = () => {
  return (
    teamData.map((cardData) => <CardComponent {...cardData}/>)
  )
}

const MainContainer = () => {
  return (
    <>
     <HeaderComponent/>
     <CardContainer/>
    </>
  )
}

const AppComponent = () => {
    return (
     <div className="main-container">
        <MainContainer/>
     </div>
    )
}

rootElement.render(<AppComponent/>);

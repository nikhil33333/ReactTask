import {Icon} from "uikit-react";
import '../styles/header.css';
import header_background from "../assests/header_background.jpg"

function Header(props) {
  return (
    <div>
        <div className="header uk-position-relative ">
        <img src = {header_background} className="img" width="100%" height="200" alt="background-image"/>
        <div className="content uk-position-absolute uk-position-center">
            <h1 className="uk-text-bold uk-text-center@m uk-margin-remove">Micro Focus Products A-Z</h1>
            <h3 className="subcontent uk-margin-remove uk-text-bold">Buy solutions that help you build, test, and secure the apps your enterprise needs.</h3>
            <div className="uk-margin uk-flex uk-flex-center">
                <form className="uk-search uk-search-default uk-width-3-5@m ">
                    <Icon className="uk-inline uk-search-icon" options="search"/>
                    <input placeholder="Search Micro Focus products..." onChange={(event)=>props.onInput(event)} className="uk-search-input" type="search"></input>
                </form>
            </div>
        </div>    
      </div>
    </div>
  )
}

export default Header;
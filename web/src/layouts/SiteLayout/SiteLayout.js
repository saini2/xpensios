import React, { Component } from "react";
import PropTypes from "prop-types";
// import Loadable from "react-loadable";
import Header from "../SiteLayout/Header/HeaderContainer";

// import Footer from '../components/Footer/FooterContainer';
import s from "./SiteLayout.module.scss";

class SiteLayout extends Component {
    sectionClass = () => {
        if (this.props.position === "fixed") {
            if (this.props.showTab) {
                return "midleConTab";
            }
            return "midleCon";
        } else {
            return "";
        }
    };

    render() {
        return (
            <main>
                <section className={`${s.uiWrapper} ${this.sectionClass()}`}>
                    <Header {...this.props} />
                    {this.props.children}
                    {/* {footer && <Footer />} */}
                </section>
            </main>
        );
    }
}

export default SiteLayout;

SiteLayout.propTypes = {
  header: PropTypes.bool
  // footer: PropTypes.bool
};
SiteLayout.defaultProps = {
  header: true,
  footer: false,
  position: "fixed",
  isPremium: false
};

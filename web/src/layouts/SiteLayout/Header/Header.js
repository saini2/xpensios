import React, { Component } from 'react';
import s from './Header.module.scss';

/* eslint-disable */
export default class Header extends Component {
    handleBackClick = () => {
        if (this.props.headerBackClick) {
            this.props.headerBackClick();
        } else {
            hardwareBackPressed(this.props.history);
        }
    };

    moveToProfile = () => {
        // this.props.history.push('/profile');
    };

    render() {
        let headerClassName = s.header;
        if (this.props.white) {
            headerClassName = `${s.white} ${headerClassName}`;
        }
        if (this.props.noBorder) {
            headerClassName = `${s.noBorder} ${headerClassName}`;
        }
        return (
          <div
            style={{ position: this.props.position }}
            className={`${s.headerWrap} ${
              this.props.isPremium ? s.premium : s.normal
            }`}
          >
            <header className={headerClassName}>
              <div className={s.pane}>
                <img
                  src={
                    "https://www.corporatephotographylondon.com/wp-content/uploads/2014/10/business-portraits-Mayfiar.jpg"
                  }
                />
                <div>
                  <span>Remind</span>
                  <span>Menu</span>
                </div>
              </div>
            </header>
            {this.props.headerChildren}
          </div>
        );
    }
}

Header.defaultProps = {
    headerTitle: null,
    headerRightLogo: null,
    headerRightDots: null,
    headerRightLink: null,
    headerBackClick: null,
    headerRightText: null,
    white: false,
    centerHeader: false,
    crossIcon: false,
    headerRightAction: () => { }
};

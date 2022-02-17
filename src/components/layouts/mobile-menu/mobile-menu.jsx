import React, { Component, Fragment } from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Burger from 'react-css-burger';
import { connect } from 'react-redux';
import SelectLangeage from '../../language';
import ListOfLinks from '../header/header-links';
import { compose } from '../../../utils';
import { openMenu, closeMenu } from '../../../actions/drawer.actions';
import style from './mobile-menu.module.scss';

class MobileMenu extends Component {
    static defaultProps = {
        closeDrawerMenu: () => {},
        openDrawerMenu: () => {},
        location: {},
        menu: false,
    };

    static propTypes = {
        closeDrawerMenu: PropTypes.func,
        openDrawerMenu: PropTypes.func,
        location: PropTypes.object,
        menu: PropTypes.bool,
    };

    componentDidUpdate(prevProps) {
        const { closeDrawerMenu, location } = this.props;
        if (location !== prevProps.location) {
            closeDrawerMenu();
        }
    }

    componentWillUnmount() {
        const { closeDrawerMenu } = this.props;
        closeDrawerMenu();
    }

    toggleBurger = () => {
        const { menu, closeDrawerMenu, openDrawerMenu } = this.props;
        if (menu) {
            return closeDrawerMenu();
        }

        openDrawerMenu();
    };

    render() {
        const { menu } = this.props;

        const drawerStyle = menu ? style.drawer__opened : style.drawer__closed;

        if (menu) {
            document.documentElement.style.overflowY = 'hidden';
        } else {
            document.documentElement.style.overflowY = 'inherit';
        }

        const drawerHeight = {
            height: `calc(${window.innerHeight}px - 18.8vw)`,
        };

        return (
            <Fragment>
                <div className={style.burgerMenu}>
                    <div className="burgerMenu">
                        <Burger
                            onClick={this.toggleBurger}
                            active={menu}
                            burger="spin"
                            color="white"
                            marginTop="0"
                            scale={0.65}
                        />
                    </div>
                </div>
                <div className={drawerStyle} style={drawerHeight}>
                    <SelectLangeage />
                    <div className={style.linksWrapper}>
                        <ListOfLinks
                            classNameList={style.links}
                            classNameItem={style.links_item}
                            classNameSubLinks={style.links_subLinks}
                        />
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    const {
        drawer: { menu },
    } = state;

    return {
        menu,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        openDrawerMenu: () => openMenu(),
        closeDrawerMenu: () => closeMenu(),
    },
    dispatch,
);

export default compose(
    withTranslation(),
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(MobileMenu);

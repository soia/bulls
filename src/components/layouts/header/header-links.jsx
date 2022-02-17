/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withTranslation } from 'react-i18next';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { closeMenu } from '../../../actions/drawer.actions';
import { compose } from '../../../utils';

class ListOfLinks extends Component {
    static defaultProps = {
        t: () => {},
        closeDrawerMenu: () => {},
        classNameList: '',
        classNameItem: '',
    };

    static propTypes = {
        t: PropTypes.func,
        closeDrawerMenu: PropTypes.func,
        classNameList: PropTypes.string,
        classNameItem: PropTypes.string,
    };

    toggleBurger = () => {
        const { closeDrawerMenu } = this.props;
        closeDrawerMenu();
    };

    render() {
        const { t, classNameList, classNameItem } = this.props;

        const links = [
            {
                id: '1',
                name: t('header.tradingTerminal'),
                path: '#tradingTerminal',
                isExternal: false,
            },
            {
                id: '2',
                name: t('header.aboutToken'),
                path: '/',
                isExternal: true,
            },
            {
                id: '3',
                name: t('header.roadmap'),
                path: '#roadmap',
                isExternal: false,
            },
        ];

        return (
            <ul className={classNameList}>
                {links.map(item => {
                    const { name, path, id, isExternal } = item;

                    return (
                        <li key={id} className={classNameItem} onClick={this.toggleBurger}>
                            {isExternal ? (
                                <a
                                    href={path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {name}
                                </a>
                            ) : (
                                <AnchorLink href={path}>{name}</AnchorLink>
                            )}
                        </li>
                    );
                })}
            </ul>
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
        closeDrawerMenu: () => closeMenu(),
    },
    dispatch,
);

export default compose(withTranslation(), connect(mapStateToProps, mapDispatchToProps))(ListOfLinks);

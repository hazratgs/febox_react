import React, { Component } from 'react'
import { Link } from 'react-router'
import s from './styles.css'

import Logo from './logo.svg'

export default class Header extends Component {
    render() {
        return (
            <div className={`${s.header} ${s[this.props.color]}`}>
                <div className={s.wrapper}>
                    <div className={s.logo}>
                        <Link to='/'>
                            <Logo/>

                            {/*<div className={s.wrapper}>*/}
                                {/*<div className={s.f}>*/}
                                    {/*<span></span>*/}
                                    {/*<span></span>*/}
                                    {/*<span></span>*/}
                                {/*</div>*/}
                                {/*<div className={s.e}>*/}
                                    {/*<span></span>*/}
                                    {/*<span></span>*/}
                                    {/*<span></span>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className={s.title}>*/}
                                {/*<strong>febox</strong>*/}
                            {/*</div>*/}
                        </Link>
                    </div>
                    <div className={s.nav}>
                        <div className={s.wrapper}>
                            <Link to='/work' activeClassName={s.active}>работы</Link>
                            <Link to='/company' activeClassName={s.active}>о студия</Link>
                            <Link to='#'>цены</Link>
                            <Link to='/contact' activeClassName={s.active}>контакты</Link>
                        </div>
                        <div className={s.menu} onClick={this.props.handleShowAside}>
                            <div>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

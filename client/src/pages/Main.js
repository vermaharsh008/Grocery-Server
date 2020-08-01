import React, { useState, useEffect } from 'react';
import nprogress from 'nprogress';

import Input from '../components/Input';
import Nav from '../components/Nav';
import UserRow from '../components/UserRow';
import ItemRow from '../components/ItemRow';

import { MainStyles, MainGridContainer, LinksContainer, ListGridContainer, SearchButton, HeaderContainer, ListContainer, SelectStyles } from '../styles/Main';
import { InsideLabeledInput } from '../styles/Signin';

export default function Main(props) {
    const { path, params } = props.match;
    let isMainView = true;

    nprogress.start();

    if(path === '/user/:id?' && params.id) {
        isMainView = false;
    }

    return (
        <MainStyles>
            <Nav/>
            <MainGridContainer>
                <LinksContainer>
                    <a href="">Users</a>
                </LinksContainer>
                <ListGridContainer>
                    <div style={{ display: 'flex' }}>
                        {
                            isMainView?
                            (<InsideLabeledInput>
                                <Input type="text" name="search" id="search" placeholder="Search..." />
                                <SearchButton />
                            </InsideLabeledInput>) :
                            (<SelectStyles>
                                <option value="1">First Inventory</option>
                                <option value="1">Second Inventory</option>
                                <option value="1">Third Inventory</option>
                                <option value="1">Fourth Inventory</option>
                            </SelectStyles>)
                        }
                    </div>
                    <HeaderContainer>
                    <ul>
                        <li>
                            <Input type="checkbox"/>
                        </li>
                        {
                            isMainView?
                            (
                                <>
                                    <li>EMAIL</li>
                                    <li>USERNAME</li>
                                    <li>NAME</li>
                                </>
                            ) :
                            (
                                <>
                                    <li>NAME</li>
                                    <li>QUANTITY</li>
                                    <li>PRICE</li>
                                    <li>UNIT PRICE</li>
                                </>
                            )

                        }
                    </ul>
                    </HeaderContainer>
                    <ListContainer>
                        {/* TODO: MAKE THIS ONE COMPONENT */}
                        {
                            isMainView? (
                                <>
                                    <UserRow/>
                                    <UserRow/>
                                    <UserRow/>
                                    <UserRow/>
                                    <UserRow/>
                                </>
                            ) : (
                                <>
                                    <ItemRow/>
                                    <ItemRow/>
                                    <ItemRow/>
                                    <ItemRow/>
                                    <ItemRow/>
                                </>
                            )
                        }
                    </ListContainer>
                </ListGridContainer>
            </MainGridContainer>
        </MainStyles>
    );
}

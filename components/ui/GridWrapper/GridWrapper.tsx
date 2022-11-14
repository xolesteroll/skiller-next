import React, {ComponentProps} from 'react';

import s from './GridWrapper.module.scss'
import Container from "../Container/Container";
import Sidebar from "../Sidebar/Sidebar";
import SkillsNav from "../../navigation/SkillsNav/SkillsNav";
import TopNavbar from "../../navigation/TopNavbar/TopNavbar";
import SkillsGrid from "../../skills/SkillsGrid/SkillsGrid";

const GridWrapper = (props: ComponentProps<any>) => {
    return (
            <div className={s.wrapper}>
                <Sidebar>
                    <SkillsNav/>
                </Sidebar>
                <div className={"content-wrapper"}>
                    <TopNavbar visibility={"hide"}/>
                    {props.children}
                </div>
            </div>
    );
};

export default GridWrapper;
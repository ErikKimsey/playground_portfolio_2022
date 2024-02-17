import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import BannerMenu from "./BannerMenu";
import "./banner.scss";
import { SELF_STATEMENT } from "../__data/data";

const ROLES = [
    'UI Engineer',
    'Software Developer',
    'Frontend Developer',
    'Creative Technologist',
    'Full-Stack Developer',
    'Software Engineer',
]

export default function Banner(props) {
    let { timerTime } = props;

    let bannerRef = useRef();
    let [iconActive, setIconActive] = useState(false);
    let [timer, setTimer] = useState(3000);
    let [rolesIndex, setRolesIndex] = useState(0);
    let [currRole, setCurrRole] = useState();

    useEffect(() => {
        let interval = null;
        setIconActive(props.isActive);
        setTimer(timerTime);
    }, [])

    useEffect(() => {
        changeRole();
    }, [rolesIndex])


    function iterateRoles() {
        if (rolesIndex < ROLES.length) {
            setRolesIndex(rolesIndex++);
        } else {
            setRolesIndex(0);
        }
    }

    function changeRole() {
        setCurrRole(ROLES[rolesIndex]);
    }

    return (
        <div className="banner-container"
            ref={bannerRef}
        >
            {/* <UnderConstruction /> */}
            <div className="text-container">
                <motion.div
                    className="name banner-item"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 4,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >Erik Kimsey</motion.div>

                <motion.div
                    className="role banner-item"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1,
                        delay: 4.3,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    data-text={currRole}>{currRole}</motion.div>

            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1,
                    delay: 4,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                className="aboutSelfDeveloperContainer">{SELF_STATEMENT}</motion.div>
            <BannerMenu />
        </div>
    );
}


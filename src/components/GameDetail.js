import React from "react";
import { useHistory } from "react-router-dom";

import { smallImage } from "../util";

//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

//Redux
import { useSelector } from "react-redux";

//Images
import playstation from '../images/playstation.svg';
import steam from '../images/steam.svg';
import xbox from '../images/xbox.svg';
import nintendo from '../images/nintendo.svg';
import apple from '../images/apple.svg';
import gamepad from '../images/gamepad.svg';
//Stars
import starEmpty from '../images/star-empty.png';
import starFull from '../images/star-full.png';

const GameDetail = ( {pathId} ) => {

    const history = useHistory()

    //Exit Detail
    const exitDetailHandler = (e) => {
        const element = e.target;
        if (element.classList.contains('shadow')) {
            document.body.style.overflow = 'auto';
            history.push('/');
        }
    }

    //Star Logic
    const getStars = () => {
        const stars = [];
        const rating = Math.floor(game.rating);
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<img alt="star" key={i} src={starFull}></img>)
            } else {
                stars.push(<img alt="star" key={i} src={starEmpty}></img>)
            }
        }
        return stars;
    }

    //Get Platform Images
    const getPlatform = (platform) => {
        if (platform === "PlayStation 4") {
            return playstation;
        } else if (platform === "PlayStation 5") {
            return playstation;
        } else if (platform === "Xbox 4") {
            return xbox;
        } else if (platform === "PC") {
            return steam;
        } else if (platform === "Nintendo Switch") {
            return nintendo;
        } else if (platform === "iOS") {
            return apple;
        } else {
            return gamepad;
        }          
    }

    //Data
    const {screen, game, isLoading} = useSelector ((state) => state.detail)

    return (
        <>
            {!isLoading && (
                <CardShadow className = "shadow" onClick = {exitDetailHandler}>
                    <Detail layoutId = { pathId }>
                        <Stats>
                            <div className="rating">
                                <motion.h3 layoutId = {`title ${pathId}`}> { game.name }</motion.h3>
                                <p> Rating: { game.rating }</p>
                                {getStars()}
                            </div>
                            <Info>
                                <h3>Platforms</h3>
                                <Platforms>
                                    {game.platforms && game.platforms.map((data) => (
                                        <img 
                                            key = {data.platform.id} 
                                            src = {getPlatform(data.platform.id)}
                                            alt = {data.platform.id}
                                            title = {data.platform.id}>
                                        </img>
                                    ))}
                                </Platforms>
                            </Info>
                        </Stats>
                        <Media>
                            <motion.img layoutId = {`image ${pathId}`} src = { smallImage(game.background_image, 1280) } alt = "background of game" />
                        </Media>
                        <Description>
                            <p> {game.description_raw} </p>
                        </Description>
                        <div className="gallery">
                            { game.platforms && screen.results.map((screen) => (
                                <img src = { smallImage(screen.image, 1280) } key = { screen.id } alt = "screenshots of game" />
                            )) }
                        </div>
                    </Detail>
                </CardShadow>
            )}
        </>
    )
}

const CardShadow = styled(motion.div) `
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    &&::-webkit-scrollbar {
        width: 0.5rem;
    }
    &&::-webkit-scrollbar-thumb {
        background-color: #ff7676;
    }
    &&::-webkit-scrollbar-track {
        background: white;
    }
`;

const Detail = styled(motion.div) `
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    z-index: 10;
    img {
        width: 100%;
    }
`;

const Stats = styled(motion.div) `
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
        width: 2rem;
        height: 2rem;
        display: inline;
    }
`;

const Info = styled(motion.div) `
    text-align: center;
`;

const Platforms = styled(motion.div) `
    display: flex;
    justify-content: space-evenly;
    img{
        margin-left: 3rem;
    }
`;

const Media = styled(motion.div) `
    margin-top: 5rem;
    img {
        width: 100%;
        /* height: 60vh;
        object-fit: cover; */
    }
`;

const Description = styled(motion.div) `
    margin: 5rem 0rem;
`;

export default GameDetail;

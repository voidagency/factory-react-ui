import React from 'react';
import {withKnobs} from "@storybook/addon-knobs";
import PictoImage from "../../staticAssets/pictoImage.png"
import CardImage from '../../staticAssets/img1.jpg'
import {ContenuLibre} from "../contenuLibre";


const _data = {
    title: "This is the title",
    description: "2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cupiditate enim eos fuga illo, libero minus, nam praesentium quidem quod, ratione temporibus voluptas! Atque consectetur dignissimos doloremque doloribus hic pariatur.",
    cta_link: "/",
    cta_text: "En savoir plus 2 ",
    colImage: 10,
    centercontent: true,
}
const _dataV1 = {
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cupiditate enim eos fuga illo, libero minus, nam praesentium quidem quod, ratione temporibus voluptas! Atque consectetur dignissimos doloremque doloribus hic pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aspernatur consequuntur corporis cum dolores eos ex excepturi expedita, illo laudantium necessitatibus neque odio pariatur praesentium recusandae rem sint suscipit tempore?",
    cta_link: "/",
    cta_text: "En savoir plus",
    colImage: 10,
    imageUrl: PictoImage,
    centercontent: true,
}
const _dataV2 = {
    title: "This is the title",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cupiditate enim eos fuga illo, libero minus, nam praesentium quidem quod, ratione temporibus voluptas! Atque consectetur dignissimos doloremque doloribus hic pariatur.",
    colImage: 10,
    cardImage: CardImage,
    centercontent: false,
}

export const contenuLibre = () => {
    return <ContenuLibre {..._data} />
}

export const ContenuLibreAvecPictou = () => {
    return  <ContenuLibre {..._dataV1} />
}
export const contenuLibreAvecImageFull = () => {
    return <ContenuLibre {..._dataV2} />
}


export default {
    title: 'Dynamic Fields/ContenuLibre',
    decorators: [withKnobs],
};


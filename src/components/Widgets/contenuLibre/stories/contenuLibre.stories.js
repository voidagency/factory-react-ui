import React from 'react';
import {withKnobs, boolean, text} from "@storybook/addon-knobs";
import PictoImage from "../../staticAssets/pictoImage.png"
import CardImage from '../../staticAssets/img1.jpg'
import {ContenuLibreContainer} from "../contenuLibre.container";
import {DirectionManager} from "../../../../core/dir-manager";

const groupID = "Options";
const groupContenu = "Contenu";
const groupRtl = "Version arabe"
const activeRtl = false


export const Variant1 = () => {
    const rtl = boolean('Activer RTl', activeRtl, groupRtl)
    const data = {
        title: "This is the title",
        description: "2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cupiditate enim eos fuga illo, libero minus, nam praesentium quidem quod, ratione temporibus voluptas! Atque consectetur dignissimos doloremque doloribus hic pariatur.",
        cta_text: "En savoir plus",
        cta_link: "/",
        centercontent: boolean('Centrer le text', true, groupID),
    }
    const data_ar = {
        title: "هذا هو العنوان",
        description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
        cta_text: 'اقرأ أكثر',
        cta_link: "/",
        centercontent: boolean('Centrer le text', true, groupID),
    }
    return (
        <DirectionManager dir={rtl ? 'rtl' : 'ltr'}>
            <ContenuLibreContainer data={rtl ? data_ar : data}/>
        </DirectionManager>
    )
}

export const Variant2 = () => {
    const rtl = boolean('Activer RTl', activeRtl, groupRtl)
    const data = {
        description: "2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cupiditate enim eos fuga illo, libero minus, nam praesentium quidem quod, ratione temporibus voluptas! Atque consectetur dignissimos doloremque doloribus hic pariatur.",
        cta_text: "En savoir plus",
        cta_link: "/",
        imageUrl: PictoImage,
        centercontent: boolean('Centrer le text', true, groupID),
    }
    const data_ar = {
        description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
        cta_text: 'اقرأ أكثر',
        cta_link: "/",
        imageUrl: PictoImage,
        centercontent: boolean('Centrer le text', true, groupID),
    }
    return (
        <DirectionManager dir={rtl ? 'rtl' : 'ltr'}>
            <ContenuLibreContainer data={rtl ? data_ar : data}/>
        </DirectionManager>
    )
}
export const Variant3 = () => {
    const rtl = boolean('Activer RTl', activeRtl, groupRtl)
    const data = {
        title: "This is the title",
        description: "2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cupiditate enim eos fuga illo, libero minus, nam praesentium quidem quod, ratione temporibus voluptas! Atque consectetur dignissimos doloremque doloribus hic pariatur.",
        cardImage: CardImage,
        centercontent: boolean('Centrer le text', false, groupID),
    }
    const data_ar = {
        title: "هذا هو العنوان",
        description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
        cardImage: CardImage,
        centercontent: boolean('Centrer le text', false, groupID),
    }
    return (
        <DirectionManager dir={rtl ? 'rtl' : 'ltr'}>
            <ContenuLibreContainer data={rtl ? data_ar : data}/>
        </DirectionManager>
    )
}


export default {
    title: 'Dynamic Fields/Contenu Libre',
    decorators: [withKnobs],
};


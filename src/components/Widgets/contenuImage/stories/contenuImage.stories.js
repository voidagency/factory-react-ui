import React from 'react';
import {withKnobs, select, boolean} from "@storybook/addon-knobs";
import ContenuImg from '../../staticAssets/img1.jpg'
import {ContenuImageContainer} from "../contenuImage.container";
import {DirectionManager} from "../../../../core/dir-manager";

const numberCols = [3, 4, 5, 6];
const groupRtl = "Version arabe"
const activeRtl = false
const groupId = 'Options'


export const Variant1 = () => {
    const rtl = boolean('Activer RTl', activeRtl, groupRtl)
    const data = {
        imgUrl: ContenuImg,
        title: "This is the title",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cupiditate enim eos fuga illo, libero minus, nam praesentium quidem quod, ratione temporibus voluptas! Atque consectetur dignissimos doloremque doloribus hic pariatur.",
        cta_text: "En savoir plus",
        cta_url: '/',
        activeBorder: boolean('Activer Border', false, groupId),
        activeBorderImage: boolean("Activer border de l'image", false, groupId),
        inversed: boolean('Inverser template', false, groupId),
        colImage: select('Nombre des colonnes', numberCols, 5, groupId),
    }
    const data_ar = {
        imgUrl: ContenuImg,
        title: "هذا هو العنوان",
        description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
        cta_text: 'اقرأ أكثر',
        cta_url: '/',
        activeBorder: boolean('Activer Border', false, groupId),
        activeBorderImage: boolean("Activer border de l'image", false, groupId),
        inversed: boolean('Inverser template', false, groupId),
        colImage: select('Nombre des colonnes', numberCols, 5, groupId),
    }
    return (
        <DirectionManager dir={rtl ? 'rtl' : 'ltr'}>
            <ContenuImageContainer data={rtl ? data_ar : data}/>
        </DirectionManager>
    );
}

export const Variant2 = () => {
    const rtl = boolean('Activer RTl', activeRtl, groupRtl)
    const data = {
        imgUrl: ContenuImg,
        title: "This is the title",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cupiditate enim eos fuga illo, libero minus, nam praesentium quidem quod, ratione temporibus voluptas! Atque consectetur dignissimos doloremque doloribus hic pariatur.",
        cta_text: "En savoir plus",
        cta_url: '/',
        activeBorder: boolean('Activer Border', true, groupId),
        activeBorderImage: boolean("Activer border de l'image", false, groupId),
        inversed: boolean('Inverser template', true, groupId),
        colImage: select('Nombre des colonnes', numberCols, 3, groupId),
    }
    const data_ar = {
        imgUrl: ContenuImg,
        title: "هذا هو العنوان",
        description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
        cta_text: 'اقرأ أكثر',
        cta_url: '/',
        activeBorder: boolean('Activer Border', true, groupId),
        activeBorderImage: boolean("Activer border de l'image", false, groupId),
        inversed: boolean('Inverser template', true, groupId),
        colImage: select('Nombre des colonnes', numberCols, 3, groupId),
    }
    return (
        <DirectionManager dir={rtl ? 'rtl' : 'ltr'}>
            <ContenuImageContainer data={rtl ? data_ar : data}/>
        </DirectionManager>
    )
}

export const Variant3 = () => {
    const rtl = boolean('Activer RTl', activeRtl, groupRtl)
    const data = {
        imgUrl: ContenuImg,
        title: "This is the title",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cupiditate enim eos fuga illo, libero minus, nam praesentium quidem quod, ratione temporibus voluptas! Atque consectetur dignissimos doloremque doloribus hic pariatur.",
        cta_text: "En savoir plus",
        cta_url: '/',
        activeBorder: boolean('Activer Border', false, groupId),
        activeBorderImage: boolean("Activer border de l'image", true, groupId),
        inversed: boolean('Inverser template', false, groupId),
        colImage: select('Nombre des colonnes', numberCols, 5, groupId),
    }
    const data_ar = {
        imgUrl: ContenuImg,
        title: "هذا هو العنوان",
        description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
        cta_text: 'اقرأ أكثر',
        cta_url: '/',
        activeBorder: boolean('Activer Border', false, groupId),
        activeBorderImage: boolean("Activer border de l'image", true, groupId),
        inversed: boolean('Inverser template', false, groupId),
        colImage: select('Nombre des colonnes', numberCols, 5, groupId),
    }
    return (
        <DirectionManager dir={rtl ? 'rtl' : 'ltr'}>
            <ContenuImageContainer data={rtl ? data_ar : data}/>
        </DirectionManager>
    );
}


export default {
    title: 'Dynamic Fields/contenu Image',
    decorators: [withKnobs],
};
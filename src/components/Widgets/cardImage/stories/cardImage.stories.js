import React from 'react';
import {withKnobs, select, boolean, text} from "@storybook/addon-knobs";
import imageContent from "../../staticAssets/image.png"
import {CardImageContainer} from "../cardImage.container";
import {DirectionManager} from "../../../../core/dir-manager";

const groupId = 'Options';
const groupRtl = "Version arabe"
const activeRtl = false
const colsNumbers = [2, 3, 4];

export const Variant1 = () => {
    const rtl = boolean('Activer RTl', activeRtl, groupRtl)
    const data = {
        bigTitle: "This is the big title",
        intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at corporis, culpa dignissimos error explicabo incidunt inventore ipsa ipsum laborum maiores molestiae nihil nostrum possimus quaerat quia recusandae totam voluptatum!",
        colCount: select("Nombres de colonnes", colsNumbers, 3, groupId),
        centercontent: boolean('Centrer le contenu', true, groupId),
        activeBorder: boolean('Activer bordur', false, groupId),
        items: [
            {
                pictoImg: imageContent,
                title: "this is title 1",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.",
                cta_text: "En savoir plus",
                cta_url: "/",
            },
            {
                pictoImg: imageContent,
                title: "this is title 2",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.",
                cta_text: "En savoir plus",
                cta_url: "/",
            },
            {
                pictoImg: imageContent,
                title: "this is title 3",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.",
                cta_text: "En savoir plus",
                cta_url: "/",
            },
        ]
    }
    const data_ar = {
        bigTitle: "هذا هو العنوان الكبير",
        intro: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
        colCount: select("Nombres de colonnes", colsNumbers, 3, groupId),
        centercontent: boolean('Centrer le contenu', true, groupId),
        activeBorder: boolean('Activer bordur', false, groupId),
        items: [
            {
                pictoImg: imageContent,
                title: "هذا هو العنوان",
                description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
                cta_text: 'اقرأ أكثر',
                cta_url: "/",
            },
            {
                pictoImg: imageContent,
                title: "هذا هو العنوان",
                description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
                cta_text: 'اقرأ أكثر',
                cta_url: "/",
            },
            {
                pictoImg: imageContent,
                title: "هذا هو العنوان",
                description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
                cta_text: 'اقرأ أكثر',
                cta_url: "/",
            },
        ]
    }
    return (
        <DirectionManager dir={rtl ? 'rtl' : 'ltr'}>
            <CardImageContainer data={rtl ? data_ar : data}/>
        </DirectionManager>
    )
}
export const Variant2 = () => {
    const rtl = boolean('Activer RTl', activeRtl, groupRtl)
    const data = {
        colCount: select("Nombres de colonnes", colsNumbers, 4, groupId),
        centercontent: boolean('Centrer le contenu', false, groupId),
        activeBorder: boolean('Activer bordur', false, groupId),
        items: [
            {
                pictoImg: imageContent,
            },
            {
                pictoImg: imageContent,
            },
            {
                pictoImg: imageContent,
            },
            {
                pictoImg: imageContent,
            },
        ]
    }
    return (
        <DirectionManager dir={rtl ? 'rtl' : 'ltr'}>
            <CardImageContainer data={data}/>
        </DirectionManager>
    )
}
export const Variant3 = () => {
    const rtl = boolean('Activer RTl', activeRtl, groupRtl)
    const data = {
        colCount: select("Nombres de colonnes", colsNumbers, 2, groupId),
        centercontent: boolean('Centrer le contenu', false, groupId),
        activeBorder: boolean('Activer bordur', true, groupId),
        items: [
            {
                pictoImg: imageContent,
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.",
            },
            {
                pictoImg: imageContent,
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.",
            },
        ]
    }
    const data_ar = {
        colCount: select("Nombres de colonnes", colsNumbers, 2, groupId),
        centercontent: boolean('Centrer le contenu', false, groupId),
        activeBorder: boolean('Activer bordur', true, groupId),
        items: [
            {
                pictoImg: imageContent,
                description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
            },
            {
                pictoImg: imageContent,
                description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
            },
        ]
    }
    return (
        <DirectionManager dir={rtl ? "rtl" : "ltr"}>
            <CardImageContainer data={rtl ? data_ar : data}/>
        </DirectionManager>
    )
}


export default {
    title: 'Dynamic Fields/Card Image',
    decorators: [withKnobs],
};


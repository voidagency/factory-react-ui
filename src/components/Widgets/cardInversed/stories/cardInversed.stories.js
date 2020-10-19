import React from 'react';
import {withKnobs, boolean, text} from "@storybook/addon-knobs";
import CardImg from '../../staticAssets/img1.jpg'
import {CardInversedContainer} from "../cardInversed.container";
import {DirectionManager} from "../../../../core/dir-manager";

// Variable for kbobs
const groupId = 'Options';
const groupRtl = "Version arabe"
const activeRtl = false

export const Variant1 = () => {
    const rtl = boolean('Activer RTl', activeRtl, groupRtl)
    const data = {
        centercontent: boolean("Centrer le contenu", false, groupId),
        activeBorder: boolean("Ajouter border", false, groupId),
        items: [
            {
                imgUrl: CardImg,
                title: "this is title 1",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.",
                cta_text: "En savoir plus",
                cta_url: "/",
            },
            {
                imgUrl: CardImg,
                title: "this is title 2",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.",
                cta_text: "En savoir plus",
                cta_url: "/",
            },
            {
                imgUrl: CardImg,
                title: "this is title 3",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.",
                cta_text: "En savoir plus",
                cta_url: "/",
            },
            {
                imgUrl: CardImg,
                title: "this is title 4",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.",
                cta_text: "En savoir plus",
                cta_url: "/",
            },
        ]
    }
    const data_ar = {
        centercontent: boolean("Centrer le contenu", false, groupId),
        activeBorder: boolean("Ajouter border", false, groupId),
        items: [
            {
                imgUrl: CardImg,
                title: "هذا هو العنوان",
                description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
                cta_text: 'اقرأ أكثر',
                cta_url: "/",
            },
            {
                imgUrl: CardImg,
                title: "هذا هو العنوان",
                description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
                cta_text: 'اقرأ أكثر',
                cta_url: "/",
            },
            {
                imgUrl: CardImg,
                title: "هذا هو العنوان",
                description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
                cta_text: 'اقرأ أكثر',
                cta_url: "/",
            },
            {
                imgUrl: CardImg,
                title: "هذا هو العنوان",
                description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
                cta_text: 'اقرأ أكثر',
                cta_url: "/",
            },
        ]
    }
    return (
        <DirectionManager dir={rtl ? 'rtl' : 'ltr'}>
            <CardInversedContainer data={rtl ? data_ar : data}/>
        </DirectionManager>
    )
}

export const Variant2 = () => {
    const rtl = boolean('Activer RTl', activeRtl, groupRtl)
    const data = {
        bigTitle: "This is the big title",
        intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at corporis, culpa dignissimos error explicabo incidunt inventore ipsa ipsum laborum maiores molestiae nihil nostrum possimus quaerat quia recusandae totam voluptatum!",
        centercontent: boolean("Centrer le contenu", false, groupId),
        activeBorder: boolean("Ajouter border", true, groupId),
        items: [
            {
                imgUrl: CardImg,
                title: "this is title 1",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.",
                cta_text: "En savoir plus",
                cta_url: "/",
            },
            {
                imgUrl: CardImg,
                title: "this is title 2",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.",
                cta_text: "En savoir plus",
                cta_url: "/",
            },
            {
                imgUrl: CardImg,
                title: "this is title 3",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.",
                cta_text: "En savoir plus",
                cta_url: "/",
            },
            {
                imgUrl: CardImg,
                title: "this is title 4",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.",
                cta_text: "En savoir plus",
                cta_url: "/",
            },
        ]
    }
    const data_ar = {
        bigTitle: "هذا هو العنوان الكبير",
        intro: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
        centercontent: boolean("Centrer le contenu", false, groupId),
        activeBorder: boolean("Ajouter border", true, groupId),
        items: [
            {
                imgUrl: CardImg,
                title: "هذا هو العنوان",
                description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
                cta_text: 'اقرأ أكثر',
                cta_url: "/",
            },
            {
                imgUrl: CardImg,
                title: "هذا هو العنوان",
                description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
                cta_text: 'اقرأ أكثر',
                cta_url: "/",
            },
            {
                imgUrl: CardImg,
                title: "هذا هو العنوان",
                description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
                cta_text: 'اقرأ أكثر',
                cta_url: "/",
            },
            {
                imgUrl: CardImg,
                title: "هذا هو العنوان",
                description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
                cta_text: 'اقرأ أكثر',
                cta_url: "/",
            },
        ]
    }
    return (
        <DirectionManager dir={rtl ? 'rtl' : 'ltr'}>
            <CardInversedContainer data={rtl ? data_ar : data}/>
        </DirectionManager>
    )
}


export default {
    title: 'Dynamic Fields/Cards inversed',
    decorators: [withKnobs],
};


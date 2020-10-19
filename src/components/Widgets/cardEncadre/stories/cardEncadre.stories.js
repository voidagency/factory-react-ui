import React from 'react';
import {withKnobs, boolean, select, text} from "@storybook/addon-knobs";
import PictoImage from "../../staticAssets/pictoImage.png"
import {DirectionManager} from "../../../../core/dir-manager";
import {CardEncadreContainer} from "../cardEncadre.container";

const groupId = 'Options';
const groupRtl = "Version arabe"
const activeRtl = false
const colsNumbers = [2, 3, 4];

export const Variant1 = () => {
    const rtl = boolean('Activer RTl', activeRtl, groupRtl)
    const data = {
        bigTitle: "This is the big title",
        intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at corporis, culpa dignissimos error explicabo incidunt inventore ipsa ipsum laborum maiores molestiae nihil nostrum possimus quaerat quia recusandae totam voluptatum!",
        colCount: select("Numbers of cols", colsNumbers, 4, groupId),
        centercontent: boolean("Centrer le contenu", false, groupId),
        items: [
            {
                title: "this is title 1",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.",
            },
            {
                title: "this is title 2",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.",
            },
            {
                title: "this is title 3",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.",
            },
            {
                title: "this is title 4",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.",
            },
        ]
    }
    const data_ar = {
        bigTitle: "هذا هو العنوان الكبير",
        intro: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
        colCount: select("Numbers of cols", colsNumbers, 4, groupId),
        centercontent: boolean("Centrer le contenu", false, groupId),
        items: [
            {
                title: "هذا هو العنوان",
                description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
            },
            {
                title: "هذا هو العنوان",
                description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
            },
            {
                title: "هذا هو العنوان",
                description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
            },
            {
                title: "هذا هو العنوان",
                description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
            },
        ]
    }
    return (
        <DirectionManager dir={rtl ? 'rtl' : 'ltr'}>
            <CardEncadreContainer data={rtl ? data_ar : data}/>
        </DirectionManager>
    )
}
export const Variant2 = () => {
    const rtl = boolean('Activer RTl', activeRtl, groupRtl)
    const data = {
        colCount: select("Numbers of cols", colsNumbers, 3, groupId),
        centercontent: boolean("Centrer le contenu", true, groupId),
        items: [
            {
                title: "this is title 1",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.",
                cta_text: 'Lire plus',
                cta_url: "/"
            },
            {
                title: "this is title 2",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.",
                cta_text: 'Lire plus',
                cta_url: "/"
            },
            {
                title: "this is title 3",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.",
                cta_text: 'Lire plus',
                cta_url: "/"
            },
        ]
    }
    const data_ar = {
        colCount: select("Numbers of cols", colsNumbers, 3, groupId),
        centercontent: boolean("Centrer le contenu", true, groupId),
        items: [
            {
                title: "هذا هو العنوان",
                description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
                cta_text: 'اقرأ أكثر',
                cta_url: "/"
            },
            {
                title: "هذا هو العنوان",
                description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
                cta_text: 'اقرأ أكثر',
                cta_url: "/"
            },
            {
                title: "هذا هو العنوان",
                description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
                cta_text: 'اقرأ أكثر',
                cta_url: "/"
            },
        ]
    }
    return (
        <DirectionManager dir={rtl ? 'rtl' : 'ltr'}>
            <CardEncadreContainer data={rtl ? data_ar : data}/>
        </DirectionManager>
    )
}
export const Variant3 = () => {
    const rtl = boolean('Activer RTl', activeRtl, groupRtl)
    const data = {
        bigTitle: "This is the big title",
        intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at corporis, culpa dignissimos error explicabo incidunt inventore ipsa ipsum laborum maiores molestiae nihil nostrum possimus quaerat quia recusandae totam voluptatum!",
        colCount: select("Numbers of cols", colsNumbers, 4, groupId),
        centercontent: boolean("Centrer le contenu", true, groupId),
        items: [
            {
                pictoImg: PictoImage,
                title: "this is title 1",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.",
            },
            {
                pictoImg: PictoImage,
                title: "this is title 2",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.",
            },
            {
                pictoImg: PictoImage,
                title: "this is title 3",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.",
            },
            {
                pictoImg: PictoImage,
                title: "this is title 4",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.",
            },
        ]
    }
    const data_ar = {
        bigTitle: "هذا هو العنوان الكبير",
        intro: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
        colCount: select("Numbers of cols", colsNumbers, 4, groupId),
        centercontent: boolean("Centrer le contenu", true, groupId),
        items: [
            {
                pictoImg: PictoImage,
                title: "هذا هو العنوان",
                description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
            },
            {
                pictoImg: PictoImage,
                title: "هذا هو العنوان",
                description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
            },
            {
                pictoImg: PictoImage,
                title: "هذا هو العنوان",
                description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
            },
            {
                pictoImg: PictoImage,
                title: "هذا هو العنوان",
                description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
            },
        ]
    }
    return (
        <DirectionManager dir={rtl ? 'rtl' : 'ltr'}>
            <CardEncadreContainer data={rtl ? data_ar : data}/>
        </DirectionManager>
    )
}


export default {
    title: 'Dynamic Fields/Card Encadre',
    decorators: [withKnobs],
};


import React from 'react'
import img_1 from '../../media/gallery/img1.jpeg'
import img_2 from '../../media/gallery/img2.jpeg'
import img_3 from '../../media/gallery/img3.jpeg'
import img_4 from '../../media/gallery/img4.jpeg'
import img_5 from '../../media/gallery/img5.jpeg'
import img_6 from '../../media/gallery/img6.jpeg'
import banner from '../../media/gallery/banner.jpg'


export const photoContext = React.createContext()

export const photoObj = {
    img_1 : img_1,
    img_2 : img_2,
    img_3 : img_3,
    img_4 : img_4,
    img_5 : img_5,
    img_6 : img_6,
    img_7 : img_1,
    img_8 : img_2,
    img_9 : img_3,
    img_10 : img_4,
    banner : banner,
}

export const imgArr = [img_1, img_2, img_3, img_4, img_5, img_6]
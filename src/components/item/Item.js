import React from 'react'
import LazyLoad from 'react-lazyload'
import { Link } from 'react-router-dom'
import { ItemContainer } from './ItemStyles'
import { IMAGE_URL, API_KEY_WITH_QP} from '../../config'

export const getImage = (imageIdentifier, date, identifier) => {
    const stringDateForImage = date.split(' ')[0]
        .split('-').join('/')

    return (
        <img src={`${IMAGE_URL}/${stringDateForImage}/png/${imageIdentifier}.png?${API_KEY_WITH_QP}`} />
    )
}

export const Item = ({ identifier, image, date, onSelect }) => (
    <ItemContainer onClick={onSelect}>
        {getImage(image, date, identifier)}
    </ItemContainer>
)
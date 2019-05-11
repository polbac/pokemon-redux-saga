import React from 'react'
import { connect } from 'react-redux'
import { DetailContainer, DetailInfoContainer, CloseButton } from './DetailStyles'
import { getImage } from '../item/Item'
import { selectImage } from '../../ducks/images'

class Detail extends React.Component {
    render() {
        const { detail, close } = this.props

        if (detail === null) {
            return <React.Fragment />
        }

        const { 
            identifier, 
            caption, 
            centroid_coordinates, 
            image, 
            date,
            coords
        } = detail
        
        return (
            <DetailContainer>
                <CloseButton onClick={() => close()}>[ CLOSE ]</CloseButton>
                <DetailInfoContainer className='fade-in'>
                    <h2>id: {identifier}</h2>
                    <p>[{centroid_coordinates.lat}, {centroid_coordinates.lon}]</p>
                    <p>{caption}</p>
                </DetailInfoContainer>
                <div className='fade-in'>
                    {getImage(image, date, identifier)}
                </div>
                
                {Object.keys(coords).map(property => (
                    <DetailInfoContainer className='fade-in'>
                        <h3>{property}</h3>
                        [{Object.keys(coords[property]).map(insideProperty => (
                            <p>
                                {insideProperty}: {coords[property][insideProperty]}
                            </p>
                        ))}]
                    </DetailInfoContainer>
                ))}
            
                
            </DetailContainer>
        )
    }
}


const mapStateToProps = (store) => ({
    detail: store.images.image,
})

const mapDispatchToProps = (dispatch) => ({
    close: () => dispatch(selectImage(null))
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
import React from 'react'
import { connect } from 'react-redux'
import { Item } from '../item/Item'
import Preloading from '../preloading/Preloading'
import { API_URL_WITH_KEY } from '../../config'
import { setPreload, setList, selectImage } from '../../ducks/images'

class List extends React.Component {
    
    componentDidMount() {
        const { showSpinner, hideSpinner, setImageList } = this.props
        showSpinner()
        fetch(API_URL_WITH_KEY)
            .then(req => req.json())
            .then(list => {
                hideSpinner()
                setImageList(list)
            })
    }

    render() {
        const { list, preloading, selectImage } = this.props
        return (
            <section>
                <marquee>
                    <h2>DSCOVR's Earth Polychromatic Imaging Camera (EPIC)</h2>
                </marquee>
                
                {preloading && <Preloading />}

                {list.map(imageData => 

                <Item onSelect={() => selectImage(imageData)} {...imageData} />)}
            </section>
        )
    }
}

const mapStateToProps = (store) => ({
    list: store.images.list,
    preloading: store.images.preloading,
})

const mapDispatchToProps = (dispatch) => ({
    showSpinner: () => dispatch(setPreload(true)),
    hideSpinner: () => dispatch(setPreload(false)),
    setImageList: (list) => dispatch(setList(list)),
    selectImage: (image) => dispatch(selectImage(image)),
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
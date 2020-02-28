import React from 'react'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import './index.scss'
import saphoImage from '../../../images/sapho.png'
import starImage from '../../../images/star.png'


const SongSection1 = () => (
    <section className="container song-section song-section1">
        <div className="row">
            <div className="image-wrapper">
                <img className='sapho-image' src={saphoImage} alt="Sapho" />
                <img className='star-image' src={starImage} alt="star"/>
                <p className="image-caption"><i><FormattedMessage id="songSection1ImageCaption" /></i></p>
            </div>
            <h2 className='col'><FormattedMessage id="songSection1Header" /></h2>
            <div className="col-7">
                <p><FormattedMessage id="songSection1Text1" /></p>
                <p><FormattedMessage id="songSection1Text2" /></p>
                <p><FormattedMessage id="songSection1Text3" /></p>
                <p><FormattedMessage id="songSection1Text4" /></p>
                <div className="poem">
                    <p><FormattedHTMLMessage id="songSection1PoemHeader" /></p>
                    <p><FormattedHTMLMessage id="songSection1Poem" /></p>
                </div>
                <p><FormattedMessage id="songSection1Text5" /></p>
            </div>
        </div>
    </section>
)

export default SongSection1
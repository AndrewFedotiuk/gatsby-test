import React from 'react'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import './index.scss'
import image1 from '../../../images/R_06.png'
import image2 from '../../../images/R_06_2.png'


const BannerSection = () => (
    <section className='banner-section'>
        <div className="image-wrapper">
            <img style={{ top: '100px', right: '150px' }} className='earphone' src={image1} alt="Earphone" />
            <img style={{ top: '-20px', right: '0' }} className='earphone' src={image2} alt="Earphone" />
        </div>

        <div className="container">
            <div className="row">
                <p className="col-3 logo">WAS</p>
                <div className="col-md-7">

                    <p>
                        <FormattedHTMLMessage id="bannerSectionText1" />
                    </p>
                    <p>
                        <FormattedMessage id="bannerSectionText2" />
                    </p>
                </div>

            </div>
        </div>
    </section >
)

export default BannerSection
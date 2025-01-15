import React from 'react'

const FooterBanner = ({footerBanner}) => {
  return (
    <div className='footer-banner-container'>
      <div className="banner-desc">
        <div className="left">{footerBanner.discount}</div>
        <div className="right"></div>
      </div>
    </div>
  )
}

export default FooterBanner
import React from 'react'
import Helmet from 'react-helmet'
import { injectIntl } from 'react-intl'
import { Context } from '../Context'

const SEO = ({ location = '', title, intl: { formatMessage } }) => (
	<Context.Consumer>
		{({ lang }) => {
			return (
				<Helmet>
					<html lang={lang} dir={lang === 'en' ? 'en' : 'ru'} />
					<link rel="canonical" href={`/${lang}`} />

					<link rel='stylesheet' href='https://use.typekit.net/hkx6ahs.css' />
					
					<meta property="og:url" content={`/${location}`} />
					<title>
						{formatMessage({ id: title })}
					</title>
				</Helmet>
			)
		}}
	</Context.Consumer>
)

export default injectIntl(SEO)

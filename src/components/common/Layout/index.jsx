import React from 'react'
import Helmet from 'react-helmet'
import en from 'react-intl/locale-data/en'
import ru from 'react-intl/locale-data/ru'
import { addLocaleData, IntlProvider } from 'react-intl'
import localEng from '../../../../data/en.json'
import localRu from '../../../../data/ru.json'
import { Context } from '../Context'
import Provider from './Provider'
import './layout.scss'

addLocaleData([...ru, ...en])

const messages = {
	ru: localRu,
	en: localEng
}

const Layout = ({ children }) => (
	<Provider>
		<Helmet>
			<link rel='stylesheet' href='https://use.typekit.net/hkx6ahs.css' />
		</Helmet>
		<Context.Consumer>
			{({ lang }) => (
				<IntlProvider locale={lang} messages={messages[lang]}>
					<>
						{children}
					</>
				</IntlProvider>
			)
			}
		</Context.Consumer>
	</Provider>
)

export { Layout }

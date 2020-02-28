import React from 'react'
import en from 'react-intl/locale-data/en'
import ru from 'react-intl/locale-data/ru'
import { addLocaleData, IntlProvider } from 'react-intl'
import localEng from '../../../../data/en.json'
import localRu from '../../../../data/ru.json'
import { Context } from '../Context'
import Provider from './Provider'
import './layout.scss'

addLocaleData([...en, ...ru])

const messages = {
	en: localEng,
	ru: localRu
}

const Layout = ({ children }) => (
	<Provider>
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

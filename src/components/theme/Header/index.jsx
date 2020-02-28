import React from 'react'
import { Link } from 'gatsby'
import { FormattedMessage } from 'react-intl'
import { Context } from '../../common'
import SelectLanguage from './SelectLanguage'

const Header = () => (
	<Context.Consumer>
		{({ toggleLanguage, lang }) => (
			<>

				<FormattedMessage id="logo" />
				<Link to="/">
					<FormattedMessage id="home" />
				</Link>
				<SelectLanguage lang={lang} toggleLanguage={toggleLanguage} />
			</>
		)}
	</Context.Consumer>
)

export default Header

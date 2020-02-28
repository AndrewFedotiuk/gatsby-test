import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Layout } from '../components/common'
import SEO from '../components/common/SEO'
import Header from '../components/theme/Header'

const NotFoundPage = () => (
	<Layout>
		<SEO title="not_found" />
		<Header />
		<h2>
			<FormattedMessage id="not_found" />
		</h2>
	</Layout>
)

export default NotFoundPage

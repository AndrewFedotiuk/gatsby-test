import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Layout } from '../components/common'
import SEO from '../components/common/SEO'
import Header from '../components/theme/Header'

const IndexPage = () => (
	<Layout>
	<SEO title="welcome" />
		<Header />
		<h2>
			<FormattedMessage id="welcome" />
		</h2>
	</Layout>
)


export default IndexPage

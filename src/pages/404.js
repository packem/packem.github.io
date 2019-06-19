import React from 'react'
import { Link } from 'gatsby'

import { Spirit } from '../styles/spirit-styles'
import { Layout } from '../components/common/layout'
import { Icon } from '../components/common'

const NotFoundPage = () => (
    <Layout headerDividerStyle="shadow">
        <div className={`${Spirit.page.m} pt-vw5 pb-vw5 flex flex-column items-center`}>
            <Icon name="four-o-four-icon" className="w15 h-auto stroke-lightgrey" />
            <h1 style={{fontWeight: 700}} className={Spirit.h1}>404</h1>
            <p className={`${Spirit.p} midgrey`}>Achtung! That page doesn&#39;t seem to exist.</p>
            <div className="flex mt5">
                <Link to="/" className="pa2 dib yellow-d3 hover-darkgrey link br b--whitegrey">Homepage</Link>
            </div>
        </div>
    </Layout>
)

export default NotFoundPage

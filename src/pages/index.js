import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { Icon, Box } from '../components/common'
import { Layout } from '../components/common/layout'
import { HomeHeader, HomeAPIBox, HomeFAQLink } from '../components/home'
import { Spirit } from '../styles/spirit-styles'
import { MetaData, getMetaImageUrls } from '../components/common/meta'

const HomePage = ({ data, location }) => {
    // Add meta title and description for this page here to overwrite the site meta data as set in the config
    const title = `Packem`
    const description = `Packem is a compiled ES module bundler and linker.`
    const imageUrl = getMetaImageUrls()

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="website"
                title={title}
                description={description}
                image={imageUrl}
            />
            <Layout
                headerDividerStyle="shadow"
                bodyClass="bg-white"
                mainClass="bg-whitegrey-l2 pb-vw6 pb-vw3-ns"
                header={<HomeHeader />}
            >
                <div className="pt-vw3 home-main-box-padding-ns">
                    <div className={`${Spirit.page.xl} grid-12 gutter-row-20 gutter-40-ns`}>

                        <section className="col-12 col-6-ns flex flex-column justify-between mt4 mt0-ns">
                            <h1 className={`${Spirit.h3} link darkgrey hover-midgrey flex-grow-0`}>Main Features</h1>

                            <Box className="mt5 tdn flex-auto flex flex-column items-stretch" elevation="1">
                                <HomeAPIBox
                                    to="/api/#frontend-sdk"
                                    title="Safe Binaries"
                                    icon="sdks"
                                >
                                    Uses precompiled Rust during build-time as safe Node C/C++ Addons.
                                </HomeAPIBox>
                                <HomeAPIBox
                                    to="/api/#rest-api"
                                    title="Extremely Fast"
                                    icon="rocket"
                                >
                                    Packem is <b>+2X faster than Parcel with multicore compilation</b>.
                                </HomeAPIBox>
                                <HomeAPIBox
                                    to="/api/#tools"
                                    title="Comprehensive Plugin API"
                                    icon="rest-api"
                                >
                                    Create plugins cheaply, yet making the most of it.
                                </HomeAPIBox>
                            </Box>
                        </section>

                        <section className="col-12 col-6-ns mt0-ns bt bn-ns b--whitegrey nl5 nr5 nl0-ns nr0-ns ml0-ns mr0-ns pl5 pr5 pl0-ns pr0-ns pt5 pt0-ns ">
                            <h1 className={`${Spirit.h3} link darkgrey hover-midgrey`}>Latest Updates</h1>
                            <div className="mt3 mt7-ns">
                                <HomeFAQLink to="/#" title="Update site UI ">
                                    The traditional React-ish style Gatsby template was removed due to subtle misleading effects. Packem's new site comes with a completely refreshing UI.
                                </HomeFAQLink>

                                <HomeFAQLink to="https://github.com/packem/packem/releases/tag/0.1.4" title="Latest packem@0.1.4 patch comes with improved builds! 🚀">
                                    This patch resolves a few internal CI issues in previous builds and comes with better build improvements.
                                </HomeFAQLink>

                                <HomeFAQLink to="https://github.com/packem/packem/issues/7" title="MacOS binaries marked as Release Candidate ✔">
                                    Orginally, MacOS builds were not yet battle-tested towards release. With the upcoming packem@0.1.4 patch release, drastic build improvisions will be countered.
                                </HomeFAQLink>

                                <Link to="/faq/" className={`${Spirit.p} midgrey fw5 link hover-blue`}>View entire changelog...</Link>
                            </div>
                        </section>
                    </div>

                    {/* <section className={`${Spirit.page.xl} col-12 mt8 mt-vw3-ns bt bn-ns b--whitegrey pt5 pt0-ns`}>
                        <Link to="/integrations/" className={`${Spirit.h3} link darkgrey hover-midgrey`}>Integrations</Link>
                        <p className={`${Spirit.p} mt2 midgrey flex flex-column flex-row-ns justify-between items-center-ns`}>
                            All your favourite apps and tools, integrated with Ghost.
                            <Link to="/integrations/" className="blue link din nb1 mt2 mt0-ns hover-underline-blue">
                                <span className="flex items-center fw5">Browse all integrations <Icon name="arrow-right" className="w3 h3 ml1 fill-blue" /></span>
                            </Link>
                        </p>
                        <div className="grid-integrations-index mt4 mt6-l f8">
                            <Box to="/integrations/zapier/" className="flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn tc" elevation="2" radius="4">
                                <img className="w10 mb1" src="https://res.cloudinary.com/tryghost/image/fetch/w_120,h_100,c_fit/https://docs.ghost.io/content/images/2018/09/zapier.png" alt="Zapier" />
                                Zapier
                            </Box>
                            <Box to="/integrations/disqus/" className="flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn tc" elevation="2" radius="4">
                                <img className="w10 mb1" src="https://res.cloudinary.com/tryghost/image/fetch/w_120,h_100,c_fit/https://docs.ghost.io/content/images/2018/09/disqus.svg" alt="Disqus" />
                                Disqus
                            </Box>
                            <Box to="/integrations/slack/" className="flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn tc" elevation="2" radius="4">
                                <img className="w10 mb1" src="https://res.cloudinary.com/tryghost/image/fetch/w_120,h_100,c_fit/https://docs.ghost.io/content/images/2018/09/slack.png" alt="Slack" />
                                Slack
                            </Box>
                            <Box to="/integrations/unsplash/" className="flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn tc" elevation="2" radius="4">
                                <img className="w10 mb1" src="https://res.cloudinary.com/tryghost/image/fetch/w_120,h_100,c_fit/https://docs.ghost.io/content/images/2018/09/unsplash.svg" alt="Unsplash" />
                                Unsplash
                            </Box>
                            <Box to="/integrations/google/" className="flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn tc" elevation="2" radius="4">
                                <img className="w10 mb1" src="https://res.cloudinary.com/tryghost/image/fetch/w_120,h_100,c_fit/https://docs.ghost.io/content/images/2018/09/google-analytics-1.png" alt="Google Analytics" />
                                Google Analytics
                            </Box>
                            <Box to="/integrations/mailchimp/" className="flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn tc" elevation="2" radius="4">
                                <img className="w10 mb1" src="https://res.cloudinary.com/tryghost/image/fetch/w_120,h_100,c_fit/https://docs.ghost.io/content/images/2018/09/mailchimp.png" alt="Mailchimp" />
                                Mailchimp
                            </Box>
                            <Box to="/integrations/google-amp/" className="flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn tc" elevation="2" radius="4">
                                <img className="w10 mb1" src="https://res.cloudinary.com/tryghost/image/fetch/w_120,h_100,c_fit/https://docs.ghost.io/content/images/2018/09/amp.jpg" alt="Google AMP" />
                                Google AMP
                            </Box>
                            <Box to="/integrations/" className="flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn" elevation="2" radius="4">
                                <Icon name="more" className="w8 nudge-top--6" />
                                See More
                            </Box>
                        </div>
                    </section> */}
                </div>
            </Layout>
        </>
    )
}

HomePage.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                siteUrl: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
}

export default HomePage

export const pageQuery = graphql`
    query {
        site {
            ...SiteMetaFields
        }
    }
`

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useTranslation } from 'next-i18next';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import { useSpacing } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';
import Header from '~/components/Header/BlogHeader';
import Headline from '~/components/Blog/Headline';
import PostCard from '~/components/Cards/PostCard';
import Sidebar from '~/components/Blog/Sidebar';
import Footer from '~/components/Footer';
import brand from '~/public/text/brand';
import link from '~/public/text/link';

function BlogHome(props) {
  const classes = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  const { t } = useTranslation('common');

  return (
    <Fragment>
      <Head>
        <title>
          { brand.agency.name }
          &nbsp; - Blog
        </title>
      </Head>
      <CssBaseline />
      <section id="home" />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <div className={classes.containerGeneral}>
          <Box pt={{ xs: 5, sm: 2 }}>
            <Container>
              <Grid container spacing={3}>
                <Grid item sm={12}>
                  <Headline />
                </Grid>
              </Grid>
              <Box mt={{ xs: 5, sm: 8 }}>
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <PostCard
                      href={link.agency.blogDetail}
                      img={imgAPI.photo[37]}
                      title="Maecenas rutrum dolor sed nisi"
                      desc="Proin pretium arcu eget metus porta consectetur Pellentesque habitant"
                      date="12 Nov 2020"
                      orientation="landscape"
                      type="round"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <PostCard
                      href={link.agency.blogDetail}
                      img={imgAPI.photo[36]}
                      title="Maecenas rutrum dolor sed nisi"
                      desc="Proin pretium arcu eget metus porta consectetur Pellentesque habitant"
                      date="12 Nov 2020"
                      orientation="landscape"
                      type="round"
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box mt={{ xs: 5, sm: 2 }}>
                <Grid spacing={4} container>
                  <Grid item md={8} xs={12}>
                    {[...Array(6)].map((e, index) => (
                      <Box
                        key={index.toString()}
                        mt={index > 0 ? 8 : 0}
                      >
                        <PostCard
                          href={link.agency.blogDetail}
                          img={imgAPI.photo[30 + index]}
                          title="Maecenas rutrum dolor sed nisi"
                          desc="Maecenas rutrum dolor sed nisi maximus rhoncus. Nunc vel dignissim enim. Proin pretium arcu eget"
                          date="12 Nov 2020"
                          orientation="portrait"
                          type="over"
                        />
                      </Box>
                    ))}
                    <Box mt={5} className={classes.arrow}>
                      <Grid container justifyContent="space-between">
                        <Button>
                          <ArrowBackIcon />
                          {t('btn_prev')}
                        </Button>
                        <Button>
                          {t('btn_next')}
                          <ArrowForwardIcon />
                        </Button>
                      </Grid>
                    </Box>
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <Sidebar />
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </Box>
        </div>
        <div id="footer" className={classes.spaceTopShort}>
          <Footer toggleDir={onToggleDir} />
        </div>
      </div>
    </Fragment>
  );
}

BlogHome.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default BlogHome;

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

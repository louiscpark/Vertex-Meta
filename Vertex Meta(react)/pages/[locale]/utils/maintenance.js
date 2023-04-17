import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Head from 'next/head';
import Avatar from '@material-ui/core/Avatar';
import Build from '@material-ui/icons/Build';
import Hidden from '@material-ui/core/Hidden';
import Settings from '@material-ui/icons/SettingsApplications';
import Warning from '@material-ui/icons/Warning';
import { useTranslation } from 'next-i18next';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import PageDeco from '~/components/Decoration/PageDeco';
import { useSpacing, useTextAlign, useText } from '~/theme/common';
import brand from '~/public/text/brand';

function Maintenance() {
  const classes = useSpacing();
  const align = useTextAlign();
  const text = useText();
  const { t } = useTranslation('common');

  return (
    <Fragment>
      <Head>
        <title>
          { brand.agency.name }
          &nbsp; - Maintenance
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.colouredPage}>
        <PageDeco />
        <Container maxWidth="md">
          <div className={classes.fullScreenContainer}>
            <Grid container alignItems="center" justifyContent="center">
              <Grid item md={12} className={align.textCenter}>
                <Box display="flex" justifyContent="center">
                  <Avatar className={clsx(classes.primaryIcon, classes.maintenanceIcon)}><Build /></Avatar>
                  <Hidden xsDown>
                    <Avatar className={clsx(classes.secondaryIcon, classes.maintenanceIcon)}><Settings /></Avatar>
                  </Hidden>
                  <Hidden xsDown>
                    <Avatar className={clsx(classes.accentIcon, classes.maintenanceIcon)}><Warning /></Avatar>
                  </Hidden>
                </Box>
                <div className={align.textCenter}>
                  <h3 className={text.title2}>
                    {t('util_maintenance')}
                  </h3>
                  <h5 className={text.subtitle2}>
                    {t('util_maintenance_dec')}
                  </h5>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </Fragment>
  );
}

export default Maintenance;

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

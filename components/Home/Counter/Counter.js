import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import useStyles from './counter-style';

function Counter() {
  const { t } = useTranslation('common');
  const classes = useStyles();
  const text = useText();
  return (
    <div className={classes.counterWrap}>
      <Container fixed>
        <Grid container justifyContent="center" alignItems="center" spacing={6}>
          <Grid md={4} item>
            <div className={classes.counterItem}>
              <div className={classes.text}>
                <Typography variant="h3" className={text.title}>
                  +200
                </Typography>
                <Typography component="p" className={text.subtitle}>
                  {t('agency-landing.about_employee')}
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={4} item>
            <div className={classes.counterItem}>
              <div className={classes.text}>
                <Typography variant="h3" className={text.title}>
                  +500
                </Typography>
                <Typography component="p" className={text.subtitle}>
                  {t('agency-landing.about_projects')}
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={4} item>
            <div className={classes.counterItem}>
              <div className={classes.text}>
                <Typography variant="h3" className={text.title}>
                  +300
                </Typography>
                <Typography component="p" className={text.subtitle}>
                  {t('agency-landing.about_client')}
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Counter;

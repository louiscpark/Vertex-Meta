import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import useStyles from './list-style';
import imgAPI from '~/public/images/imgAPI';
import ProductCard from '../Cards/ProductCard';

function RelatedItems() {
  const classes = useStyles();
  const text = useText();
  const { t } = useTranslation('common');

  return (
    <Grid container justifyContent="center">
      <Grid item lg={10} md={12} xs={12}>
        <Box pt={5} py={2} px={{ xs: 2, sm: 0 }} pb={10}>
          <Box mb={3}>
            <h4 className={text.subtitle}>
              {t('list_related')}
            </h4>
          </Box>
          <Grid container className={classes.scrollTablet}>
            {[...Array(4)].map((e, index) => (
              <Grid
                item
                key={index.toString()}
                md={3}
                sm={4}
                xs={10}
              >
                <Box px={1}>
                  <ProductCard
                    rating={3}
                    price={20}
                    img={imgAPI.photo[20 + index]}
                    title="Sed lacinia velit"
                    desc="Proin pretium arcu eget metus porta consecteturc"
                    orientation="portrait"
                    type="full"
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default RelatedItems;

import React from 'react';
import styles from './SecondContents.scss';
import classNames from 'classnames/bind';
import {Grid, Paper} from 'material-ui';
import { GridList, GridListTile  } from 'material-ui/GridList';
import {Counter} from 'components';

const cx = classNames.bind(styles);

const SecondContents = () => {
  return (
      <Grid container spacing={0} className={cx('second')}>
        <Grid style={{'backgroundColor': '#f295a1'}} item xs={12} sm={6}>
          <Paper style={{'margin': '8px'}} elevation={4}>Paper</Paper>
        </Grid>
        <Grid style={{'backgroundColor': '#ee3a4e'}} item xs={12} sm={6}>다라마</Grid>
        <Grid style={{'backgroundColor': '#ee3a4e'}} item xs={12} sm={6}>
          <GridList style={{'backgroundColor': '#FAFAFA', 'color': 'black'}}>
            <GridListTile>
              <Counter/>
            </GridListTile>
            <GridListTile>456</GridListTile>
            <GridListTile>456</GridListTile>
            <GridListTile>456</GridListTile>
          </GridList>
        </Grid>
        <Grid style={{'backgroundColor': '#ee3a4e'}} item xs={12} sm={6}>
          <GridList style={{'backgroundColor': '#FAFAFA', 'color': 'black'}}>
            <GridListTile>123</GridListTile>
            <GridListTile>456</GridListTile>
            <GridListTile>456</GridListTile>
            <GridListTile>456</GridListTile>
          </GridList>
        </Grid>
      </Grid>
  );
};

export default SecondContents;

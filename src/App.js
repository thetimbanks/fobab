import React, { Component } from 'react';
import './App.css';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Chip from 'material-ui/Chip';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';

const theme = createMuiTheme({
  palette: {
    type: 'light', // Switching the dark mode on is a single property value change.
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography type="title" color="inherit">
                FOBAB
              </Typography>
            </Toolbar>
          </AppBar>

          <div className='category-header cider'>
           CIDER/MEAD/PERRY
          </div>

          <Card>
            <CardHeader
              avatar={
                <Avatar>
                  001
                </Avatar>
              }
              title="2 FOOLS CIDER"
              subheader='OLD FASHIONED BATCH 155'
            />
            <CardContent>
              <Typography component="p">Barrel Type: KOVAL BOURBON BARREL | <strong>ABV 7%</strong></Typography>
              <Typography component="p">
                Hard Apple Cider with tart cherry, orange peel, and organic raw sugar aged in a Koval bourbon barrel.
              </Typography>
            </CardContent>
            <CardActions disableActionSpacing>
              <Chip label="Best in Show" avatar={<Avatar>17</Avatar>} classes={{root: 'gold medal'}} />
            </CardActions>
          </Card>

          <Card>
            <CardHeader
              avatar={
                <Avatar>
                  002
                </Avatar>
              }
              title="ANGRY ORCHARD"
              subheader='UNDERSTOOD IN MOTION 03'
            />
            <CardContent>
              <Typography component="p">Barrel Type: FRENCH OAK | <strong>ABV 7.5%</strong></Typography>
              <Typography component="p">
                Blend of traditional bettersweet and sharp apples wild fermented and aged in various barrels - x calvados, x red and white wine, x cognac - aged on lees, unfiltered and packaged still.
              </Typography>
            </CardContent>
            <CardActions disableActionSpacing>
              <Chip label="3rd Place" avatar={<Avatar>17</Avatar>} classes={{root: 'bronze medal'}} />
            </CardActions>
          </Card>

          <div className='category-header fruit'>
           FRUIT BEER
          </div>

          <Card>
            <CardHeader
              avatar={
                <Avatar>
                  018
                </Avatar>
              }
              title="ALTER BREWING COMPANY"
              subheader='KINGS BLOOD'
            />
            <CardContent>
              <Typography component="p">Barrel Type: RED WINE AMERICAN OAK | <strong>ABV 5.5%</strong></Typography>
              <Typography component="p">
                Blend of traditional bettersweet and sharp apples wild fermented and aged in various barrels - x calvados, x red and white wine, x cognac - aged on lees, unfiltered and packaged still.
              </Typography>
            </CardContent>
          </Card>

          <Card>
            <CardHeader
              avatar={
                <Avatar>
                  019
                </Avatar>
              }
              title="BEAR REPUBLIC BREWING COMPANY"
              subheader='SANGIOVESE'
            />
            <CardContent>
              <Typography component="p">Barrel Type: OAK | <strong>ABV 8.7%</strong></Typography>
              <Typography component="p">
                Blend of traditional bettersweet and sharp apples wild fermented and aged in various barrels - x calvados, x red and white wine, x cognac - aged on lees, unfiltered and packaged still.
              </Typography>
            </CardContent>
          </Card>

          <div className='category-header specialty-strong'>
           SPECIALTY STRONG PORTER/STOUT (> 7% ABV.)
          </div>

          <Card>
            <CardHeader
              avatar={
                <Avatar>
                  030
                </Avatar>
              }
              title="18TH STREET BREWING"
              subheader='HUNTER COCONUT'
            />
            <CardContent>
              <Typography component="p">Barrel Type: JOURNEY BOURBON RYE | <strong>ABV 10%</strong></Typography>
              <Typography component="p">
                Blend of traditional bettersweet and sharp apples wild fermented and aged in various barrels - x calvados, x red and white wine, x cognac - aged on lees, unfiltered and packaged still.
              </Typography>
            </CardContent>
          </Card>

          <Card>
            <CardHeader
              avatar={
                <Avatar>
                  031
                </Avatar>
              }
              title="18TH STREET BEWING"
              subheader='HUNTER COFFEE'
            />
            <CardContent>
              <Typography component="p">Barrel Type: BUFFALO TRACE | <strong>ABV 10%</strong></Typography>
              <Typography component="p">
                Blend of traditional bettersweet and sharp apples wild fermented and aged in various barrels - x calvados, x red and white wine, x cognac - aged on lees, unfiltered and packaged still.
              </Typography>
            </CardContent>
          </Card>

          <div className='category-header barleywine'>
           BARLEYWINE/WHEATWINE
          </div>

          <Card>
            <CardHeader
              avatar={
                <Avatar>
                  091
                </Avatar>
              }
              title="AGAINST THE GRAIN"
              subheader='SOMETHING SPECIAL'
            />
            <CardContent>
              <Typography component="p">Barrel Type: BOURBON BARRELS | <strong>ABV 13%</strong></Typography>
              <Typography component="p">
                Blend of traditional bettersweet and sharp apples wild fermented and aged in various barrels - x calvados, x red and white wine, x cognac - aged on lees, unfiltered and packaged still.
              </Typography>
            </CardContent>
          </Card>

          <Card>
            <CardHeader
              avatar={
                <Avatar>
                  092
                </Avatar>
              }
              title="BEGYLE BREWING"
              subheader='BATCH #500'
            />
            <CardContent>
              <Typography component="p">Barrel Type: KIVAL 4 GRAIN WHISKEY BARREL | <strong>ABV 10%</strong></Typography>
              <Typography component="p">
                Blend of traditional bettersweet and sharp apples wild fermented and aged in various barrels - x calvados, x red and white wine, x cognac - aged on lees, unfiltered and packaged still.
              </Typography>
            </CardContent>
          </Card>

          <div className='category-header dark'>
           OTHER DARK BEER (> 7% ABV.)
          </div>

          <Card>
            <CardHeader
              avatar={
                <Avatar>
                  120
                </Avatar>
              }
              title="ALTER BREWING COMPANY"
              subheader='ELDER LORD FARQUAD (E.L.F.)'
            />
            <CardContent>
              <Typography component="p">Barrel Type: CALIFORNIA FEUTRAL RED WINE BARREL | <strong>ABV 12%</strong></Typography>
              <Typography component="p">
                Blend of traditional bettersweet and sharp apples wild fermented and aged in various barrels - x calvados, x red and white wine, x cognac - aged on lees, unfiltered and packaged still.
              </Typography>
            </CardContent>
          </Card>

          <div className='category-header pale'>
           OTHER PALE BEER (> 7% ABV.)
          </div>

          <Card>
            <CardHeader
              avatar={
                <Avatar>
                  149
                </Avatar>
              }
              title="3 SHEEPS BREWING CO"
              subheader='ROLL OUT THE BARREL'
            />
            <CardContent>
              <Typography component="p">Barrel Type: CHARDONNAY BARRELS | <strong>ABV 10.7%</strong></Typography>
              <Typography component="p">
                Blend of traditional bettersweet and sharp apples wild fermented and aged in various barrels - x calvados, x red and white wine, x cognac - aged on lees, unfiltered and packaged still.
              </Typography>
            </CardContent>
          </Card>

          <div className='category-header porter'>
           STRONG PORTER/STOUT (> 7% ABV.)
          </div>

          <Card>
            <CardHeader
              avatar={
                <Avatar>
                  172
                </Avatar>
              }
              title="4 HANDS BREWERY"
              subheader='AZZA'
            />
            <CardContent>
              <Typography component="p">Barrel Type: PORT BARRELS THAT FINISHED BOURBON | <strong>ABV 10.5%</strong></Typography>
              <Typography component="p">
                Blend of traditional bettersweet and sharp apples wild fermented and aged in various barrels - x calvados, x red and white wine, x cognac - aged on lees, unfiltered and packaged still.
              </Typography>
            </CardContent>
          </Card>

          <div className='category-header experimental'>
           SPECIALY/EXPERIMENTAL BEER
          </div>

          <Card>
            <CardHeader
              avatar={
                <Avatar>
                  223
                </Avatar>
              }
              title="4 HANDS BREWERY"
              subheader='GENEVIEVE'
            />
            <CardContent>
              <Typography component="p">Barrel Type: GIN BARREL | <strong>ABV 5.5%</strong></Typography>
              <Typography component="p">
                Blend of traditional bettersweet and sharp apples wild fermented and aged in various barrels - x calvados, x red and white wine, x cognac - aged on lees, unfiltered and packaged still.
              </Typography>
            </CardContent>
          </Card>

          <div className='category-header wild-brett'>
           WILD BEER/BRETT (NON-ACIDIC)
          </div>

          <Card>
            <CardHeader
              avatar={
                <Avatar>
                  248
                </Avatar>
              }
              title="ATOM BREWING COMPANY"
              subheader='ARLO'
            />
            <CardContent>
              <Typography component="p">Barrel Type: USED RED WINE BARRELS | <strong>ABV 6.5%</strong></Typography>
              <Typography component="p">
                Blend of traditional bettersweet and sharp apples wild fermented and aged in various barrels - x calvados, x red and white wine, x cognac - aged on lees, unfiltered and packaged still.
              </Typography>
            </CardContent>
          </Card>

          <div className='category-header wild-sour-acidic'>
           WILD BEER/SOURS (ACIDIC)
          </div>

          <Card>
            <CardHeader
              avatar={
                <Avatar>
                  274
                </Avatar>
              }
              title="10 BARREL BREWING"
              subheader='JUICY, MEET ZESTY'
            />
            <CardContent>
              <Typography component="p">Barrel Type: PINOT NOIR | <strong>ABV 6.8%</strong></Typography>
              <Typography component="p">
                Blend of traditional bettersweet and sharp apples wild fermented and aged in various barrels - x calvados, x red and white wine, x cognac - aged on lees, unfiltered and packaged still.
              </Typography>
            </CardContent>
          </Card>

          <div className='category-header wild-sour-fruit'>
           WILD BEER/SOURS (ACIDIC) W/ FRUIT
          </div>

          <Card>
            <CardHeader
              avatar={
                <Avatar>
                  325
                </Avatar>
              }
              title="10 BARREL BREWING"
              subheader='NATIVE GEM'
            />
            <CardContent>
              <Typography component="p">Barrel Type: PINOT NOIR | <strong>ABV 8.8%</strong></Typography>
              <Typography component="p">
                Blend of traditional bettersweet and sharp apples wild fermented and aged in various barrels - x calvados, x red and white wine, x cognac - aged on lees, unfiltered and packaged still.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import './About.css';
import rachel from '../assets/aniston-rachel.jpg';
import monica from '../assets/cox-monica.jpg';
import phoebe from '../assets/kudrow-phoebe.jpg';
import joey from '../assets/leblanc-joey.jpg';
import ross from '../assets/schwimmer-ross.jpg';
import chandler from '../assets/perry-chandler.jpg';

const About = () => {
  return (
    <Container className="about-page">
      <Typography variant="h2" gutterBottom>Friends/Cast</Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={2} sm={2}>
          <Card className="about-card">
            <CardMedia
              component="img"
              height="240"
              image={rachel}
              alt="rachel"
            />
            <CardContent>
              <Typography variant="h4" gutterBottom>Rachel</Typography>
              <Typography variant="body1">
                Jeniffer Aniston
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={2} sm={2}>
          <Card className="about-card">
            <CardMedia
              component="img"
              height="240"
              image={monica}
              alt="monica"
            />
            <CardContent>
              <Typography variant="h4" gutterBottom>Monica</Typography>
              <Typography variant="body1">
                Courteney Cox
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={2} sm={2}>
          <Card className="about-card">
            <CardMedia
              component="img"
              height="240"
              image={phoebe}
              alt="phoebe"
            />
            <CardContent>
              <Typography variant="h4" gutterBottom>Phoebe</Typography>
              <Typography variant="body1">
                Lisa Kudrow
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={2} sm={2}>
          <Card className="about-card">
            <CardMedia
              component="img"
              height="240"
              image={joey}
              alt="joey"
            />
            <CardContent>
              <Typography variant="h4" gutterBottom>Joey</Typography>
              <Typography variant="body1">
                Matt LeBlanc
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={2} sm={2}>
          <Card className="about-card">
            <CardMedia
              component="img"
              height="240"
              image={ross}
              alt="ross"
            />
            <CardContent>
              <Typography variant="h4" gutterBottom>Ross</Typography>
              <Typography variant="body1">
                David Schwimmer
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={2} sm={2}>
          <Card className="about-card">
            <CardMedia
              component="img"
              height="240"
              image={chandler}
              alt="chandler"
            />
            <CardContent>
              <Typography variant="h4" gutterBottom>Chandler</Typography>
              <Typography variant="body1">
                Matthew Perry
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Typography variant="body1" gutterBottom>
        <br/><br/><br/>
        <b>Jennifer Aniston as Rachel Green</b><br/><br/>
        Jennifer Aniston stars as Rachel Green, the fashion-savvy and sometimes slightly ditzy friend who evolves from a runaway bride into a successful fashion executive. Aniston's portrayal of Rachel earned her numerous awards, including an Emmy and a Golden Globe, solidifying her as a beloved television icon.<br/><br/>

        <b>Courteney Cox as Monica Geller</b><br/><br/>
        Courteney Cox plays Monica Geller, the organized and competitive chef who often acts as the glue holding the group together. Known for her neatness and maternal instincts, Monica is the heart of the show's famous Central Perk café scenes. Cox's performance brought warmth and humor to the character, making Monica an unforgettable part of the show.<br/><br/>

        <b>Lisa Kudrow as Phoebe Buffay</b><br/><br/>
        Lisa Kudrow shines as Phoebe Buffay, the quirky, eccentric musician with a heart of gold. Known for her offbeat humor and unique songs like "Smelly Cat," Phoebe's character added a delightful unpredictability to the group. Kudrow's portrayal earned her an Emmy Award and numerous accolades, showcasing her comedic talent.<br/><br/>

        <b>Matt LeBlanc as Joey Tribbiani</b><br/><br/>
        Matt LeBlanc brings to life Joey Tribbiani, the lovable, somewhat clueless aspiring actor known for his famous catchphrase, "How you doin'?" Joey's charm and simplicity made him a fan favorite, providing endless laughs and memorable moments throughout the series. LeBlanc's role as Joey led to a successful spin-off series, "Joey".<br/><br/>

        <b>Matthew Perry as Chandler Bing</b><br/><br/>
        Matthew Perry portrays Chandler Bing, the sarcastic and witty friend known for his quick humor and commitment issues. Chandler's relationship with Monica became one of the series' central storylines, showcasing Perry's ability to balance humor with heartfelt moments. Perry's performance remains one of the most cherished aspects of the show.<br/><br/>

        <b>David Schwimmer as Ross Geller</b><br/><br/>
        David Schwimmer plays Ross Geller, the lovable paleontologist and Monica's older brother. Known for his "on-again, off-again" relationship with Rachel, Ross is often at the center of the show's most dramatic and comedic storylines. Schwimmer's portrayal of Ross captured the character's endearing nerdiness and emotional depth.<br/><br/>

        <b>Supporting Cast and Guest Stars</b><br/><br/>
        "Friends" featured numerous guest stars and supporting characters who added to the show's richness. From Tom Selleck's portrayal of Richard Burke to Reese Witherspoon as Rachel's sister, the series brought together a remarkable ensemble of talent that contributed to its enduring popularity.

        </Typography>
        
      </Grid>
    </Container>
  );
};

export default About;

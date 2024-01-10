import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { Metadata } from "next";

import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";

export const metadata: Metadata = {
  title: "Green your Bitcoin",
};

export default function Page() {
  return (
    <main>
      <Container>
        {/* <Typography variant="h1" gutterBottom>
          greenbitcoin.money
        </Typography> */}
        <Typography variant="body1" component={"p"} gutterBottom>
          projects by @islandHodl
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          //   columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent={"center"}
        >
          <Grid xs={12} sm={6}>
            <Card>
              <CardHeader title="Green Bitcoin Calculator" />
              <CardMedia sx={{ position: "relative", height: "20vw" }}>
                <NextLink href="/calculator">
                  <Image
                    // height={300}
                    alt="Calculator"
                    title="Calculator"
                    src={"/calculator.png"}
                    layout="fill"
                    objectFit="cover"
                  />
                </NextLink>
              </CardMedia>
              <CardContent>
                <Typography>
                  Incentive offsets idea proposed by Troy Cross & Andrew Bailey.
                  Calculate how to green your bitcoin holdings with sustainable
                  mining incentives.
                </Typography>
              </CardContent>
              <CardActions>
                <Button href="/calculator" component={NextLink}>
                  Take me there
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid xs={12} sm={6}>
            <Card>
              <CardHeader title="Bits vs Sats" />
              <CardMedia sx={{ position: "relative", height: "20vw" }}>
                <NextLink href="/bitsats">
                  <Image
                    // height={300}
                    alt="Bit vs Sats"
                    title="Bit vs Sats"
                    src={"/bitsats.png"}
                    layout="fill"
                    objectFit="cover"
                  />
                </NextLink>
              </CardMedia>
              <CardContent>
                <Typography>
                  Visualisation tool to help experiment with different ways of
                  displaying Bitcoin units, in Bits or Sats.
                </Typography>
              </CardContent>
              <CardActions>
                <Button href="/bitsats" component={NextLink}>
                  Take me there
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
      {/* <Box sx={{ flexGrow: 1 }}> */}

      {/* </Box> */}
    </main>
  );
}

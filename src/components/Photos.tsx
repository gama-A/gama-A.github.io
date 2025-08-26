import { Box, ImageList, ImageListItem, Typography } from "@mui/material";

const itemData = [
  {
    img: '/src/assets/photos-tab/glitched/ein.jpeg',
    title: 'photo1',
    rows: 2,
    cols: 2,
  },
  {
    img: '/src/assets/photos-tab/glitched/me_350.jpeg',
    title: 'photo2',
    rows: 2,
  },
  {
    img: '/src/assets/photos-tab/glitched/water_crush.png',
    title: 'photo3',
    rows: 2,
  },
  {
    img: '/src/assets/photos-tab/glitched/gg.jpeg',
    title: 'photo4',
    rows: 2,
    cols: 2,
  },
  {
    img: '/src/assets/photos-tab/glitched/hugs.jpg',
    title: 'photo5',
    cols: 2,
  },
  {
    img: '/src/assets/photos-tab/glitched/blue.png',
    title: 'photo5',
    rows: 2,
    cols: 2,
  },
  {
    img: '/src/assets/photos-tab/glitched/bob.jpeg',
    title: 'photo6',
    rows: 2,
  },
  {
    img: '/src/assets/photos-tab/glitched/noo_glitched.png',
    title: 'photo7',
    rows: 2,
  },
  {
    img: '/src/assets/photos-tab/glitched/pups.jpg',
    title: 'photo8',
    rows: 2,
    cols: 2,
  },
  {
    img: '/src/assets/photos-tab/glitched/school_glitch.jpeg',
    title: 'photo9',
    cols: 2,
  },
];
function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export function PhotosTab() {
    return (
        <Box>
            <Typography variant="h4" component="div" align="left" gutterBottom>
                Glitched Photography Portfolio
            </Typography>
            <ImageList
                sx={{ width: '500', height: '400' }}
                variant="quilted"
                cols={4}
                rowHeight={121}
            >
                {itemData.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                        {...srcset(item.img, 121, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                    />
                    </ImageListItem>
                ))}
            </ImageList>
            <Typography variant="h4" component="div" align="left" gutterBottom>
                Landscape Photography
            </Typography>
            <Typography variant="h4" component="div" align="left" gutterBottom>
                Graduation/Portrait Photography
            </Typography>
            </Box>
            // <ImageList
                // </Box>sx={{ width: '500', height: '400' }}
                // </Box>variant="quilted"
                // </Box>cols={4}
                // </Box>rowHeight={121}
            // </Box>>
                // </Box>{itemData.map((item) => (
                    // </Box><ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    // </Box><img
                        // </Box>{...srcset(item.img, 121, item.rows, item.cols)}
                        // </Box>alt={item.title}
                        // </Box>loading="lazy"
                    // </Box>/>
                    // </Box></ImageListItem>
                // </Box>))}
            // </Box></ImageList>
    )
}
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import { glitchPhotos, landscapePhotos, portraitPhotos } from "./photos/photo_items";

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
                Landscape/Street Photography
            </Typography>
            <ImageList
                sx={{ width: '500', height: '400' }}
                variant="quilted"
                cols={4}
                rowHeight={140}
            >
                {landscapePhotos.map((item) => (
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
                Graduation/Portrait Photography
            </Typography>
            <ImageList
                sx={{ width: '500', height: '400' }}
                variant="quilted"
                cols={4}
                rowHeight={140}
            >
                {portraitPhotos.map((item) => (
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
                Glitched Photography Portfolio
            </Typography>
            <ImageList
                sx={{ width: '500', height: '400' }}
                variant="quilted"
                cols={4}
                rowHeight={140}
            >
                {glitchPhotos.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                        {...srcset(item.img, 121, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                    />
                    </ImageListItem>
                ))}
            </ImageList>
            </Box>
    )
}
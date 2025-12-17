import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import { glitchPhotos, landscapePhotos, portraitPhotos } from "./photos/photo_items";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

interface PhotosTabProps {
  isMobile: boolean;
}

export function PhotosTab({ isMobile }: PhotosTabProps) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography variant="h4" component="div" align="left" gutterBottom>
          Nature/Street Photography
        </Typography>
        <ImageList
          sx={{ width: '500', height: '400' }}
          variant={isMobile ? "standard" : "quilted"}
          cols={isMobile ? 1 : 4}
          rowHeight={isMobile ? "auto" : 140}
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
          Graduation Photography
        </Typography>
        <ImageList
          sx={{ width: '500', height: '400' }}
          variant={isMobile ? "standard" : "quilted"}
          cols={isMobile ? 1 : 4}
          rowHeight={isMobile ? "auto" : 140}
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
          Glitched Photography
        </Typography>
        <ImageList
          sx={{ width: '500', height: '400' }}
          variant={isMobile ? "standard" : "quilted"}
          cols={isMobile ? 1 : 4}
          rowHeight={isMobile ? "auto" : 140}
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
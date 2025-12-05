import { Box, Typography } from "@mui/material";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export function MusicTab() {
    return (
        <Box sx={{ p: 2, width: '100%' }}>
            <Typography p={2}>
                These are a selected sample of various musical recordings.
            </Typography>
            <Typography variant="h5" component="div">
                Sample 1: in rain
            </Typography>
            <div className="audio-dark">
                <AudioPlayer
                    src="https://res.cloudinary.com/ddblggaen/video/upload/v1764828741/in_rain_ysmtok.flac"
                    showJumpControls={false}
                    showDownloadProgress={false}
                    customVolumeControls={[]}
                    customAdditionalControls={[]}
                />
            </div>
            <Typography variant="h5" component="div">
                Sample 2: untitled demo
            </Typography>
            <div className="audio-dark">
                <AudioPlayer
                    src="https://res.cloudinary.com/ddblggaen/video/upload/v1764908168/song-1_aalu58.flac"
                    showJumpControls={false}
                    showDownloadProgress={false}
                    customVolumeControls={[]}
                    customAdditionalControls={[]}
                />
            </div>
        </Box>
    )
}
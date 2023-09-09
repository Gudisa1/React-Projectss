import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./index";
const Videos = ({ videos }) => {
  console.log(videos);
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, index) => {
        return (
          <Box key={index}>
            {item.id.videoId && <VideoCard video={item} />}
            {/* {item.id.channelId && <ChannelCard channelDetail={item} />} */}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;

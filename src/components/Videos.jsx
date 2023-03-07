import { Stack, Box } from "@mui/system"

import { VideoCard, ChannelCard } from "./"

const Videos = ({ videos }) => {

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos[0].map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos
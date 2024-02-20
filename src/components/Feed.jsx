import { useState, useEffect } from "react";
import { Box, Stack, Typography } from '@mui/material'

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { FeedCategories, Videos } from "./";

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items));
  }, [selectedCategory]);

  console.log(videos)

  return (
    // Our feed will render in a column view, but when on
    // medium devices (md) will be in row view
    <Stack sx={{ flexDirection: "column"}}>
      <Box sx={{ 
        width: '100%',
        height: { sx: 'auto', md: '10vh '},
        borderRight: '1px solid #3d3d3d',
      }}>
        <FeedCategories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>
      <Box
        p={2}
        sx={{
          overflowY: 'auto',
          height: '90vh',
          flex: 2
        }}

      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{
            color: 'white'
          }}
        >
          {selectedCategory} <span style={{ color : '#F31503' }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed
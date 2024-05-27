import { useState } from "react";
import { Container, VStack, HStack, IconButton, Text, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box, Image } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

const songs = [
  {
    title: "Song One",
    artist: "Artist One",
    cover: "https://images.unsplash.com/photo-1515940175183-6798529cb860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbGJ1bSUyMGNvdmVyJTIwMXxlbnwwfHx8fDE3MTY4MTQxNTF8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Song Two",
    artist: "Artist Two",
    cover: "https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbGJ1bSUyMGNvdmVyJTIwMnxlbnwwfHx8fDE3MTY4MTQxNTJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Song Three",
    artist: "Artist Three",
    cover: "https://images.unsplash.com/photo-1542887800-faca0261c9e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbGJ1bSUyMGNvdmVyJTIwM3xlbnwwfHx8fDE3MTY4MTQxNTJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setProgress(0);
    setIsPlaying(true);
  };

  const playPrevious = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
    setProgress(0);
    setIsPlaying(true);
  };

  const handleSliderChange = (value) => {
    setProgress(value);
  };

  const currentSong = songs[currentSongIndex];

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Image src={currentSong.cover} boxSize="200px" borderRadius="md" />
        <Text fontSize="2xl">{currentSong.title}</Text>
        <Text fontSize="lg">{currentSong.artist}</Text>
        <HStack spacing={4}>
          <IconButton aria-label="Previous" icon={<FaBackward />} onClick={playPrevious} />
          <IconButton aria-label="Play/Pause" icon={isPlaying ? <FaPause /> : <FaPlay />} onClick={togglePlayPause} />
          <IconButton aria-label="Next" icon={<FaForward />} onClick={playNext} />
        </HStack>
        <Box width="100%">
          <Slider value={progress} onChange={handleSliderChange}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;

type Track = {
  title: string;
  minutes: number;
};

const calculateTotalListeningTime = (tracks: Track[]): number => {
  const total = tracks.reduce(
    (acc, currentMusic) => acc + currentMusic.minutes,
    0,
  );
  return total;
};

const tracks = [
  { title: "Blinding Lights", minutes: 3 },
  { title: "Levitating", minutes: 4 },
  { title: "Peaches", minutes: 3 },
];

calculateTotalListeningTime(tracks);
// 10

const tracks2 = [ 
    { title: "Flowers", minutes: 3 }, 
    { title: "Anti-Hero", minutes: 4 } 
]; 
  
calculateTotalListeningTime(tracks2);
// 7 
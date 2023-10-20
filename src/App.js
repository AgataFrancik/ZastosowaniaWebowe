import './App.css';
import { Box, Typography } from '@mui/material';
import gif1 from './images/goose-dance.gif'
import gif2 from './images/gabrielle-genevieve-goose-chase.gif'
import jpg1 from './images/Anser_anser_1_(Piotr_Kuczynski).jpg'
import jpg2 from './images/goose-4097083626-1562689760284.jpg'

function App() {
  return (
    <Box display='flex' width="100%" height="100vh" flexDirection='column'>
    <Box>
      <Typography variant='h5'>
      A goose (pl: geese) is a bird of any of several waterfowl species in the family Anatidae. This group comprises the genera Anser (the grey geese and white geese) and Branta (the black geese). Some other birds, mostly related to the shelducks, have "goose" as part of their names. More distantly related members of the family Anatidae are swans, most of which are larger than true geese, and ducks, which are smaller.

The term "goose" may refer to such bird of either sex, but when paired with "gander", refers specifically to a female one (the latter referring to a male). Young birds before fledging are called goslings.[1] The collective noun for a group of geese on the ground is a gaggle; when in flight, they are called a skein, a team, or a wedge; when flying close together, they are called a plump.[2]
      </Typography>
    </Box>
      <Box >
        <img src={gif1}/>
      </Box>
      <div style={{backgroundColor:"red", width:"50%", height:"50%"}}>
        <img src={jpg1} style={{width:"100%", height:"100%"}}/>
      </div>
      <Box color="black">
        <img src={jpg2}/>
      </Box>
      <img src={gif2}/>
    </Box>
  );
}

export default App;

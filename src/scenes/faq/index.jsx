import {Box,useTheme} from "@mui/material";
import Header from "../../components/Headers";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-materials/ExpandMore";

import {tokens} from "../../theme";

const FAQ =()=>{
    const theme =useTheme();
    const colors=tokens(theme.paletto.mode);

    return <Box m="20px">
      <Header title ="FAQ" subtitle= "Frequently Asked Questions Page"/>
      <Accrdion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            

            <Typography color={colors.greenAccent[500]} variant ="h5">
                An important question
            </Typography>
            </AccordionSummary>
            <AccordionDetails>

            <Typography>
                Lorem  dor constecut let suplt e mue 
            </Typography>
        </AccordionDetails>
      </Accrdion>



      <Accrdion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            

            <Typography color={colors.greenAccent[500]} variant ="h5">
                Your famortite 
            </Typography>
            </AccordionSummary>
            <AccordionDetails>

            <Typography>
                another question
            </Typography>
        </AccordionDetails>
      </Accrdion>


      <Accrdion  defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            

            <Typography color={colors.greenAccent[500]} variant ="h5">
                An important question
            </Typography>
            </AccordionSummary>
            <AccordionDetails>

            <Typography>
                 
            </Typography>
        </AccordionDetails>
      </Accrdion>


      <Accrdion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            

            <Typography color={colors.greenAccent[500]} variant ="h5">
                An important question
            </Typography>
            </AccordionSummary>
            <AccordionDetails>

            <Typography>
                Lorem  dor constecut let suplt e mue 
            </Typography>
        </AccordionDetails>
      </Accrdion>


      <Accrdion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            

            <Typography color={colors.greenAccent[500]} variant ="h5">
                An important question
            </Typography>
            </AccordionSummary>
            <AccordionDetails>

            <Typography>
                Lorem  dor constecut let suplt e mue 
            </Typography>
        </AccordionDetails>
      </Accrdion>


      <Accrdion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            

            <Typography color={colors.greenAccent[500]} variant ="h5">
                An important question
            </Typography>
            </AccordionSummary>
            <AccordionDetails>

            <Typography>
                Lorem  dor constecut let suplt e mue 
            </Typography>
        </AccordionDetails>
      </Accrdion>


    </Box>
}
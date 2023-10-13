import React, { useState } from 'react'
import styles from './index.module.scss'
import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Packages = () => {

  // SX styles & Accrodion styles
  const [expanded, setExpanded] = useState(false);

  const accordionSummaryDefualt = { height: '55px', backgroundColor: '#004747', color: '#FFFFFF' };
  const accordionSummaryHover = { backgroundColor: '#C5DFDC', color: '#004747', height: '55px', };
  const expandMoreIconDefault = { color: '#FFFFFF', width: '30px', height: "30px" }
  const expandMoreIconHover = { color: '#004747', width: '30px', height: "30px", marginBottom: '5px', };

  const accordionDetails = { background: '#F4F9F8', overflowX: 'auto', maxHeight: '50vh', }
  const style = {
    marginTop: '10px',
    '&:before': {
      display: 'none',
    }
  };

  const handleChangeAccordion = (panel, id) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };



  return (
    <>
      <section id='packages' styles={styles.packages}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className="sec_container">
            <div className="sec_title">
              <Typography variant='h3'>Packages</Typography>
            </div>

            <div className="filter_sec">
              <Accordion disableGutters={false} elevation={0}
                square={false} sx={style}
                expanded={expanded === 'panel1'} onChange={handleChangeAccordion('panel1')}>
                <AccordionSummary
                  sx={expanded !== 'panel1' ? accordionSummaryDefualt
                    : accordionSummaryHover
                  }
                  expandIcon={<ExpandMoreIcon sx={expanded !== 'panel1' ? expandMoreIconDefault : expandMoreIconHover} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography >
                    Languages
                  </Typography>

                </AccordionSummary>
                <AccordionDetails sx={accordionDetails}>
                  languages
                </AccordionDetails>
              </Accordion>
            </div>

            <div className="packages_sec">
              <div className="boxes_container">
                <div className="box">
                  <div className="value_type">
                    <Typography>Best Value Package</Typography>
                  </div>

                  <div className="treatment_name">
                    <Typography variant='h5'>Treatment Name</Typography>
                  </div>

                  <div className="technique">
                    <Accordion disableGutters={false} elevation={0}
                      square={false} sx={style}
                      expanded={expanded === 'panel2'} onChange={handleChangeAccordion('panel2')}>
                      <AccordionSummary
                        sx={expanded !== 'panel2' ? accordionSummaryDefualt
                          : accordionSummaryHover
                        }
                        expandIcon={<ExpandMoreIcon sx={expanded !== 'panel2' ? expandMoreIconDefault : expandMoreIconHover} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography >
                          Technique: Standard
                        </Typography>

                      </AccordionSummary>
                      <AccordionDetails sx={accordionDetails}>
                        languages
                      </AccordionDetails>
                    </Accordion>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </Container >
      </section>
    </>


  )
}

export default Packages
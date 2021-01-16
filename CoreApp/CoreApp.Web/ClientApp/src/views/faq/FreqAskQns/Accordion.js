import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>How Do I Create A Booking?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
            Bookings are created on the dashboard by selecting "new bookings" on
            the booking page, displayed on the left navigation bar.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography>Why Is My Booking Pending?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
            Each booking requires authorization from the management. Please
            kindly wait 2-3 business days for bookings to be approved.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography>Why Is My Booking Rejected?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
            Bookings may get rejected if there are incomplete fields in the
            booking form. Please ensure that all fields are filled up.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          
        >
          <Typography>How Do I Edit Cargo Details?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
            Cargo details can be edited through the main dashboard by selecting "Order List".
            Upon clicking any of the items in the list, "Edit Order" will appear on the top right of the screen
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

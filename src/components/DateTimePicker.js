import React, { useState } from "react";
import MomentUtils from "@date-io/moment";
import { makeStyles, ThemeProvider  } from '@material-ui/core/styles';
import { createMuiTheme } from "@material-ui/core";
import moment from "moment";
import {
  DatePicker,
  MuiPickersUtilsProvider, Calendar
} from "@material-ui/pickers";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Popover from "@material-ui/core/Popover";


const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        display: "none"
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        color: "#FC6C44",
        fontWeight: "600"
      },
      daysHeader: {
        dayLabel: {
          color: "#5B6BC8"
        }
      }
    },
    MuiPickersDay: {
      day: {
        color: "black",
      },
      daySelected: {
        color: "#5B6BC8",
        backgroundColor: "transparent",
        fontWeight: "600"
      },
      dayDisabled: {
        color: "rgba(0, 0, 0, 0.1)",
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: "red",
      },
    },
  },
});

function DsDatePicker() {
  function iconStyles() {
    return {
      calendarTodayIcon: {
        opacity: "0.4",
        position: "absolute",
        left: "8px",
      },
      expandMoreIcon: {
        position: 'absolute',
        right: "8px"
      },
    }
  }
  const classes = makeStyles(iconStyles)();

  const [date, setDate] = useState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [active, setActive] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setActive(!active)
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActive(!active)
  };

  const clear = () => {
    setDate(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <button className={active? "active ds-button": "ds-button"} onClick={handleClick}>
        <CalendarTodayIcon className={classes.calendarTodayIcon}  />
        <span className="date-value">{date ? date : "Date & Time"}</span>
        <ExpandMoreIcon className={classes.expandMoreIcon} />
      </button>

    <div className="date-picker-wrapper">
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MuiPickersUtilsProvider utils={MomentUtils}>
        <ThemeProvider theme={materialTheme}>
          <DatePicker
            autoOk
            variant="static"
            openTo="date"
            disablePast = {true}
            clearable
            value={date}
            format="YYYY-MM-DD"
            onChange={(val) => setDate(val.format("YYYY-MM-DD"))}
            leftArrowButtonProps={{ "aria-label": "Prev month" }}
            rightArrowButtonProps={{ "aria-label": "Next month" }}
            // rightArrowIcon={<SnoozeIcon />}
            InputProps={{
              endAdornment: (
                  <>
                            <InputAdornment position="end">
                            <IconButton>
                              <AlarmIcon />
                            </IconButton>
                          </InputAdornment></>
              ),
              startAdornment: (
                <>
                          <InputAdornment position="end">
                          <IconButton>
                            <AlarmIcon />
                          </IconButton>
                        </InputAdornment></>
            ), }}
          />
                      </ThemeProvider>

        </MuiPickersUtilsProvider>
        <button onClick={clear}></button>
      </Popover>
    </div>
    </>
  );
}

export default DsDatePicker;

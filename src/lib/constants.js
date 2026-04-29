/**
 * constants.js
 * Centralized source of truth for all external links, strings, and configuration.
 */

export const ECI_LINKS = {
  VOTER_SEARCH: "https://electoralsearch.eci.gov.in/",
  FORM_6: "https://voters.eci.gov.in/form6",
  FORM_8: "https://voters.eci.gov.in/form8",
  BLO_DETAILS: "https://voters.eci.gov.in/home/bookACallRequest",
  POLLING_STATION: "https://electoralsearch.eci.gov.in/pollingstation",
  NGRS_PORTAL: "https://voters.eci.gov.in/",
  ECI_MAIN: "https://eci.gov.in/"
};

export const APP_STRINGS = {
  APP_NAME: "Matdaan Saathi",
  APP_SUBTITLE: "Your ultimate guide for Indian elections",
  FALLBACK_MESSAGE: "I can help with voter services and election guidance.",
  EVALUATION_HEADER: "Election Process Evaluation",
  EVALUATION_SUBTITLE: "Help us improve the democratic experience by sharing feedback on your voting journey."
};

export const CHAT_INTENTS = {
  REGISTER_VOTER: "REGISTER_VOTER",
  CHECK_NAME: "CHECK_NAME",
  UPDATE_DETAILS: "UPDATE_DETAILS",
  VOTING_PROCESS: "VOTING_PROCESS",
  TRACK_STATUS: "TRACK_STATUS",
  LEARN_ELECTIONS: "LEARN_ELECTIONS",
  FACT_REPLY: "FACT_REPLY",
  UNKNOWN: "UNKNOWN",
  ERROR: "ERROR",
  FAQ_REPLY: "FAQ_REPLY"
};

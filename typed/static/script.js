import { writeEffect } from "./typed.js";

const $ = (selector) => document.querySelector(selector);

var t = ["Text 1", "Example text 2", "Text example 3", "Other text example"];
let c = $("#typed");

writeEffect(c,t);

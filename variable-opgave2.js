var moms = 1.25;
var pris_uden_moms = 400;
var pris_med_moms = "";
var pris_uden_moms_02 = "";

pris_med_moms = pris_uden_moms * moms;
pris_uden_moms_02 = pris_med_moms / moms;

console.log("Pris med moms: " + pris_med_moms);
console.log("Pris uden moms: " + pris_uden_moms_02);
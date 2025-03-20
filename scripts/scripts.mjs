import firstFeature from "./first-feature.mjs";
import secondFeature from "./second-feature.mjs";
import themeSeparators from "./theme-separators.mjs"
import neko from "./plugin/oneko-ie6.js";

function main() {
    neko()
    themeSeparators();
    firstFeature();
    secondFeature();
}

main()
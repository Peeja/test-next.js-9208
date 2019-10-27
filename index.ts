import nextCommonJSStyle = require("next");
import nextImportStyle from "next";

console.log("typeof nextCommonJSStyle is", typeof nextCommonJSStyle);
console.log("typeof nextImportStyle is", typeof nextImportStyle);

const matching = (nextCommonJSStyle as any) === (nextImportStyle as any);
console.log(
  `nextCommonJSStyle and nextImportStyle ${matching ? "" : "DO NOT "}match.`
);

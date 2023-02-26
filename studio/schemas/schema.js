import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import awards from "./awards";
import abouts from "./abouts";
import brands from "./brands";
import contact from "./contact";
import experiences from "./experiences";
import skills from "./skills";
import workExperience from "./workExperience";
import works from "./works";
import tags from "./tags";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    works,
    tags,
    awards,
    brands,
    abouts,
    skills,
    workExperience,
    experiences,
    contact,
  ]),
});

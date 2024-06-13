import lume from "lume/mod.ts";
import blog from "blog/mod.ts";
import katex from "lume/plugins/katex.ts";

const site = lume();

site.use(blog());
site.use(katex());

export default site;

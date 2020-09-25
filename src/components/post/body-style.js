export default `
  font-size: 16px;
  line-height: 1.63;
  color: rgba(58, 58, 58, 0.9);

  h1 {
    padding: 20px 0;
    font-size: 24px;
    font-weight: bold;
  }
  h2 {
    padding: 20px 0;
    font-size: 21px;
    font-weight: bold;
  }
  h3 {
    padding: 10px 0;
    font-size: 19px;
    font-weight: bold;
  }
  
  h4 {
    font-size: 16px;
    font-weight: bold;
  }
  blockquote {
    padding: 15px;
    font-size: 14px;
    color: rgba(58, 58, 58, 0.8);
    background: #fafafa;
    border-radius: 5px;
  }
  blockquote > p {
    padding: 0;
  }
  a {
    color: hotpink;
    font-weight: bold;
  }
  p {
    padding: 10px 0;
  }
  ul {
    padding: 20px 0;
  }
  li {
    position: relative;
    padding: 10px 0 10px 15px;
  }
  li:before {
    content: "·";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    font-weight: bold;
  }
  img {
    width: 100%;
  }
  hr {
    margin: 50px 0;
    height: 1px;
    background-color: #efefef;
  }
  /**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */
  .gatsby-highlight * {
    font-family: "Roboto Mono" !important;
    font-size: 15px;
    line-height: 1.5;
  }
  code[class*="language-"],
  pre[class*="language-"] {
    color: #404040;
    background: none;
    text-shadow: 0 1px white;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.6;
    -moz-tab-size: 2;
    -o-tab-size: 2;
    tab-size: 2;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    letter-spacing: 1.2px;
  }
  pre[class*="language-"]::-moz-selection,
  pre[class*="language-"] ::-moz-selection,
  code[class*="language-"]::-moz-selection,
  code[class*="language-"] ::-moz-selection {
    text-shadow: none;
    background: #b3d4fc;
  }
  pre[class*="language-"]::selection,
  pre[class*="language-"] ::selection,
  code[class*="language-"]::selection,
  code[class*="language-"] ::selection {
    text-shadow: none;
    background: #b3d4fc;
  }
  @media print {
    code[class*="language-"],
    pre[class*="language-"] {
      text-shadow: none;
    }
  }
  /* Code blocks */
  pre[class*="language-"] {
    overflow-x: auto;
    margin: 30px 0;
    padding: 16px 25px 18px;
  }
  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: #fafafa;
    border-radius: 5px;
  }
  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #999999;
  }
  .token.operator,
  .token.punctuation {
    color: #555555;
  }
  .namespace {
    opacity: 0.7;
  }
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #444444;
  }
  .token.tag {
    color: #11b5b5;
  }
  .token.attr-name {
    color: #5577bb;
  }
  .token.attr-value {
    color: #55bb55;
  }
  .token.selector,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #11b5b5;
  }
  .token.string {
    color: #55bb55;
  }
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #ff77bb;
    background: hsla(0, 0%, 100%, 0.5);
  }
  .token.atrule {
    color: #07a;
  }
  .token.keyword {
    color: #bb55dd;
  }
  .token.property {
    color: #444444;
  }
  .token.function {
    color: #ff77bb;
  }
  .token.class-name {
    color: #bb55dd;
  }
  .token.regex,
  .token.important,
  .token.variable {
    color: #e90;
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }
  .language-scss {
    color: #f99157 !important;
  }
  .language-javascript {
    color: #5577bb !important;
  }
  p code.language-text,
  li code.language-text {
    padding: 0 5px;
    border-radius: 2px !important;
    background: #ffe1f0;
    color: #ff69b4;
    font-weight: 500;
  }
  pre.language-text {
    /* display: inline-block;
  height: 28px;
  margin: 0 5px;
  padding: 1px 6px 1px 0 !important;
    line-height: 2; */
    background: #fafafa;
    border-radius: 5px;
    color: #000 !important;
    /* vertical-align: text-bottom; */
    /* border-radius: 0 !important; */
  }
  Skip
    to
    content
    Search
    or
    jump
    to…
    Pull
    requests
    Issues
    Marketplace
    Explore
    @appear
    0
    1
    0
    boramyy/boramyy.github.io
    code
    Issues
    0
    Pull
    requests
    0
    Projects
    0
    Wiki
    Security
    Insights
    boramyy.github.io/src/styles/highlight.css
    @boramyy
    boramyy
    add
    highlight
    and
    dev
    page
    099d4d4
    on
    12
    May
    71
    lines
    (70 sloc)
    4.64
    KB
    pre.gatsby-highlight,
  figure.gatsby-highlight {
    overflow-x: auto;
    margin: 30px 0;
    padding: 16px 25px 18px;
    color: rgba(58, 58, 58, 0.9);
    background: #fafafa;
  }
  .gatsby-highlight .lineno {
    pointer-events: none;
    user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
  .gatsby-highlight * {
    font-family: "Roboto Mono" !important;
    font-size: 15px;
    line-height: 1.5;
  }
  .gatsby-highlight .hll {
    background-color: #515151;
  }
  .gatsby-highlight .c {
    color: #aaaaaa;
  } /* Comment */
  .gatsby-highlight .err {
    color: #bb5555;
  } /* Error */
  .gatsby-highlight .k {
    color: #bb55dd;
  } /* Keyword */
  span[textContent="if"] {
    color: red !important;
  } /* Keyword */
  .gatsby-highlight .l {
    color: #f99157;
  } /* Literal */
  .gatsby-highlight .n {
    color: #444444;
  } /* Name */
  .gatsby-highlight .operator {
    color: #11b5b5;
  } /* Operator */
  .gatsby-highlight .punctuation {
    color: #444444;
  } /* Punctuation */
  .gatsby-highlight .comment {
    color: #aaaaaa;
  } /* Comment.Multiline */
  .gatsby-highlight .cp {
    color: #666666;
  } /* Comment.Preproc */
  .gatsby-highlight .c1 {
    color: #aaaaaa;
  } /* Comment.Single */
  .gatsby-highlight .cs {
    color: #aaaaaa;
  } /* Comment.Special */
  .gatsby-highlight .gd {
    color: #bb5555;
  } /* Generic.Deleted */
  .gatsby-highlight .ge {
    font-style: italic;
  } /* Generic.Emph */
  .gatsby-highlight .gh {
    color: #444444;
    font-weight: bold;
  } /* Generic.Heading */
  .gatsby-highlight .gi {
    color: #55bb55;
  } /* Generic.Inserted */
  .gatsby-highlight .gp {
    color: #999999;
    font-weight: bold;
  } /* Generic.Prompt */
  .gatsby-highlight .gs {
    font-weight: bold;
  } /* Generic.Strong */
  .gatsby-highlight .gu {
    color: #11b5b5;
    font-weight: bold;
  } /* Generic.Subheading */
  .gatsby-highlight .kc {
    color: #bb55dd;
  } /* Keyword.Constant */
  .gatsby-highlight .keyword {
    color: #bb55dd;
  } /* Keyword.Declaration */
  .gatsby-highlight .kn {
    color: #11b5b5;
  } /* Keyword.Namespace */
  .gatsby-highlight .kp {
    color: #bb55dd;
  } /* Keyword.Pseudo */
  .gatsby-highlight .kr {
    color: #bb55dd;
  } /* Keyword.Reserved */
  .gatsby-highlight .kt {
    color: #ff77bb;
  } /* Keyword.Type */
  .gatsby-highlight .ld {
    color: #55bb55;
  } /* Literal.Date */
  .gatsby-highlight .m {
    color: #ff77bb;
  } /* Literal.Number */
  .gatsby-highlight .s {
    color: #55bb55;
  } /* Literal.String */
  .gatsby-highlight .na {
    color: #5577bb;
  } /* Name.Attribute */
  .gatsby-highlight .nb {
    color: #444444;
  } /* Name.Builtin */
  .gatsby-highlight .nc {
    color: #f99157;
  } /* Name.Class */
  .gatsby-highlight .no {
    color: #bb5555;
  } /* Name.Constant */
  .gatsby-highlight .nd {
    color: #11b5b5;
  } /* Name.Decorator */
  .gatsby-highlight .ni {
    color: #444444;
  } /* Name.Entity */
  .gatsby-highlight .ne {
    color: #bb5555;
  } /* Name.Exception */
  .gatsby-highlight .nf {
    color: #5577bb;
  } /* Name.Function */
  .gatsby-highlight .nl {
    color: #444444;
  } /* Name.Label */
  .gatsby-highlight .nn {
    color: #ff77bb;
  } /* Name.Namespace */
  .gatsby-highlight .function-variable {
    color: #5577bb;
  } /* Name.Other */
  .gatsby-highlight .parameter {
    color: #5577bb;
  } /* Name.Other */
  .gatsby-highlight .py {
    color: #444444;
  } /* Name.Property */
  .gatsby-highlight .nt {
    color: #11b5b5;
  } /* Name.Tag */
  .gatsby-highlight .nv {
    color: #bb5555;
  } /* Name.Variable */
  .gatsby-highlight .ow {
    color: #11b5b5;
  } /* Operator.Word */
  .gatsby-highlight .w {
    color: #444444;
  } /* Text.Whitespace */
  .gatsby-highlight .mf {
    color: #f99157;
  } /* Literal.Number.Float */
  .gatsby-highlight .mh {
    color: #f99157;
  } /* Literal.Number.Hex */
  .gatsby-highlight .mi {
    color: #ff77bb;
  } /* Literal.Number.Integer */
  .gatsby-highlight .mo {
    color: #f99157;
  } /* Literal.Number.Oct */
  .gatsby-highlight .sb {
    color: #55bb55;
  } /* Literal.String.Backtick */
  .gatsby-highlight .sc {
    color: #444444;
  } /* Literal.String.Char */
  .gatsby-highlight .sd {
    color: #999999;
  } /* Literal.String.Doc */
  .gatsby-highlight .string {
    color: #55bb55;
  } /* Literal.String.Double */
  .gatsby-highlight .boolean {
    color: #ff77bb;
  } /* Literal.Boolean */
  .gatsby-highlight .se {
    color: #f99157;
  } /* Literal.String.Escape */
  .gatsby-highlight .sh {
    color: #55bb55;
  } /* Literal.String.Heredoc */
  .gatsby-highlight .si {
    color: #f99157;
  } /* Literal.String.Interpol */
  .gatsby-highlight .sx {
    color: #55bb55;
  } /* Literal.String.Other */
  .gatsby-highlight .sr {
    color: #55bb55;
  } /* Literal.String.Regex */
  .gatsby-highlight .s1 {
    color: #55bb55;
  } /* Literal.String.Single */
  .gatsby-highlight .ss {
    color: #55bb55;
  } /* Literal.String.Symbol */
  .gatsby-highlight .bp {
    color: #444444;
  } /* Name.Builtin.Pseudo */
  .gatsby-highlight .vc {
    color: #bb5555;
  } /* Name.Variable.Class */
  .gatsby-highlight .vg {
    color: #bb5555;
  } /* Name.Variable.Global */
  .gatsby-highlight .vi {
    color: #bb5555;
  } /* Name.Variable.Instance */
  .gatsby-highlight .il {
    color: #f99157;
  } /* Literal.Number.Integer.Long */
`

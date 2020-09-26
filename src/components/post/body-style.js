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
  
  pre {
    margin: 15px 0;
  }
`

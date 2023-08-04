const { Circle, Triangle, Square } = require("./shapes");

class SVG {
<html>
<body>

<h1>SVG</h1>

<svg width="100" height="100">
  <Circle cx="150" cy="100" r="80" fill="${this.color}" />
  <Triangle points="150, 18 244, 182 56, 182" fill="${this.color}"/>
  <Square cx="90" y="4-" width="120" height="120" fill="${this.color}" />
</svg>

</body>
</html>
}

module.exports = SVG;

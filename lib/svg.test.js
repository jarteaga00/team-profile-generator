const SVG = require("./svg");
const { Square } = require("./shapes");

test("should render a 300 x 200 svg element", () => {
    const expectedSvg =
        '<svg version="1.1" width ="300" height="200" xlmns="http://www.w3.org/2000/svg"></svg>';
    const svg = new SVG();
    expectedSvg(svg.render()).toEqual(expectedSvg);
});

test("should append text element", () => {
    const expectedSvg = 
    'svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">text x ="150" y="125" font-size="60" text-anchor="middle" fill="white">A</text></svg>';
    const svg = new SVG();
    svg.setText("A", "white");
    expectedSvg(svg.render()).toEqual(expectedSvg);
});

test("should set text message and color", () => {
    const expectedSvg = 
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';
    const svg = new SVG();
    svg.setText("SVG", "#333");
    expectedSvg(svg.render()).toEqual(expectedSvg);
});

test("should throw if text exceeds 3 characters", () => {
    const expextedError = new Error ("Text must not exceed 3 characters.");
    const svg = new SVG();
    expect(() => svg.setText("HELLO", "#333")).toThrow(expextedError);
});

test("should include a shape", () => {
    const expectedSvg = 
        '<svg version="1.1" width="300" height="200" xlmns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';
    const svg = new SVG();
    svg.setText("SVG", "#333");
    const square = new Square(); 
    square.setColor("blue");
    svg.setShape(square);
    expect(svg.render()).toEqual(expectedSvg);
});
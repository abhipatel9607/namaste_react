
const heading = React.createElement(
    "div",
    { id: "box", abc: "xyz" },
    [
        React.createElement("h2", { id: "heading2" }, "Hii.. I am Heading 2"),
        React.createElement("h3", { id: "heading3" }, "Hii.. I am Heading 3"),
        React.createElement("div", { id: "innerBox" }, React.createElement("h4", { id: "heading4" }, "Hii.. I am heading 4"))

    ]
)

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
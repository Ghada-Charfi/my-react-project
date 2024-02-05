import * as React from "react";
/* function App() {
  const title="React";
  return(
    <div>
      <h1>Hello {title}</h1>
      <label htmlFor="search">Search: </label>
      <input id="Search" type="text"/>
    </div>
  );
}
export default App; */
/* const welcome = {
  greeting: "Hey",
  title: "React",
};
function App() {
  return (
    <div>
      <h1>
        {welcome.greeting} {welcome.title}
      </h1>
      <label htmlFor="search">Search: </label>
      <input id="Search" type="text"/>
    </div>
  );
}
export default App; */
function getTitle(title) {
  return title;
}
function App() {
  return (
    <div>
      <h1>
        Hello {getTitle("React")}
      </h1>
      <label htmlFor="search">Search: </label>
      <input id="Search" type="text"/>
    </div>
  );
}
export default App;



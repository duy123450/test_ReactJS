// Props = read-only properties that are shared between components
//         A parent component can pass props to its child components
//         <Component key=value />

import Student from "./Student.jsx";

function App() {
  return(
    <>
      <Student name="Duy" age={21} isStudent={true} />
      <Student name="LMAO" age={50} isStudent={false} />
      <Student />
    </>
  );
}

export default App

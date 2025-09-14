// conditional rendering = allows you to control what gets rendered
//                         in ur app based on certain conditions
//                         (show, hide, or change components)

import UserGreeting from "./UserGreeting.jsx"

function App() {
  return(
    <>
      <UserGreeting isLoggedIn={true} username='Duy' />
    </>
  )
}

export default App
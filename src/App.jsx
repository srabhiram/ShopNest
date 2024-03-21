import Signup from "./components/Signup";
import { auth } from "./Authentication/Firebase";

function App() {
  console.log(auth.currentUser);
  return (
    <>
      <Signup />
    </>
  );
}

export default App;

import { routing } from './router'
import { useState } from 'react';
import loginContext from './components/Context'
import { rout } from './components/router1'



function App() {
  const [login,setlogin] = useState()
  const isloggedin =()=>{
    setlogin(!login)
  }

  const data ={ login , isloggedin}

  return (
    <>
    <loginContext.Provider value={data}>
      {login?<>{rout}</>:<>{routing}</>}
    </loginContext.Provider>
    </>
  );
}

export default App;

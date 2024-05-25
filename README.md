# Welcome to the Food Villa

# layout

/\*\*

- Header
- -Logo
- -Nav Items
- Body
- -Search element
- -Pestro container
-      - Resturent card
-          -image
-          -name of restaurent, star rating , cuisines,delivary time
- Footer
- -Copyrightts
- -Links
- -Address
- -Contact
-
-
- \*/

body.js
{/_ or _/}
{/_ {resList.map((restaurent) => {
return (
<>
<RestaurentCard resData={restaurent} />
</>
);
})} _/}

        {/* <RestaurentCard resName="KFC" cuisine="Burger, Fast Food" /> */}

# react Hooks

-> hooks are normal js utility functions

- useState() => used to generate the super-powerful state variables in react
- useEffect()

- lifting state in react js
  import React, { useState } from 'react';
  const App=()=>{
  return(
  <>
  <Parent/>
  </>
  )
  }

const Parent=()=>{
const [first,setFirst]=useState("Parent to child")
return(
<>
<p>Parent</p>
<Child name={first}  setName={setFirst} />
</>
)
}

const Child=(props)=>{
return(
<>
<p>child : {props.name}</p>
<button onClick={()=>props.setName("child to parent")}>Click me </button>
</>
)
}

export default App;


# redux toolkit
 - install @reduxjs/toolkit and react-redux.
 - build our app
 - connect our store to our app 
 - create a cart slice 
 - dispatch an action 
 - read the data using selector 

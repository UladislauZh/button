import React, { MouseEvent } from "react";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  const Button1Foo = (subscriber: string, age: number) => {
    console.log(subscriber, age);
  };
  const Button2Foo = (subscriber: string) => {
    console.log(subscriber);
  };
  return (
    <div className='App'>
      <Button
        name='MyYoutubeChanel1'
        callBack={() => Button1Foo("Uladislau", 26)}
      />
      <Button name='MyYoutubeChanel2' callBack={() => Button2Foo("Ivan")} />
    </div>
  );
}
export default App;

// function App() {
//   // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
//   //   console.log("Hello Ivan");
//   // };
//   // const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
//   //   console.log("Hello Dima");
//   // };

//   const onClickHandler = (name: string) => {
//     console.log(name);
//   };
//   return (
//     <div className='App'>
//       {/* <button onClick={(event)=>{console.log("hello")}}>MyYoutubeChanel</button> */}
//       <button
//         onClick={(event: MouseEvent<HTMLButtonElement>) =>
//           onClickHandler("Vasya")
//         }
//       >
//         MyYouTubeChanel-1
//       </button>
//       <button
//         onClick={(event: MouseEvent<HTMLButtonElement>) =>
//           onClickHandler("Ivan")
//         }
//       >
//         MyYouTubeChanel-2
//       </button>
//       {/* <button onClick={() =>onClickHandler("Some info")}>MyYouTubeChanel-3</button>   должны быть скобки и справа и слева, т.к. это вызывается функция и нужно что-то передать наверх*/}
//     </div>
//   );
// }

// export default App;

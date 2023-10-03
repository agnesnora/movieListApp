import { useEffect, useState } from "react";
import Message from "./Message";

export default function Header() {
  // const [isShown, setIsShown] = useState();
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsShown(true);
  //   }, 2000);
  //   setTimeout(() => {
  //     setIsShown(false);
  //   }, 6000);
  // }, []);

  return (
    <div>
      <div
        className="header"
        title="https://www.freepik.com/free-vector/popcorns-concept-illustration_15109964.htm#query=cinema&position=23&from_view=search&track=sph"
      >
        <h1>
          Popcorn <br />
          MovieApp
        </h1>
      </div>
      {/* {isShown ? <Message isShown={isShown} /> : null} */}
    </div>
  );
}

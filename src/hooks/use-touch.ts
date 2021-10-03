import { useState } from "react";

export default function useTouch() {
  // events ontouchstart ontouchmove
  const [activePage, setActivePage] = useState(true);
  let xDown = null;
  let yDown = null;

  function getTouches(e) {
    return e.touches;
  }

  function handleTouchStart(e) {
    const firstTouch = getTouches(e)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  function handleTouchMove(e) {
    if (!xDown || !yDown) {
      return;
    }

    let xUp = e.touches[0].clientX;
    let yUp = e.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        setActivePage((prev) => !prev);
      } else {
        setActivePage((prev) => !prev);
      }
    }
    xDown = null;
    yDown = null;
  }
  return [activePage, handleTouchStart, handleTouchMove];
}

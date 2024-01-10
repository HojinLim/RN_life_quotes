/**
 * 현재 화면이 Portrait인지 아닌지 판별합니다.
 * @param x 화면의 가로 길이
 * @param y 화면의 세로 길이
 * @returns 세로 길이가 길면 true(세로뷰), 아니면 false 가로뷰
 */
export const isPortraitNow = (x: number, y: number) => {
  // 세로 길이가 가로보다 길어야지 일반적인 세로 화면이다
  if (y > x) {
    return true;
  } else {
    return false;
  }
};

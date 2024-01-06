export function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array]; // 복사해서 새로운 배열 생성

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    // 현재 요소와 무작위로 선택된 요소 교환
    [shuffledArray[i], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[i],
    ];
  }

  return shuffledArray;
}

// 설정: 다이아몬드의 크기를 정합니다. 홀수로 설정해야 예쁘게 나옵니다.
const size = 9;

// 1. 다이아몬드 데이터를 담을 2차원 배열을 생성하는 로직
const diamond = [];
const center = Math.floor(size / 2); // 정중앙 인덱스 계산 (9 / 2 = 4.5 -> 4)

for (let i = 0; i < size; i++) {
    const row = []; // 각 행을 나타낼 새로운 배열
    
    // 현재 행(i)이 중앙에서 얼마나 떨어져 있는지 계산
    const distanceFromCenter = Math.abs(i - center);
    
    // 'O'가 시작될 위치와 끝날 위치를 계산
    const start = distanceFromCenter;
    const end = size - 1 - distanceFromCenter;

    for (let j = 0; j < size; j++) {
        // 현재 열(j)이 'O'가 찍힐 범위 안에 있는지 확인
        if (j >= start && j <= end) {
            row.push(1); // 다이아몬드 부분은 1
        } else {
            row.push(0); // 바깥 부분은 0
        }
    }
    diamond.push(row); // 완성된 행을 최종 배열에 추가
}

// 2. 생성된 2차원 배열을 그림으로 출력하는 로직
for (const row of diamond) {
    let str = "";
    for (const value of row) {
        // 1이면 'O', 0이면 'X'를 문자열에 추가 (삼항 연산자 사용)
        str += (value === 1) ? 'O' : 'X';
    }
    console.log(str); // 한 줄씩 출력
}
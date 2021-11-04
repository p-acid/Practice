# UI 기능 구현 연습

</br>

## Progress Bar & Keyword Select

![](https://user-images.githubusercontent.com/87939521/140246914-4b27b971-44b9-4f69-bc38-67e3f383504e.gif)

> 키워드 선택에 따라 변하는 진행도 바 구현해보기

- 키워드 미니멈/맥시멈 갯수 설정하여 상태를 반영
  - 2개 이하 : 버튼 색 비활성화 표시
  - 3개 이상 : 버튼 색 활성화 표시
  - 5개가 맥시멈이라 이후 선택 불가능
- 선택된 키워드를 `keyword List` 에서 제거하고 `Selected List` 에 추가

- 검색 바 기능 추가
  - 키워드 입력 시, 자동 완성 리스트 생성
  - 리스트 아이템 클릭 시, 해당 아이템 `Selected List` 에 추가
  - 추가 된 아이템은 자동 완성 리스트에서 제외

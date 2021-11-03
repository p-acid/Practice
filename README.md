# UI 기능 구현 연습

</br>

## Progress Bar & Keyword Select

![](https://user-images.githubusercontent.com/87939521/140033507-febbcdc5-b52b-42cd-bf67-4778a7d9ac75.gif)

> 키워드 선택에 따라 변하는 진행도 바 구현해보기

- 키워드 미니멈/맥시멈 갯수 설정하여 상태를 반영
  - 2개 이하 : 버튼 색 비활성화 표시
  - 3개 이상 : 버튼 색 활성화 표시
  - 5개가 맥시멈이라 이후 선택 불가능
- 선택된 키워드를 `keyword List` 에서 제거하고 `Selected List` 에 추가

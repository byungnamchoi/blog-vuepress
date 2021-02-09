---
sidebar: auto
---
# Javascript
## Testing Media Queries

MediaQueryList 개체를 만든 후에 쿼리 결과를 확인하거나 결과가 변경 될 때 알림을 받을 수 있습니다.


### 미디어 쿼리 목록 만들기

기기가 가로 또는 세로 방향인지 확인 가능

`const mediaQueryList = window.matchMedia('(orientation: portrait)');`

### 쿼리 결과 확인

미디어 쿼리 목록을 만든 후에는 `matches` 속성 값을 보고 쿼리 결과를 확인할 수 있습니다.

```
if (mediaQueryList.matches) {
  // 세로 방향
} else {
  // 가로 방향
}
```

### 쿼리 알림 받기

지속적으로 쿼리 결과에 대한 변경 사항을 확인해야하는 경우 쿼리 결과를 폴링하는 것보다 리스너를 등록하는 것이 더 효율적 입니다.<br>
이렇게하려면 미디어 쿼리 상태가 변경 될 때 호출 할 콜백 함수를 사용 `addListener()`하여 `MediaQueryList` 객체 에서 메서드를 호출합니다.

```
const mediaQueryList = window.matchMedia('(orientation: portrait)');

function handleOrientationChange(mql) {
  // callback
}

// 방향 변경 핸들러를 한번 실행
handleOrientationChange(mediaQueryList);

// 콜백 함수를 리스너로 쿼리 목록에 추가
mediaQueryList.addListener(handleOrientationChange);
```

매개 변수를 `evt` 이벤트 객체로 정의 합니다. 표준 방식으로 이벤트 리스너를 처리 합니다. `MediaQueryListEvent` 콜백 함수에 대한 인수로 전달합니다.

```
function handleOrientationChange(evt) {
  if (evt.matches) {
    // 세로 방향
  } else {
    // 가로 방향
  }
}
```

### 쿼리 알림 종료

미디어 쿼리의 값으로 호출 변경에 대한 결과를 중지라혀면 `removeListener()` 을 이용하여 `MediaQueryList` 이전에 정의 된 콜백 함수에 전달합니다.

`mediaQueryList.removeListener(handleOrientationChange);`

**참고 자료(References)**

* <https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries>

## Custom Cursor

**참고 자료(References)**
* https://tympanus.net/codrops/2019/01/31/custom-cursor-effects/
---
sidebar: auto
---
# Issue

## print 사이즈
```
// AS-IS
@page {
  size: 21.0cm 29.7cm;
}

// TO-BE
@page {
  size: auto;
}
```

A4 용지 사이즈에 맞게 스타일로 사이즈를 지정하고 인쇄를 하게되면 크롬 브라우저에서 `인쇄 &gt; 레이아웃(가로/세로)` 변경할 수 있는 옵션이 노출되지 않습니다.

**참고 자료(References)**
* <https://stackoverflow.com/questions/36322109/chrome-printing-website-missing-layout-options>

## id 값에 숫자가 맨 앞에 올 경우

숫자가 맨 앞에 올 수 밖에 없는 상황이면 아래와 같이 사용하면 됩니다.<br>
`document.getElementById('22')` 또는 `document.querySelector("[id='22']")` 사용

**참고 자료(References)**

* <https://stackoverflow.com/questions/37270787/uncaught-syntaxerror-failed-to-execute-queryselector-on-document>

<script>
export default {
  name: 'Issue'
}
</script>
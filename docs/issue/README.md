---
sidebar: auto
---
# Issue
## 난수를 생성하여 id 값을 사용할 경우<br> 숫자가 맨 앞에 오면 생기는 이슈

숫자가 맨 앞에 올 수 밖에 없는 상황이면 아래와 같이 사용하면 됩니다.<br>
`document.getElementById('22')` 또는 `document.querySelector("[id='22']")` 사용

**자세한 내용은 아래 링크 참고**

* <https://stackoverflow.com/questions/37270787/uncaught-syntaxerror-failed-to-execute-queryselector-on-document>

<script>
export default {
  name: 'Issue'
}
</script>
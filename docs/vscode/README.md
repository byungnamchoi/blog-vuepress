---
sidebar: auto
---
# Visual Studio Code
## editor.formatOnSaveMode
수정한 부분만 코드 포매팅 할 수 있는 기능.

`editor.formatOnSaveMode` 설정 값을 `modifications` 로 변경.

<script>
export default {
  name: 'VSCode'
}
</script>

## 목업 이미지 플레이스홀더 스니펫
VS 코드 사용자 스니펫은 File > Preferences > User Snippets(맥: Code > Preferences > User Snippets)로 접근하여 HTML을 검색하여 선택하여 적용할 수 있습니다.
`html.json` 스니펫 파일이 열리면 아래 내용을 추가해주면 됩니다.
```
{
  "X Box": {
    "prefix": ["xbox", "x-box"],
    "body": [
      "<svg fill=\"currentColor\" fill-opacity=\".7\" display=\"${0:block}\" viewBox=\"0 0 ${1:16} ${2:$2}\">",
      "\t<path stroke=\"currentColor\" stroke-width=\"2\" d=\"M0 0h$1v$2H0z\" vector-effect=\"non-scaling-stroke\" />",
      "\t<path stroke=\"currentColor\" d=\"M0 0l$1 $2M$1 0L0 $2\" vector-effect=\"non-scaling-stroke\" />",
      "</svg>"
    ],
    "description": "A Mockup Placeholder Box"
  },
  "X Box <img />": {
    "prefix": ["ximg", "x-img"],
    "body": [
      "<img $0src=\"data:image/svg+xml,%3Csvg fill='${3:silver}' viewBox='0 0 ${1:16} ${2:9}' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='${4:black}' stroke-width='2' d='M0 0h$1v$2H0z' vector-effect='non-scaling-stroke'/%3E%3Cpath stroke='$4' d='M0 0l$1 $2M$1 0L0 $2' vector-effect='non-scaling-stroke'/%3E%3C/svg%3E\" alt=\"\" width=\"$1\" height=\"$2\" />"
    ],
    "description": "A Mockup Image Placeholder"
  }
}
```

**참고 자료(References)**
* <https://code.visualstudio.com/docs/editor/userdefinedsnippets#_create-your-own-snippets>


### 位运算
`&`:  按位与 位数上都是1才返回1 
`|`   按位或  只要有一个是1就返回1
`^`   按位异或  2个数字相同，则返回false，不相同就返回true
```javascript
异或
10     
01
---
11
```

`<<` 左移 乘以2

`>>`右移 除以2

授权和验证

```javascript
let STYLE = 1
let CLASS = 1 << 2
let CHILDREN = 1 << 2

// 授权 |
let vnodeType = STYLE | CLASS
// 判断 &
vnodeType  & STYLE

// 删除授权^
vnodeType = vnodeType ^ CLASS
```

### 题目
1. 【231】 2的幂
2. 【136】 只出现一次的数字

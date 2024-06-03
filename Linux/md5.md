---
layout: doc
---
# Linux下查看文件或字符串的md5值

MD5算法用于验证网络文件传输的完整性。md5sum命令采用MD5算法计算和检查文件的校验和。

## 语法

md5sum [选项] [文件]

## 选项

- `-b` 或 `--binary`: 作为二进制文件处理输入。
- `-t` 或 `--text`: 作为文本文件处理输入（默认）。
- `-c` 或 `--check`: 从文件中读取MD5信息检查一致性。
- `--status`: 与`--check`一起使用，不输出结果，根据返回值表示检查结果。
- `-w` 或 `--warn`: 检查输入的MD5信息是否合法。

## 示例

1. 查看字符串的md5值

```
echo -n "hello world" | md5sum
```

2. 查看文件的md5值

```
md5sum filename
```

生成MD5文件校验值并检查一致性：

```
md5sum filename > filename.md5
md5sum -c filename.md5
```

内容来自 [散尽浮华的博客](https://www.cnblogs.com/kevingrace/p/10201723.html)。


# 前言
最近忙着编写一些文档，需要转换成 pdf，但是 WPS的转 pdf功能需要付费，上网搜了很久，搜到的不是付费的就是有大小限制的，于是想着本地使用python库转，结果效果不大理想，查阅资料后找到了这一款开源的本地命令行工具libreoffice

---
## 一、libreoffice是什么？
LibreOffice 是一个功能强大的开源办公套件，由 The Document Foundation 维护和发展。它提供了一系列与 Microsoft Office 功能相似的应用程序，包括：
1. Writer：一款文字处理器，类似于 Microsoft Word。可以用来创建文档、报告、书籍，并支持广泛的文件格式，包括 Microsoft Word 的 .doc 和 .docx。
2.	Calc：一个电子表格程序，与 Microsoft Excel 相似。它支持复杂的数据分析和可视化功能。
3.	Impress：一个演示程序，类似于 Microsoft PowerPoint。用于制作演示文稿，并支持多种动态效果和过渡。
4.	Draw：一个矢量图形编辑器，可以创建和编辑图形、图表和图形文档。
5.	Base：一个数据库管理程序，类似于 Microsoft Access。它可以帮助用户管理数据，并可以使用 SQL 进行数据操作。
6.	Math：一个数学公式编辑器，用于创建和编辑数学公式。

## 二、使用步骤
### 1.安装libreoffice
本人使用的是 mac电脑，可以直接使用本地的命令行工具brew安装。

```c
brew install libreoffice
```
 输入以下指令，如果能输出版本号，则说明打印成功了
```
soffice --version
```
如果是其他系统的小伙伴可以直接去官网下载[https://www.libreoffice.org/](https://www.libreoffice.org/)
### 2.运行命令行工具
直接在需要转换的文档目录下打开控制台，运行以下指令，即可在当前目录下将docx转换为pdf：
```c
sudo soffice --headless --invisible --convert-to pdf example.docx 
```

## 总结
今天浅浅的使用了一下libreoffice这个命令行工具，仅仅是冰山一角就已经能实现非常强大的wps付费功能了，这个工具对文件还能执行更多高级的操作，留着以后慢慢探索把，希望大家使用愉快！
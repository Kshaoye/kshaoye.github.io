---
layout : doc
---
# 软件包管理

如何在Linux系统实现软件的安装、更新、查看、卸载

类似于苹果的AppStore

安卓的GooglePlay，各厂商自己的应用市场，包括腾讯的应用宝

Linux的软件包通常由以下部分组成：

1、二进制程序，一般放在/usr/bin，/usr/sbin，/usr/local/bin，/usr/local/sbin

2、库文件，类似于Windows的DLL文件，放在/usr/lib，/usr/lib64，/usr/local/lib，/usr/local/lib64

3、配置文件，放在/etc

4、man帮助手册，放在/usr/share/man

在CentOS中，安装软件的方式：

## 二进制文件

​	由志愿者把开发完成的源代码编译成二进制，打包发布到网上

用户下载到本地后，结果解压配置就可以使用

## 源码安装

​	从网上下载软件的源代码，用gcc等工具编译成二进制文件后使用，有时候需要解决库文件的依赖问题

## 软件包管理器（[RPM](./RPM)）

​	使用包管理器工具安装，有时候需要手动解决软件包之间的依赖关系

## [yum](./yum)

​	基于rpm，可以自动解决软件包的依赖关系
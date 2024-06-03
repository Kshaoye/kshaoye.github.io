---
layout : doc
---
# RPM

早期是Redhat Package Manager红帽包管理器的缩写

RPM=RPM is Package Manager

RPM软件包类似于Windows的安装文件，在图形界面下可以直接双击安装

也可以用rpm -ivh 包名.rpm来安装

获取rpm的途径

1、系统光盘、必须先挂载光盘

CentOS8所有的RPM包都在光盘的APPStream/Packages和BaseOS/Packages目录下

CentOS7所有的软件包在光盘的Packages目录

2、CentOS官方服务器（www.centos.org）

3、第三方镜像站点（阿里云镜像站、网易镜像站）

4、项目官方站点

5、自己制作

RPM需要手动解决软件包之间的依赖关系

依赖关系：

A软件需要B软件的支持，没有B软件，A软件不能正常运行

例如：

4399的小游戏大多数依赖浏览器的Flash插件

网银插件（ActiveX）

软件包文件的命名

软件名-	版本号-发布次数.系统版本.架构.rpm

zlib-		1.2.7-17.				el7.		x86_64.rpm

版本号：主版本号.次版本号.修正号

主版本号：遇到重大更新才变动

次版本号：偶数代表稳定版，奇数代表测试版

修正号：修改的次数

系统版本

el7：Redhat Enterprise Linux7	红帽企业版7系列

架构

32位	i386 i386 i586

64位	x86_64

无平台 noarch

## 安装软件

### rpm -ivh 软件名.rpm

> 选项：
>
> ​	-i	安装（install)
>
> ​	-v	显示过程
>
> ​	-h	显示安装进度
>
> 例子：LinuxQQ

## 更新软件

### rpm -Uvh 软件名.rpm

### rpm -Fvh 软件名.rpm

U:安装软件时，如果有旧版本的软件包，则“升级”，如果不存在旧版本的软件，则执行安装

F:安装软件时，如果有旧版本的软件包，则“升级”，如果不存在旧版本的软件，则不执行安装

## 卸载软件

### rpm -e 软件名

## 查看软件包

### -q 查看是否安装

例如：rpm -q bind

### -c 查看软件的配置文件

例如：rpm -qc sudo

### -a 查看所有已安装的软件

例如：rpm -qa | more

### -i 显示软件包的详细信息

例如：rpm -qi grep

### -f 查看某个文件属于哪个软件包

例如：rpm -qf /etc/yum.conf

### -l（小写L）列出软件包的相关文件

例如：rpm -ql yum

### --nodeps 忽略依赖

### --force 强制

---

> 练习：
>
> 1、将CentOS镜像挂载到/mnt/cd
>
> 2、用rpm命令查询bind软件是否已经安装
>
> 3、如果没有安装就安装bind软件（软件包在/mnt/cd/Packages目录下）
>
> 4、查看bind软件的详细信息
>
> 5、卸载bind
>
> 6、查询/sbin/mdadm属于哪个软件包

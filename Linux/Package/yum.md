# yum

yum是一个基于rpm包的软件管理器

它基于C/S架构（Client/Server），能从配置好的yum仓库中下载rpm包并安装，可以自动处理依赖关系并且一次性安装所有的依赖包，不要繁琐的一次一次下载、安装依赖包。



Debian系列（包括Ubuntu、Kali）用的apt-get



yum的分类：

本地yum：客户端和服务器在同一台机器上

远程yum：服务器是一台机器，客户端是另外一台机器



工作原理

yum仓库（服务端）是rpm包以及包与包之间的依赖关系组成

yum客户端是由yum配置文件、缓存数据组成



客户端工作原理：

1、yum源设置完成后，yum会到各个可用的yum仓库下载元数据，并缓存在/var/cache/yum目录下

2、当管理员要安装某个软件时，yum会根据具体的操作请求分析缓存在本地的元数据，结合系统已安装的软件包，分析要安装或者升级的软件包列表

3、向yum仓库请求分析出来的软件包列表的软件，下载到本地进行安装

4、安装完成之后，清除本次安装过程中下载到本地的软件包，以节省磁盘空间



## 如何设置yum源

 默认的yum源定义文件在/etc/yum.repos.d目录下，后缀是.repo

.repo文件的格式

> []填写yum源的ID，可以是任意字符串，为了方便查看，通常与文件名相同
>
> name指定yum源的名字，可以为任意字符串，为了方便查看，通常与文件名相同
>
> baseurl指定yum源的URL（可以是http、FTP、或者本地路径）
>
> gpgcheck安装软件时是否检查签名（0表示不检查，1表示检查）
>
> gpgkey如何检查软件包的签名，该语句定义检查签名的秘钥文件
>
> enabled是否激活yum源，0表示禁用，1表示激活，默认是激活

---

## 例子：设置一个光盘yum源

> 查看系统版本
>
> cat /etc/redhat-release 
>
> 或者
>
> cat /etc/centos-release

---

> 挂载对应版本的系统光盘

---

> 进入/etc/yum.repos.d目录
>
> cd /etc/yum.repos.d

---

> 创建一个备份目录
>
> mkdir -pv backup

---

> 把系统原有的repo文件移动到刚才创建的备份目录下
>
> mv ./*.repo backup/

---

> 新建配置文件
>
> vim local-CD.repo
>
> [local-CD]
> name=local-CD
> baseurl=file:///mnt/cd
> enabled=1
> gpgcheck=0

---

> 清理yum源
>
> yum clean all

---

> 获取yum目录
>
> yum repolist

---

> 查看yum源中的软件包
>
> yum list | more

---

## 例2：远程的yum源

1、备份现有的repo文件

2、下载网易的repo文件

>  wget http://mirrors.163.com/.help/CentOS7-Base-163.repo

3、清理yum源

yum clean all

4、获取yum目录

yum repolist

5、查看软件包列表

yum list | more

## yum的常见操作

### yum clean all 清除缓存

### yum repolist 显示yum源的清单

（/etc/yum.repos.d目录下.repo结尾的文件）

### yum info 包名 查看软件包的信息（类似于rpm -qi）

### yum install -y tree vsftpd ftp 自动安装三个软件

### yum reinstall -y tree 重装tree

### yum update 更新一个或多个软件包

### yum list 列出yum源中所有的软件包

### yum grouplist 列出软件包的分组

### yum provides 命令名 查询提供命令的软件包

### yum search 关键字 根据关键字搜索软件

### yum localintall -y 软件包 使用yum安装本地的软件包

### yum remove -y 软件名 卸载软件

---

## 练习：

> 1、用yum命令查询vsftpd、ftp、samba、mariadb-server的相关信息
>
> 2、用yum安装vsftpd、ftp、mariadb-server
>
> 3、卸载vsftpd、ftp

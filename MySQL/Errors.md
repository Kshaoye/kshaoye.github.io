---
layout: doc
---
# MySQL常见错误
## 1045
产生MySQL1045错误的原因有很多，这里主要针对MySQL8命令行客户端可以正常登录，但是Navicat连接时报1045的情况提供解决方法。

报错信息：

`1045 - Access denied for user ‘root’@‘localhost’ (using password: YES)`

产生原因：

MySQL8关闭了root用户的登录

解决方案：

通过命令行登录后重设密码，具体步骤如下
```
# 进入MySQL数据库
use mysql;
# 重置密码
update user
set authentication_string=password('新密码')
where user=('root')
# 刷新数据块
flush mysql;
# 退出
quit
```
重设密码后再次尝试连接即可
## 2059
产生原因：
mysql8 之前的版本中加密规则是mysql_native_password,而在mysql8之后,加密规则是caching_sha2_password

解决方案：
通过命令行进入登录后根据以下步骤操作
```
# 进入MySQL数据库
use mysql;
# 修改加密规则
alter user 'root'@'localhost'
identified with mysql_native_password
by '你的密码';
# 刷新权限
flush privileges;
```
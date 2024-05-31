---

title: Hello, world!
author: MARTIAN-LY
pubDatetime: 2024-05-31
tags:
  - test
description: 这是第一篇测试博客，感谢室友hzq的鼎力相助。
---


![这是图片](@assets/images/AstroPaper-v4.png)

## pip

```shell
pip安装包
pip install --upgrade <包的名字>
pip install -U <包的名字>
prp install -r requirements.txt

pip自我更新
pip install --upgrade pip
pip install -U pip

根据安装的所有包生成 requirements.txt
pip freeze > requirements.txt

仅生成使用的包 requirements.txt
pip insatll pipreqs
pipreqs --force
```

## Tensorflow
```python
tf.__version__
tf.test.is_built_with_cuda()
tf.config.list_physical_devices('GPU')
```

## conda

```shell
取消 conda 自动激活
conda config --set auto_activate_base false

当前已安装的 conda 信息
conda info -e
conda info --envs

当前已安装的包
conda list

创建新环境
conda create -n <...> python=<version>
conda create --name <...> python=<version>
conda create --name <...> --clone <...>

激活环境
conda activate <...>

退出环境
conda deactivate

删除环境
conda remove -n <...> --all

搜索包
conda search <...>

删除包
conda uninstall <...>
```

libpcap

```shell
sudo apt-get update
sudo apt-get install libpcap-dev
```

## docker

官方教程网站：https://docs.docker.com/get-started/02_our_app/

```shell
docker build -t <xxx> .
在当前目录根据 Dockerfile 创建一个镜像 <xxx>

docker build --platform linux/amd64 -t YOUR-USER-NAME/getting-started .
创建镜像的时候指定平台

docker run -dp 127.0.0.1:3000:3000 getting-started
-d: detach,后台运行
-p: publish, 把127.0.0.1:3000端口对应docker 3000端口

列出所有 container
docker ps

停止运行某个 container
docker stop <the-container-id>

删除某个 container
docker rm <the-container-id>

强制删除（包含停止运行）
docker rm -f <the-container-id>

列举所有 image
docker images
docker image ls

登录到 docker hub（密码是huoxingren）
docker login -u martianly


给 image 起新名字
docker tag getting-started martianly/getting-started

把 image push到仓库
docker push martianly/getting-started

拉取 ubuntu image
docker pull ubuntu:22.04

运行 ubuntu
docker run -itd --name ubuntu-test ubuntu

docker run：这是Docker命令行工具的基本命令，用于创建并启动一个新的容器。
-i：交互式选项，允许你与容器进行交互，即可以与容器的标准输入进行通信。
-t：分配一个伪终端，这样你就可以在容器内运行需要交互的程序，比如命令行界面。
-d：以守护进程模式运行容器，即在后台运行容器，不会阻塞当前的命令行。
--name ubuntu-test：为容器指定一个名称，这里是ubuntu-test，这样你可以使用这个名称来引用容器，而不是默认的容器ID。
ubuntu：指定要使用的Docker镜像，这里是官方的Ubuntu镜像。
综上所述，这条命令的作用是：以交互式、分配伪终端、守护进程模式启动一个名为ubuntu-test的容器，并使用官方的Ubuntu镜像。

进入 ubuntn
docker exec -it ubuntu-test /bin/bash

这条命令用于在已运行的Docker容器中启动一个交互式的bash会话。
docker exec：Docker命令行工具中的一个命令，用于在正在运行的容器内执行命令。
-it：这两个参数组合在一起，意味着分配一个交互式终端。-i代表交互式，允许你对容器的标准输入（STDIN）进行操作；-t代表分配一个伪终端，使得你可以在容器中使用需要交互的命令行程序。
ubuntu-test：这是容器的名称，这个名称需要与之前创建容器时指定的名称一致。在这个例子中，我们假设有一个名为ubuntu-test的容器正在运行。
/bin/bash：这是要在容器内部执行的命令，即启动bash shell。
综上所述，这条命令的作用是：在名为ubuntu-test的Docker容器中启动一个交互式的bash会话，允许用户与容器内部进行交互操作。
docker exec -it ubuntn-test /bin/bash
```

查看虚拟显示器信息
`C:\Program Files\Sunshine\tools\dxgi-info.exe`


Astro开启服务器

```shell
pnpm run dev
pnpm run dev --host
```
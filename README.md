# DisasterGuard

![Alt](https://repobeats.axiom.co/api/embed/cc09ea9d265e625d310679ed73613a035c2f7264.svg "Repobeats analytics image")

## 安装依赖

首先看一看有没有装node和npm，如果没有的话装一下最新版，而且python3需要是3.6以上。

如果用ubuntu（最好是ubuntu18或20）的话可以采用如下步骤：

```shell
sudo apt install npm
sudo npm install -g n
sudo n latest
npm install -g yarn
```

## 编译运行

```shell
git clone 'https://github.com/yinwaii/DisasterGuard'
cd DisasterGuard
yarn
yarn start
```

## mock接口

注册一个apifox的账号，下载桌面版，然后把email发给我，我拉到团队里，尝试mock网页发现没问题就可以使用了，在浏览器里访问`http://localhost:3000/`。

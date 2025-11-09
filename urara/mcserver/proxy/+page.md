---
title: 代理伺服器架設
summary: 自從伺服器架好之後，我就在想能不能搞個永久固定IP的服...
created: 2025-07-22
publish: 2025-11-07
tags: 
  - 'mc server'
  - 'Linux'
---

自從伺服器架好之後，我就在想能不能搞個永久固定IP的服

後來發現有個東西叫proxy，中文好像叫「代理」

![alt](https://upload.wikimedia.org/wikipedia/commons/b/bb/Proxy_concept_en.svg)

代理伺服器本身的用途，是把使用者丟去他該去的地方

如果拿上面那張圖看，alice就是玩家的電腦，bob就是mc伺服器

但是bob只會在那裡三個月，試用額度到了就要還回去

我得要備份資料再開一台mc伺服器（叫他caboozled_pie好了）

那alice雖然找不到bob，但是只要他去找代理，代理會再把他丟去caboozled那邊

你可能會問「啊這樣代理不也要三個月換一次？」

那理所當然的，代理又不運行模組，效能消耗會低很多

還記得dc bot嗎，當時用的是free tier的VM

所以只要把代理架在free tier的VM上面，就可以達到固定IP的效果

今天就算alice不知道mc伺服器是bob, caboozled還是doremy，

我去代理調一下設定，就能讓alice連上mc伺服器

## 實現方式

那想要給minecraft server架個proxy會用到什麼東西呢？

### Velocity

就是proxy，支援一些插件，像是/hub指令之類的可以用插件實現

### Forge server

你想要轉發的伺服器本身，可以很多個

去過hielke伺服器應該知道，所有地圖都是經由proxy轉發的子伺服器

### 另一台電腦

當然可以把proxy跟子服全部架設在同一台電腦上，但這樣就沒有固定IP的優勢了

所以我開了一台新電腦

還有，放點音樂也是必要的，否則你會翻說明文件翻到睡著🤓

### paper + velocity

開始動手！

下載velocity要對應到mc的版本，就像forge一樣

![alt](https://img.littlezhaidi.me/250722proxy/velocity-version.webp)

裝velocity，先執行一次讓他生成文件，

結果跟原本forge伺服器的port打架了（預設是25565）

![alt](https://img.littlezhaidi.me/250722proxy/port-conflict.webp)

這還算簡單，server.properties裡面改成別的就好了

![alt](https://img.littlezhaidi.me/250722proxy/change-server-port.webp)

要注意，因為一開始看教學建立的防火牆只有開25565這個port

今天你改成25566的話，也要開放25566，這樣才不會被擋掉

![alt](https://img.littlezhaidi.me/250722proxy/firewall-policy.webp)

果然沒這麼順利，看看說明文件怎麼寫吧

![alt](https://img.littlezhaidi.me/250722proxy/unable-to-connect.webp)

他說你的yml設定檔沒調整，應該要把這三個同步才行

還有要把online-mode檢測給proxy做

![alt](https://img.littlezhaidi.me/250722proxy/yml-conf.webp)

而且forwarding.secret裡面的密碼要一致

（你信不信我用的真的是AMOGUS）

結果開不起來:)

記得調java版本，paper跟velocity用的java版本不一樣，要一直切來切去很麻煩

![alt](https://img.littlezhaidi.me/250722proxy/java-version.webp)

### arclight + velocity

paper核心子伺服器+velocity proxy搞定了，接下來試試forge

但問題是forge這邊沒有paper.yml啊？要怎麼辦？

![alt](https://img.littlezhaidi.me/250722proxy/cab-server.webp)

問gpt，說換成arclight

![alt](https://img.littlezhaidi.me/250722proxy/gpt-arclight.webp)

你媽的，arclight只支援bukkit那邊的插件

gpt在搞事，我換成mohist就是了

![alt](https://img.littlezhaidi.me/250722proxy/gpt-mohist.webp)

哥們這是怎樣，mohist跟magma安全性有疑慮？？？

看來gpt不可信啊

![alt](https://img.littlezhaidi.me/250722proxy/gpt-mohist2.webp)
![alt](https://img.littlezhaidi.me/250722proxy/gpt-magma.webp)

### forge + plugin + velocity

最後只好用forge端插件，還好papermc官網有推薦一些好康的

![alt](https://img.littlezhaidi.me/250722proxy/papermc-plugin.webp)

去modrinth下載

一樣要重開伺服器，讓插件生成他的設定檔

（又等5分鐘，去打真傳再回來）

![alt](https://img.littlezhaidi.me/250722proxy/anbassador.webp)

然後再做一次這些事情[傳送門](#paper--velocity)

但還是連不上（我忘記截圖了，腦補一下）

原來是1.16的鍋，velocity沒有給這些版本內建modern forwarding，要額外下載

![alt](https://img.littlezhaidi.me/pcf.webp)

結果原版伺服器不給forge連線喔🤔那我之前架paper不是白忙活嗎

![alt](https://img.littlezhaidi.me/250722proxy/unable-to-connect2.webp)

不管，反正現在看起來proxy可以用了，進去掛機一下

![alt](https://img.littlezhaidi.me/250722proxy/playing-mc.webp)

？？？三小

![](https://img.littlezhaidi.me/250722proxy/proxy-server-is-down.webp)

原來是沒給你screen，就不會在背景跑是吧

![alt](https://img.littlezhaidi.me/250722proxy/bash.webp)
![alt](https://img.littlezhaidi.me/250722proxy/screen.webp)

以後就連這個proxy的IP就行了😎

（motd什麼的，之後再說吧）

![alt](https://img.littlezhaidi.me/250722proxy/server-list.webp)
![alt](https://img.littlezhaidi.me/250722proxy/mcsv.webp)

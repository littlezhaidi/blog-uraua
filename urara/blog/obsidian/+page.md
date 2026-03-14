---
title: 新的寫作空間Obsidian
summary: 上次把整個圖片上傳搞定了，但仍然美中不足...
date: 2026-03-14
tags:
  - blog
---

上次把整個圖片上傳搞定了，但仍然美中不足  
因為圖片上傳上去，會長成這樣：  
![r2-bucket.png](https://img.littlezhaidi.me/20260314/r2-bucket.png)  
可以正常顯示，但是url會比較亂  
在尋找解決方案時，發現了這篇文章，使我想起了 Obsidian 這款軟體  
[使用PicGo + GitHub 搭建 Obsidian 图床](https://www.haoyep.com/posts/github-graph-beds/)

## vs-picgo

這是一款 VSCode 插件，跟 markdown image 插件的功能差不多  
上傳到圖床這部分，透過一款叫 PicGo 的軟體實現  
能自訂的東西比較多，並且能解決上述問題  
問題是他一直噴308給我，我解決不了  
就萌生了轉移到 Obsidian 的念頭，畢竟人家教學都寫好了

## Obsidian是什麼？

就是一款基於 markdown 格式的筆記軟體，  
好幾年前我就在papaya的頻道上看過這東西了，  
但從沒想過我有一天真的會用上他    

Obsidian 有很多功能，大多與我目前的需求相符  
再加上 Obsidian 本就是為了寫作（或筆記）而設計的  
雖然目前用 VSCode 寫文章，幾乎沒遇到什麼問題  
但在 VSCode 上面更新部落格文章，有種難以形容的違和感  

## 小比較
|軟體|筆記格式|同步功能|自訂性|預覽功能|平台|
|:---:|:---:|:---:|:---:|:---:|:---:|
|Obsidian|markdown|有，付費|有插件生態|有|電腦，手機|
|VSCode|markdown|無，插件支援|有插件生態|無，插件支援|電腦|
|HackMD|markdown|有，即時|較低|有|Web|
離題一下：  
我接觸的順序其實是 Obsidian, HackMD, VSCode  
我也忘了當初怎麼發現的，反正是國中的事情  
當然那時候還沒有寫部落格的念頭啦，總之各有優點

## 換到 Obsidian 之後，會不習慣嗎？
不同軟體之間轉換，肯定是會碰壁的  
但令我意外的是，這個過程比我想像中的順利許多  
大概要感謝urara template的功勞，把目錄結構整理的非常清楚

Obsidian 的 vault 跟 VSCode 的工作區根本一模一樣，  
介面的邏輯也差不多，都有開啟分頁跟分割視窗的功能  
我只要在blog這個目錄初始化 vault，用起來就跟之前一樣了  

要特別注意的是，vault 建立完成之後，  
需要去更新 gitignore，以排除 Obsidian 建立的那些檔案  
我是直接把`urara/.obsidian`整個目錄包含進去  

## 插件安裝
但 Obsidian 本身還是有很多跟 VSCode 不太一樣的點，  
原本在 VSCode 上面一些方便的功能，到了 Obsidian 就變成了不便  
像是 Obsidian 的關係圖，會和 urara 的檔名邏輯起衝突  
也沒有內建終端，來開啟 urara 的 development server  
以及 git 這部分就要自己處理，沒有 VSCode 的介面能輔助了  
這時候就得要讓插件出場了

### obsidian-git
前面還沒講過怎麼安裝 Obsidian 插件，這裡稍微提一下  
但其實開頭那篇文章就有教你怎麼操作啦，我也是跟他學的  
左下角設定，找到 Community Plugins（MacOS可以按`Cmd`+`,`）  
再搜尋想要的插件安裝即可  
不知道為什麼要藏在這裡就是了，人家 VSCode 的多好找啊:)  

這次用的插件是 [obsidian-git](https://github.com/Vinzent03/obsidian-git)，他就是 git，邏輯都一樣  
有個GUI還是比較容易理解的，跟 VSCode 內建的有些區別就是了  
安裝之後，大概長這樣：  
![obsidian-git.png](https://img.littlezhaidi.me/20260314/obsidian-git.png)
會把右邊的ToC換成git的介面，你就可以在這裡add file跟commit  
缺點就是無法一眼看出更動的是哪個文章，需要把滑鼠移上去才知道  

### Front Matter Title
 [obsidian-front-matter-title](https://github.com/snezhig/obsidian-front-matter-title) 是一個用來改標題的小插件，潛力巨大  
一定還有很多神奇的功能，但我暫時不會用到，總之先裝再說  
urara的所有文章，似乎需要以`+page.md`作為檔名才會被正常讀取  
因此造成 Obsidian 上的關係圖過於混亂，就跟剛才提到的git一樣  
把這個插件的`Graph`選項打開，就能改善這個問題  
具體效果是這樣（字有點小請見諒）：
![obsidian-graph.png](https://img.littlezhaidi.me/20260314/obsidian-graph.png)

### 終端機
在 Obsidian 內搜尋 "terminal"，就可以找到 [obsidian-terminal](https://github.com/polyipseity/obsidian-terminal)  
只看下載量就能知道，這個插件有多受歡迎  
這個插件可以經由 Obsidian 的 Command palette，在新分頁開啟一台終端機  
一般來說，我會把視窗分割成這樣，看起來比較舒服  
![workspace.png](https://img.littlezhaidi.me/20260314/workspace.png)  

### image auto upload
最重要的一個插件，請認準renmu123這個版本：[image auto upload](https://github.com/renmu123/obsidian-image-auto-upload-plugin)  
開頭那篇文章，就是這個插件的教學，但我有話要說:)  
大家介紹的都是有GUI版本的 PicGo，但其實我用的是CLI版的  
我是這樣搞的，順便附上[官方文檔連結](https://docs.picgo.app/core/guide/config)  
```zsh title="zsh"
npm install picgo -g
picgo help #確認安裝是否成功
picgo add s3 #原版picgo不支援S3圖床，但有插件可以裝
picgo set uploader
```
![config.png](https://img.littlezhaidi.me/20260314/config.png) 
如果有用過之前那個 VSCode 插件，這些選項應該滿眼熟的  
如果沒用過，去看一下[我之前的文章](https://blog.littlezhaidi.me/blog/r2/)就算你用過了:)  
剩下有些東西R2沒有，留空就好  
好了之後先上傳張圖片試試，確認這裡沒出問題再進行下一步  

接下來要先確認自己 PicGo 的路徑，類似這樣
```zsh title="zsh"
which picgo
/Users/littlezhaidi/.nvm/versions/node/v24.13.1/bin/picgo
```
然後到插件那裡，把`Default Uploader`換成`PicGo-Core`  
在`PicGo-Core Path`裡面，把 PicGo 路徑貼進去  
最後去終端機，打開 PicGo Server 就大功告成了  
```zsh title="zsh"
picgo server
[PicGo WARN]: [PicGo Server] 警告：认证已关闭，任何人都可以上传图片。

[PicGo INFO]: [PicGo Server] Listening at http://127.0.0.1:36677
```


如果上傳遇到問題，用剛剛的終端機打開`developerConsole`  
所有插件輸出的資訊都會在那裡，可以藉此偵錯  
或者看看這裡可能會有幫助：[issue#20](https://github.com/renmu123/obsidian-image-auto-upload-plugin/issues/20)  
也可以去試試別人推薦的 [uPic](https://github.com/gee1k/uPic)，  
一樣是上傳圖床的工具，我是沒看懂跟 PicGo 有什麼區別:)  
如果要讓他跟 Obsidian 合作，或許要其他插件，我沒試過所以看過就好  


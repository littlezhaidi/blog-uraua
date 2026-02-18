---
title: 使用SDKMAN!管理Java版本
summary: 眾所周知，mc需要java才能啟動...
created: 2026-02-16
publish: 2026-02-16
tags:
  - 'Linux'
  - 'mc server'
---

眾所周知，mc需要java才能啟動  
幸好小葳有教我們怎麼弄
<script>
  import {YouTube} from 'sveltekit-embed'
</script>
<YouTube youTubeId="f2nvfJuI5GU" />
<br />

但我遇到一個問題：  
我想玩create: above and beyond，他是1.16.5的modpack  
直接複製影片給的指令，居然沒辦法成功安裝java11

```bash title="bash"
sudo apt-get install openjdk-11-jre-headless
```

```bash title="bash"
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
Package openjdk-11-jre-headless is not available, but is referred to by another package.
This may mean that the package is missing, has been obsoleted, or
is only available from another source

E: Package 'openjdk-11-jre-headless' has no installation candidate
```

當初跟gpt搞了一陣子（那時候好像還是gpt比較強）  
用了奇怪的方法解決了  
後來才知道有sdkman這個東西

## 工具介紹
sdkman 是一個套件管理器，很輕量，指令很簡單。  
有在搞網頁開發的，應該或多或少聽過「套件管理器」這個詞，  
因為 nvm 也是一個套件管理器。  
如果像我一樣，沒有要深入理解，就把它理解成 java 版本的 nvm 就好。  

## 安裝方法
我先假設你完全照著小葳的教學弄。  
先照著他的做，到了這步先停下來。   
```bash title="bash"
apt-cache search openjdk
```
先安裝 zip 跟 unzip，因為 sdkman會用到。  
我印象中，安裝其中一個就會幫你裝好另一個:）
```bash title="bash"
apt-get install zip
```
然後去 sdkman 的官網：https://sdkman.io/  
首頁有一條指令，我們貼上這條指令，先安裝 sdkman。  
然後等他跑一下，安裝完成之後會提示你  
「把sdkman加入環境變數，讓sdkman立刻生效」。  
```bash title="bash"
source "$HOME/.sdkman/bin/sdkman-init.sh"
```
如果忘記打這條指令沒關係，重新進一次終端就會自動生效了。  

## 使用方法
先來看看 sdkman 的幫助，順便確定他能不能用。  
```bash title="bash"
sdk help
```
底下那個範例就有教你怎麼用了，當然我們想裝的並不是java17。  
所以要先看看java11在他這裡的識別碼是什麼。  
```bash title="bash"
sdk list java
```
或者開你電腦的瀏覽器，去這裡也行。  
https://api.sdkman.io/2/candidates/java/linux/versions/list?installed=  
一般我們裝的是 Temurin 系列的，以這裡做範例，  
我想安裝的就是 11.0.30-tem 這個版本。
```bash title="bash"
sdk install java 11.0.30-tem
```
裝完之後，我一般會直接調成預設，  
然後用老方法確認一下現在的java是哪個版本。  
```bash title="bash"
java -version
```
如果你不想玩cab了，想換回原版mc，  
那也是很方便的。  
```bash title="bash"
sdk use java 21.0.10-tem
```

## 如何與一鍵開服腳本配合
idk，因為我沒用過，但我提供一個思路。  
首先你要先確定崩服原因是 java 版本裝錯，可以去`crash-report`看。  
如果發現不是 java 版本錯了，那就先回去看看影片哪個步驟漏了。  
因為我之前看教學開服的時候，就真的犯過很蠢的錯，  
所以一定要確認好。  

在我印象中，那個腳本只有在初始化時（./install）  
會幫你切一次 java 版本。  
所以只要在崩服之後，用前文提到的方法切版本，  
再重新啟動伺服器（./startserver）  
當然前提是你已經用 sdkman 裝好你想要的 java 版本了。  


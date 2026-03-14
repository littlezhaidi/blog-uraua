---
title: 將Cloudflare R2作為部落格圖床
summary: 這篇文章我早就想寫了，畢竟有個自己的圖床真的很酷...
date: 2026-02-26
tags:
  - blog
  - Cloudflare
---
這篇文章我早就想寫了，畢竟有個自己的圖床真的很酷  
但因為有超級多想補充的，所以拖到現在才生出來  
而整件事情，要從25年的暑假開始講起  

## 一切的開始

當時，我還沒有建立部落格的想法，  
但由於我的 discord bot 會用到一些靜態圖片資源，  
於是聯想到了巴哈的貓戰版  
他們會把轉蛋海報放在 imgur 上面，獲取唯一的連結之後，  
就能隨時隨地嵌入這張圖  

## imgur 對台灣的封鎖

我試著效仿，但發現電腦突然不能登入，  
手機端雖然未登出，卻也無法上傳圖片  
後來才發現，是 imgur 官方無預警對全台灣進行了IP封鎖  
巴哈、ptt這些台灣大平台，都受到嚴重衝擊  
詳情可參考此文章：  
[Imgur壞了? 無法上傳? 2025最佳替代圖床meee、postimages、imgbb](https://home.gamer.com.tw/artwork.php?sn=6146343)  

在知悉災情嚴重程度的同時，偶然間看到了這篇文章，深深抓住了我的目光    
[Imgur 封鎖台灣 IP，我把圖床搬到 Cloudflare R2](https://blog.kyomind.tw/weekly-review-43/)  
（強烈建議仔細看完，等一下的內容與這篇文高度相關）  

## 「R2儲存桶」
儲存桶，顧名思義是用來放東西的  
> 能應用的情境相當多，
> 只要是需要將檔案獨立成一份作為儲存至雲端上的情境幾乎都與他有關

而且如Kyo所說，R2基本上是免費的  
這太戳我性癖了，我馬上就開始行動  

## 建立儲存桶，上傳圖片

如果想要自定義網域，有個前置步驟  
也就是「域名移轉」
回收伏筆的時候到了，去看看 [搞個域名來玩玩](https://blog.littlezhaidi.me/domain/) 吧

列出我的參考資料就好，這部分需要自己摸索  
我參考的是這個影片，說明欄也有文章能看，可能會清楚一些  
我是沒遇到什麼大問題啦，就是域名轉移的時候，需要有點耐心而已  
<script>
  import {YouTube} from 'sveltekit-embed'
</script>
<YouTube youTubeId="3ACtqt9mVsU" />
<br />


這一篇資料我覺得也滿好的，寫這篇文的當下才發現  
[# 免費圖床選擇：15 分鐘搞定 Cloudflare R2 圖片託管](https://vocus.cc/article/68f9ef0bfd89780001fe8eae)  
就像亮之說的，強烈建議在上傳圖片時  
事先考慮資料夾結構，而且整齊的網址真的很有成就感  


## VS Code extension

有好一段時間，我都是手動去 dashboard 上傳圖片的  
但後來沒動力寫文章了，就沒有刻意去優化工作流  

直到過年這段期間，才開始研究如何把上傳圖片自動化  
幸好Kyo有講他的做法，也讓我少走很多彎路  

基本上是靠插件做到的，效果就是按某個快捷鍵，  
圖片就會被正確插入，並且上傳到你指定的圖床

## markdown image

老樣子，先去安裝插件，我用的是這個版本：  
![extension.png](https://img.littlezhaidi.me/20260227/extension.png)  
在剛剛的商店頁面，或者是側邊的插件列表，點齒輪進去插件設定  
我的圖床是R2，基本上就是 Cloudflare 版本的S3，設定是通用的  
接下來就問問gemini就行  
![ext-settings.png](https://img.littlezhaidi.me/20260227/ext-settings.png)
![s3-config-1.png](https://img.littlezhaidi.me/20260227/s3-config-1.png)
底下要填的這些東西，都在你建立儲存桶的時候，給你看過那麼一次  
具體在哪裡，可以回去複習技能加點的影片  
他當初叫你保存下來，就是用在這裡的
![s3-config-2.png](https://img.littlezhaidi.me/20260227/s3-config-2.png)
![s3-config-3.png](https://img.littlezhaidi.me/20260227/s3-config-3.png)
點一下右鍵就有選單可以貼上並上傳圖片了，也有快捷鍵能用  
上圖黃色圈起來的部分，就是你的圖片網址格式  
That's it



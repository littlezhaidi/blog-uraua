---
title: 搞個域名來玩玩
summary: 其實也是github student dev pack的一部分...
created: 2025-08-08
updated: 2025-11-08
publish: 2025-11-08
tags:
  - 'Github'
  - 'mc server'
---


其實也是github student dev pack的一部分  

## 申請

[這篇文章](https://zhuanlan.zhihu.com/p/634806678)寫得比較好，我就不廢話了  
順便拿他的圖片來用（如果真的用到的話）  

btw其實name.com也有免費域名，像是什麼.dev或是.app之類的  
如果覺得一個不夠用，可以再去搞一個  
反正都只有一年免費就是了

## 設定

拿到網域之後，基本上之前搞的那套velocity就不需要了  
我只要讓mc客戶端知道域名就好，再把伺服器實際IP綁到域名上  
其實也是個固定IP的效果

### DNS

最常用的DNS record有兩種，分別是```A```以及```CNAME```  
簡單來說，A是```IP位置```對應的```網域名稱```  
CNAME是```網域名稱```對應的```網域名稱```  

舉個例子，或是你可以直接看我目前的設定就懂了[傳送門](#我的設定)

假設今天要讓連上```littlezhaidi.me```的使用者進到mc伺服器，  
你要把mc伺服器的IP（外部IP）跟網域寫在一條```A record```裡面

如果今天是要把```battlecatsinfo.github.io```的github pages  
遷移到```battlecats.info```上面（假設三貓大買了個網域）  
那你不用自己架一台網頁伺服器，你直接把那兩個域名綁一條```CNAME```就好  
這樣你連```battlecats.info```顯示的就會是github pages的內容

### 我的設定

其實有個自動設定的選項，他的文章沒講到  
就是幫我設定一個CNAME record，連到我之前開的github倉庫[ 傳送門](https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages/)  
但當時沒想到我會架這個blog，所以似乎沒存圖

然後我還設定了一個子域名，用的是A record  
```host```我填的是mc，這樣看起來就會像```mc.littlezhaidi.me```  
```value```就是GCP雲端主機的外部IP位置  
所以你現在打開mc連```mc.littlezhaidi.me```，就會發現這是個forge伺服器  

喔然後如果你不想要看到那個「不安全」的提示，  
要自己去把SSL憑證弄上去，就照著namecheap寫的流程走就好  


後來發現有個東西叫RSV record，可以把子網域綁定到特定的port上面

### RSV record （25/08/30更新）

我在同一台電腦上開了兩台mc server，一個是之前有velocity的那個，另一個是臨時用的  
我想給他綁到survival.littlezhaidi.me上面  
所以我添加了一條新的A record  
![alt](https://img.littlezhaidi.me/251108domain/a-record.webp)

顯然是沒辦法處理port  
所以我去問gpt，他說要多加一個RSV record，並且指定"_minecraft._tcp"作為服務名稱以及通訊協定

長這樣  
![alt](https://img.littlezhaidi.me/251108domain/rsv-record.webp)
然後就好了👍

## 移轉 （25/11/08更新）

我發現這篇文有點過時了，因為我的name server現在換掉了  
原因是我想要架圖床，到時候寫到圖床的時候再詳細說明  
我會再回來插個傳送門

我是對這些不太懂啦，但我能講個大概  
總之就是我的DNS record不是在namecheap上面設定，  
要去cloudflare設定

為了把name server交給cloudflare，要先去namecheap那裡調整  
參考官方說明文件應該就夠了，我忘記當時我看的是什麼文章  
但流程就那樣而已，沒我當初想像的複雜[ 傳送門](https://www.namecheap.com/support/knowledgebase/article.aspx/9607/2210/how-to-set-up-dns-records-for-your-domain-in-a-cloudflare-account/)  
![alt](https://img.littlezhaidi.me/251108domain/namecheap.png)

對了，cloudflare帳號註冊似乎需要信用卡，  
但基本上免費服務已經非常夠用了，  
應該沒理由沒事就被cloudflare收費才對，所以可以安心  

然後你會看到cloudflare的介面，  
第一次進來很容易迷路，因為東西太多  
但多逛幾次，你就知道哪些東西是你永遠不會用到的了  
就比較不會迷路:)
![alt](https://img.littlezhaidi.me/251108domain/cloudflare-dns.png)

其實指示都滿清楚的，我覺得多說無益  
畢竟那不是我的想法，沒必要記錄下來

後記：  
關於SSL證書，這部分我幾乎沒概念  
我只知道要啟用他，才有https安全連線  
至於怎麼啟用，怎麼讓其他服務用上證書，那就是我目前的知識盲區了  
但應該早晚會學到的  
還有我記得那個RSV record設定似乎是不能用的，  
但我目前不會用到它了，所以就不管





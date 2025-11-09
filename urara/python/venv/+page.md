---
title: python虛擬環境建設
summary: 當時嫌麻煩沒去研究，沒想到這麼快就要用到了...
created: 2025-08-28
updated: 2025-11-09
publish: 2025-11-09
tags:
  - 'Python'
  - 'dc bot'
  - 'Linux'
---

剛接觸python時，vscode總是會提示「確定要把套件安裝在全域環境下嗎」  
當時嫌麻煩沒去研究，沒想到這麼快就要用到了  

## 安裝套件

倒帶一下，我們先回到velocity那個時間線  
那時候不是為了架proxy開了台新的vm嘛

我看他好像沒什麼負擔，又是免費的，  
就想說把dc bot一起部署在那台電腦上  
我把bot整個丟到我的repo上面了（目前是公開，以後搞不好會轉回私人）  
所以整個clone下來就行

```bash title="bash"
git clone https://github.com/littlezhaidi/chtetr-bot.git
```

debian 12預設的python版本是3.11  
但是沒有pip🤔我只好自己裝
（在apt裡面叫做python-pip） 

```bash title="bash"
sudo apt-get install python-pip
```  
果不其然沒這麼順利  
```bash title="bash"
pip3 install -r requirements.txt
```
```title="bash" {2}
If you wish to install a non-debian-packaged python package,
create a virtual environment using python3 -m venv path/to/venv.
Then use path/to/venv/python and path/to/venv/pip. 
Make sure you have python3-full installed.
```

## 所以為什麽要用venv？

當時看到這訊息我有點傻眼，為什麼要這麼麻煩啊  
但其實沒想像中的這麼複雜（雖然還是搞了一段時間才弄懂）

### 用途

隔離各種套件跟python版本，這樣會比較方便管理專案  
就不會變成大雜燴  
但說真的，如果你是一般使用者，搞成大雜燴好像也不會怎麼樣  
反正我現在是用的好好的，沒有出任何問題過  
```zsh title="zsh"
% pip3 list
Package            Version
------------------ -----------
aiohappyeyeballs   2.4.4
aiohttp            3.11.11
aiosignal          1.3.2
attrs              24.3.0
bidict             0.23.1
blinker            1.9.0
boto3              1.40.6
botocore           1.40.6
cachetools         6.1.0
certifi            2025.7.14
charset-normalizer 3.4.2
click              8.3.0
colorgram.py       1.2.0
discord            2.3.2
discord.py         2.4.0
##略...
```
既然都會用venv了，以後開新專案習慣就好一點吧  
強迫自己開一個venv，這樣要push到github上面，也比較好搞```requirements.txt```

### 注意事項
- 如果要跟```screen```混用，要先開screen再進入venv，大概是這樣：
```bash title="bash"
screen -S python
source venv/bin/activate
```
- 離開venv用```deactivate```，如果打```exit```是退出這個shell：）
- 在linux下，每個使用者有自己的venv，
- 誰初始化了venv，就用誰執行python，否則會卡權限

## 使用venv

```bash title="bash"
sudo apt-get install python3-venv #記得先安裝
python3 -m venv venv #在目前資料夾新增一個venv
python3 -m venv venv-dcbot #也可以取名成venv-dcbot
source venv/bin/activate #啟用它，檢查一下路徑是否正確
pip3 install -r requirements.txt #就可以安裝依賴了
```

![image](https://img.littlezhaidi.me/250828venv/requirements.webp)
![image](https://img.littlezhaidi.me/250828venv/discord-py.webp)

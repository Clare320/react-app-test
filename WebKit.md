# WebKit

## WebKit init

### WKWebViewConfiguration

这个类只能在web view第一次被初始化的时候用。

`var processPool: WKProcessPool` 进程池, 有啥用

### WKUserContentController

`WKUserContentController`: ---> 可以使用js发送消息，给webView注入用户脚本

#### 发消息
`func add(_ scriptMessageHandler: WKScriptMessageHandler, name: String)`
能让webView通过调用window.webkit.message.Handlers.name.postMessage(messageBody)，在
遵守WKScriptHandler的类里面实现 
`func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage)`

#### 注入 WKUserScript

postMessage 和 inject script分别适合哪些场景？

这两种方式如果想从原生交互后，原生回调数据给js该怎么处理？

可以做哪些事？






## 问题 
### navigatior.userAgent 和 webView的applicationNameForUserAgent不同？

### js如何发scheme协议连接？js触发链接的方式？
* a标签
* 通过`window.location.href = '';`来跳转
* 

### 原生回调给js
通过`func evaluateJavaScript`来执行js语句，主要是在web中利用一个中间类来处理，利用函数中转，js内调用原生时记录本次调用，创建一个识别的key，在类中插入一条记录，并将key作为参数传递给原生，原生处理完继续回调js，同样将key传回来，在js方法中获取key对应的记录，然后取出callback来处理。


### json在swift中链接解析

Could not cast value of type 'Swift.Substring' (0x7fff8185c940) to 'Swift.String' (0x7fff8185c218).
2021-04-10 16:18:33.746987+0800 SwiftList[18281:732298] Could not cast value of type 'Swift.Substring' (0x7fff8185c940) to 'Swift.String' (0x7fff8185c218).

这种有可能是字符串本身有编码

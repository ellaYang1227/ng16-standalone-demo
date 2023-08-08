# NgStandaloneDemo(Angular 16 獨立元件示範)

練習如何在 Angular 16 中，使用獨立元件(standalone)，包含創建獨立元件、匯入獨立元件、使用服務(services)、路由及延遲載入。

[[筆記]認識 Angular 16 獨立元件(standalone)](https://perfect-submarine-445.notion.site/Angular-16-standalone-cf51ab25d04d4563b5e91e009c084fd9)



## 安裝

以下將會引導你如何安裝此專案到你的電腦上。
* Angular 16.0.x 版本
* Node.js ^16.14.0 || ^18.10.0 版本

### 取得專案
```
git clone git@github.com:ellaYang1227/ng16-standalone-demo.git
```

### 移動到專案內
```
cd ng16-standalone-demo
```
### 安裝套件
```
npm install
```

### 運行專案
```
ng serve
```

### 瀏覽器開啟專案
```
http://localhost:4200/
```

## 環境變數說明
```
// 開發或正式
production=
// API 路徑
api=
```

## 資料夾說明
* components - 放置**元件**
* routes - 放置**路由**
* services - 放置**服務**
* assets - 放置**靜態資源**
* environments - 放置**環境變數**

## 專案技術
* @angular/cli 16.1.4
* Node.js 18.12.1
* Rxjs 7.8.0
* Typescript 5.1.3

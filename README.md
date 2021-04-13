# Movie List Express
---
A node.js + Express.js movie site, users can ...
  * browse 80 movies 
  * click into a movie to see more information 
  * search movie title

## 環境建置與需求 (prerequisites)
 * nodeJS: v15.11.0
 * Express: v4.17.1
 * Express-handlebars: v5.3.0

## 安裝與執行步驟 (installation and execution)
  1. 開啟終端機，並輸入以下指令
  ```
  git clone https://github.com/stylelinz/movie_list_express.git
  ```

  2. 進入專案資料夾，在終端機輸入以下指令
  ``` 
  cd movie_list_express
  
  ```
  3. 安裝npm套件，在終端機輸入以下指令
  
  ```
  npm install
  npm i nodemon
  ```

  4. 啟動伺服器，執行 app.js 檔案，輸入以下指令

  ```
  npm run dev
  ```

  5. 當終端機出現以下字樣，表示伺服器與資料庫已啟動並成功連結，可以在瀏覽器觀看 http://localhost:3000

  ```
  Express is listening on http://localhost:3000
  ```

  6. 在終端機按下 `ctrl` + `c` 或 `cmd` + `c`，以關閉伺服器
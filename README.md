# GitHub Pages 個人網站（含 jQuery 範例）

這是一個最小可用（minimal）模板，讓你快速在 **GitHub Pages** 上部署個人頁面，並內建幾個 **jQuery** 互動與 **AJAX** 範例。

## 快速開始

1. 先確認你的 GitHub 帳號名稱，例如 `yourname`。
2. 建立一個新的公開倉庫，名稱必須是：`yourname.github.io`（把 `yourname` 換成你的帳號）。
3. 把本專案中的 `index.html` 放進該倉庫的根目錄（/）。
   - 你可以直接在 GitHub 網頁上「Add file → Upload files」上傳。
   - 或者用 Git 指令推送：
     ```bash
     git init
     git add .
     git commit -m "init personal page"
     git branch -M main
     git remote add origin https://github.com/yourname/yourname.github.io.git
     git push -u origin main
     ```
4. 前往倉庫的 **Settings → Pages**，在 **Build and deployment** 選擇 **Source: Deploy from a branch**；
   Branch 選 **main**，資料夾選 **/**（root），儲存。
5. 幾十秒後，使用瀏覽器開啟：`https://yourname.github.io`

> 若你用自訂網域，請在倉庫根目錄新增 `CNAME` 檔案，內容是你的網域名，並到網域 DNS 增加 A/AAAA 或 CNAME 設定指向 GitHub Pages。

## 我可以改哪些地方？

- 修改 `index.html` 內文（關於我、作品、色彩等）。
- jQuery 區塊包含：平滑捲動、顯示/隱藏、AJAX 抓 GitHub repos、小表單驗證。
- 把 `#ghUser` 改成你的 GitHub 使用者名稱，按 **載入 Repos** 就能顯示你的公開倉庫。

## 疑難排解

- 頁面沒有出現？
  - 檢查倉庫是否為 `public`。
  - 檢查 **Settings → Pages** 的 **Source/Branch** 是否設定為 `Deploy from a branch / main / root`。
  - 等待 1–3 分鐘，再重整。
- AJAX 錯誤（GitHub API 受限）：
  - 匿名呼叫有速率限制（每小時 60 次）。測試過多會暫時失敗。
  - 你可以先使用 `octocat` 做測試。

## 授權
MIT

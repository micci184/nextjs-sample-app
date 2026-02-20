# nextjs-sample-app

Next.js (latest) + TypeScript + Tailwind の簡易アプリです。

## Runtime 要件

- Node.js: `>= 20.9.0`（Next.js 16 要件）

## 画面

- `/` : Instagram風ログイン画面
- `/health` : Health 表示画面
- `/api/health` : ALB ヘルスチェック向け API (`200 OK`)

## ローカル起動

```bash
npm install
npm run dev
```

ブラウザで以下を確認:

- `http://localhost:3000/`
- `http://localhost:3000/health`
- `http://localhost:3000/api/health`

## 本番ビルド

```bash
npm run build
npm run start -- --hostname 0.0.0.0 --port 3000
```

## EC2 (Node.js + systemd) デプロイ手順

1. Node.js `>= 20.9.0` をインストール
2. アプリを EC2 に配置（例: `/opt/nextjs-sample-app`）
3. 依存関係とビルド

```bash
cd /opt/nextjs-sample-app
npm ci
npm run build
```

4. service ファイルを配置

```bash
sudo cp deploy/nextjs-health.service /etc/systemd/system/nextjs-health.service
sudo systemctl daemon-reload
sudo systemctl enable nextjs-health
sudo systemctl start nextjs-health
sudo systemctl status nextjs-health
```

5. ALB ターゲットグループのヘルスチェック

- Path: `/api/health`
- Success codes: `200`

必要に応じてセキュリティグループで 3000 番ポートを ALB からのみ許可してください。
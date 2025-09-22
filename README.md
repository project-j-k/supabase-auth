# Supabase Auth App

このアプリケーションは、Supabaseを使用したメールアドレス・パスワード認証機能を実装したReactアプリです。

## 機能

- ✅ メールアドレス・パスワード認証
- ✅ ユーザー登録（サインアップ）
- ✅ ログイン・ログアウト
- ✅ 認証状態の管理
- ✅ ユーザー情報の表示

## セットアップ手順

### 1. Supabaseプロジェクトの作成

1. [Supabase](https://supabase.com/)でアカウントを作成
2. 新しいプロジェクトを作成
3. プロジェクトのURLとAnon Keyを取得

### 2. 環境変数の設定

`.env.example`をコピーして`.env`ファイルを作成し、Supabaseの認証情報を設定してください：

```bash
cp .env.example .env
```

`.env`ファイルを編集：

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### 3. Supabase側の設定

Supabaseダッシュボードで以下の設定を行ってください：

#### Authentication設定
1. `Authentication` > `Settings`に移動
2. `Enable email confirmations`を有効化（推奨）
3. `Site URL`に`http://localhost:5173`を設定（開発環境）

### 4. 依存関係のインストールと起動

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

アプリケーションは`http://localhost:5173`で起動します。

## 使用方法

1. アプリにアクセスすると、ログイン・サインアップフォームが表示されます
2. 新規ユーザーの場合は「アカウントをお持ちでない方はこちら」をクリックしてサインアップ
3. 既存ユーザーの場合はメールアドレスとパスワードでログイン
4. 認証後、ダッシュボードでユーザー情報を確認できます

## ファイル構成

```
src/
├── lib/
│   └── supabase.ts          # Supabaseクライアントの設定
├── contexts/
│   └── AuthContext.tsx      # 認証状態管理
├── components/
│   ├── AuthForm.tsx         # ログイン・サインアップフォーム
│   ├── AuthForm.css
│   ├── Dashboard.tsx        # 認証後のダッシュボード
│   └── Dashboard.css
├── App.tsx                  # メインアプリコンポーネント
├── App.css
├── main.tsx                # アプリのエントリーポイント
└── index.css
```

## 技術スタック

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Backend/Auth**: Supabase
- **Styling**: CSS Modules

## トラブルシューティング

### 認証がうまく動作しない場合

1. `.env`ファイルの環境変数が正しく設定されているか確認
2. SupabaseダッシュボードでSite URLが正しく設定されているか確認
3. ブラウザの開発者ツールでネットワークエラーを確認

### メール確認が送信されない場合

1. Supabaseの`Authentication` > `Settings`で`Enable email confirmations`が有効になっているか確認
2. メールテンプレートが正しく設定されているか確認

## 本番環境へのデプロイ

1. Supabaseダッシュボードで本番環境のSite URLを追加
2. 環境変数を本番環境に設定
3. `npm run build`でビルド
4. `dist`フォルダを本番サーバーにデプロイ
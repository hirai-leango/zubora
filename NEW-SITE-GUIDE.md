# NEW-SITE-GUIDE ― 新しいサイトの作り方

このテンプレート（`zero`）から新商品サイトを量産する手順。
「設定を埋める → エージェント投入 → チェックリスト確認」の3ステップ。

---

## 手順

### 1. テンプレートを複製
GitHub で `zero` を **Use this template** → 新リポジトリ作成（例: `product-x`）。Public 推奨。

### 2. `brand.config.ts` を埋める（← ここが作業の中心）
- `brand.name` / `tagline` / `description`
- `brand.url` … 最初は `https://product-x.pages.dev`
- `brand.ga4Id` / `contactEmail` … 未取得なら空でOK（後で追加）
- `palette.*` … 色を差し替え（サイトの印象が決まる）
- `brand.fonts` … 必要なら見出しフォントを変更
- `seo.clusters` … 商品に合わせてキーワード設計
- `agent.model` / `agent.repo` … 使用モデルとリポジトリ

### 3. エージェント投入（PLAYBOOK.md の順に）
① 初期化 → ② 記事生成（数バッチ）→ ③ 固定ページ → ④ デプロイ設定
- リモートエージェント（RemoteTrigger）＋ ScheduleWakeup で無人ループ可
- 詳細な運用知見は別途 [remote-agent メモ] 参照

### 4. Cloudflare Pages で公開（pages.dev）
Workers & Pages > Create > **Pages タブ** > Connect to Git
→ Framework=Nuxt / Build=`npm run build` / Output=`dist`

### 5. CHECKLIST.md で検証
1項目ずつ事実確認。特に「記事数=一覧数」「ビルド成功」「sitemap」「GA4計測」。

### 6. 伸びたら独自ドメインに昇格
GA4で反応を見て、当たった商品だけドメイン購入 →
`brand.url` を書き換え → 全URL一括置換 → Custom domain 紐付け → Email Routing。

---

## Claude のモデルが変わったときにやること

このテンプレートは**モデル非依存**に設計してある。モデル更新時の対応は最小限：

| 対象 | 対応 |
|---|---|
| **モデルID** | `brand.config.ts` の `agent.model` を1行変更（例: `claude-fable-5` → 新ID） |
| **プレイブックのプロンプト** | 基本そのままでOK（目的ベースで書いてあるため）。新モデルはむしろ結果が良くなる |
| **1バッチ記事数** | `agent.articlesPerBatch` を増やせる可能性（新モデルは能力が上がる） |
| **コード・設計・チェックリスト** | 変更不要（Claude非依存の資産） |

→ 実質「`agent.model` の1行だけ」。それ以外は触らなくてよい。

## モデルより頻繁に変わるもの（要定期メンテ）
Claude本体より、**周辺ツールの仕様変更**の方が影響が大きい：
- RemoteTrigger / CCR の API
- Cloudflare / GitHub の UI・API
- Nuxt / 各npmパッケージのバージョン

→ テンプレートは「作って終わり」でなく、年数回見直す前提で持つ。

---

## 設計思想（なぜこの形か）
- **変数と固定を分離**：変わるものは `brand.config.ts` に集約、仕組みはテンプレート化
- **プロンプトは指示であってコードでない**：目的を明確に書けばモデルが変わっても動く
- **戦略判断は自動化しない**：事業目的・ターゲット・デザイン方向・商品の実在確認は人が決める
- **低コストで当たり判定**：pages.dev で公開し、伸びた商品にだけ独自ドメイン投資

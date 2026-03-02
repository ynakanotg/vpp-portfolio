# VPP Portfolio（GitHub Pages）

公開URL: https://ynakanotg.github.io/vpp-portfolio

## 目的
VPP（仮想発電所）の概要と参画ステップを、スマホでも読みやすい静的Webページとして公開する。

## 本ウェブページ作成を通して実践したスキル
- ソフトウェア開発サイクルを理解し開発を行う：要件→設計→実装→検証→改善を本READMEに記録
- HTML/CSS/JavaScriptで簡単なWebページ作成：2ページ構成＋JSボタン操作
- 静的ホストをホスティングサービスにデプロイ：GitHub Pagesで公開
- メディアクエリで基本レスポンシブ：style.cssの@mediaでスマホ時の余白最適化
- フレームワーク基礎知識と活用：Bootstrap 5（CDN）でナビ/グリッド/カード/ボタンを実装
- SEOの仕組みを理解しデザインに織り込む：title/description、見出し階層、内部リンク、OGPを設定

## 要件定義（抜粋）
- ページ：ホーム（VPP概要）/ 参画する方法（手順）
- スマホ閲覧を前提に可読性を担保（レスポンシブ）
- クリック操作でユーザーに追加情報を提示（JS）
- SEO：title/description、見出し（h1/h2）、内部リンク

## 設計
- 共通ナビゲーション（Bootstrap navbar）で回遊性を確保
- レイアウトはBootstrap grid（col-12 / col-lg-9）で画面幅に追従
- UIはBootstrap card/btnで一貫性を担保
- JSはaddEventListenerでDOMと挙動を分離

## 実装
- Bootstrap 5をCDN導入（CSS/JS bundle）
- index/joinをBootstrapクラスで構成
- style.cssはBootStrapにカスタム追加＋@mediaを追加
- script.jsはDOMContentLoadedでイベントを登録

## 検証
- スマホで表示確認（レイアウト崩れ、文字サイズ、ナビ動作）
- ボタンクリックでアラート表示を確認
- ページ遷移（ホーム⇄参画）を確認

## 改善履歴
- 2026-03-02: Bootstrap導入、レスポンシブ改善、SEOメタ追加、README整備

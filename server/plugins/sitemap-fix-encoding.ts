export default defineNitroPlugin((nitroApp) => {
  // Nuxt が日本語ファイル名ページを %E6.. 形式で登録し、sitemap モジュールが
  // さらに % を %25 へ二重エンコードするため、<loc> を単一エンコードに戻す
  nitroApp.hooks.hook('sitemap:output', (ctx) => {
    ctx.sitemap = ctx.sitemap.replace(/%25([0-9A-Fa-f]{2})/g, '%$1')
  })
})

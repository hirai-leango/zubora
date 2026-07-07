export default defineEventHandler((event) => {
  const url = event.node.req.url
  if (!url) return
  // Skip files with extensions (.js, .css, .png, .ico, .json, .xml, .txt etc.)
  if (/\.[a-zA-Z0-9]+$/.test(url.split('?')[0])) return
  // Skip URLs that already have trailing slash
  if (url === '/' || url.endsWith('/')) return
  // Skip URLs with query strings - add slash before ?
  const [path, query] = url.split('?')
  if (path.endsWith('/')) return
  const redirectUrl = path + '/' + (query ? '?' + query : '')
  return sendRedirect(event, redirectUrl, 301)
})

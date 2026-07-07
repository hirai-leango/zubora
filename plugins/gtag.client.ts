export default defineNuxtPlugin(() => {
  const router = useRouter()
  router.afterEach((to) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'page_view', {
        page_path: to.fullPath,
        page_location: window.location.href,
        page_title: document.title,
      })
    }
  })
})

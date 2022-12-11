<template>
  <div>
    <Html :lang="head.htmlAttrs?.lang">

    <Head>
      <Title>{{ title }}</Title>
      <template v-for="(link, index) in head.link" :key="index">
        <Link :hid="link.hid" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <template v-for="(meta, index) in head.meta" :key="index">
        <Meta :hid="meta.hid" :property="meta.property" :content="meta.content" />
      </template>
    </Head>

    <Body>
      <nuxt-layout>
        <nuxt-page />
      </nuxt-layout>
    </Body>

    </Html>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()
const head = useLocaleHead({ addSeoAttributes: true })

const title = computed(() => t('base.title', { title: t(route.meta.title as string ?? 'Soon !') }))
const metaDescription = computed(() => t(route.meta.description as string ?? ''))

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap',
    }
  ],
  script: [],
  meta: [
    { charset: 'utf-8' },
    {
      hid: 'og:title',
      name: 'og:title',
      content: title
    },
    {
      hid: 'og:description',
      name: 'og:description',
      content: metaDescription
    },
    {
      hid: 'description',
      name: 'description',
      content: metaDescription
    },
    {
      hid: 'og:type',
      name: 'og:type',
      content: 'website'
    },
    {
      hid: 'og:url',
      name: 'og:url',
      content: 'http://localhost:8000/'
    },
    {
      hid: 'og:title',
      name: 'og:title',
      content: 'Ledgity Defi Platform'
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Ledgity Defi Platform'
    },
    {
      hid: 'og:image',
      name: 'og:image',
      content: ''
    },
    {
      'http-equiv': 'x-ua-compatible',
      content: 'IE=edge'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
    },
    {
      name: 'format-detection',
      content: 'telephone=no'
    }
  ]
})
</script>
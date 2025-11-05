import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  author: {
    avatar: '/assets/maskable@512.png',
    bio: '總是希望能對自己喜歡的事物<br/>盡一份微薄的心力。',
    name: 'littlezhaidi',
    //status: '😆',
    metadata:[
      {
        icon: 'i-simple-icons-github',
        link: 'https://github.com/littlezhaidi'
      },
      {
        icon: 'i-simple-icons-discord',
        link: 'https://discord.gg/hpsWkVXQzJ'
      }
    ]
  },
  description: 'AI太好用了你們知道嗎 - 紅風',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'blog.littlezhaidi.me',
  lang: 'zh-TW',
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  //subtitle: '',
  themeColor: '#81539D',
  title: '小宅弟的個人空間',
}

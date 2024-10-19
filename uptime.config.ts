const pageConfig = {
  // Title for your status page
  title: "shulng's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/shulng', label: 'GitHub' },
    { link: 'https://shulng.us.kg', label: 'Blog' },
    { link: 'mailto:admin@shulng.us.kg', label: 'Email Me', highlight: true },
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    {
      id: 'Blog',
      name: 'Blog',
      method: 'GET',
      target: 'https://shulng.us.kg'
    },
    {
      id: 'Cloudflare 临时邮件',
      name: 'Cloudflare 临时邮件',
      method: 'GET',
      target: 'https://mail.shulng.us.kg'
    },
    {
      id: 'GitHub 文件加速',
      name: 'GitHub 文件加速',
      method: 'GET',
      target: 'https://gh-proxy.shulng.us.kg'
    },
    {
      id: 'GitHub 文件加速 page',
      name: 'GitHub 文件加速 page',
      method: 'GET',
      target: 'https://gh-proxy-page.shulng.us.kg'
    },
    {
      id: 'DockerHub 镜像服务',
      name: 'DockerHub 镜像服务',
      method: 'GET',
      target: 'https://docker.shuiling.us.kg'
    },
    {
      id: 'WebSSH',
      name: 'WebSSH',
      method: 'GET',
      target: 'https://ssh.shulng.us.kg'
    },
    {
      id: '短链生成器',
      name: '短链生成器',
      method: 'GET',
      target: 'https://linklet.shulng.us.kg'
    },
    {
      id: '订阅链接',
      name: '订阅链接',
      method: 'GET',
      target: 'https://sub.shulng.us.kg/auto'
    },
    {
      id: 's4.socks5',
      name: 's4.socks5',
      method: 'TCP_PING',
      target: '213.189.52.181:55310'
    },
    {
      id: 's10.socks5',
      name: 's10.socks5',
      method: 'TCP_PING',
      target: '91.185.190.159:30779'
    },
    {
      id: '图床',
      name: '图床',
      method: 'GET',
      target: 'https://img.shulng.us.kg'
    },
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "https://apprise.example.com/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "tgram://bottoken/ChatID",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }

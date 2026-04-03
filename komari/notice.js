/* ═══════════════════════════════
   NanoMuse · TG 通知配置
   ═══════════════════════════════ */
const TG_TOKEN   = "";
const TG_CHAT_ID = "";
const PANEL_URL  = "";
const PHOTO_URL  = "";
/* ═══════════════════════════════ */

async function sendMessage(message, title, instanceId = null) {
  const token = TG_TOKEN;
  const chatId = TG_CHAT_ID;
  const panelUrl = PANEL_URL;
  const photoUrl = PHOTO_URL;

  if (!token || !chatId) return false;

  let inline_keyboard = [];
  let row = [{ text: "▸ 控制台", url: panelUrl }];
  if (instanceId && instanceId !== '未知') {
    row.push({ text: "▸ 详情", url: `${panelUrl}/instance/${instanceId}` });
  }
  inline_keyboard.push(row);

  try {
    const photoResp = await fetch(`https://api.telegram.org/bot${token}/sendPhoto`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        photo: photoUrl,
        caption: message,
        parse_mode: 'HTML',
        reply_markup: { inline_keyboard }
      }),
    });
    if (photoResp.ok) return true;
  } catch (e) {}

  const resp = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: 'HTML',
      reply_markup: { inline_keyboard }
    }),
  });
  return resp.ok;
}

async function sendEvent(event) {
  try {
    const toUTC8 = (t) => {
      if (!t || String(t).startsWith('0001')) return null;
      const d = new Date(String(t).replace(/\.\d+Z$/, 'Z'));
      if (isNaN(d.getTime())) return null;
      const u = new Date(d.getTime() + 8 * 36e5);
      const p = (n) => String(n).padStart(2, '0');
      return `${u.getUTCFullYear()}.${p(u.getUTCMonth()+1)}.${p(u.getUTCDate())}  ${p(u.getUTCHours())}:${p(u.getUTCMinutes())}:${p(u.getUTCSeconds())}`;
    };

    const nowUTC8 = () => {
      const u = new Date(Date.now() + 8 * 36e5);
      const p = (n) => String(n).padStart(2, '0');
      return `${u.getUTCFullYear()}.${p(u.getUTCMonth()+1)}.${p(u.getUTCDate())}  ${p(u.getUTCHours())}:${p(u.getUTCMinutes())}:${p(u.getUTCSeconds())}`;
    };

    const fmtSize = (b) => {
      if (!b || b === 0) return null;
      const g = b / 1073741824;
      return g >= 1024 ? `${(g/1024).toFixed(1)}T` : g >= 1 ? `${g.toFixed(1)}G` : `${Math.round(b/1048576)}M`;
    };

    const fmtCPU = (c) => (!c ? null : parseFloat(Number(c).toFixed(1)) + 'C');

    const fmtTraffic = (b) => {
      if (!b || b === 0) return '∞';
      const g = b / 1073741824;
      return g >= 1024 ? `${(g/1024).toFixed(1)}T` : `${g.toFixed(0)}G`;
    };

    const maskV4 = (ip) => {
      if (!ip) return null;
      const p = ip.split('.');
      return p.length === 4 ? `${p[0]}.${p[1]}.*.*` : null;
    };

    const maskV6 = (ip) => {
      if (!ip) return null;
      const p = ip.split(':');
      return p.length > 2 ? `${p[0]}:${p[1]}:*:*` : null;
    };

    const evMap = {
      'Offline': { tag: 'OFFLINE', cn: '节点离线', icon: '🔴' },
      'Online':  { tag: 'ONLINE',  cn: '节点上线', icon: '🟢' },
      'Alert':   { tag: 'ALERT',   cn: '监控告警', icon: '⚠️' },
      'Renew':   { tag: 'RENEW',   cn: '已续费',   icon: '💳' },
      'Expire':  { tag: 'EXPIRE',  cn: '即将到期', icon: '⏳' },
      'Test':    { tag: 'DIAG',    cn: '诊断测试', icon: '🧪' }
    };
    const ev = evMap[event.event] || { tag: event.event, cn: event.event, icon: '⚪' };

    const mockClient = {
      uuid: 'diag-0000-nano-muse',
      name: 'NanoMuse-Diag',
      region: 'Tokyo',
      cpu_cores: 4,
      mem_total: 8589934592,
      disk_total: 85899345920,
      tags: '1Gbps<green>;3T<blue>',
      ipv4: '103.56.168.1',
      ipv6: '2001:db8:cafe:1::1',
      traffic_limit: 3221225472000,
      traffic_limit_type: 'max',
      price: 29.99,
      currency: '$',
      billing_cycle: 30,
      expired_at: '2026-12-31T00:00:00Z'
    };

    const hasClients = event.clients && event.clients.length > 0;
    const isMock = !hasClients && event.event === 'Test';
    const c = hasClients ? event.clients[0] : (isMock ? mockClient : null);
    const targetId = c ? c.uuid : null;

    let L = [];

    /* Header */
    L.push(`${ev.icon}  <b>${ev.tag}</b>   ${ev.cn}`);
    if (isMock) L.push(`<i>┄  模拟数据  ┄</i>`);

    if (c) {
      const name = c.name || '—';
      const region = c.region || '';

      /* Block 1: 节点 + 配置 + 标签 */
      let b1 = [];
      b1.push(`🖥  <b>${name}</b>` + (region ? `   <i>${region}</i>` : ''));

      const specs = [fmtCPU(c.cpu_cores), fmtSize(c.mem_total), fmtSize(c.disk_total)].filter(Boolean);
      if (specs.length) b1.push(`⚙  <code>${specs.join('  /  ')}</code>`);

      if (c.tags) {
        const labels = c.tags.split(';').map(t => t.replace(/<[^>]+>/g, '').trim()).filter(Boolean);
        if (labels.length) b1.push(`🗂  ${labels.join('  ·  ')}`);
      }

      L.push('');
      L.push(`<blockquote>${b1.join('\n')}</blockquote>`);

      /* Block 2: IP + 流量 */
      let b2 = [];
      const v4 = maskV4(c.ipv4);
      const v6 = maskV6(c.ipv6);
      if (v4 || v6) b2.push(`🌐  ${[v4, v6].filter(Boolean).join('  /  ')}`);

      if (c.traffic_limit && c.traffic_limit > 0) {
        let tl = `📊  流量 ${fmtTraffic(c.traffic_limit)}`;
        if (c.traffic_limit_type) tl += `  (${c.traffic_limit_type})`;
        b2.push(tl);
      }

      if (b2.length) L.push(`<blockquote>${b2.join('\n')}</blockquote>`);

      /* Block 3: 账单 + 到期 (renew/expire/test) */
      if (event.event === 'Renew' || event.event === 'Expire' || event.event === 'Test') {
        let b3 = [];
        const cur = c.currency || '$';
        const price = c.price || 0;
        const cycle = c.billing_cycle ? `${c.billing_cycle}d` : '';
        if (price > 0) {
          b3.push(`💳  ${cur}${price}${cycle ? '  /  ' + cycle : ''}`);
          const expStr = toUTC8(c.expired_at);
          if (expStr) b3.push(`⏳  到期 ${expStr}`);
        }
        if (b3.length) L.push(`<blockquote>${b3.join('\n')}</blockquote>`);
      }
    }

    L.push('');
    L.push(`🕐  <i>${toUTC8(event.time) || nowUTC8()}   UTC+8</i>`);

    if (event.message && event.message.trim()) {
      L.push('');
      L.push(`<blockquote><i>${event.message.trim()}</i></blockquote>`);
    }

    L.push('');
    L.push(`<code>Qi</code>  ·  <i>萬事勝意</i>`);

    return await sendMessage(L.join('\n'), '', targetId);

  } catch (e) {
    return await sendMessage(`Error: ${e.message}`, '⚠️ Error');
  }
}

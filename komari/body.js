<script type="text/javascript" nonce="2d26a76b21c3446c87721355e88" src="//injections.adguard.org?ts=1773297950509&amp;type=content-script&amp;dmn=share.bitpd.com&amp;url=https%3A%2F%2Fshare.bitpd.com%2Fsd%2FiTg0RFvH%2F%3Fpwd%3Dns&amp;app=chrome.exe&amp;css=3&amp;js=1&amp;rel=1&amp;rji=1&amp;sbe=0"></script><script type="text/javascript" nonce="2d26a76b21c3446c87721355e88" src="//injections.adguard.org?ts=1773297950509&amp;name=AdGuard%20Extra&amp;name=AdGuard%20Popup%20Blocker&amp;type=user-script"></script><script src="//unpkg.com/globe.gl"></script>
<script>
	const EMOJI_MAP = {
		'CN': 'CN',
		'HK': 'HK',
		'TW': 'TW',
		'MO': 'MO',
		'JP': 'JP',
		'KR': 'KR',
		'KP': 'KP',
		'MN': 'MN',
		'SG': 'SG',
		'TH': 'TH',
		'VN': 'VN',
		'ID': 'ID',
		'MY': 'MY',
		'PH': 'PH',
		'MM': 'MM',
		'KH': 'KH',
		'LA': 'LA',
		'TL': 'TL',
		'BN': 'BN',
		'IN': 'IN',
		'BD': 'BD',
		'PK': 'PK',
		'LK': 'LK',
		'NP': 'NP',
		'BT': 'BT',
		'MV': 'MV',
		'KG': 'KG',
		'TJ': 'TJ',
		'KZ': 'KZ',
		'UZ': 'UZ',
		'TM': 'TM',
		'AF': 'AF',
		'IR': 'IR',
		'IQ': 'IQ',
		'SY': 'SY',
		'LB': 'LB',
		'JO': 'JO',
		'PS': 'PS',
		'IL': 'IL',
		'SA': 'SA',
		'AE': 'AE',
		'QA': 'QA',
		'KW': 'KW',
		'OM': 'OM',
		'BH': 'BH',
		'YE': 'YE',
		'TR': 'TR',
		'CY': 'CY',
		'AZ': 'AZ',
		'GE': 'GE',
		'AM': 'AM',
		'GB': 'GB',
		'FR': 'FR',
		'DE': 'DE',
		'NL': 'NL',
		'BE': 'BE',
		'LU': 'LU',
		'CH': 'CH',
		'AT': 'AT',
		'IE': 'IE',
		'MC': 'MC',
		'LI': 'LI',
		'IT': 'IT',
		'ES': 'ES',
		'PT': 'PT',
		'GR': 'GR',
		'MT': 'MT',
		'SM': 'SM',
		'VA': 'VA',
		'AD': 'AD',
		'HR': 'HR',
		'BA': 'BA',
		'ME': 'ME',
		'MK': 'MK',
		'AL': 'AL',
		'SI': 'SI',
		'RS': 'RS',
		'SE': 'SE',
		'NO': 'NO',
		'DK': 'DK',
		'FI': 'FI',
		'IS': 'IS',
		'FO': 'FO',
		'SJ': 'SJ',
		'AX': 'AX',
		'RU': 'RU',
		'UA': 'UA',
		'BY': 'BY',
		'MD': 'MD',
		'PL': 'PL',
		'CZ': 'CZ',
		'SK': 'SK',
		'HU': 'HU',
		'RO': 'RO',
		'BG': 'BG',
		'LT': 'LT',
		'LV': 'LV',
		'EE': 'EE',
		'IM': 'IM',
		'GI': 'GI',
		'JE': 'JE',
		'GG': 'GG',
		'US': 'US',
		'CA': 'CA',
		'MX': 'MX',
		'GL': 'GL',
		'PR': 'PR',
		'CU': 'CU',
		'DO': 'DO',
		'HT': 'HT',
		'JM': 'JM',
		'BS': 'BS',
		'BB': 'BB',
		'TT': 'TT',
		'LC': 'LC',
		'DM': 'DM',
		'GD': 'GD',
		'AG': 'AG',
		'KN': 'KN',
		'VC': 'VC',
		'AI': 'AI',
		'AW': 'AW',
		'BM': 'BM',
		'BQ': 'BQ',
		'CW': 'CW',
		'KY': 'KY',
		'GP': 'GP',
		'MQ': 'MQ',
		'MS': 'MS',
		'SX': 'SX',
		'TC': 'TC',
		'VG': 'VG',
		'VI': 'VI',
		'BL': 'BL',
		'MF': 'MF',
		'PM': 'PM',
		'AS': 'AS',
		'CR': 'CR',
		'PA': 'PA',
		'GT': 'GT',
		'HN': 'HN',
		'SV': 'SV',
		'NI': 'NI',
		'BZ': 'BZ',
		'BR': 'BR',
		'AR': 'AR',
		'CL': 'CL',
		'CO': 'CO',
		'PE': 'PE',
		'VE': 'VE',
		'EC': 'EC',
		'BO': 'BO',
		'PY': 'PY',
		'UY': 'UY',
		'GF': 'GF',
		'SR': 'SR',
		'GY': 'GY',
		'FK': 'FK',
		'EG': 'EG',
		'MA': 'MA',
		'DZ': 'DZ',
		'TN': 'TN',
		'LY': 'LY',
		'EH': 'EH',
		'NG': 'NG',
		'GH': 'GH',
		'SN': 'SN',
		'ML': 'ML',
		'NE': 'NE',
		'MR': 'MR',
		'SL': 'SL',
		'LR': 'LR',
		'GW': 'GW',
		'CV': 'CV',
		'BF': 'BF',
		'CI': 'CI',
		'TG': 'TG',
		'BJ': 'BJ',
		'GM': 'GM',
		'GN': 'GN',
		'CM': 'CM',
		'CF': 'CF',
		'GA': 'GA',
		'CG': 'CG',
		'CD': 'CD',
		'AO': 'AO',
		'TD': 'TD',
		'GQ': 'GQ',
		'ST': 'ST',
		'KE': 'KE',
		'ET': 'ET',
		'TZ': 'TZ',
		'UG': 'UG',
		'SD': 'SD',
		'SS': 'SS',
		'RW': 'RW',
		'BI': 'BI',
		'SO': 'SO',
		'ER': 'ER',
		'DJ': 'DJ',
		'KM': 'KM',
		'SC': 'SC',
		'MU': 'MU',
		'RE': 'RE',
		'YT': 'YT',
		'MG': 'MG',
		'ZA': 'ZA',
		'ZM': 'ZM',
		'ZW': 'ZW',
		'MW': 'MW',
		'MZ': 'MZ',
		'NA': 'NA',
		'BW': 'BW',
		'LS': 'LS',
		'SZ': 'SZ',
		'SH': 'SH',
		'AU': 'AU',
		'NZ': 'NZ',
		'FJ': 'FJ',
		'PG': 'PG',
		'SB': 'SB',
		'VU': 'VU',
		'NC': 'NC',
		'PF': 'PF',
		'NR': 'NR',
		'TV': 'TV',
		'WS': 'WS',
		'TO': 'TO',
		'KI': 'KI',
		'MH': 'MH',
		'FM': 'FM',
		'PW': 'PW',
		'MP': 'MP',
		'GU': 'GU',
		'WF': 'WF',
		'NU': 'NU',
		'TK': 'TK',
		'CK': 'CK',
		'PN': 'PN',
		'NF': 'NF',
		'AQ': 'AQ',
		'UN': 'UN',
		'EU': 'EU',
		'AC': 'AC',
		'TA': 'TA',
		'CP': 'CP',
		'EA': 'EA',
		'IC': 'IC',
		'XA': 'XA',
		'XB': 'XB',
		'EZ': 'EZ',
		'ZZ': 'ZZ',
		'IO': 'IO',
		'TF': 'TF',
		'GS': 'GS',
		'HM': 'HM',
		'UM': 'UM',
		'BV': 'BV',
		'CC': 'CC',
		'CX': 'CX',
		'DG': 'DG',
		'XK': 'XK',

		'🇨🇳': 'CN',
		'🇭🇰': 'HK',
		'🇹🇼': 'TW',
		'🇲🇴': 'MO',
		'🇯🇵': 'JP',
		'🇰🇷': 'KR',
		'🇰🇵': 'KP',
		'🇲🇳': 'MN',
		'🇸🇬': 'SG',
		'🇹🇭': 'TH',
		'🇻🇳': 'VN',
		'🇮🇩': 'ID',
		'🇲🇾': 'MY',
		'🇵🇭': 'PH',
		'🇲🇲': 'MM',
		'🇰🇭': 'KH',
		'🇱🇦': 'LA',
		'🇹🇱': 'TL',
		'🇧🇳': 'BN',
		'🇮🇳': 'IN',
		'🇧🇩': 'BD',
		'🇵🇰': 'PK',
		'🇱🇰': 'LK',
		'🇳🇵': 'NP',
		'🇧🇹': 'BT',
		'🇲🇻': 'MV',
		'🇰🇬': 'KG',
		'🇹🇯': 'TJ',
		'🇰🇿': 'KZ',
		'🇺🇿': 'UZ',
		'🇹🇲': 'TM',
		'🇦🇫': 'AF',
		'🇮🇷': 'IR',
		'🇮🇶': 'IQ',
		'🇸🇾': 'SY',
		'🇱🇧': 'LB',
		'🇯🇴': 'JO',
		'🇵🇸': 'PS',
		'🇮🇱': 'IL',
		'🇸🇦': 'SA',
		'🇦🇪': 'AE',
		'🇶🇦': 'QA',
		'🇰🇼': 'KW',
		'🇴🇲': 'OM',
		'🇧🇭': 'BH',
		'🇾🇪': 'YE',
		'🇹🇷': 'TR',
		'🇨🇾': 'CY',
		'🇦🇿': 'AZ',
		'🇬🇪': 'GE',
		'🇦🇲': 'AM',
		'🇬🇧': 'GB',
		'🇫🇷': 'FR',
		'🇩🇪': 'DE',
		'🇳🇱': 'NL',
		'🇧🇪': 'BE',
		'🇱🇺': 'LU',
		'🇨🇭': 'CH',
		'🇦🇹': 'AT',
		'🇮🇪': 'IE',
		'🇲🇨': 'MC',
		'🇱🇮': 'LI',
		'🇮🇹': 'IT',
		'🇪🇸': 'ES',
		'🇵🇹': 'PT',
		'🇬🇷': 'GR',
		'🇲🇹': 'MT',
		'🇸🇲': 'SM',
		'🇻🇦': 'VA',
		'🇦🇩': 'AD',
		'🇭🇷': 'HR',
		'🇧🇦': 'BA',
		'🇲🇪': 'ME',
		'🇲🇰': 'MK',
		'🇦🇱': 'AL',
		'🇸🇮': 'SI',
		'🇷🇸': 'RS',
		'🇸🇪': 'SE',
		'🇳🇴': 'NO',
		'🇩🇰': 'DK',
		'🇫🇮': 'FI',
		'🇮🇸': 'IS',
		'🇫🇴': 'FO',
		'🇸🇯': 'SJ',
		'🇦🇽': 'AX',
		'🇷🇺': 'RU',
		'🇺🇦': 'UA',
		'🇧🇾': 'BY',
		'🇲🇩': 'MD',
		'🇵🇱': 'PL',
		'🇨🇿': 'CZ',
		'🇸🇰': 'SK',
		'🇭🇺': 'HU',
		'🇷🇴': 'RO',
		'🇧🇬': 'BG',
		'🇱🇹': 'LT',
		'🇱🇻': 'LV',
		'🇪🇪': 'EE',
		'🇮🇲': 'IM',
		'🇬🇮': 'GI',
		'🇯🇪': 'JE',
		'🇬🇬': 'GG',
		'🇺🇸': 'US',
		'🇨🇦': 'CA',
		'🇲🇽': 'MX',
		'🇬🇱': 'GL',
		'🇵🇷': 'PR',
		'🇨🇺': 'CU',
		'🇩🇴': 'DO',
		'🇭🇹': 'HT',
		'🇯🇲': 'JM',
		'🇧🇸': 'BS',
		'🇧🇧': 'BB',
		'🇹🇹': 'TT',
		'🇱🇨': 'LC',
		'🇩🇲': 'DM',
		'🇬🇩': 'GD',
		'🇦🇬': 'AG',
		'🇰🇳': 'KN',
		'🇻🇨': 'VC',
		'🇦🇮': 'AI',
		'🇦🇼': 'AW',
		'🇧🇲': 'BM',
		'🇧🇶': 'BQ',
		'🇨🇼': 'CW',
		'🇰🇾': 'KY',
		'🇬🇵': 'GP',
		'🇲🇶': 'MQ',
		'🇲🇸': 'MS',
		'🇸🇽': 'SX',
		'🇹🇨': 'TC',
		'🇻🇬': 'VG',
		'🇻🇮': 'VI',
		'🇧🇱': 'BL',
		'🇲🇫': 'MF',
		'🇵🇲': 'PM',
		'🇦🇸': 'AS',
		'🇨🇷': 'CR',
		'🇵🇦': 'PA',
		'🇬🇹': 'GT',
		'🇭🇳': 'HN',
		'🇸🇻': 'SV',
		'🇳🇮': 'NI',
		'🇧🇿': 'BZ',
		'🇧🇷': 'BR',
		'🇦🇷': 'AR',
		'🇨🇱': 'CL',
		'🇨🇴': 'CO',
		'🇵🇪': 'PE',
		'🇻🇪': 'VE',
		'🇪🇨': 'EC',
		'🇧🇴': 'BO',
		'🇵🇾': 'PY',
		'🇺🇾': 'UY',
		'🇬🇫': 'GF',
		'🇸🇷': 'SR',
		'🇬🇾': 'GY',
		'🇫🇰': 'FK',
		'🇪🇬': 'EG',
		'🇲🇦': 'MA',
		'🇩🇿': 'DZ',
		'🇹🇳': 'TN',
		'🇱🇾': 'LY',
		'🇪🇭': 'EH',
		'🇳🇬': 'NG',
		'🇬🇭': 'GH',
		'🇸🇳': 'SN',
		'🇲🇱': 'ML',
		'🇳🇪': 'NE',
		'🇲🇷': 'MR',
		'🇸🇱': 'SL',
		'🇱🇷': 'LR',
		'🇬🇼': 'GW',
		'🇨🇻': 'CV',
		'🇧🇫': 'BF',
		'🇨🇮': 'CI',
		'🇹🇬': 'TG',
		'🇧🇯': 'BJ',
		'🇬🇲': 'GM',
		'🇬🇳': 'GN',
		'🇨🇲': 'CM',
		'🇨🇫': 'CF',
		'🇬🇦': 'GA',
		'🇨🇬': 'CG',
		'🇨🇩': 'CD',
		'🇦🇴': 'AO',
		'🇹🇩': 'TD',
		'🇬🇶': 'GQ',
		'🇸🇹': 'ST',
		'🇰🇪': 'KE',
		'🇪🇹': 'ET',
		'🇹🇿': 'TZ',
		'🇺🇬': 'UG',
		'🇸🇩': 'SD',
		'🇸🇸': 'SS',
		'🇷🇼': 'RW',
		'🇧🇮': 'BI',
		'🇸🇴': 'SO',
		'🇪🇷': 'ER',
		'🇩🇯': 'DJ',
		'🇰🇲': 'KM',
		'🇸🇨': 'SC',
		'🇲🇺': 'MU',
		'🇷🇪': 'RE',
		'🇾🇹': 'YT',
		'🇲🇬': 'MG',
		'🇿🇦': 'ZA',
		'🇿🇲': 'ZM',
		'🇿🇼': 'ZW',
		'🇲🇼': 'MW',
		'🇲🇿': 'MZ',
		'🇳🇦': 'NA',
		'🇧🇼': 'BW',
		'🇱🇸': 'LS',
		'🇸🇿': 'SZ',
		'🇸🇭': 'SH',
		'🇦🇺': 'AU',
		'🇳🇿': 'NZ',
		'🇫🇯': 'FJ',
		'🇵🇬': 'PG',
		'🇸🇧': 'SB',
		'🇻🇺': 'VU',
		'🇳🇨': 'NC',
		'🇵🇫': 'PF',
		'🇳🇷': 'NR',
		'🇹🇻': 'TV',
		'🇼🇸': 'WS',
		'🇹🇴': 'TO',
		'🇰🇮': 'KI',
		'🇲🇭': 'MH',
		'🇫🇲': 'FM',
		'🇵🇼': 'PW',
		'🇲🇵': 'MP',
		'🇬🇺': 'GU',
		'🇼🇫': 'WF',
		'🇳🇺': 'NU',
		'🇹🇰': 'TK',
		'🇨🇰': 'CK',
		'🇵🇳': 'PN',
		'🇳🇫': 'NF',
		'🇦🇶': 'AQ',
		'🇺🇳': 'UN',
		'🇪🇺': 'EU',
		'🇦🇨': 'AC',
		'🇹🇦': 'TA',
		'🇨🇵': 'CP',
		'🇪🇦': 'EA',
		'🇮🇨': 'IC',
		'🇽🇦': 'XA',
		'🇽🇧': 'XB',
		'🇪🇿': 'EZ',
		'🇿🇿': 'ZZ',
		'🇮🇴': 'IO',
		'🇹🇫': 'TF',
		'🇬🇸': 'GS',
		'🇭🇲': 'HM',
		'🇺🇲': 'UM',
		'🇧🇻': 'BV',
		'🇨🇨': 'CC',
		'🇨🇽': 'CX',
		'🇩🇬': 'DG',
		'🇽🇰': 'XK'
	};
	function getFlagUrl(code) {
		const normalizedCode = String(code || 'UN').toLowerCase();
		return `https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/${normalizedCode}.svg`;
	}
	//保护组件 (Protection)
	function initializeProtection(retryCount = 0) {
		if (window.__protectionInitialized) return;
		const overlay = document.getElementById('custom-alert-overlay');
		const modal = document.getElementById('custom-alert-modal');
		const closeBtn = document.getElementById('alert-close-btn');
		const reasonEl = document.getElementById('trigger-reason');
		if (!overlay || !closeBtn || !modal || !reasonEl) {
			// Header/body may mount asynchronously in Nezha, retry briefly.
			if (retryCount < 30) {
				setTimeout(() => initializeProtection(retryCount + 1), 150);
			}
			return;
		}
		window.__protectionInitialized = true;

		const style = document.createElement('style');
		style.innerHTML =
			`* { -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; }`;
		document.head.appendChild(style);

		let isAlertShown = false;
		let redirectTimer;

		function triggerRedirect() {
			window.open("about:blank", "_self")
		}

		function showCustomAlert(reason) {
			if (isAlertShown) return;
			isAlertShown = true;
			reasonEl.textContent = reason;
			overlay.style.display = 'flex';
			setTimeout(() => {
				overlay.style.opacity = '1';
				modal.style.transform = 'scale(1)';
			}, 10);
			redirectTimer = setTimeout(triggerRedirect, 3000);
		}

		closeBtn.addEventListener('click', () => {
			clearTimeout(redirectTimer);
			triggerRedirect();
		});

		document.addEventListener('contextmenu', event => {
			event.preventDefault();
			showCustomAlert('右键菜单');
		});

		document.addEventListener('keydown', event => {
			const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
			let reason = '';

			if (event.key === 'F12') reason = '异常行为: F12';
			else if (event.ctrlKey && event.shiftKey && ['I', 'J', 'C'].includes(event.key.toUpperCase())) reason =
				`异常行为: Ctrl+Shift+${event.key.toUpperCase()}`;
			else if (event.ctrlKey && event.key.toUpperCase() === 'U') reason = 'Ctrl+U 查看源代码';
			else if ((event.ctrlKey || event.metaKey) && event.key.toUpperCase() === 'S') reason =
				'异常行为: Ctrl/Cmd+S';
			else if ((event.ctrlKey || event.metaKey) && event.key.toUpperCase() === 'P') reason =
				'异常行为: Ctrl/Cmd+P';
			else if ((event.ctrlKey || event.metaKey) && event.key.toUpperCase() === 'A') reason =
				'异常行为: Ctrl/Cmd+A';
			else if ((event.ctrlKey || event.metaKey) && event.key.toUpperCase() === 'C') reason =
				'异常行为: Ctrl/Cmd+C';
			else if (isMac && event.metaKey && event.altKey && ['I', 'J', 'C'].includes(event.key.toUpperCase()))
				reason = `异常行为: Cmd+Option+${event.key.toUpperCase()}`;

			if (reason) {
				event.preventDefault();
				showCustomAlert(reason);
			}
		});

		document.addEventListener('copy', event => {
			event.preventDefault();
			showCustomAlert('异常行为: 复制');
		});

		document.addEventListener('dragstart', event => {
			event.preventDefault();
			showCustomAlert('异常行为: 拖拽内容');
		});

		window.addEventListener('beforeprint', () => {
			showCustomAlert('异常行为: 打印页面');
		});

		function detectSuspiciousExtensions() {
			const suspiciousKeys = ['__REACT_DEVTOOLS_GLOBAL_HOOK__', 'webpackJsonp', 'jQuery321'];
			const found = suspiciousKeys.some(key => key in window);
			const injected = Array.from(document.querySelectorAll('script[src]')).some(s =>
				/^(chrome|moz|safari)-extension:\/\//.test(s.src)
			);
			const suspiciousDOM = Array.from(document.querySelectorAll('[id],[class]')).some(el => {
				const txt = (el.id + ' ' + el.className).toLowerCase();
				return txt.includes('supercopy') || txt.includes('copy');
			});
			return found || injected || suspiciousDOM;
		}

		function detectHeadless() {
			return navigator.webdriver || /HeadlessChrome/.test(navigator.userAgent);
		}

		function detectDevtoolsOpen() {
			const threshold = 160;
			return (window.outerWidth - window.innerWidth > threshold) ||
				(window.outerHeight - window.innerHeight > threshold);
		}

		function setupDomTamperDetection() {
			const observer = new MutationObserver(mutations => {
				for (const m of mutations) {
					if (m.addedNodes.length > 0) {
						m.addedNodes.forEach(node => {
							if (node.nodeType === 1) {
								const txt = (node.id + ' ' + node.className).toLowerCase();
								if (/supercopy|copy|extension|tamper/i.test(txt)) {
									showCustomAlert('环境异常: 可疑 DOM 注入');
								}
							}
						});
					}
				}
			});
			observer.observe(document.documentElement, {
				childList: true,
				subtree: true
			});
		}
		setupDomTamperDetection();

		setInterval(() => {
			const startTime = Date.now();
			debugger;
			const endTime = Date.now();

			if (endTime - startTime > 100) {
				showCustomAlert('环境异常: 调试模式');
			}

			if (detectSuspiciousExtensions()) {
				// showCustomAlert('环境异常: 可疑扩展');
			}

			if (detectHeadless()) {
				showCustomAlert('环境异常: 无头浏览器');
			}

			if (detectDevtoolsOpen()) {
				showCustomAlert('环境异常: 开发者工具窗口');
			}
		}, 500);
	}
	// 欢迎组件 (Welcome)
	function initializeWelcomeBubble() {
		if (window.welcomeBubbleInitialized) return;
		window.welcomeBubbleInitialized = true;
		const WELCOME_AUTO_CLOSE_MS = 8000;
		let welcomeAutoCloseTimer = null;

		function hideWelcomeBubble() {
			const welcomeBubble = document.getElementById('welcome-bubble-container');
			if (welcomeBubble) welcomeBubble.classList.remove('show');
		}

		const bubbleClose = document.getElementById('bubbleClose');
		if (bubbleClose) {
			bubbleClose.addEventListener('click', function() {
				if (welcomeAutoCloseTimer) {
					clearTimeout(welcomeAutoCloseTimer);
					welcomeAutoCloseTimer = null;
				}
				hideWelcomeBubble();
			});
		}

		window.currentUserGeo = {
			lat: 35.8617,
			lng: 104.1954,
			city: 'Unknown'
		};

		async function fetchIpAndInfo() {
			if (window.ipInfoFetched) return;
			window.ipInfoFetched = true;

			const welcomeBubble = document.getElementById('welcome-bubble-container');
			const locationEl = document.getElementById('location');
			const ipEl = document.querySelector('#ip .data-text');
			const ispEl = document.querySelector('#isp .data-text');
			const browserEl = document.querySelector('#browser .data-text');
			const dateEl = document.querySelector('#date .data-text');
			const osEl = document.querySelector('#os .data-text');
			let ipHidden = false;
			let ispHidden = false;

			if (!welcomeBubble || !locationEl || !ipEl || !ispEl || !browserEl || !dateEl) return;

			function getOperatingSystem(userAgent) {
				if (/android/i.test(userAgent)) return "Android";
				if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) return "iOS";
				if (/macintosh|mac os x/i.test(userAgent)) return "macOS";
				if (/windows phone/i.test(userAgent)) return "Windows Phone";
				if (/windows/i.test(userAgent)) return "Windows";
				if (/linux/i.test(userAgent)) return "Linux";
				return "未知设备";
			}

			if (osEl) {
				const osName = getOperatingSystem(navigator.userAgent);
				osEl.textContent = osName;

				const osIconEl = document.getElementById('os-icon');
				if (osIconEl) {
					const osLower = osName.toLowerCase();
					let iconSVG = '';

					if (osLower.includes('windows')) {
						iconSVG =
							'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>';
					} else if (osLower.includes('mac') || osLower.includes('ios')) {
						iconSVG =
							'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>';
					} else if (osLower.includes('android')) {
						iconSVG =
							'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.22l-1.88 3.24a11.43 11.43 0 0 0-8.94 0L5.65 5.67a.643.643 0 0 0-.87-.2c-.28.18-.37.54-.22.83L6.4 9.48A10.81 10.81 0 0 0 1 18h22a10.81 10.81 0 0 0-5.4-8.52zM7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"/></svg>';
					} else if (osLower.includes('linux')) {
						iconSVG =
							'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489.035.218.094.399.134.54.028.096.063.182.102.258.165.315.435.659.78 1.055 1.66 1.916 5.5 2.444 7.927 2.04.141-.024.195-.093.227-.148.03-.054.046-.117.05-.182.007-.129-.026-.228-.065-.31-.09-.189-.241-.352-.415-.495-.34-.28-.773-.524-1.228-.773-1.017-.557-2.141-1.154-2.141-1.154l-.002-.001c-.076-.045-.154-.09-.232-.135-.309-.178-.617-.357-.925-.535-.77-.446-1.542-.893-2.314-1.339l-.012-.007c-.102-.06-.205-.119-.307-.179l-.01-.006c-.822-.478-1.644-.957-2.466-1.436-.051-.03-.102-.06-.153-.089-.41-.239-.82-.478-1.23-.716-.051-.03-.102-.06-.153-.09-.41-.238-.82-.477-1.23-.716-.051-.03-.102-.06-.153-.089-.411-.239-.821-.478-1.232-.717-.05-.029-.101-.059-.152-.088-.41-.239-.82-.478-1.231-.716-.051-.03-.102-.06-.153-.09-.41-.238-.82-.477-1.23-.716-.051-.03-.102-.06-.153-.089-.41-.239-.82-.478-1.231-.717-.05-.029-.101-.059-.152-.088-.41-.239-.82-.478-1.231-.716-.051-.03-.102-.06-.153-.09-.41-.238-.82-.477-1.23-.716-.051-.03-.102-.06-.153-.089-.411-.239-.821-.478-1.232-.717-.05-.029-.101-.059-.152-.088-.41-.239-.82-.478-1.231-.716-.051-.03-.102-.06-.153-.09-.41-.238-.82-.477-1.23-.716-.051-.03-.102-.06-.153-.089-.411-.239-.821-.478-1.232-.717-.05-.029-.101-.059-.152-.088-.41-.239-.82-.478-1.231-.716-.051-.03-.102-.06-.153-.09-.41-.238-.82-.477-1.23-.716-.051-.03-.102-.06-.153-.089-.411-.239-.821-.478-1.232-.717-.05-.029-.101-.059-.152-.088-.41-.239-.82-.478-1.231-.716-.051-.03-.102-.06-.153-.09-.41-.238-.82-.477-1.23-.716-.051-.03-.102-.06-.153-.089-.41-.239-.82-.478-1.231-.717-.05-.029-.101-.059-.152-.088-.41-.239-.82-.478-1.231-.716-.051-.03-.102-.06-.153-.09-.41-.238-.82-.477-1.23-.716z"/></svg>';
					} else {
						iconSVG =
							'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>';
					}

					osIconEl.innerHTML = iconSVG;
				}
			}

			let city = '',
				region = '',
				country = '',
				isp = '',
				ip = '';
			const strategies = [{
					'name': 'api.ip.sb',
					'url': 'https://api.ip.sb/geoip',
					'check_success': (j) => 'country' in j,
					'map': (j) => ({
						'country': j['country'],
						'regionName': j['region'],
						'city': j['city'],
						'isp': j['asn_organization'],
						'org': j['organization'],
						'as': j['asn'] ? `AS${j['asn']}` : null,
						'ip': j['ip'],
						'lat': j['latitude'],
						'lng': j['longitude']
					})
				},
				{
					'name': 'ipwho.is',
					'url': 'https://ipwho.is',
					'check_success': (j) => j['success'] === true,
					'map': (j) => ({
						'country': j['country'],
						'regionName': j['region'],
						'city': j['city'],
						'isp': j['connection']['isp'],
						'org': j['connection']['org'],
						'as': j['connection']['asn'],
						'ip': j['ip'],
						'lat': j['latitude'],
						'lng': j['longitude']
					})
				},
				{
					'name': 'api.ipapi.is',
					'url': 'https://api.ipapi.is',
					'check_success': (j) => 'location' in j && 'country' in j['location'],
					'map': (j) => ({
						'country': j['location']['country'],
						'regionName': j['location']['state'],
						'city': j['location']['city'],
						'isp': j['company']['name'] || j['datacenter']['datacenter'] || j['abuse']['name'],
						'org': j['asn']['org'],
						'as': j['asn']['asn'] ? `AS${j['asn']['asn']}` : null,
						'ip': j['ip'],
						'lat': j['location']['latitude'],
						'lng': j['location']['longitude']
					})
				}
			];
			for (const strategy of strategies) {
				try {
					const response = await fetch(strategy.url, {
						signal: AbortSignal.timeout(5000)
					});
					if (response.ok) {
						const data = await response.json();
						if (strategy.check_success(data)) {
							const mapped = strategy.map(data);
							country = mapped.country || country;
							region = mapped.regionName || region;
							city = mapped.city || city;
							isp = mapped.isp || isp;
							if (mapped.lat && mapped.lng) {
								window.currentUserGeo = {
									lat: parseFloat(mapped.lat),
									lng: parseFloat(mapped.lng),
									city: city,
									country: country
								};
							}
							if (mapped.ip) ip = mapped.ip;
							if (ip) break;
						}
					}
				} catch (e) {
					console.warn(`Failed to fetch from ${strategy.url}:`, e);
				}
			}

			let welcomeMessage = "欢迎你，朋友！";
			if (city && region) {
				welcomeMessage = `欢迎来自 ${region}, ${city} 的朋友！`;
			} else if (country) {
				welcomeMessage = `欢迎来自 ${country} 的朋友！`;
			}
			locationEl.textContent = welcomeMessage;

			if (ip) {
				ipEl.textContent = ip;
				document.getElementById('ip').style.cursor = 'pointer';
				document.getElementById('ip').addEventListener('click', function() {
					ipHidden = !ipHidden;
					if (ipHidden) {
						ipEl.classList.add('spoiler');
					} else {
						ipEl.classList.remove('spoiler');
					}
				});
			} else {
				document.getElementById('ip').style.display = 'none';
			}

			if (isp) {
				ispEl.textContent = isp;
				document.getElementById('isp').style.cursor = 'pointer';
				document.getElementById('isp').addEventListener('click', function() {
					ispHidden = !ispHidden;
					if (ispHidden) {
						ispEl.classList.add('spoiler');
					} else {
						ispEl.classList.remove('spoiler');
					}
				});
			} else {
				document.getElementById('isp').style.display = 'none';
			}

			browserEl.textContent = ((ua) => {
				if (ua.includes("Edg")) return "Edge";
				if (ua.includes("Firefox")) return "Firefox";
				if (ua.includes("Chrome")) return "Chrome";
				if (ua.includes("Safari")) return "Safari";
				return "未知";
			})(navigator.userAgent) + ' 浏览器';
			dateEl.textContent = new Date().toLocaleDateString('zh-CN', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				timeZone: 'Asia/Shanghai'
			});
		}

		fetchIpAndInfo().then(() => {
			const welcomeBubble = document.getElementById('welcome-bubble-container');
			if (welcomeBubble) {
				setTimeout(() => {
					welcomeBubble.classList.add('show');
					if (welcomeAutoCloseTimer) {
						clearTimeout(welcomeAutoCloseTimer);
					}
					welcomeAutoCloseTimer = setTimeout(() => {
						hideWelcomeBubble();
						welcomeAutoCloseTimer = null;
					}, WELCOME_AUTO_CLOSE_MS);
				}, 100);
			}
		});
	}
	// 资产组件 (Finance)
	function initializeFinanceWidget() {
		const widget = document.getElementById('finance-widget');
		const ball = document.getElementById('finance-ball');
		const closeBtn = document.getElementById('financeClose');
		const select = document.getElementById('fin-currency');
		const toggleFreeBtn = document.getElementById('fin-toggle-free');
		const refreshBtn = document.getElementById('fin-refresh');
		const detailListEl = document.getElementById('fin-detail-list');
		const totalCountEl = document.getElementById('fin-total-count');
		const totalAssetEl = document.getElementById('fin-total-asset');
		let sortBy = localStorage.getItem('fin_sort') || 'weight_asc';
		const sortSelect = document.getElementById('fin-sort');
		if (sortSelect) {
			sortSelect.value = sortBy;
		}

		// 配置：到期时间超过多少年视为无限期（按原价计算）
		const LONG_TERM_YEARS = 100;

		function calculateRemainingValue(node, now = new Date()) {
			if (!node.expired_at) return 0;

			const {
				price: priceCNY
			} = getPriceInfo(node);

			const exp = new Date(node.expired_at);
			const nowUTC = new Date(now.toISOString());
			const diffMs = exp - nowUTC;
			const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365);

			if (diffYears > LONG_TERM_YEARS) {
				return priceCNY;
			} else {
				const billingCycleMs = node.billing_cycle * 24 * 60 * 60 * 1000;
				if (diffMs > 0 && billingCycleMs > 0) {
					return priceCNY * (diffMs / billingCycleMs);
				}
				return 0;
			}
		}

		if (!widget) return;

		let currentTradeModalData = null;
		let exchangeRates = {
			CNY: 1,
			USD: 0.142536,
			HKD: 1.108377,
			EUR: 0.12102,
			GBP: 0.105581,
			JPY: 22.231552
		};
		let baseCurrency = 'CNY';
		let userCurrency = localStorage.getItem('fin_currency') || 'CNY';
		let excludeFree = localStorage.getItem('fin_exclude_free') === 'true';
		if (localStorage.getItem('fin_exclude_free') === null) excludeFree = true;

		select.value = userCurrency;
		updateToggleBtnState();

		const currencySymbols = {
			'CNY': '¥',
			'USD': '$',
			'HKD': 'HK$',
			'EUR': '€',
			'GBP': '£',
			'JPY': '¥'
		};

		function updateToggleBtnState() {
			if (excludeFree) {
				toggleFreeBtn.classList.add('active');
				toggleFreeBtn.setAttribute('title', '当前：已排除白嫖中标签');
			} else {
				toggleFreeBtn.classList.remove('active');
				toggleFreeBtn.setAttribute('title', '当前：包含白嫖中标签');
			}
		}

		async function fetchRates() {
			const apis = [{
					url: 'https://open.er-api.com/v6/latest/CNY',
					parse: (data) => data.rates
				},
				{
					url: 'https://api.frankfurter.app/latest?from=CNY',
					parse: (data) => data.rates
				}
			];
			for (const api of apis) {
				try {
					const res = await fetch(api.url, {
						signal: AbortSignal.timeout(5000)
					});
					if (res.ok) {
						const data = await res.json();
						const rates = api.parse(data);
						if (rates) {
							const requiredCurrencies = ['CNY', 'USD', 'HKD', 'EUR', 'GBP', 'JPY'];
							const hasAllCurrencies = requiredCurrencies.every(cur => cur === 'CNY' || rates[cur]);
							if (hasAllCurrencies) {
								exchangeRates = {
									CNY: 1,
									...rates
								};
								document.getElementById('fin-ex-rate').textContent =
									`汇率更新: ${new Date().toLocaleTimeString()}`;
								return;
							}
						}
					}
				} catch (e) {
					console.warn(`从 ${api.url} 获取汇率失败:`, e);
				}
			}
			document.getElementById('fin-ex-rate').textContent = '使用默认汇率';
		}

		async function updateData() {
			try {
				const res = await fetch('/api/nodes');
				if (!res.ok) throw new Error('API Error');
				const json = await res.json();
				if (json.status === 'success' && Array.isArray(json.data)) {
					calculate(json.data);
				}
			} catch (e) {
				console.warn('Node fetch failed', e);
			}
		}

		function getPriceInfo(node) {
			let price = parseFloat(node.price);
			let isSpecialFree = false;

			if (price === -1) {
				price = 0;
				isSpecialFree = true;
			} else if (isNaN(price)) {
				price = 0;
			}

			let cur = node.currency || '¥';
			if (cur === 'CNY') cur = '¥';

			let finalPrice = 0;
			if (cur === '¥') finalPrice = price;
			else if (cur === 'HK$') finalPrice = price / (exchangeRates['HKD'] || 1.08);
			else if (cur === '$' || cur === 'USD') finalPrice = price / (exchangeRates['USD'] || 0.14);
			else if (cur === '€' || cur === 'EUR') finalPrice = price / (exchangeRates['EUR'] || 0.13);
			else if (cur === '£' || cur === 'GBP') finalPrice = price / (exchangeRates['GBP'] || 0.11);
			else finalPrice = price;

			return {
				price: finalPrice,
				isSpecialFree
			};
		}

		function updateExchangeRatesDisplay() {
			const ratesEl = document.getElementById('fin-exchange-rates');
			if (!ratesEl) return;

			const names = {
				'USD': 'USD $',
				'HKD': 'HKD $',
				'EUR': 'EUR €',
				'GBP': 'GBP £',
				'JPY': 'JPY ¥',
				'CNY': 'CNY ¥'
			};
			const list = ['USD', 'HKD', 'EUR', 'GBP', 'JPY', 'CNY'].filter(c => c !== userCurrency);

			let html = '';
			list.forEach(c => {
				const rate = exchangeRates[userCurrency] / exchangeRates[c];
				html += `<div class="finance-rate-item">
      <span>1 ${names[c]}</span>
      <span class="finance-rate-value">${currencySymbols[userCurrency]} ${rate.toFixed(6)}</span>
    </div>`;
			});

			ratesEl.innerHTML = html;
		}

		function calculate(nodes) {
			nodes = nodes.slice().sort((a, b) => {
				if (sortBy === 'weight_asc') {
					return a.weight - b.weight;
				} else if (sortBy === 'weight_desc') {
					return b.weight - a.weight;
				} else if (sortBy === 'price_asc') {
					return a.price - b.price;
				} else if (sortBy === 'price_desc') {
					return b.price - a.price;
				}
				return 0;
			});

			let monthlyPriceCNY = 0;
			let totalAssetCNY = 0;
			let totalRemainValCNY = 0;
			let totalNodes = 0;
			let specialCases = [];

			const now = new Date();
			const targetRate = exchangeRates[userCurrency] || 1;
			const sym = currencySymbols[userCurrency] || userCurrency;

			detailListEl.innerHTML = '';

			nodes.forEach(node => {
				totalNodes++;
				const isFreeTag = node.tags && node.tags.includes('白嫖中');
				const {
					price: priceCNY,
					isSpecialFree
				} = getPriceInfo(node);

				let cycleMonths = 1;
				if (node.billing_cycle === 365) cycleMonths = 12;
				else if (node.billing_cycle === 30) cycleMonths = 1;
				else if (node.billing_cycle > 0) cycleMonths = node.billing_cycle / 30;

				const pricePerMonth = cycleMonths > 0 ? priceCNY / cycleMonths : 0;

				let remainingVal = 0;
				let isLongTerm = false;

				if (node.expired_at) {
					const exp = new Date(node.expired_at);
					const nowUTC = new Date(now.toISOString());
					const diffMs = exp - nowUTC;

					const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365);

					if (diffYears > LONG_TERM_YEARS) {
						remainingVal = priceCNY;
						isLongTerm = true;
					} else {
						const billingCycleMs = node.billing_cycle * 24 * 60 * 60 * 1000;
						if (diffMs > 0 && billingCycleMs > 0) {
							remainingVal = priceCNY * (diffMs / billingCycleMs);
						}
					}
				}

				const shouldExclude = excludeFree && isFreeTag;

				const displayVal = remainingVal * targetRate;
				let helpIcon = '';
				let tooltipText = '';

				if (isSpecialFree) {
					specialCases.push(`${node.name} (免费鸡)`);
					tooltipText = `${node.name} (免费鸡)`;
				} else if (isLongTerm) {
					specialCases.push(`${node.name} (长期鸡，按原价)`);
					tooltipText = `到期时间 > ${LONG_TERM_YEARS}年，按原价计算`;
				} else if (isFreeTag && !shouldExclude) {
					specialCases.push(`${node.name} (白嫖中)`);
					tooltipText = `${node.name} (白嫖中)`;
				}

				if (tooltipText) {
					helpIcon = `<div class="help-icon" data-tooltip="${tooltipText}" onclick="this.classList.toggle('active'); event.stopPropagation();">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                    </div>`;
				}

				const itemDiv = document.createElement('div');
				itemDiv.className = 'finance-list-item';
				itemDiv.style.cursor = 'pointer';
				itemDiv.innerHTML = `
                    <span class="item-name" title="${node.public_remark || node.name}">${node.name}</span>
                    <div class="item-right">
                        <span class="item-value">${sym} ${displayVal.toFixed(2)}</span>
                        ${helpIcon}
                    </div>
                `;
				itemDiv.addEventListener('click', (e) => {
					if (e.target.closest('.help-icon')) return;
					e.stopPropagation();
					openTradeModal(node, remainingVal, userCurrency);
				});
				detailListEl.appendChild(itemDiv);

				if (!shouldExclude) {
					monthlyPriceCNY += pricePerMonth;
					totalAssetCNY += priceCNY;
					totalRemainValCNY += remainingVal;
				}
			});

			const remainHelpIcon = document.getElementById('fin-remain-help');
			if (specialCases.length > 0) {
				const allTips = specialCases.join('\n');
				remainHelpIcon.classList.add('show-help');
				remainHelpIcon.setAttribute('data-tooltip', allTips);
				remainHelpIcon.onclick = (e) => {
					e.stopPropagation();
					remainHelpIcon.classList.toggle('active');
				};
			} else {
				remainHelpIcon.classList.remove('show-help');
			}

			totalCountEl.textContent = totalNodes;
			document.getElementById('fin-monthly-price').textContent =
				`${sym} ${(monthlyPriceCNY * targetRate).toFixed(2)}`;
			if (totalAssetEl) {
				totalAssetEl.textContent = `${sym} ${(totalAssetCNY * targetRate).toFixed(2)}`;
			}
			document.getElementById('fin-remain-value').textContent =
				`${sym} ${(totalRemainValCNY * targetRate).toFixed(2)}`;

			updateExchangeRatesDisplay();
		}

		refreshBtn.addEventListener('click', () => {
			refreshBtn.querySelector('svg').style.animation = 'spin 1s linear';
			setTimeout(() => refreshBtn.querySelector('svg').style.animation = '', 1000);
			updateData();
		});

		toggleFreeBtn.addEventListener('click', () => {
			excludeFree = !excludeFree;
			localStorage.setItem('fin_exclude_free', excludeFree);
			updateToggleBtnState();
			updateData();
		});

		select.addEventListener('change', (e) => {
			userCurrency = e.target.value;
			localStorage.setItem('fin_currency', userCurrency);
			updateData();
			updateTradeModalIfOpen();
		});

		sortSelect.addEventListener('change', (e) => {
			sortBy = e.target.value;
			localStorage.setItem('fin_sort', sortBy);
			updateData();
		});

		function closeFinanceWidget() {
			widget.classList.remove('show');
			ball.classList.add('show');
		}

		function closeTradeModal() {
			const overlay = document.getElementById('server-trade-overlay');
			const modal = document.getElementById('server-trade-modal');
			if (!overlay || !modal || overlay.style.display !== 'flex') return;
			overlay.style.opacity = '0';
			modal.style.transform = 'scale(0.95)';
			setTimeout(() => {
				overlay.style.display = 'none';
				modal.style.left = '';
				modal.style.top = '';
				currentTradeModalData = null;
			}, 300);
		}

		closeBtn.addEventListener('click', () => {
			closeFinanceWidget();
		});

		ball.addEventListener('click', () => {
			ball.classList.remove('show');
			widget.classList.add('show');
			updateData();
		});

		document.addEventListener('click', (e) => {
			const helpIcon = e.target.closest('.help-icon');
			if (helpIcon && helpIcon.classList.contains('show-help')) {
				helpIcon.classList.toggle('active');
				e.stopPropagation();
			} else if (!e.target.closest('.help-icon')) {
				document.querySelectorAll('.help-icon.active').forEach(el => el.classList.remove('active'));
			}

			const clickedInFinance = !!e.target.closest('#finance-widget');
			const clickedFinanceBall = !!e.target.closest('#finance-ball');
			const clickedInTradeModal = !!e.target.closest('#server-trade-modal');

			if (widget.classList.contains('show') && !clickedInFinance && !clickedFinanceBall && !clickedInTradeModal) {
				closeFinanceWidget();
			}

			const tradeOverlay = document.getElementById('server-trade-overlay');
			if (tradeOverlay && tradeOverlay.style.display === 'flex' && !clickedInTradeModal) {
				closeTradeModal();
			}
		});

		function openTradeModal(node, remainValueCNY, currency) {
			const overlay = document.getElementById('server-trade-overlay');
			const modal = document.getElementById('server-trade-modal');
			if (!overlay || !modal) return;

			currentTradeModalData = {
				node: node,
				remainValueCNY: remainValueCNY
			};

			const regionCode = EMOJI_MAP[node.region] || node.region || 'UN';

			const cycleMap = {
				'30': '月付',
				'92': '季付',
				'184': '半年付',
				'365': '年付',
				'730': '两年付',
				'1095': '三年付',
				'1825': '五年付',
				'-1': '一次性'
			};
			const cycleText = cycleMap[String(node.billing_cycle)] || `${node.billing_cycle}天`;

			const targetRate = exchangeRates[currency] || 1;
			const sym = currencySymbols[currency] || currency;

			function formatBytes(bytes) {
				if (bytes === 0) return '0 B';
				const k = 1024;
				const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
				const i = Math.floor(Math.log(bytes) / Math.log(k));
				return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
			}

			function formatTraffic(bytes) {
				if (bytes === 362838837166080) return '∞TB/月';
				if (bytes === 0) return '无限制';
				return formatBytes(bytes) + '/月';
			}

			document.getElementById('trade-server-region').innerHTML =
				`<img src="${getFlagUrl(regionCode)}" style="width:20px;height:auto;">`;
			document.getElementById('trade-server-name').textContent = node.name;
			document.getElementById('trade-server-cpu').textContent = node.cpu_name || '未知';
			document.getElementById('trade-server-cores').textContent = node.cpu_cores ? `${node.cpu_cores} 核` : '未知';
			document.getElementById('trade-server-arch').textContent = node.arch || '未知';
			document.getElementById('trade-server-virtualization').textContent = node.virtualization || '未知';

			const gpuRow = document.getElementById('trade-gpu-row');
			const gpuElement = document.getElementById('trade-server-gpu');
			if (node.gpu_name && node.gpu_name !== 'None') {
				gpuRow.style.display = 'flex';
				gpuElement.textContent = node.gpu_name;
			} else {
				gpuRow.style.display = 'none';
			}

			document.getElementById('trade-server-memory').textContent = node.mem_total ? formatBytes(node.mem_total) :
				'未知';
			document.getElementById('trade-server-disk').textContent = node.disk_total ? formatBytes(node.disk_total) :
				'未知';
			document.getElementById('trade-server-traffic').textContent = node.traffic_limit ? formatTraffic(node
				.traffic_limit) : '未知';
			document.getElementById('trade-server-price').textContent =
				`${node.currency || '¥'} ${node.price === -1 ? '免费' : node.price}`;
			document.getElementById('trade-server-cycle').textContent = cycleText;

			const expiredEl = document.getElementById('trade-server-expired');
			if (expiredEl) {
				if (node.expired_at) {
					const expiryDate = new Date(node.expired_at);
					const dateOnlyString = expiryDate.toLocaleDateString('zh-CN', {
						year: 'numeric',
						month: '2-digit',
						day: '2-digit',
						timeZone: 'Asia/Shanghai'
					});
					const now = new Date();
					const diffMs = expiryDate - now;
					const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
					let remainingText = '';
					if (diffDays > 0) {
						remainingText = ` (剩余${diffDays}天)`;
					} else if (diffDays === 0) {
						remainingText = ' (今日到期)';
					} else {
						remainingText = ` (已过期${Math.abs(diffDays)}天)`;
					}
					expiredEl.textContent = dateOnlyString + remainingText;
				} else {
					expiredEl.textContent = '-';
				}
			}

			const tagsContainer = document.getElementById('trade-tags-container');
			if (node.tags) {
				const tags = node.tags.split(';').filter(t => t.trim());
				tagsContainer.innerHTML = `
    <span class="trade-tags-label">标签:</span>
    <div class="trade-tags-list">
      ${tags.map(tag => `<span class="trade-tag">${tag.trim()}</span>`).join('')}
    </div>
  `;
				tagsContainer.style.display = 'block';
			} else {
				tagsContainer.style.display = 'none';
			}

			const remarkContainer = document.getElementById('trade-remark-container');
			if (node.public_remark) {
				const remarks = node.public_remark.split(';').filter(r => r.trim());
				remarkContainer.innerHTML = `
    <span class="trade-remark-label">备注:</span>
    <div class="trade-remark-list">
      ${remarks.map(remark => `<span class="trade-remark-tag">${remark.trim()}</span>`).join('')}
    </div>
  `;
				remarkContainer.style.display = 'block';
			} else {
				remarkContainer.style.display = 'none';
			}

			const today = new Date(new Date().toLocaleString('en-US', {
				timeZone: 'Asia/Shanghai'
			}));
			const dateStr = today.toISOString().split('T')[0];
			document.getElementById('trade-date-input').value = dateStr;
			document.getElementById('trade-amount-input').value = '';

			function calculateRemainValueForDate(selectedDateStr) {
				const now = new Date();
				const todayStr = new Date(now.toLocaleString('en-US', {
					timeZone: 'Asia/Shanghai'
				})).toISOString().split('T')[0];
				let calculationTime;
				if (selectedDateStr === todayStr) {
					calculationTime = now;
				} else {
					calculationTime = new Date(selectedDateStr + 'T00:00:00+08:00');
				}
				if (!node.expired_at) return 0;
				const {
					price: priceCNY
				} = getPriceInfo(node);
				const exp = new Date(node.expired_at);
				const nowUTC = new Date(calculationTime.toISOString());
				const diffMs = exp - nowUTC;
				const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365);

				if (diffYears > LONG_TERM_YEARS) {
					return priceCNY;
				} else {
					const billingCycleMs = node.billing_cycle * 24 * 60 * 60 * 1000;
					if (diffMs > 0 && billingCycleMs > 0) {
						return priceCNY * (diffMs / billingCycleMs);
					}
					return 0;
				}
			}
			const initialRemainValueCNY = calculateRemainValueForDate(dateStr);
			const initialRemainValue = initialRemainValueCNY * targetRate;
			const displayRemainValue = parseFloat(initialRemainValue.toFixed(2));
			document.getElementById('trade-remain-value').textContent = `${sym} ${displayRemainValue.toFixed(2)}`;
			document.getElementById('trade-premium-value').textContent = '-';
			document.getElementById('trade-premium-rate').textContent = '-';
			const dateInput = document.getElementById('trade-date-input');
			const amountInput = document.getElementById('trade-amount-input');
			let currentRemainValueCNY = initialRemainValueCNY;
			let currentDisplayRemainValue = displayRemainValue;
			dateInput.onchange = () => {
				const selectedDate = dateInput.value;
				currentRemainValueCNY = calculateRemainValueForDate(selectedDate);
				const currentRate = exchangeRates[userCurrency] || 1;
				const currentSym = currencySymbols[userCurrency] || userCurrency;
				const remainVal = currentRemainValueCNY * currentRate;
				currentDisplayRemainValue = parseFloat(remainVal.toFixed(2));
				document.getElementById('trade-remain-value').textContent =
					`${currentSym} ${currentDisplayRemainValue.toFixed(2)}`;
				const tradeAmount = parseFloat(amountInput.value);
				if (!isNaN(tradeAmount) && tradeAmount >= 0) {
					const premium = tradeAmount - currentDisplayRemainValue;
					const premiumRate = currentDisplayRemainValue > 0 ? (premium / currentDisplayRemainValue * 100) :
						0;
					const premiumValueEl = document.getElementById('trade-premium-value');
					const premiumRateEl = document.getElementById('trade-premium-rate');
					premiumValueEl.textContent = `${currentSym} ${premium.toFixed(2)}`;
					premiumRateEl.textContent = `${premiumRate > 0 ? '+' : ''}${premiumRate.toFixed(2)}%`;
					if (premium > 0) {
						premiumValueEl.classList.remove('positive');
						premiumRateEl.classList.remove('positive');
					} else {
						premiumValueEl.classList.add('positive');
						premiumRateEl.classList.add('positive');
					}
				}
			};
			amountInput.oninput = () => {
				const currentRate = exchangeRates[userCurrency] || 1;
				const currentSym = currencySymbols[userCurrency] || userCurrency;
				const tradeAmount = parseFloat(amountInput.value);
				if (!isNaN(tradeAmount) && tradeAmount >= 0) {
					const premium = tradeAmount - currentDisplayRemainValue;
					const premiumRate = currentDisplayRemainValue > 0 ? (premium / currentDisplayRemainValue * 100) :
						0;
					const premiumValueEl = document.getElementById('trade-premium-value');
					const premiumRateEl = document.getElementById('trade-premium-rate');

					premiumValueEl.textContent = `${currentSym} ${premium.toFixed(2)}`;
					premiumRateEl.textContent = `${premiumRate > 0 ? '+' : ''}${premiumRate.toFixed(2)}%`;

					if (premium > 0) {
						premiumValueEl.classList.remove('positive');
						premiumRateEl.classList.remove('positive');
					} else {
						premiumValueEl.classList.add('positive');
						premiumRateEl.classList.add('positive');
					}
				} else {
					document.getElementById('trade-premium-value').textContent = '-';
					document.getElementById('trade-premium-rate').textContent = '-';
				}
			};

			overlay.style.display = 'flex';
			requestAnimationFrame(() => {
				overlay.style.opacity = '1';
				modal.style.transform = 'scale(1)';
			});
			enableModalDrag(modal);
		}

		function updateTradeModalIfOpen() {
			const overlay = document.getElementById('server-trade-overlay');
			if (!overlay || overlay.style.display !== 'flex' || !currentTradeModalData) {
				return;
			}
			const {
				node
			} = currentTradeModalData;
			const targetRate = exchangeRates[userCurrency] || 1;
			const sym = currencySymbols[userCurrency] || userCurrency;
			const dateInput = document.getElementById('trade-date-input');
			const selectedDate = dateInput.value;
			const now = new Date();
			const todayStr = new Date(now.toLocaleString('en-US', {
				timeZone: 'Asia/Shanghai'
			})).toISOString().split('T')[0];
			let calculationTime;
			if (selectedDate === todayStr) {
				calculationTime = now;
			} else {
				calculationTime = new Date(selectedDate + 'T00:00:00+08:00');
			}
			let remainValueCNY = 0;
			if (node.expired_at) {
				const {
					price: priceCNY
				} = getPriceInfo(node);
				const exp = new Date(node.expired_at);
				const nowUTC = new Date(calculationTime.toISOString());
				const diffMs = exp - nowUTC;
				const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365);
				if (diffYears > LONG_TERM_YEARS) {
					remainValueCNY = priceCNY;
				} else {
					const billingCycleMs = node.billing_cycle * 24 * 60 * 60 * 1000;
					if (diffMs > 0 && billingCycleMs > 0) {
						remainValueCNY = priceCNY * (diffMs / billingCycleMs);
					}
				}
			}
			const remainValue = remainValueCNY * targetRate;
			const displayRemainValue = parseFloat(remainValue.toFixed(2));
			document.getElementById('trade-remain-value').textContent = `${sym} ${displayRemainValue.toFixed(2)}`;
			const amountInput = document.getElementById('trade-amount-input');
			const newAmountInput = amountInput.cloneNode(true);
			amountInput.parentNode.replaceChild(newAmountInput, amountInput);
			const newDateInput = dateInput.cloneNode(true);
			dateInput.parentNode.replaceChild(newDateInput, dateInput);
			let currentDisplayRemainValue = displayRemainValue;
			let currentRemainValueCNY = remainValueCNY;
			newDateInput.onchange = () => {
				const selectedDate = newDateInput.value;
				const now = new Date();
				const todayStr = new Date(now.toLocaleString('en-US', {
					timeZone: 'Asia/Shanghai'
				})).toISOString().split('T')[0];
				let calculationTime;
				if (selectedDate === todayStr) {
					calculationTime = now;
				} else {
					calculationTime = new Date(selectedDate + 'T00:00:00+08:00');
				}
				let newRemainValueCNY = 0;
				if (node.expired_at) {
					const {
						price: priceCNY
					} = getPriceInfo(node);
					const exp = new Date(node.expired_at);
					const nowUTC = new Date(calculationTime.toISOString());
					const diffMs = exp - nowUTC;
					const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365);

					if (diffYears > LONG_TERM_YEARS) {
						newRemainValueCNY = priceCNY;
					} else {
						const billingCycleMs = node.billing_cycle * 24 * 60 * 60 * 1000;
						if (diffMs > 0 && billingCycleMs > 0) {
							newRemainValueCNY = priceCNY * (diffMs / billingCycleMs);
						}
					}
				}
				currentRemainValueCNY = newRemainValueCNY;
				const currentRate = exchangeRates[userCurrency] || 1;
				const currentSym = currencySymbols[userCurrency] || userCurrency;
				const remainVal = currentRemainValueCNY * currentRate;
				currentDisplayRemainValue = parseFloat(remainVal.toFixed(2));
				document.getElementById('trade-remain-value').textContent =
					`${currentSym} ${currentDisplayRemainValue.toFixed(2)}`;
				const tradeAmount = parseFloat(newAmountInput.value);
				if (!isNaN(tradeAmount) && tradeAmount >= 0) {
					const premium = tradeAmount - currentDisplayRemainValue;
					const premiumRate = currentDisplayRemainValue > 0 ? (premium / currentDisplayRemainValue * 100) :
						0;
					const premiumValueEl = document.getElementById('trade-premium-value');
					const premiumRateEl = document.getElementById('trade-premium-rate');
					premiumValueEl.textContent = `${currentSym} ${premium.toFixed(2)}`;
					premiumRateEl.textContent = `${premiumRate > 0 ? '+' : ''}${premiumRate.toFixed(2)}%`;
					if (premium > 0) {
						premiumValueEl.classList.remove('positive');
						premiumRateEl.classList.remove('positive');
					} else {
						premiumValueEl.classList.add('positive');
						premiumRateEl.classList.add('positive');
					}
				}
			};
			newAmountInput.oninput = () => {
				const tradeAmount = parseFloat(newAmountInput.value);
				if (!isNaN(tradeAmount) && tradeAmount >= 0) {
					const premium = tradeAmount - currentDisplayRemainValue;
					const premiumRate = currentDisplayRemainValue > 0 ? (premium / currentDisplayRemainValue * 100) :
						0;
					const premiumValueEl = document.getElementById('trade-premium-value');
					const premiumRateEl = document.getElementById('trade-premium-rate');
					premiumValueEl.textContent = `${sym} ${premium.toFixed(2)}`;
					premiumRateEl.textContent = `${premiumRate > 0 ? '+' : ''}${premiumRate.toFixed(2)}%`;
					if (premium > 0) {
						premiumValueEl.classList.remove('positive');
						premiumRateEl.classList.remove('positive');
					} else {
						premiumValueEl.classList.add('positive');
						premiumRateEl.classList.add('positive');
					}
				} else {
					document.getElementById('trade-premium-value').textContent = '-';
					document.getElementById('trade-premium-rate').textContent = '-';
				}
			};
			newAmountInput.oninput();
		}

		document.getElementById('trade-modal-close').addEventListener('click', () => {
			closeTradeModal();
		});

		function enableModalDrag(modal) {
			const header = modal.querySelector('.server-trade-header');
			let isDragging = false;
			let currentX, currentY, initialX, initialY;

			header.addEventListener('mousedown', dragStart);
			document.addEventListener('mousemove', drag);
			document.addEventListener('mouseup', dragEnd);

			header.addEventListener('touchstart', dragStart);
			document.addEventListener('touchmove', drag);
			document.addEventListener('touchend', dragEnd);

			function dragStart(e) {
				if (e.target.closest('.bubble-close')) return;

				if (e.type === 'touchstart') {
					initialX = e.touches[0].clientX - (modal.offsetLeft || 0);
					initialY = e.touches[0].clientY - (modal.offsetTop || 0);
				} else {
					initialX = e.clientX - (modal.offsetLeft || 0);
					initialY = e.clientY - (modal.offsetTop || 0);
				}

				isDragging = true;
				modal.style.position = 'absolute';
			}

			function drag(e) {
				if (!isDragging) return;
				e.preventDefault();

				if (e.type === 'touchmove') {
					currentX = e.touches[0].clientX - initialX;
					currentY = e.touches[0].clientY - initialY;
				} else {
					currentX = e.clientX - initialX;
					currentY = e.clientY - initialY;
				}

				modal.style.left = currentX + 'px';
				modal.style.top = currentY + 'px';
			}

			function dragEnd() {
				isDragging = false;
			}
		}

		fetchRates().then(() => {
			updateData();
			// setTimeout(() => widget.classList.add('show'), 500);
			setTimeout(() => ball.classList.add('show'), 500);
		});
	}
	// 地球组件 (Earth)
	function initializeEarth() {
		const ball = document.getElementById('earth-ball');
		const overlay = document.getElementById('earth-modal-overlay');
		const modalContent = document.getElementById('earth-modal-content');
		const renderArea = document.getElementById('earth-render-area');
		const tooltip = document.getElementById('earth-tooltip');
		const counterValue = document.getElementById('earth-total-count');
		let globeInstance = null;
		let isGlobeInitialized = false;
		let currentActiveFlag = null;
		let lastAppliedThemeConfig = null;
		const COORD_MAP = {
			'CN': [35.8617, 104.1954],
			'HK': [22.3193, 114.1694],
			'MO': [22.1987, 113.5439],
			'TW': [23.6978, 120.9605],
			'JP': [36.2048, 138.2529],
			'KR': [35.9078, 127.7669],
			'KP': [40.3399, 127.5101],
			'MN': [46.8625, 103.8467],
			'SG': [1.3521, 103.8198],
			'MY': [4.2105, 101.9758],
			'TH': [15.8700, 100.9925],
			'VN': [14.0583, 108.2772],
			'PH': [12.8797, 121.7740],
			'ID': [-0.7893, 113.9213],
			'MM': [21.9162, 95.9560],
			'KH': [12.5657, 104.9910],
			'LA': [19.8562, 102.4955],
			'TL': [-8.8742, 125.7275],
			'BN': [4.5353, 114.7277],
			'IN': [20.5937, 78.9629],
			'BD': [23.6850, 90.3563],
			'PK': [30.3753, 69.3451],
			'LK': [7.8731, 80.7718],
			'NP': [28.3949, 84.1240],
			'BT': [27.5142, 90.4336],
			'MV': [3.2028, 73.2207],
			'KG': [41.2044, 74.7661],
			'TJ': [38.8610, 71.2761],
			'KZ': [48.0196, 66.9237],
			'UZ': [41.3775, 64.5853],
			'TM': [38.9697, 69.4540],
			'AF': [33.9391, 67.7099],
			'IR': [32.4279, 53.6880],
			'IQ': [33.2232, 43.6793],
			'SY': [34.8021, 38.9968],
			'LB': [33.8547, 35.8623],
			'JO': [30.5852, 36.2384],
			'PS': [31.9522, 35.2332],
			'IL': [31.0461, 34.8516],
			'SA': [23.8859, 45.0792],
			'AE': [23.4241, 53.8478],
			'QA': [25.3548, 51.1839],
			'KW': [29.3117, 47.4818],
			'OM': [21.4735, 55.9754],
			'BH': [25.9304, 50.6378],
			'YE': [15.5527, 48.5164],
			'TR': [38.9637, 35.2433],
			'CY': [35.1264, 33.4299],
			'AZ': [40.1431, 47.5769],
			'GE': [42.3154, 43.3569],
			'AM': [40.0691, 45.0382],
			'GB': [55.3781, -3.4360],
			'FR': [46.2276, 2.2137],
			'DE': [51.1657, 10.4515],
			'NL': [52.1326, 5.2913],
			'BE': [50.5039, 4.4699],
			'LU': [49.8153, 6.1296],
			'CH': [46.8182, 8.2275],
			'AT': [47.5162, 14.5501],
			'IE': [53.4129, -8.2439],
			'MC': [43.7384, 7.4246],
			'LI': [47.1660, 9.5554],
			'IT': [41.8719, 12.5674],
			'ES': [40.4637, -3.7492],
			'PT': [39.3999, -8.2245],
			'GR': [39.0742, 21.8243],
			'MT': [35.9375, 14.3754],
			'SM': [43.9424, 12.4578],
			'VA': [41.9029, 12.4534],
			'AD': [42.5063, 1.5218],
			'HR': [45.1000, 15.2000],
			'BA': [43.9159, 17.6791],
			'ME': [42.7087, 19.3744],
			'MK': [41.6086, 21.7453],
			'AL': [41.1533, 20.1683],
			'SI': [46.1512, 14.9955],
			'RS': [44.0165, 21.0059],
			'SE': [60.1282, 18.6435],
			'NO': [60.4720, 8.4689],
			'DK': [56.2639, 9.5018],
			'FI': [61.9241, 25.7482],
			'IS': [64.9631, -19.0208],
			'FO': [62.0100, -6.7800],
			'SJ': [77.5500, 23.6000],
			'AX': [60.1785, 19.9156],
			'RU': [61.5240, 105.3188],
			'UA': [48.3794, 31.1656],
			'BY': [53.7098, 27.9534],
			'MD': [47.4116, 28.3699],
			'PL': [51.9194, 19.1451],
			'CZ': [49.8175, 15.4730],
			'SK': [48.6690, 19.6990],
			'HU': [47.1625, 19.5033],
			'RO': [45.9432, 24.9668],
			'BG': [42.7339, 25.4858],
			'LT': [55.1694, 23.8813],
			'LV': [56.8796, 24.6032],
			'EE': [58.5953, 25.0136],
			'IM': [54.2361, -4.5481],
			'GI': [36.1378, -5.3453],
			'JE': [49.2144, -2.1312],
			'GG': [49.4657, -2.5853],
			'US': [37.0902, -95.7129],
			'CA': [56.1304, -106.3468],
			'MX': [23.6345, -102.5528],
			'GL': [71.7069, -42.6043],
			'PR': [18.2208, -66.5901],
			'CU': [21.5218, -77.7812],
			'DO': [18.7357, -70.1627],
			'HT': [18.9712, -72.2852],
			'JM': [18.1096, -77.2975],
			'BS': [25.0343, -77.3963],
			'BB': [13.1939, -59.5432],
			'TT': [10.6918, -61.2225],
			'LC': [13.9094, -60.9789],
			'DM': [15.4150, -61.3710],
			'GD': [12.1165, -61.6790],
			'AG': [17.0608, -61.7964],
			'KN': [17.3578, -62.7830],
			'VC': [13.2500, -61.2000],
			'AI': [18.2206, -63.0686],
			'AW': [12.5211, -69.9683],
			'BM': [32.3214, -64.7574],
			'BQ': [12.1784, -68.2385],
			'CW': [12.1696, -68.9900],
			'KY': [19.3133, -81.2546],
			'GP': [16.2650, -61.5510],
			'MQ': [14.6415, -61.0242],
			'MS': [16.7420, -62.1874],
			'SX': [18.0425, -63.0548],
			'TC': [21.6940, -71.7979],
			'VG': [18.4207, -64.6399],
			'VI': [18.3358, -64.8963],
			'BL': [17.9, -62.8333],
			'MF': [18.0708, -63.0784],
			'PM': [46.8852, -56.3159],
			'AS': [-14.2710, -170.1320],
			'CR': [9.7489, -83.7534],
			'PA': [8.5380, -80.7821],
			'GT': [15.7835, -90.2308],
			'HN': [15.1999, -86.2419],
			'SV': [13.7942, -88.8965],
			'NI': [12.8654, -85.2072],
			'BZ': [17.1899, -88.4976],
			'BR': [-14.2350, -51.9253],
			'AR': [-38.4161, -63.6167],
			'CL': [-35.6751, -71.5430],
			'CO': [4.5709, -74.2973],
			'PE': [-9.1900, -75.0152],
			'VE': [6.4238, -66.5897],
			'EC': [-1.8312, -78.1834],
			'BO': [-16.2902, -63.5887],
			'PY': [-23.4425, -58.4438],
			'UY': [-32.5228, -55.7658],
			'GF': [3.9339, -53.1258],
			'SR': [3.9193, -56.0278],
			'GY': [4.8604, -58.9302],
			'FK': [-51.7963, -59.5236],
			'EG': [26.8206, 30.8025],
			'MA': [31.7917, -7.0926],
			'DZ': [28.0339, 1.6596],
			'TN': [33.8869, 9.5375],
			'LY': [26.3351, 17.2283],
			'EH': [24.2155, -12.8858],
			'NG': [9.0820, 8.6753],
			'GH': [7.9465, -1.0232],
			'SN': [14.4974, -14.4524],
			'ML': [17.5707, -3.9962],
			'NE': [17.6078, 8.0817],
			'MR': [21.0079, -10.9408],
			'SL': [8.4606, -11.7799],
			'LR': [6.4281, -9.4295],
			'GW': [11.8037, -15.1802],
			'CV': [15.1481, -23.7135],
			'BF': [12.2383, -1.8641],
			'CI': [7.5400, -5.5471],
			'TG': [8.6195, 0.8248],
			'BJ': [9.3077, 2.3158],
			'GM': [13.4432, -15.3101],
			'GN': [9.9456, -9.6966],
			'CM': [7.3697, 12.3547],
			'CF': [6.6111, 20.9394],
			'GA': [-0.2280, 11.6055],
			'CG': [-0.2280, 15.8277],
			'CD': [-4.0383, 21.7587],
			'AO': [-11.2027, 17.8739],
			'TD': [15.4542, 18.7322],
			'GQ': [1.6571, 10.2679],
			'ST': [0.1864, 6.6131],
			'KE': [-0.0236, 37.9062],
			'ET': [9.1450, 40.4897],
			'TZ': [-6.3690, 34.8888],
			'UG': [1.3733, 32.2903],
			'SD': [12.8628, 30.2176],
			'SS': [6.8770, 31.3070],
			'RW': [-1.9403, 29.8739],
			'BI': [-3.3731, 29.9189],
			'SO': [5.1521, 46.1996],
			'ER': [15.1794, 39.7823],
			'DJ': [11.8251, 42.5903],
			'KM': [-11.6455, 43.3333],
			'SC': [-4.6796, 55.4920],
			'MU': [-20.3484, 57.5522],
			'RE': [-21.1151, 55.5364],
			'YT': [-12.8275, 45.1662],
			'MG': [-18.7669, 46.8691],
			'ZA': [-30.5595, 22.9375],
			'ZM': [-13.1339, 27.8493],
			'ZW': [-19.0154, 29.1549],
			'MW': [-13.2543, 34.3015],
			'MZ': [-18.6657, 35.5296],
			'NA': [-22.9576, 18.4904],
			'BW': [-22.3285, 24.6849],
			'LS': [-29.6100, 28.2336],
			'SZ': [-26.5225, 31.4659],
			'SH': [-7.9467, -14.3776],
			'AU': [-25.2744, 133.7751],
			'NZ': [-40.9006, 174.8860],
			'FJ': [-17.7134, 178.0650],
			'PG': [-6.31499, 143.9555],
			'SB': [-8.4500, 157.0000],
			'VU': [-15.3767, 166.9592],
			'NC': [-20.9043, 165.6180],
			'PF': [-17.6797, -149.4068],
			'NR': [-0.5228, 166.9315],
			'TV': [-7.1095, 177.6493],
			'WS': [-13.7590, -172.1046],
			'TO': [-20.4290, -174.8655],
			'KI': [1.8856, -157.5562],
			'MH': [7.1315, 171.1899],
			'FM': [7.4256, 150.5508],
			'PW': [7.5150, 134.5825],
			'MP': [15.2097, 145.7269],
			'GU': [13.4443, 144.7937],
			'WF': [-13.7687, -177.1560],
			'NU': [-19.0544, -169.8672],
			'TK': [-9.2000, -171.5000],
			'CK': [-21.2367, -159.7770],
			'PN': [-25.0700, -130.1000],
			'NF': [-29.0408, 167.9547],
			'AQ': [-75.2509, -0.0713],
			'UN': [0, 0],
			'EU': [50, 10],
			'AC': [-7.9400, -14.3500],
			'TA': [-37.0700, -12.3000],
			'CP': [10.3800, 109.2100],
			'EA': [28.7000, -17.7500],
			'IC': [28.0000, -15.5000],
			'XA': [0, 0],
			'XB': [0, 0],
			'EZ': [0, 0],
			'ZZ': [0, 0],
			'IO': [-6.3432, 71.8765],
			'TF': [-49.2804, 69.3486],
			'GS': [-54.4296, -36.5879],
			'HM': [-53.0818, 73.5042],
			'UM': [19.2823, 166.6470],
			'BV': [-54.4208, 3.3464],
			'CC': [-12.1642, 96.8710],
			'CX': [-10.4475, 105.6904],
			'DG': [-7.3000, 72.4000],
			'XK': [42.6026, 20.9030]
		};

		function getThemeColor() {
			const rootStyle = getComputedStyle(document.documentElement);
			let color = rootStyle.getPropertyValue('--accent-9').trim() ||
				(localStorage.getItem('color') ? localStorage.getItem('color').replace(/"/g, '') : null);
			if (!color || color.includes('var(')) {
				const primaryHsl = rootStyle.getPropertyValue('--primary').trim();
				if (primaryHsl) {
					color = `hsl(${primaryHsl})`;
				}
			}
			return color || '#3b82f6';
		}

		function getAppearancePreference() {
			const legacyAppearance = localStorage.getItem('appearance');
			if (legacyAppearance) {
				const normalizedLegacy = legacyAppearance.replace(/"/g, '');
				if (['light', 'dark', 'system'].includes(normalizedLegacy)) {
					return normalizedLegacy;
				}
			}
			const nezhaAppearance = localStorage.getItem('vite-ui-theme');
			if (nezhaAppearance && ['light', 'dark', 'system'].includes(nezhaAppearance)) {
				return nezhaAppearance;
			}
			return 'system';
		}

		function getFlagUrl(code) {
			const normalizedCode = String(code || 'UN').toLowerCase();
			return `https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/${normalizedCode}.svg`;
		}

		function getBackgroundConfig() {
			const userAppearance = getAppearancePreference();
			let isLight;
			if (userAppearance === 'light') {
				isLight = true;
			} else if (userAppearance === 'dark') {
				isLight = false;
			} else {
				isLight = window.matchMedia('(prefers-color-scheme: light)').matches;
			}
			const bg = 'rgba(0, 0, 0, 0)';
			if (isLight) {
				return {
					bg: bg,
					bgImage: null,
					globeImage: '//upload.wikimedia.org/wikipedia/commons/0/04/Solarsystemscope_texture_8k_earth_daymap.jpg',
					atmosphere: 'rgba(59, 130, 246, 0.2)'
				};
			} else {
				return {
					bg: bg,
					bgImage: '//upload.wikimedia.org/wikipedia/commons/6/60/ESO_-_Milky_Way.jpg',
					globeImage: '//upload.wikimedia.org/wikipedia/commons/b/b3/Solarsystemscope_texture_8k_earth_nightmap.jpg',
					atmosphere: getThemeColor()
				};
			}
		}

		function getCodeFromNode(node) {
			if (node.country_code) return node.country_code.toUpperCase();
			if (node.region && EMOJI_MAP[node.region]) return EMOJI_MAP[node.region];
			return null;
		}
		ball.addEventListener('click', async () => {
			overlay.style.display = 'flex';
			requestAnimationFrame(() => {
				overlay.style.opacity = '1';
				modalContent.style.transform = 'scale(1)';
			});
			updateGlobeTheme();
			if (!isGlobeInitialized) {
				try {
					const res = await fetch('/api/nodes');
					const json = await res.json();
					let nodes = [];
					if (json.status === 'success' && Array.isArray(json.data)) {
						nodes = json.data;
					}
					const {
						formattedData,
						arcsData,
						totalCount
					} = processData(nodes);
					if (counterValue) counterValue.innerText = totalCount;
					initGlobe(formattedData, arcsData);
					isGlobeInitialized = true;
					setTimeout(() => {
						renderArea.classList.add('ready');
					}, 100);
				} catch (e) {
					console.error(e);
				}
			} else {
				setTimeout(() => {
					if (globeInstance) {
						globeInstance.width(renderArea.clientWidth);
						globeInstance.height(renderArea.clientHeight);
					}
				}, 300);
			}
		});

		function processData(nodes) {
			const groups = {};
			let count = 0;
			nodes.forEach(node => {
				let code = getCodeFromNode(node);
				if (code) {
					if (!groups[code]) groups[code] = [];
					groups[code].push(node.name);
					count++;
				}
			});
			const formattedData = Object.keys(groups).map(code => {
				const coords = COORD_MAP[code];
				if (!coords) return null;
				return {
					code: code,
					lat: coords[0],
					lng: coords[1],
					servers: groups[code],
					type: 'server',
					size: Math.min(groups[code].length * 0.15, 1.5)
				};
			}).filter(item => item !== null);
			const arcsData = [];
			const userLat = window.currentUserGeo ? window.currentUserGeo.lat : 35.8617;
			const userLng = window.currentUserGeo ? window.currentUserGeo.lng : 104.1954;
			const userCity = window.currentUserGeo ? window.currentUserGeo.city : 'Your Location';
			formattedData.push({
				code: 'USER',
				lat: userLat,
				lng: userLng,
				servers: [userCity],
				type: 'user',
				size: 2.0
			});
			formattedData.forEach(item => {
				if (item.type === 'server') {
					arcsData.push({
						startLat: item.lat,
						startLng: item.lng,
						endLat: userLat,
						endLng: userLng,
					});
				}
			});
			return {
				formattedData,
				arcsData,
				totalCount: count
			};
		}

		function calculateFlagSize(altitude) {
			const baseSize = 24;
			const minSize = 16;
			const maxSize = 40;
			const zoomFactor = Math.max(0.5, Math.min(2, 3 - altitude));
			return Math.max(minSize, Math.min(maxSize, baseSize * zoomFactor));
		}

		function checkOverlap(data) {
			const threshold = 2;
			for (let i = 0; i < data.length; i++) {
				for (let j = i + 1; j < data.length; j++) {
					const latDiff = Math.abs(data[i].lat - data[j].lat);
					const lngDiff = Math.abs(data[i].lng - data[j].lng);
					const distance = Math.sqrt(latDiff * latDiff + lngDiff * lngDiff);
					if (distance < threshold) {
						return true;
					}
				}
			}
			return false;
		}

		function hideTooltip() {
			tooltip.style.display = 'none';
			tooltip.style.transform = '';
			if (currentActiveFlag) {
				if (currentActiveFlag.classList.contains('earth-flag-img')) {
					currentActiveFlag.style.transform = 'translate(-50%, -50%) scale(1)';
					currentActiveFlag.style.zIndex = 'auto';
					currentActiveFlag.style.filter = `drop-shadow(0 0 4px ${getThemeColor()})`;
				}
				currentActiveFlag = null;
			}
			if (globeInstance) {
				globeInstance.controls().autoRotate = true;
			}
		}

		function initGlobe(pointsData, arcsData) {
			const config = getBackgroundConfig();
			const themeColor = getThemeColor();
			const w = renderArea.clientWidth;
			const h = renderArea.clientHeight;
			const hasOverlap = checkOverlap(pointsData);
			const isMobile = window.innerWidth <= 768;
			const initialAltitude = isMobile ? 3.0 : 2.0;
			globeInstance = Globe()(renderArea)
				.width(w)
				.height(h)
				.backgroundColor(config.bg)
				.backgroundImageUrl(config.bgImage)
				.globeImageUrl(config.globeImage)
				.bumpImageUrl(
					'//upload.wikimedia.org/wikipedia/commons/b/b3/Solarsystemscope_texture_8k_earth_nightmap.jpg')
				.atmosphereColor(config.atmosphere)
				.atmosphereAltitude(0.15)
				.htmlElementsData(pointsData)
				.htmlLat(d => d.lat)
				.htmlLng(d => d.lng)
				.htmlElement(d => {
					const el = document.createElement('div');
					if (d.type === 'user') {
						const marker = document.createElement('div');
						marker.className = 'earth-user-marker';
						marker.innerHTML = `<img src="/favicon.ico" alt="You">`;
						marker.onclick = (e) => {
							e.stopPropagation();
							hideTooltip();
							globeInstance.controls().autoRotate = false;
							tooltip.style.display = 'block';
							tooltip.innerHTML = `
                    <div class="earth-tooltip-header">
                        <span>YOU</span>
                    </div>
                    <div class="earth-tooltip-content">
                      <div class="earth-tooltip-item">${d.servers[0]}</div>
                    </div>
                  `;
							const parentRect = renderArea.getBoundingClientRect();
							const rect = marker.getBoundingClientRect();
							if (window.innerWidth <= 768) {
								tooltip.style.left = '50%';
								tooltip.style.transform = 'translateX(-50%)';
								tooltip.style.top = 'auto';
								tooltip.style.bottom = '20px';
							} else {
								tooltip.style.left = (rect.right - parentRect.left + 15) + 'px';
								tooltip.style.top = (rect.top - parentRect.top) + 'px';
							}
						};
						el.appendChild(marker);
					} else {
						const img = document.createElement('img');
						img.src = getFlagUrl(d.code);
						img.className = 'earth-flag-img';
						img.style.pointerEvents = 'auto';
						const updateFlagSize = () => {
							if (!globeInstance) return;
							const controls = globeInstance.controls();
							const altitude = controls.getDistance ? controls.getDistance() / 200 : 2;
							let newSize = calculateFlagSize(altitude);
							if (hasOverlap && altitude < 1.5) {
								newSize = Math.max(16, newSize * 0.7);
							}
							img.style.width = newSize + 'px';
						};
						updateFlagSize();
						globeInstance.controls().addEventListener('change', updateFlagSize);
						img.onmouseenter = (e) => {
							if (currentActiveFlag !== img) {
								img.style.transform = 'translate(-50%, -50%) scale(1.3)';
								img.style.filter = `drop-shadow(0 0 6px ${themeColor})`;
							}
						};
						img.onmouseleave = (e) => {
							if (currentActiveFlag !== img) {
								img.style.transform = 'translate(-50%, -50%) scale(1)';
								img.style.filter = `drop-shadow(0 0 4px ${themeColor})`;
							}
						};
						img.onclick = (e) => {
							e.stopPropagation();
							if (currentActiveFlag === img) {
								hideTooltip();
								return;
							}
							if (currentActiveFlag) {
								if (currentActiveFlag.classList.contains('earth-flag-img')) {
									currentActiveFlag.style.transform = 'translate(-50%, -50%) scale(1)';
									currentActiveFlag.style.zIndex = 'auto';
									currentActiveFlag.style.filter = `drop-shadow(0 0 4px ${themeColor})`;
								}
							}
							globeInstance.controls().autoRotate = false;
							currentActiveFlag = img;
							img.style.transform = 'translate(-50%, -50%) scale(1.5)';
							img.style.zIndex = '1000';
							img.style.filter = `drop-shadow(0 0 8px ${themeColor})`;
							const rect = img.getBoundingClientRect();
							const parentRect = renderArea.getBoundingClientRect();
							tooltip.style.display = 'block';
							tooltip.innerHTML = `
                    <div class="earth-tooltip-header">
                        <span>${d.code}</span>
                        <span style="color: var(--gray-11); font-weight: normal; font-size: 0.85rem;">(${d.servers.length})</span>
                    </div>
                    <div class="earth-tooltip-content">
                      ${d.servers.map(s => `<div class="earth-tooltip-item">${s}</div>`).join('')}
                    </div>
                `;
							const tooltipRect = tooltip.getBoundingClientRect();
							if (window.innerWidth <= 768) {
								tooltip.style.left = '50%';
								tooltip.style.transform = 'translateX(-50%)';
								tooltip.style.top = 'auto';
								tooltip.style.bottom = '20px';
							} else {
								let leftPos = rect.right - parentRect.left + 15;
								let topPos = rect.top - parentRect.top;
								if (leftPos + tooltipRect.width > parentRect.width) {
									leftPos = rect.left - parentRect.left - tooltipRect.width - 15;
								}
								if (topPos + tooltipRect.height > parentRect.height) {
									topPos = parentRect.height - tooltipRect.height - 10;
								}
								tooltip.style.left = leftPos + 'px';
								tooltip.style.top = topPos + 'px';
							}
						};
						el.appendChild(img);
					}
					return el;
				})
				.ringsData(pointsData.filter(item => item.type === 'server'))
				.ringColor(() => getThemeColor())
				.ringMaxRadius(2) //最大半径
				.ringPropagationSpeed(1) //传播速度
				.ringRepeatPeriod(1250) //重复周期
				.arcsData(arcsData)
				.arcStartLat(d => d.startLat)
				.arcStartLng(d => d.startLng)
				.arcEndLat(d => d.endLat)
				.arcEndLng(d => d.endLng)
				.arcColor(() => themeColor)
				.arcDashLength(0.5) //长度
				.arcDashGap(1) //间隔
				.arcDashAnimateTime(1750) //动画时间
				.arcStroke(0.8) //线宽
				.arcAltitudeAutoScale(0.5); //高度
			const viewLat = window.currentUserGeo ? window.currentUserGeo.lat : 25;
			const viewLng = window.currentUserGeo ? window.currentUserGeo.lng : 110;
			globeInstance.pointOfView({
				lat: viewLat,
				lng: viewLng,
				altitude: initialAltitude
			});
			globeInstance.controls().autoRotate = true;
			globeInstance.controls().autoRotateSpeed = 0.6;
			globeInstance.controls().enableZoom = true;
			renderArea.addEventListener('click', (e) => {
				if (e.target === renderArea || e.target.tagName === 'CANVAS') {
					hideTooltip();
				}
			});
			let touchStartTime = 0;
			renderArea.addEventListener('touchstart', (e) => {
				touchStartTime = Date.now();
			});
			renderArea.addEventListener('touchend', (e) => {
				const touchDuration = Date.now() - touchStartTime;
				if (touchDuration < 200 && (e.target === renderArea || e.target.tagName === 'CANVAS')) {
					hideTooltip();
				}
			});
			window.addEventListener('resize', () => {
				if (modalContent.offsetParent !== null) {
					globeInstance.width(renderArea.clientWidth);
					globeInstance.height(renderArea.clientHeight);
				}
			});
		}

		function updateGlobeTheme() {
			if (!globeInstance) return;
			const newConfig = getBackgroundConfig();
			const hasChanged = !lastAppliedThemeConfig ||
				lastAppliedThemeConfig.bg !== newConfig.bg ||
				lastAppliedThemeConfig.bgImage !== newConfig.bgImage ||
				lastAppliedThemeConfig.globeImage !== newConfig.globeImage ||
				lastAppliedThemeConfig.atmosphere !== newConfig.atmosphere;
			if (!hasChanged) {
				return;
			}
			globeInstance.backgroundColor(newConfig.bg);
			globeInstance.backgroundImageUrl(newConfig.bgImage);
			globeInstance.globeImageUrl(newConfig.globeImage);
			globeInstance.atmosphereColor(newConfig.atmosphere);
			lastAppliedThemeConfig = {
				...newConfig
			};
		}
		overlay.addEventListener('click', (e) => {
			if (e.target === overlay || e.target === modalContent) {
				overlay.style.opacity = '0';
				modalContent.style.transform = 'scale(0.95)';
				setTimeout(() => overlay.style.display = 'none', 300);
				hideTooltip();
			}
		});
		const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
		mediaQuery.addEventListener('change', () => {
			if (getAppearancePreference() === 'system') {
				updateGlobeTheme();
			}
		});
		const storageObserver = new MutationObserver(() => {
			if (overlay.style.display === 'flex') {
				updateGlobeTheme();
			}
		});
		storageObserver.observe(document.body, {
			subtree: true,
			childList: true
		});
		window.addEventListener('storage', (e) => {
			if ((e.key === 'appearance' || e.key === 'vite-ui-theme') && overlay.style.display === 'flex') {
				updateGlobeTheme();
			}
		});
		setTimeout(() => ball.classList.add('show'), 600);
	}
	// 滚动辅助组件 (Scroll Helpers)
	function initializeScrollHelpers() {
		const toTopBtn = document.getElementById('scroll-to-top');
		const toBottomBtn = document.getElementById('scroll-to-bottom');
		if (!toTopBtn || !toBottomBtn) return;
		const getScrollContainer = () => document.querySelector('[data-radix-scroll-area-viewport]') || document
			.documentElement;
		const performScroll = (pos) => {
			const container = getScrollContainer();
			const targetY = pos === 'top' ? 0 : (container.scrollHeight || document.documentElement.scrollHeight);
			container.scrollTo({
				top: targetY,
				behavior: 'smooth'
			});
			window.scrollTo({
				top: targetY,
				behavior: 'smooth'
			});
		};
		toTopBtn.addEventListener('click', () => performScroll('top'));
		toBottomBtn.addEventListener('click', () => performScroll('bottom'));

		function handleScroll() {
			const container = getScrollContainer();
			const scrollTop = Math.max(container.scrollTop, window.scrollY, document.documentElement.scrollTop);
			const clientHeight = container.clientHeight || window.innerHeight;
			const scrollHeight = Math.max(container.scrollHeight, document.documentElement.scrollHeight);
			const thresholdTop = 15;
			const thresholdBottom = 15;
			window.requestAnimationFrame(() => {
				const isAtTop = scrollTop <= thresholdTop;
				const isAtBottom = (scrollTop + clientHeight) >= (scrollHeight - thresholdBottom);
				if (isAtTop) {
					toTopBtn.classList.remove('show');
				} else {
					toTopBtn.classList.add('show');
				}
				if (isAtBottom || scrollHeight <= clientHeight + 20) {
					toBottomBtn.classList.remove('show');
				} else {
					toBottomBtn.classList.add('show');
				}
			});
		}
		window.addEventListener('scroll', handleScroll, {
			passive: true
		});
		const container = getScrollContainer();
		container.addEventListener('scroll', handleScroll, {
			passive: true
		});
		const resizeObserver = new ResizeObserver(() => {
			handleScroll();
		});
		resizeObserver.observe(container);
		resizeObserver.observe(document.body);
		setInterval(handleScroll, 1500);
		handleScroll();
	}
	// 初始化
	function initializeApp() {
		const observer = new MutationObserver((mutations, me) => {
			const themeRoot = document.querySelector('.radix-themes') || document.body;
			const welcomeBubble = document.getElementById('welcome-bubble-container');
			const alertOverlay = document.getElementById('custom-alert-overlay');
			const financeWidget = document.getElementById('finance-widget');
			const financeBall = document.getElementById('finance-ball');
			const earthBall = document.getElementById('earth-ball');
			const earthOverlay = document.getElementById('earth-modal-overlay');
			const tradeOverlay = document.getElementById('server-trade-overlay'); // 新增
			const toTopBtn = document.getElementById('scroll-to-top');
			const toBottomBtn = document.getElementById('scroll-to-bottom');

			if (themeRoot) {
				if (welcomeBubble && !themeRoot.contains(welcomeBubble)) {
					themeRoot.appendChild(welcomeBubble);
				}
				if (alertOverlay && !themeRoot.contains(alertOverlay)) {
					themeRoot.appendChild(alertOverlay);
				}
				if (financeWidget && !themeRoot.contains(financeWidget)) {
					themeRoot.appendChild(financeWidget);
				}
				if (financeBall && !themeRoot.contains(financeBall)) {
					themeRoot.appendChild(financeBall);
				}
				if (earthBall && !themeRoot.contains(earthBall)) {
					themeRoot.appendChild(earthBall);
				}
				if (earthOverlay && !themeRoot.contains(earthOverlay)) {
					themeRoot.appendChild(earthOverlay);
				}
				if (tradeOverlay && !themeRoot.contains(tradeOverlay)) {
					themeRoot.appendChild(tradeOverlay);
				}
				if (toTopBtn && !themeRoot.contains(toTopBtn)) {
					themeRoot.appendChild(toTopBtn);
				}
				if (toBottomBtn && !themeRoot.contains(toBottomBtn)) {
					themeRoot.appendChild(toBottomBtn);
				}
				if (themeRoot.contains(welcomeBubble) && themeRoot.contains(financeWidget)) {
					me.disconnect();
				}
			}
		});

		const rootElement = document.getElementById('root') || document.body;
		observer.observe(rootElement, {
			childList: true,
			subtree: true
		});

		initializeWelcomeBubble();
		initializeFinanceWidget();
		initializeEarth();
		initializeScrollHelpers();

		fetch('/api/me')
			.then(response => {
				if (!response.ok) {
					throw new Error(`API request failed with status: ${response.status}`);
				}
				return response.json();
			})
			.then(data => {
				let isLoggedIn;
				if (data && typeof data === 'object') {
					if (Object.prototype.hasOwnProperty.call(data, 'logged_in')) {
						isLoggedIn = data.logged_in;
					} else if (data.data && Object.prototype.hasOwnProperty.call(data.data, 'logged_in')) {
						isLoggedIn = data.data.logged_in;
					} else if (data.user && Object.prototype.hasOwnProperty.call(data.user, 'logged_in')) {
						isLoggedIn = data.user.logged_in;
					}
				}
				if (isLoggedIn !== true) {
					initializeProtection();
				}
			})
			.catch(error => {
				initializeProtection();
			});
	}
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initializeApp);
	} else {
		initializeApp();
	}
</script>


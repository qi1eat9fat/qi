<style>
	:root {
		--purcarte-card-color: hsl(var(--card) / 0.88);
		--secondary-foreground: hsl(var(--muted-foreground));
		--gray-12: hsl(var(--foreground));
		--gray-11: hsl(var(--muted-foreground));
		--gray-10: hsl(var(--muted-foreground));
		--gray-20: hsl(var(--foreground));
		--gray-a5: hsl(var(--border) / 0.5);
		--gray-a4: hsl(var(--border) / 0.35);
		--gray-a3: hsl(var(--border) / 0.24);
		--gray-a2: hsl(var(--border) / 0.16);
		--accent-11: hsl(var(--primary));
		--accent-9: hsl(var(--primary));
		--accent-a5: hsl(var(--primary) / 0.45);
		--accent-a3: hsl(var(--primary) / 0.25);
		--red-11: hsl(var(--destructive));
		--red-9: hsl(var(--destructive));
		--green-11: rgb(22 163 74);
		--accent-9-rgb: 37, 99, 235;
	}

	.dark {
		--purcarte-card-color: hsl(var(--card) / 0.82);
		--gray-a5: hsl(var(--border) / 0.56);
		--gray-a4: hsl(var(--border) / 0.42);
		--gray-a3: hsl(var(--border) / 0.3);
		--gray-a2: hsl(var(--border) / 0.2);
		--accent-9-rgb: 96, 165, 250;
	}

	::-webkit-scrollbar {
		width: 5px !important;
		height: 5px !important;
	}

	::-webkit-scrollbar-track {
		background-color: transparent !important;
	}

	::-webkit-scrollbar-thumb {
		background-color: rgba(148, 163, 184, 0.55) !important;
		border-radius: 8px !important;
	}

	::-webkit-scrollbar-thumb:hover {
		background-color: rgba(148, 163, 184, 0.85) !important;
	}

	footer {
		position: static !important;
		background-color: transparent !important;
		backdrop-filter: none !important;
		box-shadow: none !important;
	}

	footer p {
		color: var(--secondary-foreground) !important;
		opacity: 0.7;
	}


	/* Logo/图片样式 */
	header a img[alt="logo"],
	.bubble-logo-image {
		height: 2.5rem;
		width: 2.5rem;
		border-radius: 50%;
	}

	.bubble-logo-image {
		height: 32px;
		width: 32px;
	}

	/* 气泡/模态框通用容器样式 (共享背景、边框、阴影) */
	.welcome-bubble,
	.custom-alert-modal,
	.finance-widget {
		background-color: var(--purcarte-card-color);
		border: 1px solid var(--gray-a5);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		box-shadow: 0 8px 24px var(--gray-a4);
		color: var(--gray-12);
	}

	/* 气泡/模态框通用头部样式 */
	.bubble-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 15px;
		border-bottom: 1px solid var(--gray-a5);
	}

	.bubble-title {
		display: flex;
		align-items: center;
		gap: 8px;
		font-weight: 700;
		font-size: 1.1rem;
		color: var(--accent-11);
		margin: 0;
	}

	.bubble-close {
		background: none;
		border: none;
		color: var(--gray-20);
		cursor: pointer;
		font-size: 1.1rem;
		padding: 0;
		transition: color 0.3s ease, transform 0.3s ease;
	}

	.bubble-close:hover {
		color: var(--accent-9);
		transform: rotate(90deg);
	}

	.bubble-content {
		padding: 15px;
	}

	/* 气泡通用信息行样式 */
	.bubble-info {
		margin-bottom: 8px;
		font-size: 0.85rem;
		line-height: 1.5;
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.bubble-info svg {
		flex-shrink: 0;
		color: var(--gray-11);
	}

	.bubble-info:last-child {
		margin-bottom: 0;
	}

	/* 剧透文本样式 */
	.spoiler {
		background: var(--accent-9);
		color: transparent !important;
		user-select: none;
		cursor: pointer;
		border-radius: 4px;
		padding: 2px 6px;
		transition: all 0.3s ease;
	}

	.spoiler:hover {
		opacity: 0.8;
	}

	/* 帮助图标/工具提示样式 (HELP ICON/TOOLTIP) */
	.help-icon {
		cursor: help;
		color: var(--gray-10);
		display: flex;
		align-items: center;
		position: relative;
	}

	.help-icon.show-help {
		display: flex;
	}

	.help-icon:hover {
		color: var(--accent-9);
	}

	.help-icon::after {
		content: attr(data-tooltip);
		position: absolute;
		bottom: 100%;
		right: -5px;
		width: max-content;
		max-width: 200px;
		padding: 8px 12px;
		background-color: var(--purcarte-card-color);
		border: 1px solid var(--gray-a5);
		border-radius: 8px;
		color: var(--gray-12);
		font-size: 0.75rem;
		line-height: 1.4;
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		box-shadow: 0 4px 12px var(--gray-a4);
		z-index: 2100;
		opacity: 0;
		visibility: hidden;
		transform: translateY(10px) scale(0.95);
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
		pointer-events: none;
		white-space: pre-wrap;
		text-align: left;
	}

	.help-icon.active::after {
		opacity: 1;
		visibility: visible;
		transform: translateY(-5px) scale(1);
	}


	/* 欢迎气泡 (Welcome Bubble) */
	.welcome-bubble {
		position: fixed;
		left: 5px;
		bottom: 15px;
		z-index: 1050;
		max-width: 320px;
		border-radius: 16px;
		transform: translateY(150%);
		opacity: 0;
		transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.6s;
		pointer-events: none;
	}

	.welcome-bubble.show {
		transform: translateY(0);
		opacity: 1;
		pointer-events: auto;
	}


	/* 资产统计 (Finance Widget) */
	/* 容器 */
	.finance-widget {
		position: fixed;
		right: 20px;
		top: 70px;
		z-index: 1040;
		width: 280px;
		border-radius: 16px;
		transition: all 0.3s ease;
		display: flex;
		flex-direction: column;
		opacity: 0;
		transform: translateY(-20px);
		pointer-events: none;
	}

	.finance-widget.show {
		opacity: 1;
		transform: translateY(0);
		pointer-events: auto;
		z-index: 1040;
	}

	/* 悬浮按钮 */
	.finance-ball {
		position: fixed;
		right: 20px;
		top: 70px;
		width: 45px;
		height: 45px;
		border-radius: 50%;
		background-color: var(--purcarte-card-color);
		border: 1px solid var(--gray-a5);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		box-shadow: 0 4px 12px var(--gray-a4);
		z-index: 1041;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.3s ease;
		opacity: 0;
		transform: scale(0);
		pointer-events: none;
		color: var(--accent-11);
	}

	.finance-ball.show {
		opacity: 1;
		transform: scale(1);
		pointer-events: auto;
	}

	.finance-ball:hover {
		transform: scale(1.1);
		color: var(--accent-9);
	}

	/* 统计行 */
	.finance-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 8px;
		font-size: 0.85rem;
	}

	.finance-row .item-right {
		display: flex;
		align-items: center;
		gap: 4px;
		flex-shrink: 0;
	}

	.finance-value {
		font-weight: bold;
		color: var(--accent-11);
	}

	/* 分隔线 */
	.finance-separator {
		height: 1px;
		background-color: var(--gray-a5);
		margin: 10px 0;
		width: 100%;
	}

	/* 详细列表 */
	.finance-list {
		max-height: 200px;
		overflow-y: auto;
		padding-right: 5px;
		margin-bottom: 5px;
	}

	.finance-list-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 6px;
		font-size: 0.75rem;
		color: var(--gray-11);
	}

	.finance-list-item .item-name {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		max-width: 140px;
		color: var(--gray-12);
	}

	.finance-list-item .item-right {
		display: flex;
		align-items: center;
		gap: 4px;
		flex-shrink: 0;
	}

	.finance-list-item .item-value {
		font-weight: 500;
		color: var(--accent-11);
	}

	/* 汇率/提示信息 */
	.finance-tooltip {
		font-size: 0.7rem;
		color: var(--gray-11);
		margin-top: 2px;
		text-align: right;
	}

	/* 控制区 */
	.finance-controls {
		display: flex;
		gap: 8px;
		margin-top: 5px;
		padding-top: 10px;
		border-top: 1px solid var(--gray-a5);
		justify-content: space-between;
		align-items: center;
	}

	.finance-select {
		background-color: var(--purcarte-card-color);
		border: 1px solid var(--gray-a5);
		color: var(--gray-12);
		border-radius: 4px;
		font-size: 0.75rem;
		padding: 2px 4px;
		outline: none;
	}

	.finance-btn {
		background: transparent;
		border: none;
		cursor: pointer;
		color: var(--gray-11);
		transition: color 0.2s;
		padding: 2px;
	}

	.finance-btn:hover {
		color: var(--accent-9);
	}

	.finance-btn.active svg {
		color: var(--accent-9);
		fill: var(--accent-9);
		fill-opacity: 0.2;
	}

	/* 汇率 */
	.finance-exchange-rates {
		font-size: 0.7rem;
		color: var(--gray-11);
		padding: 8px 0;
		max-height: 120px;
		overflow-y: auto;
	}

	.finance-rate-item {
		display: flex;
		justify-content: space-between;
		margin-bottom: 4px;
	}

	.finance-rate-item:last-child {
		margin-bottom: 0;
	}

	.finance-rate-value {
		color: var(--accent-11);
		font-weight: 500;
	}

	/* 服务器交易模态框样式 */
	.server-trade-modal {
		max-width: 800px;
		width: 90%;
		max-height: 90vh;
		position: relative;
		cursor: move;
		border-radius: 16px !important;
		background-color: var(--purcarte-card-color) !important;
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px var(--gray-a5) !important;
		backdrop-filter: blur(20px) !important;
		-webkit-backdrop-filter: blur(20px) !important;
		overflow: visible;
		z-index: 1999;
	}

	.server-trade-header {
		cursor: move;
		user-select: none;
	}

	.server-trade-content {
		max-height: calc(85vh - 60px);
		overflow-y: auto;
	}

	.trade-section {
		margin-bottom: 15px;
	}

	.trade-section:last-child {
		margin-bottom: 0;
	}

	.trade-section-title {
		display: flex;
		align-items: center;
		gap: 8px;
		font-weight: 700;
		font-size: 0.95rem;
		color: var(--accent-11);
		margin-bottom: 12px;
		padding-bottom: 6px;
		border-bottom: 1px solid var(--gray-a5);
	}

	.server-info-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 12px 20px;
		margin-bottom: 12px;
	}

	.server-info-row {
		display: flex;
		align-items: flex-start;
		font-size: 0.85rem;
		line-height: 1.5;
	}

	.info-label {
		font-weight: 600;
		color: var(--gray-11);
		min-width: 80px;
		flex-shrink: 0;
	}

	.info-value {
		color: var(--gray-12);
		font-weight: 500;
		word-break: break-all;
	}

	.trade-tags-container,
	.trade-remark-container {
		margin-top: 10px;
	}

	.trade-tags-label,
	.trade-remark-label {
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--gray-11);
		margin-bottom: 6px;
		display: block;
	}

	.trade-tags-list,
	.trade-remark-list {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}

	.trade-tag,
	.trade-remark-tag {
		display: inline-flex;
		align-items: center;
		padding: 3px 8px;
		background: var(--accent-a3);
		border: 1px solid var(--accent-a5);
		border-radius: 4px;
		font-size: 0.7rem;
		color: var(--accent-11);
		font-weight: 500;
	}

	.trade-remark-tag {
		background: var(--gray-a3);
		border-color: var(--gray-a5);
		color: var(--gray-11);
	}

	/* 交易计算输入样式 */
	.trade-input-group {
		margin-bottom: 12px;
	}

	.trade-label {
		display: block;
		font-size: 0.8rem;
		font-weight: 600;
		color: var(--gray-11);
		margin-bottom: 6px;
	}

	.trade-input {
		width: 100%;
		padding: 8px 12px;
		background: var(--gray-a2);
		border: 1px solid var(--gray-a5);
		border-radius: 6px;
		color: var(--gray-12);
		font-size: 0.85rem;
		outline: none;
		transition: all 0.2s;
	}

	.trade-input:focus {
		border-color: var(--accent-9);
		background: var(--gray-a3);
	}

	/* 交易结果展示 */
	.trade-result-box {
		background: var(--gray-a2);
		border: 1px solid var(--gray-a5);
		border-radius: 8px;
		padding: 12px;
		margin-top: 12px;
	}

	.trade-result-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 6px 0;
		font-size: 0.85rem;
	}

	.trade-result-row:not(:last-child) {
		border-bottom: 1px solid var(--gray-a4);
	}

	.trade-result-value {
		font-weight: 700;
		font-size: 0.95rem;
		color: var(--accent-11);
	}

	.trade-result-value.premium {
		color: var(--red-11);
	}

	.trade-result-value.premium.positive {
		color: var(--green-11);
	}

	#server-trade-overlay {
		background-color: transparent !important;
		backdrop-filter: none !important;
		-webkit-backdrop-filter: none !important;
		pointer-events: none !important;
		align-items: center !important;
		justify-content: center !important;
		padding: 0;
	}

	#server-trade-overlay .server-trade-modal {
		pointer-events: auto !important;
	}


	/* 自定义警告模态框 (Custom Alert Modal) */
	/* 警告模态框覆盖层 */
	.custom-alert-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.4);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		z-index: 2000;
		display: none;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	/* 警告模态框内容 */
	.custom-alert-modal {
		padding: 0;
		border-radius: 16px;
		max-width: 350px;
		width: 90%;
		transform: scale(0.95);
		transition: transform 0.3s ease;
		display: flex;
		flex-direction: column;
	}

	.alert-reason-text {
		font-size: 1.2rem;
		font-weight: bold;
		margin: 0;
		color: var(--red-11);
	}

	.custom-alert-modal .bubble-content svg {
		color: var(--red-9);
	}


	/* 地球渲染组件 (Earth Globe Component) */
	/* 地球仪悬浮按钮 */
	#earth-ball {
		top: 125px;
		z-index: 1039;
	}

	/* 地球模态框内容 */
	#earth-modal-content {
		width: 80vw;
		height: 80vh;
		max-width: 100%;
		background-color: var(--purcarte-card-color);
		border: 1px solid var(--gray-a5);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		box-shadow: 0 8px 24px var(--gray-a4);
		display: flex;
		flex-direction: column;
		overflow: hidden;
		position: relative;
		border-radius: 16px;
	}

	/* 地球渲染区域 */
	#earth-render-area {
		width: 100%;
		height: 100%;
		flex: 1;
		cursor: grab;
		opacity: 0;
		transition: opacity 0.5s ease;
		background: transparent;
		touch-action: none;
		position: relative;
		overflow: hidden;
	}

	#earth-render-area.ready {
		opacity: 1;
	}

	#earth-render-area:active {
		cursor: grabbing;
	}

	/* 用户标记点 */
	.earth-user-marker {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.95);
		box-shadow: 0 0 15px var(--accent-9), 0 0 30px var(--accent-9);
		cursor: pointer;
		z-index: 1002;
		animation: userPulse 2s infinite cubic-bezier(0.4, 0, 0.6, 1);
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		border: 2px solid var(--accent-9);
	}

	.earth-user-marker img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 50%;
	}

	@keyframes userPulse {
		0% {
			box-shadow: 0 0 0 0 rgba(var(--accent-9-rgb), 0.7);
			transform: translate(-50%, -50%) scale(1);
		}

		50% {
			box-shadow: 0 0 0 15px rgba(var(--accent-9-rgb), 0);
			transform: translate(-50%, -50%) scale(1.15);
		}

		100% {
			box-shadow: 0 0 0 0 rgba(var(--accent-9-rgb), 0);
			transform: translate(-50%, -50%) scale(1);
		}
	}

	/* 旗帜标记点 */
	.earth-flag-img {
		width: 24px;
		height: auto;
		display: block;
		cursor: pointer;
		transform: translate(-50%, -50%);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		filter: drop-shadow(0 0 4px var(--accent-9));
	}

	/* 地球工具提示 */
	#earth-tooltip {
		position: absolute;
		display: none;
		padding: 12px 16px;
		background: var(--purcarte-card-color);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border: 1px solid var(--accent-9);
		border-radius: 8px;
		color: var(--gray-12);
		pointer-events: auto;
		z-index: 9999;
		font-size: 0.85rem;
		line-height: 1.5;
		box-shadow: 0 8px 24px var(--gray-a4);
		max-width: 300px;
		min-width: 200px;
	}

	.earth-tooltip-header {
		font-weight: 900;
		font-size: 1rem;
		margin-bottom: 8px;
		color: var(--accent-9);
		border-bottom: 1px solid var(--gray-a5);
		padding-bottom: 6px;
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.earth-tooltip-content {
		max-height: 200px;
		overflow-y: auto;
		padding-right: 4px;
	}

	.earth-tooltip-content::-webkit-scrollbar {
		width: 4px;
	}

	.earth-tooltip-content::-webkit-scrollbar-thumb {
		background-color: var(--accent-9);
		border-radius: 4px;
	}

	.earth-tooltip-item {
		font-size: 0.95rem;
		padding: 4px 0;
		color: var(--gray-12);
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.earth-tooltip-item::before {
		content: '•';
		color: var(--accent-9);
		font-weight: bold;
		font-size: 1.4em;
	}

	/* 计数器覆盖层 */
	.earth-overlay-counter {
		position: absolute;
		top: 20px;
		left: 20px;
		z-index: 1001;
		pointer-events: none;
		background: var(--purcarte-card-color);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border: 1px solid var(--gray-a5);
		padding: 12px 20px;
		border-radius: 12px;
		display: flex;
		flex-direction: column;
		box-shadow: 0 4px 12px var(--gray-a4);
	}

	.counter-label {
		font-size: 0.75rem;
		color: var(--gray-11);
		text-transform: uppercase;
		letter-spacing: 1.5px;
		margin-bottom: 4px;
	}

	.counter-value {
		font-size: 2rem;
		font-weight: 800;
		color: var(--accent-9);
		line-height: 1;
	}


	/* 滚动辅助按钮 (Scroll Helper Buttons) */
	.scroll-helper-btn {
		position: fixed;
		right: 20px;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background-color: var(--purcarte-card-color);
		border: 1px solid var(--gray-a5);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		box-shadow: 0 4px 12px var(--gray-a4);
		z-index: 1040;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		opacity: 0;
		transform: scale(0) translateY(10px);
		pointer-events: none;
		color: var(--accent-11);
	}

	.scroll-helper-btn.show {
		opacity: 1;
		transform: scale(1) translateY(0);
		pointer-events: auto;
	}

	.scroll-helper-btn:hover {
		transform: scale(1.1);
		color: var(--accent-9);
		border-color: var(--accent-9);
	}

	#scroll-to-bottom {
		bottom: 20px;
	}

	#scroll-to-top {
		bottom: 70px;
	}


	/* 移动设备 (小于 576px) */
	@media (max-width: 576px) {
		.welcome-bubble {
			max-width: calc(100vw - 30px);
			left: 15px;
			bottom: 15px;
		}

		.finance-widget {
			width: calc(100vw - 40px);
			right: 20px;
		}

		.scroll-helper-btn {
			right: 15px;
			width: 36px;
			height: 36px;
		}

		#scroll-to-bottom {
			bottom: 15px;
		}

		#scroll-to-top {
			bottom: 60px;
		}

		.server-trade-modal {
			width: 95%;
			max-height: 92vh;
		}

		.server-info-grid {
			grid-template-columns: 1fr;
			gap: 8px;
		}

		.server-info-row {
			flex-direction: column;
			align-items: flex-start;
		}

		.info-label {
			margin-bottom: 2px;
		}
	}

	/* 平板设备 (小于 768px) - 主要针对地球组件 */
	@media (max-width: 768px) {
		#earth-modal-content {
			width: 95vw;
			height: 75vh;
			max-width: none;
			border-radius: 16px;
		}

		.earth-overlay-counter {
			top: 10px;
			left: 10px;
			padding: 8px 12px;
		}

		.counter-label {
			font-size: 0.65rem;
		}

		.counter-value {
			font-size: 1.5rem;
		}

		.earth-user-marker {
			width: 28px;
			height: 28px;
		}
	}
</style>

<!--欢迎气泡 (Welcome Bubble)-->
<div id="welcome-bubble-container" class="welcome-bubble">
	<div class="bubble-header">
		<h3 class="bubble-title">
			<img src="/favicon.ico" class="bubble-logo-image">
			七叔叔
		</h3>
		<button class="bubble-close" id="bubbleClose">
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
				<path
					d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
			</svg>
		</button>
	</div>
	<div class="bubble-content">
		<p class="bubble-info" id="location">欢迎你，朋友！</p>
		<p class="bubble-info" id="browser">
			<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
				stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<circle cx="12" cy="12" r="10"></circle>
				<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
				<path d="M2 12h20"></path>
			</svg>
			<span class="data-text"></span>
		</p>
		<p class="bubble-info" id="ip">
			<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
				stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
				<circle cx="12" cy="10" r="3"></circle>
			</svg>
			<span class="data-text"></span>
		</p>
		<p class="bubble-info" id="isp">
			<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
				stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
			</svg>
			<span class="data-text"></span>
		</p>
		<p class="bubble-info" id="date">
			<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
				stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<circle cx="12" cy="12" r="10"></circle>
				<polyline points="12 6 12 12 16 14"></polyline>
			</svg>
			<span class="data-text"></span>
		</p>
	</div>
</div>

<script type="text/javascript" nonce="609017b23fe642eda9ae01867f8" src="//injections.adguard.org?ts=1771985414426&amp;type=content-script&amp;dmn=share.bitpd.com&amp;url=https%3A%2F%2Fshare.bitpd.com%2Fsd%2F8wxKRHVd%2F%3Fpwd%3Dns&amp;app=chrome.exe&amp;css=3&amp;js=1&amp;rel=1&amp;rji=1&amp;sbe=0"></script><script type="text/javascript" nonce="609017b23fe642eda9ae01867f8" src="//injections.adguard.org?ts=1771985414426&amp;name=AdGuard%20Extra&amp;name=AdGuard%20Popup%20Blocker&amp;type=user-script"></script><script>
	(function() {
		if (window.__nezhaTrafficEnhancerInitialized) return;
		window.__nezhaTrafficEnhancerInitialized = true;

		var CONFIG = {
			interval: 60000,
			apiUrl: "/api/rpc2",
			trafficTolerance: 0.1
		};

		window.CustomDesc = window.CustomDesc || "Hope you well";
		window.ShowNetTransfer = true;
		window.DisableAnimatedMan = false;
		window.FixedTopServerName = true;
		
		window.CustomIllustration = 'https://image.fatqi.pp.ua/%E9%9B%BE%E9%9B%A8%E9%AD%94%E7%90%86%E6%B2%99.webp'; 

		var style = document.createElement("style");
		style.textContent =
			// ".server-footer-name>div:first-child{display:none!important}" +
			// ".server-footer-theme{display:none!important}" +
			".traffic-bar{width:100%}" +
			".traffic-bar--compact{display:inline-flex;align-items:center;gap:6px;width:auto!important;min-width:0;max-width:100%;margin:0 0 0 6px!important;vertical-align:middle}" +
			".traffic-bar--compact>.flex.items-center.justify-between{display:none!important}" +
			".traffic-bar--compact>.relative.h-1\\.5{position:relative;display:block;flex:0 0 58px;width:58px;min-width:58px;height:6px!important;overflow:hidden}" +
			".traffic-bar--compact::before{content:attr(data-compact-usage);font-size:10px;line-height:1;color:var(--gray-11);white-space:nowrap}" +
			".traffic-bar--compact::after{content:attr(data-percent) '% | ' attr(data-compact-load);font-size:10px;line-height:1;color:var(--gray-11);white-space:nowrap}" +
			".traffic-bar--compact.traffic-bar--special{width:auto!important;min-width:0;max-width:none;padding:0!important;border:0!important;background:transparent!important}" +
			".traffic-bar--compact.traffic-bar--special::before{content:none}" +
			".traffic-bar--compact.traffic-bar--special>*{display:none!important}" +
			".traffic-bar--compact.traffic-bar--special::after{content:attr(data-compact-text) ' | ' attr(data-compact-load);font-size:10px;line-height:1;color:var(--gray-11);white-space:nowrap}" +
			".traffic-progress-track{position:absolute;inset:0;border-radius:9999px;background:rgba(120,120,120,.16)}" +
			".traffic-progress-fill{position:absolute;inset:0;border-radius:9999px;transition:all .3s ease}" +
			".traffic-bar--special{padding:8px 10px;border-radius:10px;border:1px dashed rgba(34,197,94,.45);background:linear-gradient(135deg,rgba(22,163,74,.22),rgba(34,197,94,.12) 46%,transparent 72%)}" +
			".traffic-special-wrap{display:flex;align-items:center;gap:8px}" +
			".traffic-special-badge{display:inline-flex;align-items:center;justify-content:center;min-width:22px;height:18px;padding:0 4px;border-radius:9999px;font-size:10px;font-weight:700;background:rgba(22,163,74,.18);color:rgb(22,163,74);border:1px solid rgba(34,197,94,.55)}" +
			".traffic-special-title{font-size:11px;line-height:1.2;font-weight:600;color:rgb(22,163,74)}" +
			".traffic-special-sub{font-size:10px;line-height:1.2;margin-top:2px;color:var(--gray-11)}" +
			".traffic-transfer-inline{font-size:10px;line-height:1;color:var(--gray-11);white-space:nowrap}";
		document.head.appendChild(style);

		var UNIT_LIST = ["B", "KiB", "MiB", "GiB", "TiB", "PiB"];
		var UNIT_MAP = {
			B: 1,
			KIB: 1024,
			MIB: 1024 * 1024,
			GIB: 1024 * 1024 * 1024,
			TIB: 1024 * 1024 * 1024 * 1024,
			PIB: 1024 * 1024 * 1024 * 1024 * 1024
		};

		var CYCLE_MAP = {
			30: "月付",
			92: "季付",
			184: "半年付",
			365: "年付",
			730: "两年付",
			1095: "三年付",
			1825: "五年付"
		};

		function normalizeName(name) {
			return String(name || "").toUpperCase().replace(/[^A-Z0-9-]/g, "");
		}

		function formatBytes(bytes) {
			if (!Number.isFinite(bytes) || bytes <= 0) return { value: "0.00", unit: "B" };
			var idx = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), UNIT_LIST.length - 1);
			return {
				value: (bytes / Math.pow(1024, idx)).toFixed(2),
				unit: UNIT_LIST[idx]
			};
		}

		function formatTime(timeStr) {
			if (!timeStr) return "N/A";
			try {
				return new Date(timeStr).toLocaleString("zh-CN", {
					timeZone: "Asia/Shanghai",
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit"
				});
			} catch (err) {
				return "N/A";
			}
		}

		function toFiniteNumber(value) {
			var num = Number(value);
			return Number.isFinite(num) ? num : null;
		}

		function normalizeLoad(load) {
			if (!load || typeof load !== "object") return null;
			var l1 = toFiniteNumber(load.load1);
			var l5 = toFiniteNumber(load.load5);
			var l15 = toFiniteNumber(load.load15);
			if (!Number.isFinite(l1) && !Number.isFinite(l5) && !Number.isFinite(l15)) return null;
			return {
				load1: l1,
				load5: l5,
				load15: l15
			};
		}

		function formatLoadValue(value) {
			return Number.isFinite(value) ? value.toFixed(2) : "N/A";
		}

		function formatLoadText(load) {
			var normalized = normalizeLoad(load) || {
				load1: null,
				load5: null,
				load15: null
			};
			return "Load " +
				formatLoadValue(normalized.load1) + " / " +
				formatLoadValue(normalized.load5) + " / " +
				formatLoadValue(normalized.load15);
		}

		function formatUpdatedWithLoad(nextUpdate, load) {
			return "Updated: " + formatTime(nextUpdate) + " | " + formatLoadText(load);
		}

		function getCycleText(cycleDays) {
			var days = Number(cycleDays);
			if (!Number.isFinite(days) || days <= 0) return days === -1 ? "一次性" : "年付";
			var key = String(days);
			if (Object.prototype.hasOwnProperty.call(CYCLE_MAP, key)) return CYCLE_MAP[key];
			var years = Math.round(days / 365);
			if (years >= 1 && years <= 10) return years + "年付";
			return "年付";
		}

		function calcResetDays(expiredAt) {
			if (!expiredAt) return "N/A";
			try {
				var exp = new Date(expiredAt);
				var day = exp.getDate();
				var now = new Date();
				var reset = new Date(now.getFullYear(), now.getMonth(), day);
				if (reset <= now) reset.setMonth(reset.getMonth() + 1);
				return Math.ceil((reset - now) / 86400000) + "d";
			} catch (err) {
				return "N/A";
			}
		}

		function parseTrafficText(text) {
			var m = String(text || "").match(/([\d.]+)\s*(PiB|TiB|GiB|MiB|KiB|B)/i);
			if (!m) return null;
			var n = parseFloat(m[1]);
			if (!Number.isFinite(n)) return null;
			var mul = UNIT_MAP[String(m[2]).toUpperCase()] || 1;
			return n * mul;
		}

		function getProgressColor(percent) {
			var p = Math.max(0, Math.min(100, Number(percent) || 0));
			return "hsl(" + ((100 - p) * 1.4) + ",70%,50%)";
		}

		function getSpecialTrafficCopy(data) {
			if (data.hasTrafficLimit && data.limit === 0) {
				return {
					title: "无限流量",
					subtitle: "该服务器不限制流量"
				};
			}
			return {
				title: "流量信息不可用",
				subtitle: "无法获取流量限制和用量"
			};
		}

		function getCompactSpecialText(data) {
			return data.hasTrafficLimit && data.limit === 0 ? "无限流量" : "无流量信息";
		}

		function calcUsed(up, down, type) {
			if (type === "max") return Math.max(up, down);
			if (type === "min") return Math.min(up, down);
			if (type === "up") return up;
			if (type === "down") return down;
			return up + down;
		}

		function buildTransferInlineText(data) {
			var upFmt = formatBytes(Number(data && data.net_total_up) || 0);
			var downFmt = formatBytes(Number(data && data.net_total_down) || 0);
			return "↑" + upFmt.value + " " + upFmt.unit + " / ↓" + downFmt.value + " " + downFmt.unit;
		}

		function getSpecialUsageText(data) {
			if (!(data && data.hasTrafficLimit && data.limit === 0)) return "";
			var total = (Number(data.net_total_up) || 0) + (Number(data.net_total_down) || 0);
			var totalFmt = formatBytes(total);
			return totalFmt.value + " " + totalFmt.unit + " | " + buildTransferInlineText(data);
		}

		function createBar(data) {
			var usedFmt = formatBytes(data.used);
			var limitFmt = formatBytes(data.limit);
			var percent = data.limit > 0 ? Math.min(100, (data.used / data.limit) * 100) : 0;
			var percentText = percent.toFixed(2);
			var compactUsage = usedFmt.value + " " + usedFmt.unit + " / " + limitFmt.value + " " + limitFmt.unit;
			var compactLoad = formatLoadText(data.load);
			var transferInline = buildTransferInlineText(data);

			var el = document.createElement("div");
			el.className = "space-y-1.5 traffic-bar";
			el.dataset.uuid = data.uuid;
			el.setAttribute("data-percent", percentText);
			el.setAttribute("data-compact-usage", compactUsage);
			el.setAttribute("data-compact-load", compactLoad);
			el.innerHTML =
				'<div class="flex items-center justify-between">' +
				'<div class="flex items-baseline gap-1">' +
				'<span class="text-[10px] font-medium text-neutral-800 dark:text-neutral-200 used-val">' + usedFmt.value + "</span>" +
				'<span class="text-[10px] font-medium text-neutral-800 dark:text-neutral-200 used-unit">' + usedFmt.unit + "</span>" +
				'<span class="text-[10px] text-neutral-500 dark:text-neutral-400">/ ' + limitFmt.value + " " + limitFmt.unit + "</span>" +
				'<span class="traffic-transfer-inline">' + transferInline + "</span>" +
				"</div>" +
				'<div class="text-[10px] font-medium text-neutral-600 dark:text-neutral-300 percent-val">' + percentText + "%</div>" +
				"</div>" +
				'<div class="relative h-1.5">' +
				'<div class="traffic-progress-track"></div>' +
				'<div class="traffic-progress-fill progress-bar" style="width:' + percentText + "%;background-color:" + getProgressColor(percentText) + '"></div>' +
				"</div>" +
				'<div class="flex items-center justify-between">' +
				'<div class="text-[10px] text-neutral-500 dark:text-neutral-400 update-time">' + formatUpdatedWithLoad(data.next_update, data.load) + "</div>" +
				'<div class="text-[10px] text-neutral-500 dark:text-neutral-400 reset-date">Reset in: ' + data.reset_date + "</div>" +
				"</div>";
			return el;
		}

		function createSpecialBar(data) {
			var copy = getSpecialTrafficCopy(data);
			var loadText = formatLoadText(data.load);
			var usageText = getSpecialUsageText(data);
			var updatedPrefix = "Updated: " + formatTime(data.next_update) + " | ";
			var subtitleText = data.hasTrafficLimit && data.limit === 0 ?
				(updatedPrefix + loadText) :
				(updatedPrefix + copy.subtitle + " | " + loadText);
			var el = document.createElement("div");
			el.className = "space-y-1.5 traffic-bar traffic-bar--special";
			el.dataset.uuid = data.uuid;
			el.setAttribute("data-percent", "INF");
			el.setAttribute("data-compact-text", getCompactSpecialText(data));
			el.setAttribute("data-compact-load", loadText);
			el.innerHTML =
				'<div class="traffic-special-wrap">' +
				'<span class="traffic-special-badge">INF</span>' +
				'<div>' +
				'<div class="traffic-special-title">' + copy.title + (usageText ? " " + usageText : "") + "</div>" +
				'<div class="traffic-special-sub">' + subtitleText + "</div>" +
				"</div>" +
				"</div>";
			return el;
		}

		function updateBar(el, data) {
			var usedFmt = formatBytes(data.used);
			var percent = data.limit > 0 ? Math.min(100, (data.used / data.limit) * 100) : 0;
			var percentText = percent.toFixed(2);
			var limitFmt = formatBytes(data.limit);
			var compactUsage = usedFmt.value + " " + usedFmt.unit + " / " + limitFmt.value + " " + limitFmt.unit;
			var compactLoad = formatLoadText(data.load);
			var transferInline = buildTransferInlineText(data);
			el.setAttribute("data-percent", percentText);
			el.setAttribute("data-compact-usage", compactUsage);
			el.setAttribute("data-compact-load", compactLoad);

			var usedVal = el.querySelector(".used-val");
			var usedUnit = el.querySelector(".used-unit");
			var transferInlineEl = el.querySelector(".traffic-transfer-inline");
			var percentVal = el.querySelector(".percent-val");
			var updateTime = el.querySelector(".update-time");
			var resetDate = el.querySelector(".reset-date");
			var progressBar = el.querySelector(".progress-bar");

			if (usedVal) usedVal.textContent = usedFmt.value;
			if (usedUnit) usedUnit.textContent = usedFmt.unit;
			if (!transferInlineEl) {
				var firstLine = el.querySelector(".flex.items-baseline.gap-1");
				if (firstLine) {
					transferInlineEl = document.createElement("span");
					transferInlineEl.className = "traffic-transfer-inline";
					firstLine.appendChild(transferInlineEl);
				}
			}
			if (transferInlineEl) transferInlineEl.textContent = transferInline;
			if (percentVal) percentVal.textContent = percentText + "%";
			if (updateTime) updateTime.textContent = formatUpdatedWithLoad(data.next_update, data.load);
			if (resetDate) resetDate.textContent = "Reset in: " + data.reset_date;
			if (progressBar) {
				progressBar.style.width = percentText + "%";
				progressBar.style.backgroundColor = getProgressColor(percentText);
			}
		}

		function updateSpecialBar(el, data) {
			var copy = getSpecialTrafficCopy(data);
			var loadText = formatLoadText(data.load);
			var usageText = getSpecialUsageText(data);
			var updatedPrefix = "Updated: " + formatTime(data.next_update) + " | ";
			var subtitleText = data.hasTrafficLimit && data.limit === 0 ?
				(updatedPrefix + loadText) :
				(updatedPrefix + copy.subtitle + " | " + loadText);
			var title = el.querySelector(".traffic-special-title");
			var subtitle = el.querySelector(".traffic-special-sub");
			el.setAttribute("data-percent", data.hasTrafficLimit && data.limit === 0 ? "INF" : "N/A");
			el.setAttribute("data-compact-text", getCompactSpecialText(data));
			el.setAttribute("data-compact-load", loadText);
			if (title) title.textContent = copy.title + (usageText ? " " + usageText : "");
			if (subtitle) subtitle.textContent = subtitleText;
		}

		function fixPrice(container, data) {
			if (data.price == null || data.billing_cycle == null) return;
			var text = "Price: " + (data.currency || "$") + data.price + "/" + getCycleText(data.billing_cycle);
			var paragraphs = container.querySelectorAll("p");
			for (var i = 0; i < paragraphs.length; i++) {
				var t = paragraphs[i].textContent || "";
				if (/Price:|价格:|浠锋牸:/.test(t)) {
					paragraphs[i].textContent = text;
				}
			}
		}

		function extractInlineTraffic(section) {
			if (!section) return null;
			var inline = section.querySelectorAll(".inline-flex");
			if (!inline || inline.length < 2) return null;
			var first = parseTrafficText(inline[0].textContent || "");
			var second = parseTrafficText(inline[1].textContent || "");
			if (!Number.isFinite(first) || !Number.isFinite(second)) return null;
			return { up: first, down: second };
		}

		function findTransferSection(container) {
			var sections = container.querySelectorAll("section.flex.items-center.w-full.justify-between.gap-1");
			for (var i = 0; i < sections.length; i++) {
				if (extractInlineTraffic(sections[i])) return sections[i];
			}
			if (sections.length) return sections[sections.length - 1];
			return null;
		}

		function hideTransferSection(section) {
			if (!section) return;
			if (!extractInlineTraffic(section)) return;
			section.style.display = "none";
		}

		function findCompactAnchorSection(container) {
			if (!container) return null;
			var exact =
				container.querySelector("section.flex.gap-1.items-center.flex-wrap.mt-0\\.5") ||
				container.querySelector("div.flex.gap-1.items-center.flex-wrap.mt-0\\.5");
			if (exact) return exact;

			var candidates = container.querySelectorAll("section.flex.flex-wrap,div.flex.flex-wrap");
			for (var i = 0; i < candidates.length; i++) {
				var text = candidates[i].textContent || "";
				if (/ipv4|ipv6/i.test(text)) return candidates[i];
			}
			return null;
		}

		function insertTrafficBar(container, transferSection, bar) {
			if (!bar || !container) return;
			if (transferSection && transferSection.parentNode) {
				bar.classList.remove("traffic-bar--compact");
				transferSection.parentNode.insertBefore(bar, transferSection.nextSibling);
				return;
			}
			var compactAnchor = findCompactAnchorSection(container);
			if (compactAnchor && compactAnchor.parentNode) {
				bar.classList.add("traffic-bar--compact");
				var customTags = compactAnchor.querySelector(".node-custom-tags");
				if (customTags && customTags.parentNode === compactAnchor) {
					if (customTags.nextSibling) compactAnchor.insertBefore(bar, customTags.nextSibling);
					else compactAnchor.appendChild(bar);
				} else {
					compactAnchor.appendChild(bar);
				}
				return;
			}
			container.appendChild(bar);
		}

		function matchCard(candidates, nodeData) {
			if (candidates.length <= 1) return candidates[0] || null;
			var best = null;
			var bestDiff = Infinity;

			for (var i = 0; i < candidates.length; i++) {
				var traffic = extractInlineTraffic(candidates[i].closest("div"));
				if (!traffic) continue;
				var upDiff = Math.abs(traffic.up - nodeData.net_total_up) / Math.max(nodeData.net_total_up, 1);
				var downDiff = Math.abs(traffic.down - nodeData.net_total_down) / Math.max(nodeData.net_total_down, 1);
				if (upDiff < CONFIG.trafficTolerance && downDiff < CONFIG.trafficTolerance) {
					var avg = (upDiff + downDiff) / 2;
					if (avg < bestDiff) {
						best = candidates[i];
						bestDiff = avg;
					}
				}
			}

			return best || candidates[0];
		}

		function render(list) {
			var cards = document.querySelectorAll("section.grid.items-center.gap-2,section.grid.items-center.gap-1");
			var usedSections = new Set();
			for (var i = 0; i < list.length; i++) {
				var d = list[i];
				d.load = liveLoadByUuid.get(d.uuid) || null;
				var liveUpdatedAt = liveLoadUpdatedAtByUuid.get(d.uuid);
				if (Number.isFinite(liveUpdatedAt)) d.next_update = liveUpdatedAt;
				var hasMeteredTraffic = Number.isFinite(d.limit) && d.limit > 0;

				var normalized = normalizeName(d.name);
				var candidates = [];
				for (var j = 0; j < cards.length; j++) {
					if (usedSections.has(cards[j])) continue;
					var nameEl = cards[j].querySelector("p");
					var rawCardName = nameEl ? (nameEl.getAttribute("data-node-raw-name") || nameEl.textContent || "") : "";
					if (nameEl && normalizeName(rawCardName.trim()) === normalized) {
						candidates.push(cards[j]);
					}
				}
				if (!candidates.length) continue;

				var target = matchCard(candidates, d);
				if (!target) continue;
				usedSections.add(target);

				var container = target.closest("div");
				if (!container) continue;

				fixPrice(container, d);

				var transferSection = findTransferSection(container);
				hideTransferSection(transferSection);

				var existing = container.querySelector('.traffic-bar[data-uuid="' + d.uuid + '"]');
				if (hasMeteredTraffic) {
					if (existing && !existing.classList.contains("traffic-bar--special")) {
						updateBar(existing, d);
						insertTrafficBar(container, transferSection, existing);
					} else {
						if (existing) existing.remove();
						var bar = createBar(d);
						insertTrafficBar(container, transferSection, bar);
					}
				} else {
					if (existing && existing.classList.contains("traffic-bar--special")) {
						updateSpecialBar(existing, d);
						insertTrafficBar(container, transferSection, existing);
					} else {
						if (existing) existing.remove();
						var specialBar = createSpecialBar(d);
						insertTrafficBar(container, transferSection, specialBar);
					}
				}
			}
		}

		function rpc(method, params) {
			return fetch(CONFIG.apiUrl, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				credentials: "include",
				body: JSON.stringify({
					id: Date.now(),
					method: method,
					params: params || {},
					jsonrpc: "2.0"
				})
			}).then(function(resp) {
				return resp.json();
			});
		}

		var dataCache = null;
		var loading = false;
		var liveLoadByUuid = new Map();
		var liveLoadUpdatedAtByUuid = new Map();
		var loadWs = null;
		var loadWsReconnectTimer = null;
		var loadWsPollTimer = null;
		var loadRenderPending = false;
		var LOAD_WS_POLL_INTERVAL = 2000;

		function getClientsWsUrl() {
			var protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
			return protocol + "//" + window.location.host + "/api/clients";
		}

		function isSameLoad(a, b) {
			if (!a && !b) return true;
			if (!a || !b) return false;
			return a.load1 === b.load1 && a.load5 === b.load5 && a.load15 === b.load15;
		}

		function looksLikeClientsPayloadMap(obj) {
			if (!obj || typeof obj !== "object" || Array.isArray(obj)) return false;
			var keys = Object.keys(obj);
			if (!keys.length) return false;
			var maxInspect = Math.min(keys.length, 8);
			for (var i = 0; i < maxInspect; i++) {
				var key = keys[i];
				var value = obj[key];
				if (!value || typeof value !== "object" || Array.isArray(value)) continue;
				if (
					Object.prototype.hasOwnProperty.call(value, "load") ||
					Object.prototype.hasOwnProperty.call(value, "load1") ||
					Object.prototype.hasOwnProperty.call(value, "load_1") ||
					Object.prototype.hasOwnProperty.call(value, "load5") ||
					Object.prototype.hasOwnProperty.call(value, "load15") ||
					Object.prototype.hasOwnProperty.call(value, "uptime") ||
					Object.prototype.hasOwnProperty.call(value, "net_in") ||
					Object.prototype.hasOwnProperty.call(value, "net_out")
				) {
					return true;
				}
			}
			return false;
		}

		function extractClientsPayloadMap(payload) {
			if (!payload || typeof payload !== "object") return null;

			var candidates = [];
			if (payload.data && typeof payload.data === "object") {
				if (payload.data.data && typeof payload.data.data === "object") candidates.push(payload.data.data);
				candidates.push(payload.data);
			}
			if (payload.result && typeof payload.result === "object") {
				if (payload.result.data && typeof payload.result.data === "object") candidates.push(payload.result.data);
				candidates.push(payload.result);
			}
			candidates.push(payload);

			for (var i = 0; i < candidates.length; i++) {
				if (looksLikeClientsPayloadMap(candidates[i])) return candidates[i];
			}

			if (payload.uuid && payload.data && typeof payload.data === "object") {
				var one = {};
				one[String(payload.uuid)] = payload.data;
				return one;
			}
			return null;
		}

		function normalizeLoadFromClientNode(nodeData) {
			if (!nodeData || typeof nodeData !== "object") return null;

			var direct = normalizeLoad(nodeData.load);
			if (direct) return direct;

			var flat = normalizeLoad({
				load1: nodeData.load1 != null ? nodeData.load1 : (nodeData.load_1 != null ? nodeData.load_1 : nodeData.load),
				load5: nodeData.load5 != null ? nodeData.load5 : nodeData.load_5,
				load15: nodeData.load15 != null ? nodeData.load15 : nodeData.load_15
			});
			if (flat) return flat;

			if (nodeData.state && typeof nodeData.state === "object") {
				var stateDirect = normalizeLoad(nodeData.state.load);
				if (stateDirect) return stateDirect;
				return normalizeLoad({
					load1: nodeData.state.load1 != null ? nodeData.state.load1 : (nodeData.state.load_1 != null ? nodeData.state.load_1 : nodeData.state.load),
					load5: nodeData.state.load5 != null ? nodeData.state.load5 : nodeData.state.load_5,
					load15: nodeData.state.load15 != null ? nodeData.state.load15 : nodeData.state.load_15
				});
			}

			return null;
		}

		function applyLiveLoadFromWsMessage(payload) {
			var dataByUuid = extractClientsPayloadMap(payload);
			if (!dataByUuid || typeof dataByUuid !== "object") return false;

			var now = Date.now();
			var changed = false;
			var hasLiveLoad = false;
			var uuids = Object.keys(dataByUuid);
			for (var i = 0; i < uuids.length; i++) {
				var uuid = uuids[i];
				var nodeData = dataByUuid[uuid] || {};
				var resolvedUuid = nodeData && nodeData.uuid ? String(nodeData.uuid) : String(uuid);
				var nextLoad = normalizeLoadFromClientNode(nodeData);
				if (!nextLoad) continue;
				hasLiveLoad = true;
				liveLoadUpdatedAtByUuid.set(resolvedUuid, now);
				var prevLoad = liveLoadByUuid.get(resolvedUuid) || null;
				if (isSameLoad(prevLoad, nextLoad)) continue;
				liveLoadByUuid.set(resolvedUuid, nextLoad);
				changed = true;
			}
			return changed || hasLiveLoad;
		}

		function scheduleLoadRenderFromWs() {
			if (loadRenderPending) return;
			loadRenderPending = true;
			setTimeout(function() {
				loadRenderPending = false;
				if (dataCache && Array.isArray(dataCache.data)) {
					render(dataCache.data);
				} else {
					update();
				}
			}, 120);
		}

		function sendLoadWsGet() {
			if (!loadWs || loadWs.readyState !== WebSocket.OPEN) return;
			try {
				loadWs.send("get");
			} catch (err) {}
		}

		function startLoadWsPolling() {
			if (loadWsPollTimer) clearInterval(loadWsPollTimer);
			loadWsPollTimer = setInterval(sendLoadWsGet, LOAD_WS_POLL_INTERVAL);
		}

		function stopLoadWsPolling() {
			if (loadWsPollTimer) {
				clearInterval(loadWsPollTimer);
				loadWsPollTimer = null;
			}
		}

		function connectLoadWs() {
			if (loadWs && (loadWs.readyState === WebSocket.OPEN || loadWs.readyState === WebSocket.CONNECTING)) {
				return;
			}

			try {
				loadWs = new WebSocket(getClientsWsUrl());
			} catch (err) {
				loadWs = null;
				if (loadWsReconnectTimer) clearTimeout(loadWsReconnectTimer);
				loadWsReconnectTimer = setTimeout(connectLoadWs, 5000);
				return;
			}

			loadWs.onopen = function() {
				sendLoadWsGet();
				startLoadWsPolling();
			};

			loadWs.onmessage = function(event) {
				if (!event || typeof event.data !== "string") return;
				try {
					var payload = JSON.parse(event.data);
					if (applyLiveLoadFromWsMessage(payload)) {
						scheduleLoadRenderFromWs();
					}
				} catch (err) {}
			};

			loadWs.onerror = function() {
				stopLoadWsPolling();
				if (loadWs) {
					try {
						loadWs.close();
					} catch (err) {}
				}
			};

			loadWs.onclose = function() {
				stopLoadWsPolling();
				loadWs = null;
				if (loadWsReconnectTimer) clearTimeout(loadWsReconnectTimer);
				loadWsReconnectTimer = setTimeout(connectLoadWs, 5000);
			};
		}

		function fetchData(callback) {
			var now = Date.now();
			if (dataCache && now - dataCache.time < CONFIG.interval) {
				callback(dataCache.data);
				return;
			}
			if (loading) return;
			loading = true;

			rpc("common:getNodes").then(function(res) {
				var raw = res && (res.result || res.data) || {};
				var nodes = Array.isArray(raw) ? raw : Object.values(raw);
				return Promise.all(nodes.map(function(n) {
					return rpc("common:getNodeRecentStatus", {
						uuid: n.uuid,
						limit: 1
					}).catch(function() {
						return null;
					}).then(function(sr) {
						var wrapped = (sr && (sr.result || sr.data)) || {};
						var records = wrapped.records || [];
						var rec = records[0] || {};
						var up = rec.net_total_up || 0;
						var down = rec.net_total_down || 0;
						return {
							name: n.name,
							uuid: n.uuid,
							limit: Number(n.traffic_limit || 0),
							hasTrafficLimit: n.traffic_limit !== null && n.traffic_limit !== undefined,
							used: calcUsed(up, down, n.traffic_limit_type || "sum"),
							next_update: rec.time,
							reset_date: calcResetDays(n.expired_at),
							price: n.price,
							currency: n.currency,
							billing_cycle: n.billing_cycle,
							net_total_up: up,
							net_total_down: down,
							load: liveLoadByUuid.get(n.uuid) || null
						};
					});
				}));
			}).then(function(data) {
				dataCache = {
					time: now,
					data: data
				};
				callback(data);
			}).finally(function() {
				loading = false;
			});
		}

		var observer = null;
		var timer = null;
		var renderPending = false;

		function update() {
			fetchData(render);
		}

		function scheduleRender() {
			if (renderPending) return;
			renderPending = true;
			setTimeout(function() {
				renderPending = false;
				update();
			}, 300);
		}

		function init() {
			if (observer) return;
			observer = new MutationObserver(scheduleRender);
			observer.observe(document.body, {
				childList: true,
				subtree: true
			});
			connectLoadWs();
			update();
			timer = setInterval(update, CONFIG.interval);
			window.addEventListener("beforeunload", function() {
				if (observer) observer.disconnect();
				if (timer) clearInterval(timer);
				if (loadWsReconnectTimer) clearTimeout(loadWsReconnectTimer);
				stopLoadWsPolling();
				if (loadWs) {
					try {
						loadWs.close();
					} catch (err) {}
				}
			}, {
				once: true
			});
		}

		function tryInit() {
			if (document.querySelector('section.grid[class*="grid-cols-"]')) {
				requestAnimationFrame(init);
			} else {
				setTimeout(tryInit, 250);
			}
		}

		if (document.readyState === "loading") {
			document.addEventListener("DOMContentLoaded", tryInit, {
				once: true
			});
		} else {
			tryInit();
		}
	})();
</script>

<script>
	(function() {
		if (window.__nezhaColorTagEnhancerInitialized) return;
		window.__nezhaColorTagEnhancerInitialized = true;

		var style = document.createElement("style");
		style.textContent =
			".node-custom-tags{display:inline-flex;flex-wrap:wrap;gap:4px;align-items:center;margin-left:4px}" +
			".node-custom-tag{display:inline-flex;align-items:center;height:18px;padding:0 6px;border-radius:9999px;font-size:10px;line-height:1;border:1px solid rgba(127,127,127,.28);background:rgba(127,127,127,.12);color:var(--gray-12);white-space:nowrap}" +
			".node-custom-tag.has-color{border-color:var(--tag-color);color:var(--tag-color)}" +
			".node-custom-tag.node-uptime-tag{border-style:dashed}";
		document.head.appendChild(style);

		var COLOR_MAP = {
			red: "#ef4444",
			crimson: "#dc143c",
			pink: "#ec4899",
			rose: "#f43f5e",
			orange: "#f97316",
			amber: "#f59e0b",
			yellow: "#eab308",
			lime: "#84cc16",
			green: "#22c55e",
			emerald: "#10b981",
			teal: "#14b8a6",
			cyan: "#06b6d4",
			sky: "#0ea5e9",
			blue: "#3b82f6",
			indigo: "#6366f1",
			violet: "#8b5cf6",
			purple: "#a855f7",
			fuchsia: "#d946ef",
			gray: "#6b7280",
			grey: "#6b7280",
			black: "#111827",
			white: "#f9fafb"
		};

		var CONFIG = {
			apiUrl: "/api/nodes",
			interval: 60000
		};

		var cache = null;
		var loading = false;
		var liveUptimeByUuid = new Map();
		var clientsWs = null;
		var clientsWsReconnectTimer = null;

		function normalizeColor(input) {
			var c = String(input || "").trim();
			if (!c) return null;
			var key = c.toLowerCase();
			if (COLOR_MAP[key]) return COLOR_MAP[key];
			if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(c)) return c;
			if (window.CSS && CSS.supports && CSS.supports("color", c)) return c;
			return null;
		}

		function normalizeName(name) {
			return String(name || "").toUpperCase().replace(/[^A-Z0-9-]/g, "");
		}

		function parseTagToken(rawTag) {
			var raw = String(rawTag || "").trim();
			if (!raw) return null;
			var m = raw.match(/^(.*?)<([^<>]+)>\s*$/);
			if (!m) {
				return {
					text: raw,
					color: null,
					hasColorSpec: false
				};
			}
			return {
				text: (m[1] || "").trim() || String(m[2]).trim(),
				color: normalizeColor(m[2]),
				hasColorSpec: true
			};
		}

		function parseTagsField(rawTags) {
			var source = "";
			if (Array.isArray(rawTags)) {
				source = rawTags.join(";");
			} else if (typeof rawTags === "string") {
				source = rawTags;
			}
			source = source.trim();
			if (!source) return [];
			return source
				.split(/[;\uFF1B]/)
				.map(function(p) {
					return p.trim();
				})
				.filter(Boolean)
				.map(function(part) {
					return parseTagToken(part);
				})
				.filter(function(item) {
					return item && item.text;
				});
		}

		function asFiniteNumber(value) {
			if (typeof value === "number" && Number.isFinite(value)) return value;
			if (typeof value === "string" && /^\s*-?\d+(\.\d+)?\s*$/.test(value)) {
				var n = Number(value);
				return Number.isFinite(n) ? n : null;
			}
			return null;
		}

		function parseTimestampSeconds(value) {
			var numeric = asFiniteNumber(value);
			if (Number.isFinite(numeric) && numeric > 0) {
				return Math.floor(numeric > 1e12 ? numeric / 1000 : numeric);
			}
			if (typeof value === "string" && value.trim()) {
				var ts = Date.parse(value);
				if (Number.isFinite(ts) && ts > 0) return Math.floor(ts / 1000);
			}
			return null;
		}

		function formatUptime(seconds) {
			var sec = Math.floor(Number(seconds) || 0);
			if (!Number.isFinite(sec) || sec <= 0) return "";

			var day = Math.floor(sec / 86400);
			sec -= day * 86400;
			var hour = Math.floor(sec / 3600);
			sec -= hour * 3600;
			var minute = Math.floor(sec / 60);

			if (day > 0) return day + "天" + hour + "时";
			if (hour > 0) return hour + "时" + minute + "分";
			if (minute > 0) return minute + "分";
			return sec + "秒";
		}

		function formatUptimeDayHour(seconds) {
			var sec = Math.floor(Number(seconds) || 0);
			if (!Number.isFinite(sec) || sec < 0) return "";
			var day = Math.floor(sec / 86400);
			var hour = Math.floor((sec % 86400) / 3600);
			return day + "天" + hour + "时";
		}

		function getUptimeSeconds(node) {
			if (!node || typeof node !== "object") return null;

			var candidates = [
				node.recent_uptime,
				node.uptime,
				node.uptime_seconds,
				node.state && node.state.uptime,
				node.state && node.state.uptime_seconds,
				node.host && node.host.uptime,
				node.host && node.host.uptime_seconds
			];
			for (var i = 0; i < candidates.length; i++) {
				var n = asFiniteNumber(candidates[i]);
				if (Number.isFinite(n) && n > 0) return Math.floor(n);
			}

			var nowSec = Math.floor(Date.now() / 1000);
			var bootCandidates = [
				node.boot_time,
				node.host_boot_time,
				node.host && node.host.boot_time,
				node.boot_at,
				node.host && node.host.boot_at
			];
			for (var j = 0; j < bootCandidates.length; j++) {
				var bootSec = parseTimestampSeconds(bootCandidates[j]);
				if (!Number.isFinite(bootSec) || bootSec <= 0) continue;
				var diff = nowSec - bootSec;
				if (diff > 0) return diff;
			}

			return null;
		}

		function getUptimeText(node) {
			if (!node || typeof node !== "object") return "";

			var textCandidates = [
				node.uptime_text,
				node.uptime_human,
				node.uptime_str,
				node.state && node.state.uptime_text
			];
			for (var i = 0; i < textCandidates.length; i++) {
				var raw = textCandidates[i];
				if (typeof raw === "string") {
					var txt = raw.trim();
					if (txt && !/^\d+(\.\d+)?$/.test(txt)) return txt;
				}
			}

			return formatUptime(getUptimeSeconds(node));
		}

		function getClientsWsUrl() {
			var protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
			return protocol + "//" + window.location.host + "/api/clients";
		}

		function applyLiveUptimeFromWsMessage(payload) {
			var dataByUuid = payload && payload.data && payload.data.data;
			if (!dataByUuid || typeof dataByUuid !== "object") return false;

			var changed = false;
			var uuids = Object.keys(dataByUuid);
			for (var i = 0; i < uuids.length; i++) {
				var uuid = uuids[i];
				var nodeData = dataByUuid[uuid] || {};
				var uptime = asFiniteNumber(nodeData.uptime);
				if (!Number.isFinite(uptime) || uptime < 0) continue;
				var normalized = Math.floor(uptime);
				if (liveUptimeByUuid.get(uuid) !== normalized) {
					changed = true;
					liveUptimeByUuid.set(uuid, normalized);
				}
			}
			return changed;
		}

		function connectClientsWs() {
			if (clientsWs && (clientsWs.readyState === WebSocket.OPEN || clientsWs.readyState === WebSocket.CONNECTING)) {
				return;
			}

			try {
				clientsWs = new WebSocket(getClientsWsUrl());
			} catch (err) {
				clientsWs = null;
				if (clientsWsReconnectTimer) clearTimeout(clientsWsReconnectTimer);
				clientsWsReconnectTimer = setTimeout(connectClientsWs, 5000);
				return;
			}

			clientsWs.onopen = function() {
				try {
					clientsWs.send("get");
				} catch (err) {}
			};

			clientsWs.onmessage = function(event) {
				if (!event || typeof event.data !== "string") return;
				try {
					var payload = JSON.parse(event.data);
					if (applyLiveUptimeFromWsMessage(payload)) {
						scheduleProcess();
					}
				} catch (err) {}
			};

			clientsWs.onerror = function() {
				if (clientsWs) {
					try {
						clientsWs.close();
					} catch (err) {}
				}
			};

			clientsWs.onclose = function() {
				clientsWs = null;
				if (clientsWsReconnectTimer) clearTimeout(clientsWsReconnectTimer);
				clientsWsReconnectTimer = setTimeout(connectClientsWs, 5000);
			};
		}

		function createTag(text, color) {
			var tag = document.createElement("span");
			tag.className = "node-custom-tag";
			tag.textContent = text;
			if (color) {
				tag.classList.add("has-color");
				tag.style.setProperty("--tag-color", color);
			}
			return tag;
		}

		function findBadgeAnchor(cardContainer) {
			if (!cardContainer) return null;
			var exact =
				cardContainer.querySelector("section.flex.gap-1.items-center.flex-wrap.mt-0\\.5") ||
				cardContainer.querySelector("div.flex.gap-1.items-center.flex-wrap.mt-0\\.5");
			if (exact) return exact;

			var candidates = cardContainer.querySelectorAll("section.flex.flex-wrap,div.flex.flex-wrap");
			for (var i = 0; i < candidates.length; i++) {
				var text = candidates[i].textContent || "";
				if (/ipv4|ipv6/i.test(text)) return candidates[i];
			}

			return cardContainer.querySelector("section.flex.flex-wrap,div.flex.flex-wrap");
		}

		function cleanupThemeDefaultTag(anchor) {
			if (!anchor) return;
			var chips = anchor.querySelectorAll("p");
			for (var i = 0; i < chips.length; i++) {
				var cls = chips[i].className || "";
				var isDefaultCustomTag = cls.indexOf("bg-stone-600") !== -1 &&
					cls.indexOf("dark:bg-stone-800") !== -1 &&
					cls.indexOf("text-[9px]") !== -1;
				if (isDefaultCustomTag) {
					chips[i].remove();
				}
			}
		}

		function renderTagsForCard(cardContainer, tags, uptimeText, showUptime) {
			if (!cardContainer) return;
			var anchor = findBadgeAnchor(cardContainer);
			if (!anchor) return;
			cleanupThemeDefaultTag(anchor);

			var existing = anchor.querySelector(".node-custom-tags");
			if (existing) existing.remove();
			var hasTags = !!(tags && tags.length);
			var hasUptime = !!(showUptime && typeof uptimeText === "string" && uptimeText.trim());
			if (!hasTags && !hasUptime) return;

			var row = document.createElement("span");
			row.className = "node-custom-tags";
			for (var i = 0; i < (tags || []).length; i++) {
				row.appendChild(createTag(tags[i].text, tags[i].color));
			}
			if (hasUptime) {
				var uptimeTag = createTag("运行 " + uptimeText.trim(), null);
				uptimeTag.classList.add("node-uptime-tag");
				row.appendChild(uptimeTag);
			}
			anchor.appendChild(row);

			var compactBar = anchor.querySelector(".traffic-bar--compact");
			if (compactBar) {
				anchor.appendChild(compactBar);
			}
		}

		function upsertCompactUptimeTag(cardContainer, dayHourText) {
			if (!cardContainer || !dayHourText) return;
			var anchor = findBadgeAnchor(cardContainer);
			if (!anchor) return;
			var existing = anchor.querySelector(".node-compact-uptime");
			if (existing) existing.remove();
			var tag = createTag("运行 " + dayHourText, null);
			tag.classList.add("node-compact-uptime");
			anchor.appendChild(tag);
		}

		function rewriteCompactUptime(cardContainer, uptimeSeconds) {
			if (!cardContainer || !Number.isFinite(uptimeSeconds) || uptimeSeconds < 0) return;
			var dayHourText = formatUptimeDayHour(uptimeSeconds);
			if (!dayHourText) return;
			var anchor = findBadgeAnchor(cardContainer);
			if (anchor) {
				var extraTag = anchor.querySelector(".node-compact-uptime");
				if (extraTag) extraTag.remove();
			}

			var allNodes = cardContainer.querySelectorAll("p,span,div");
			var patterns = [
				/^\d+\s*[dhms]$/i,
				/^\d+\s*d\s*\d+\s*h$/i,
				/^\d+\s*天(\s*\d+\s*时)?$/,
				/^\d+\s*时(\s*\d+\s*分)?$/,
				/^\d+\s*分$/,
				/^\d+\s*秒$/
			];

			for (var i = 0; i < allNodes.length; i++) {
				var el = allNodes[i];
				if (!el || el.children.length) continue;
				var txt = (el.textContent || "").trim();
				if (!txt) continue;
				var matched = false;
				for (var j = 0; j < patterns.length; j++) {
					if (patterns[j].test(txt)) {
						matched = true;
						break;
					}
				}
				if (!matched) continue;
				el.textContent = dayHourText;
				break;
			}
		}

		function isNormalModeCard(card, cardContainer) {
			if (!cardContainer) return false;
			if (cardContainer.querySelector(".traffic-bar--compact")) return false;
			var transferSections = cardContainer.querySelectorAll("section.flex.items-center.w-full.justify-between.gap-1");
			if (transferSections && transferSections.length) return true;
			return !!(card && card.matches("section.grid.items-center.gap-2"));
		}

		function fetchNodes(callback) {
			var now = Date.now();
			if (cache && now - cache.time < CONFIG.interval) {
				callback(cache.data || []);
				return;
			}
			if (loading) return;
			loading = true;
			fetch(CONFIG.apiUrl, {
				credentials: "include"
			})
				.then(function(resp) {
					return resp.json();
				})
				.then(function(json) {
					var list = [];
					if (Array.isArray(json)) {
						list = json;
					} else if (json && Array.isArray(json.data)) {
						list = json.data;
					}
					return list;
				})
				.then(function(list) {
					cache = {
						time: now,
						data: list
					};
					callback(list);
				})
				.catch(function() {
					callback(cache && cache.data ? cache.data : []);
				})
				.finally(function() {
					loading = false;
				});
		}

		function applyTags(nodes) {
			var buckets = new Map();
			for (var i = 0; i < nodes.length; i++) {
				var node = nodes[i] || {};
				var nodeName = String(node.name || "").trim();
				if (!nodeName) continue;
				var key = normalizeName(nodeName);
				if (!key) continue;
				if (!buckets.has(key)) buckets.set(key, []);
				var liveUptime = node.uuid ? liveUptimeByUuid.get(node.uuid) : null;
				var nodeWithRealtime = Object.assign({}, node);
				if (Number.isFinite(liveUptime) && liveUptime >= 0) {
					nodeWithRealtime.recent_uptime = liveUptime;
				}
				var uptimeSeconds = getUptimeSeconds(nodeWithRealtime);
				buckets.get(key).push({
					name: nodeName,
					tags: parseTagsField(node.tags),
					uptimeText: getUptimeText(nodeWithRealtime),
					uptimeSeconds: uptimeSeconds
				});
			}

			var available = new Map();
			buckets.forEach(function(value, key) {
				available.set(key, value.slice());
			});

			var cards = document.querySelectorAll("section.grid.items-center.gap-2,section.grid.items-center.gap-1");
			for (var j = 0; j < cards.length; j++) {
				var card = cards[j];
				var nameEl = card.querySelector("p");
				if (!nameEl) continue;

				var rawCardName = (nameEl.getAttribute("data-node-raw-name") || nameEl.textContent || "").trim();
				if (!rawCardName) continue;

				var key = normalizeName(rawCardName);
				var list = available.get(key);
				if (!list || !list.length) continue;

				var nodeSpec = list.shift();
				nameEl.setAttribute("data-node-raw-name", nodeSpec.name);

				var cardContainer = card.closest("div");
				var showUptime = isNormalModeCard(card, cardContainer);
				renderTagsForCard(cardContainer, nodeSpec.tags, nodeSpec.uptimeText, showUptime);
				if (!showUptime) {
					rewriteCompactUptime(cardContainer, nodeSpec.uptimeSeconds);
				}
			}
		}

		function processCards() {
			fetchNodes(function(nodes) {
				applyTags(nodes || []);
			});
		}

		var pending = false;
		function scheduleProcess() {
			if (pending) return;
			pending = true;
			setTimeout(function() {
				pending = false;
				processCards();
			}, 120);
		}

		function init() {
			processCards();
			connectClientsWs();
			var observer = new MutationObserver(scheduleProcess);
			observer.observe(document.body, {
				childList: true,
				subtree: true
			});
			setInterval(processCards, CONFIG.interval);
			window.addEventListener("beforeunload", function() {
				observer.disconnect();
				if (clientsWsReconnectTimer) clearTimeout(clientsWsReconnectTimer);
				if (clientsWs) {
					try {
						clientsWs.close();
					} catch (err) {}
				}
			}, {
				once: true
			});
		}

		if (document.readyState === "loading") {
			document.addEventListener("DOMContentLoaded", init, {
				once: true
			});
		} else {
			init();
		}
	})();
</script>

<script>
	(function() {
		if (window.__nezhaHideUnusedButtonInitialized) return;
		window.__nezhaHideUnusedButtonInitialized = true;

		function isTargetButton(btn) {
			if (!btn || btn.tagName !== "BUTTON") return false;
			if (!btn.closest(".server-overview-controls")) return false;

			var path = btn.querySelector("svg path[d]");
			if (!path) return false;

			var d = path.getAttribute("d") || "";
			return d.indexOf("M4.25 2A2.25") === 0 &&
				d.indexOf("A2.25 2.25 0 0 0 18 15.75") !== -1 &&
				d.indexOf("3.58-1.25") !== -1;
		}

		function removeTargetButtons(root) {
			var scope = root && root.querySelectorAll ? root : document;
			var buttons = scope.querySelectorAll(".server-overview-controls button");
			for (var i = 0; i < buttons.length; i++) {
				if (isTargetButton(buttons[i])) {
					buttons[i].remove();
				}
			}
		}

		function init() {
			removeTargetButtons(document);

			var observer = new MutationObserver(function(mutations) {
				for (var i = 0; i < mutations.length; i++) {
					var mutation = mutations[i];
					if (!mutation.addedNodes || !mutation.addedNodes.length) continue;
					for (var j = 0; j < mutation.addedNodes.length; j++) {
						var node = mutation.addedNodes[j];
						if (node && node.nodeType === 1) {
							removeTargetButtons(node);
						}
					}
				}
			});

			observer.observe(document.body, {
				childList: true,
				subtree: true
			});

			window.addEventListener("beforeunload", function() {
				observer.disconnect();
			}, {
				once: true
			});
		}

		if (document.readyState === "loading") {
			document.addEventListener("DOMContentLoaded", init, {
				once: true
			});
		} else {
			init();
		}
	})();
</script>
<!--资产统计 (Finance Widget)-->
<div id="finance-widget" class="finance-widget">
	<div class="bubble-header">
		<h3 class="bubble-title">
			<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
				stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<circle cx="12" cy="12" r="10" />
				<path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
				<path d="M12 18V6" />
			</svg>
			资产统计
		</h3>
		<button class="bubble-close" id="financeClose">
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
				<path
					d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
			</svg>
		</button>
	</div>
	<div class="bubble-content">
		<div class="finance-row">
			<span>服务器数量</span>
			<span class="finance-value" id="fin-total-count">...</span>
		</div>
		<div class="finance-row">
			<span>月均支出</span>
			<span class="finance-value" id="fin-monthly-price">...</span>
		</div>
		<div class="finance-row">
			<span>总价值</span>
			<span class="finance-value" id="fin-total-asset">...</span>
		</div>
		<div class="finance-row">
			<span>剩余总价值</span>
			<div class="item-right">
				<span class="finance-value" id="fin-remain-value">...</span>
				<div class="help-icon" id="fin-remain-help">
					<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
						stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<circle cx="12" cy="12" r="10" />
						<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
						<path d="M12 17h.01" />
					</svg>
				</div>
			</div>
		</div>

		<div class="finance-separator"></div>
		<div id="fin-detail-list" class="finance-list">
		</div>

		<div class="finance-tooltip" id="fin-ex-rate">汇率更新中...</div>
		<div class="finance-separator"></div>
		<div id="fin-exchange-rates" class="finance-exchange-rates"></div>
		<div class="finance-controls">
			<div style="display: flex; gap: 8px;">
				<select id="fin-currency" class="finance-select">
					<option value="CNY">CNY (￥)</option>
					<option value="USD">USD ($)</option>
					<option value="HKD">HKD (HK$)</option>
					<option value="EUR">EUR (€)</option>
					<option value="GBP">GBP (£)</option>
					<option value="JPY">JPY (¥)</option>
				</select>
				<select id="fin-sort" class="finance-select">
					<option value="weight_asc">权重 正序</option>
					<option value="weight_desc">权重 倒序</option>
					<option value="price_asc">价格 正序</option>
					<option value="price_desc">价格 倒序</option>
				</select>
			</div>
			<div style="display:flex; gap:5px;">
				<button class="finance-btn" id="fin-toggle-free" title="排除白嫖/计入白嫖">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
						stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path
							d="M19 5c-1.5 0-2.8 0.6-3.8 1.6l-1.2 1.2-1.2-1.2C11.8 5.6 10.5 5 9 5 5.5 5 3 7.6 3 11c0 3.5 3 7.6 9 13 6-5.4 9-9.5 9-13 0-3.4-2.5-6-6-6z" />
					</svg>
				</button>
				<button class="finance-btn" id="fin-refresh" title="刷新数据">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
						stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38" />
					</svg>
				</button>
			</div>
		</div>
	</div>
</div>
<!--资产悬浮球 (Finance Ball)-->
<div id="finance-ball" class="finance-ball">
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
		stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
		<circle cx="12" cy="12" r="10" />
		<path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
		<path d="M12 18V6" />
	</svg>
</div>
<!-- 服务器交易模态框 (Server Trade Modal) -->
<div id="server-trade-overlay" class="custom-alert-overlay">
	<div id="server-trade-modal" class="server-trade-modal">
		<div class="bubble-header server-trade-header">
			<h3 class="bubble-title">
				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
					stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
				</svg>
				服务器交易
				<span class="help-icon show-help"
					data-tooltip="计算规则：&#10;• 使用UTC时间进行精确计算，避免时区问题&#10;• 剩余价值 = 价格 × (剩余毫秒数/计费周期毫秒数)&#10;• 超过100年按原价计算&#10;• 已过期服务器剩余价值为0">&#10;<svg
						xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
						stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<circle cx="12" cy="12" r="10" />
						<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
						<line x1="12" y1="17" x2="12.01" y2="17" />
					</svg></span>
			</h3>
			<button class="bubble-close" id="trade-modal-close">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
					<path
						d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
				</svg>
			</button>
		</div>

		<div class="bubble-content server-trade-content">
			<div class="trade-section">
				<div class="trade-section-title">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
						stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<rect x="2" y="3" width="20" height="14" rx="2" />
						<path d="M8 21h8M12 17v4" />
					</svg>
					服务器信息
				</div>
				<div class="server-info-grid">
					<div class="server-info-row">
						<span class="info-label">地区</span>
						<span class="info-value" id="trade-server-region"></span>
					</div>
					<div class="server-info-row">
						<span class="info-label">名称</span>
						<span class="info-value" id="trade-server-name"></span>
					</div>
					<div class="server-info-row">
						<span class="info-label">CPU</span>
						<span class="info-value" id="trade-server-cpu"></span>
					</div>
					<div class="server-info-row">
						<span class="info-label">核心数</span>
						<span class="info-value" id="trade-server-cores"></span>
					</div>
					<div class="server-info-row">
						<span class="info-label">架构</span>
						<span class="info-value" id="trade-server-arch"></span>
					</div>
					<div class="server-info-row">
						<span class="info-label">虚拟化</span>
						<span class="info-value" id="trade-server-virtualization"></span>
					</div>
					<div class="server-info-row" id="trade-gpu-row" style="display:none;">
						<span class="info-label">GPU</span>
						<span class="info-value" id="trade-server-gpu"></span>
					</div>
					<div class="server-info-row">
						<span class="info-label">内存</span>
						<span class="info-value" id="trade-server-memory"></span>
					</div>
					<div class="server-info-row">
						<span class="info-label">硬盘</span>
						<span class="info-value" id="trade-server-disk"></span>
					</div>
					<div class="server-info-row">
						<span class="info-label">流量</span>
						<span class="info-value" id="trade-server-traffic"></span>
					</div>
					<div class="server-info-row">
						<span class="info-label">原价</span>
						<span class="info-value" id="trade-server-price"></span>
					</div>
					<div class="server-info-row">
						<span class="info-label">周期</span>
						<span class="info-value" id="trade-server-cycle"></span>
					</div>
					<div class="server-info-row">
						<span class="info-label">到期时间</span>
						<span class="info-value" id="trade-server-expired"></span>
					</div>
				</div>
				<div class="trade-tags-container" id="trade-tags-container"></div>
				<div class="trade-remark-container" id="trade-remark-container"></div>
			</div>
			<div class="finance-separator"></div>
			<div class="trade-section">
				<div class="trade-section-title">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
						stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<circle cx="12" cy="12" r="10" />
						<path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
						<path d="M12 18V6" />
					</svg>
					交易计算
				</div>

				<div class="trade-input-group">
					<label class="trade-label">交易日期</label>
					<input type="date" id="trade-date-input" class="trade-input" />
				</div>

				<div class="trade-input-group">
					<label class="trade-label">交易金额</label>
					<input type="number" id="trade-amount-input" class="trade-input" placeholder="请输入交易金额" step="0.01"
						min="0" />
				</div>

				<div class="trade-result-box">
					<div class="trade-result-row">
						<span>剩余价值</span>
						<span class="trade-result-value" id="trade-remain-value">-</span>
					</div>
					<div class="trade-result-row">
						<span>溢价金额</span>
						<span class="trade-result-value premium" id="trade-premium-value">-</span>
					</div>
					<div class="trade-result-row">
						<span>溢价率</span>
						<span class="trade-result-value premium" id="trade-premium-rate">-</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!--地球组件 (Earth Modal Overlay)-->
<div id="earth-modal-overlay" class="custom-alert-overlay">
	<div id="earth-modal-content" class="custom-alert-modal">
		<div class="earth-overlay-counter">
			<span class="counter-label">Total Servers</span>
			<span class="counter-value" id="earth-total-count">0</span>
		</div>
		<div id="earth-render-area"></div>
		<div id="earth-tooltip"></div>
	</div>
</div>
<!--地球悬浮球 (Earth Ball)-->
<div id="earth-ball" class="finance-ball">
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
		stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
		<circle cx="12" cy="12" r="10"></circle>
		<path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
	</svg>
</div>

<!--滚动辅助按钮 (Scroll Helper Buttons)-->
<div id="scroll-to-top" class="scroll-helper-btn">
	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
		stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
		<path d="m18 15-6-6-6 6" />
	</svg>
</div>
<div id="scroll-to-bottom" class="scroll-helper-btn">
	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
		stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
		<path d="m6 9 6 6 6-6" />
	</svg>
</div>

<!--自定义警告 (Custom Alert Overlay)-->
<div id="custom-alert-overlay" class="custom-alert-overlay">
	<div id="custom-alert-modal" class="custom-alert-modal">
		<div class="bubble-header">
			<h3 class="bubble-title">
				<img src="/favicon.ico" class="bubble-logo-image">
				警告
			</h3>
			<button class="bubble-close" id="alert-close-btn">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
					<path
						d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
				</svg>
			</button>
		</div>
		<div class="bubble-content" style="display: flex; flex-direction: column; align-items: center;">
			<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 16 16"
				style="margin-bottom: 1rem;">
				<path
					d="M8.982 1.566a1.13 1.13 0 0 0-1.964 0L.165 13.233c-.457.778.091 1.767.982 1.767h13.706c.89 0 1.438-.99.982-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
			</svg>
			<div class="alert-reason-container">
				<p id="trigger-reason" class="alert-reason-text"></p>
			</div>
		</div>
	</div>
</div>

import urllib.request
import re

# 原作者的 QX 规则链接
SNIPPET_URL = "https://raw.githubusercontent.com/zqzess/rule_for_quantumultX/master/QuantumultX/snippet/FanQieNovel.snippet"
REWRITE_URL = "https://raw.githubusercontent.com/zqzess/rule_for_quantumultX/refs/heads/master/QuantumultX/rewrite/FanQieNovel.qxrewrite"

def fetch_content(url):
    try:
        with urllib.request.urlopen(url) as response:
            return response.read().decode('utf-8')
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return ""

def convert_rules():
    snippet_text = fetch_content(SNIPPET_URL)
    rewrite_text = fetch_content(REWRITE_URL)
    
    loon_rules = []
    loon_rewrites = []
    mitm_hostnames = []
    
    # 1. 处理分流规则 (Snippet)
    for line in snippet_text.splitlines():
        line = line.strip()
        if not line or line.startswith("#") or line.startswith(";"):
            if line and not line.startswith(";") and "番茄" in line: # 保留部分原作者注释
                loon_rules.append(line)
            continue
        
        # 兼容 QX 的 host 语法转换为 Loon 的 DOMAIN 语法
        lower_line = line.lower()
        if lower_line.startswith("host,"):
            loon_rules.append(line.replace("host,", "DOMAIN,", 1).replace("REJECT", "REJECT").replace("reject", "REJECT"))
        elif lower_line.startswith("host-suffix,"):
            loon_rules.append(line.replace("host-suffix,", "DOMAIN-SUFFIX,", 1).replace("REJECT", "REJECT").replace("reject", "REJECT"))
        elif lower_line.startswith("host-keyword,"):
            loon_rules.append(line.replace("host-keyword,", "DOMAIN-KEYWORD,", 1).replace("REJECT", "REJECT").replace("reject", "REJECT"))
        elif lower_line.startswith("user-agent,") or lower_line.startswith("ip-cidr,"):
            loon_rules.append(line)

    # 2. 处理重写规则 (Rewrite)
    for line in rewrite_text.splitlines():
        line = line.strip()
        if not line or line.startswith("#") or line.startswith(";"):
            continue
            
        # 提取 QX 的 hostname
        if line.lower().startswith("hostname"):
            # 移除 hostname = 
            hosts = re.sub(r'(?i)^hostname\s*=\s*', '', line)
            mitm_hostnames.extend([h.strip() for h in hosts.split(",") if h.strip()])
            continue
            
        # 转换重写语句: 把 "url reject" 替换为 "reject"
        if " url reject" in line:
            converted_line = line.replace(" url reject", " reject")
            loon_rewrites.append(converted_line)
        elif " url reject-200" in line:
            converted_line = line.replace(" url reject-200", " reject")
            loon_rewrites.append(converted_line)

    # 3. 组装成 Loon 插件格式
    plugin_content = [
        "#!name=番茄小说去广告",
        "#!desc=自动同步 zqzess 仓库的番茄小说分流与重写规则，并转换为 Loon 插件格式。",
        "#!author=zqzess (Auto Converted)",
        "#!homepage=https://github.com/zqzess/rule_for_quantumultX",
        "#!icon=https://raw.githubusercontent.com/deezertidal/private/main/icons/fanqie.png",
        "\n[Rule]"
    ]
    plugin_content.extend(loon_rules)
    
    plugin_content.append("\n[Rewrite]")
    plugin_content.extend(loon_rewrites)
    
    if mitm_hostnames:
        plugin_content.append("\n[MITM]")
        plugin_content.append(f"hostname = {', '.join(unique_list(mitm_hostnames))}")

    # 写入文件
    with open("FanQieNovel.plugin", "w", encoding="utf-8") as f:
        f.write("\n".join(plugin_content))
    print("Loon plugin generated successfully!")

def unique_list(seq):
    seen = set()
    return [x for x in seq if not (x in seen or seen.add(x))]

if __name__ == "__main__":
    convert_rules()

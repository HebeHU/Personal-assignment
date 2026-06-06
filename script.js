(() => {
  const RESUME_BASE = {
    name: "胡慧琳",
    availability: "可立即到岗",
    contact: {
      phone: "13242036339",
      email: "huhuilin54321@163.com",
    },
    education: [
      {
        school: "香港中文大学（QS 32）",
        degree: "硕士",
        major: "市场营销（Big Data 方向）",
        period: "2025.08-2026.11（在读）",
        gpa: "3.8/4",
        courses: ["市场研究", "消费者行为", "AI与大数据策略", "数字营销", "整合营销", "机器学习", "价格分析"],
      },
      {
        school: "华南理工大学（985）",
        degree: "本科",
        major: "国际经济与贸易",
        period: "2019.09-2023.06",
        gpa: "3.33/4（专业前25%）",
        honors: ["学院优秀学生团干部（连续2年）", "年度三好学生", "校级二等奖学金", "校级三等奖学金"],
      },
    ],
    experience: [
      {
        company: "拼多多（上海）",
        team: "TEMU",
        title: "海外营销-创意内容策划",
        period: "2023.07-2023.11",
        bullets: [
          "聚焦海外社媒（TikTok/Instagram）内容生态，结合平台热点与海外用户偏好分析行业趋势、拆解竞品策略，输出5份深度内容策略报告，为品牌内容优化提供数据支撑",
          "独立完成100+条短视频脚本创作并把控创意质量，打造10+高流量内容，多款登上内部优质内容榜单，驱动海外社媒流量与互动量提升",
          "联动商务、拍摄、剪辑团队推进内容制作全流程，基于平台数据反馈快速迭代创意方向，保障内容高效落地",
        ],
      },
      {
        company: "奥美（北京）",
        team: "",
        title: "AE客户执行实习生",
        period: "2023.03-2023.06",
        bullets: [
          "参与伊利品牌年度传播规划及季度整合营销方案撰写，制定活动执行计划，推进CBA赛事合作、成都大运会赞助等大型IP合作项目落地",
          "对接客户Brief，联动内部创意、策略团队推进创意方案研讨与优化，协调项目全流程，保障物料准时产出及上线",
          "收集并分析市场信息与竞品动态，从行业特点、竞争情况、趋势与增量机会等维度输出洞察，为决策提供信息基础",
        ],
      },
      {
        company: "百度-YY（广州）",
        team: "",
        title: "商务实习生",
        period: "2022.04-2022.08",
        bullets: [
          "节假日前使用数据可视化模型搜集并分析爆点、热点话题，结合平台运营特点策划整合营销方案，并协助矩阵合作与推广，提升曝光与传播",
          "运用飞瓜、Q音、抖音指数等工具分析用户画像及竞品爆点，以新歌发行为周期输出数据可视化报告，带领团队复盘优化，为策略迭代提供支撑",
          "承接音乐广告推广及演出合作事务，拉通客户与内部团队协作；1个月内拓展50+广告推广资源，搭建ToC广告效果评价体系，提升投放精准度",
        ],
      },
    ],
    campus: [
      {
        org: "华南理工大学经济与金融学院团委文艺部",
        role: "部长",
        period: "2019.09-2021.06",
        bullets: [
          "0-1统筹迎新晚会、毕业晚会等大型活动，负责策划书、资源协调、对外联络等全流程推进",
          "疫情期间首创线上直播毕业晚会形式，多渠道宣传矩阵扩大影响力，Bilibili活动热度峰值达1.7w+",
          "0-1创建并运营公众号：选题策划、内容产出与传播，单篇最高阅读量4000+，关注量500+，覆盖率达70%",
        ],
      },
      {
        org: "研究项目",
        role: "主负责人",
        period: "2022.04-2022.05",
        title: "一带一路背景下中国影视产品出口东南亚的影响因素研究",
        bullets: [
          "收集十年间相关面板数据，使用文献综述/定量研究/归纳分析/稳健性分析法，并进行数据可视化与Eviews分析处理，输出2.7w字研究报告",
          "组织研讨会10余场，研读20余篇文献，独立绘制40+页PPT报告；项目获得前三名与“优秀团队奖”",
        ],
      },
    ],
    skills: {
      language: ["雅思7；英语听说读写可作为工作用语"],
      tools: ["RStudio", "SPSS", "Eviews", "Excel（SUM/IF/透视表/条件筛选）", "秀米", "剪映", "Canva", "Xmind"],
      extras: ["古筝十级", "内容创作（微博/小红书/抖音）", "志愿者经历（ICBE跨交会/互联网+总决赛/深圳国际BT领袖大会等）"],
    },
  };

  // ---------- Helpers ----------
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function setYear() {
    const el = $("#year");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  function toast(message) {
    let el = $(".toast");
    if (!el) {
      el = document.createElement("div");
      el.className = "toast";
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.style.cssText =
      "position:fixed;left:50%;bottom:24px;transform:translateX(-50%);padding:10px 12px;" +
      "border-radius:14px;border:1px solid rgba(16,24,40,.10);background:rgba(255,255,255,.92);" +
      "backdrop-filter:blur(10px);box-shadow:0 18px 45px rgba(16,24,40,.18);font-weight:900;" +
      "color:rgba(16,24,40,.88);z-index:9999;";
    clearTimeout(toast._t);
    toast._t = setTimeout(() => el.remove(), 1800);
  }

  // ---------- Router (hash-based) ----------
  function getRoute() {
    const h = (location.hash || "#/about").replace(/^#/, "");
    const seg = h.split("/").filter(Boolean)[0] || "about";
    const allow = new Set(["about", "education", "experience", "skills", "explore"]);
    return allow.has(seg) ? seg : "about";
  }

  function renderRoute() {
    const route = getRoute();
    $$(".page").forEach((p) => p.classList.toggle("is-active", p.getAttribute("data-page") === route));
    $$(".topnav-link").forEach((a) => a.classList.toggle("is-active", a.getAttribute("data-route") === route));
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  // ---------- Copy buttons ----------
  function setupCopy() {
    $$("[data-copy]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const text = btn.getAttribute("data-copy") || "";
        if (!text) return;
        try {
          await navigator.clipboard.writeText(text);
        } catch {
          const ta = document.createElement("textarea");
          ta.value = text;
          ta.style.position = "fixed";
          ta.style.left = "-9999px";
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          ta.remove();
        }
        toast(`已复制：${text}`);
      });
    });
  }

  // ---------- To top ----------
  function setupToTop() {
    const btn = $(".to-top");
    const onScroll = () => btn?.classList.toggle("show", window.scrollY > 380);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    btn?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  // ---------- Modals ----------
  function openModal(id) {
    const m = document.getElementById(id);
    if (!m) return;
    m.classList.add("show");
    m.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeModal(modalEl) {
    modalEl.classList.remove("show");
    modalEl.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  function setupModalClose() {
    $$(".modal").forEach((m) => {
      m.addEventListener("click", (e) => {
        const t = e.target;
        if (t && t.getAttribute && t.getAttribute("data-close") === "1") closeModal(m);
      });
    });
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        $$(".modal.show").forEach((m) => closeModal(m));
      }
    });
  }

  // ---------- Settings ----------
  const SETTINGS_KEY = "hhl_ai_settings_v1";
  function getSettings() {
    try {
      const raw = localStorage.getItem(SETTINGS_KEY);
      const parsed = raw ? JSON.parse(raw) : {};
      return {
        apiModel: parsed.apiModel || "",
      };
    } catch {
      return { apiModel: "" };
    }
  }
  function setSettings(next) {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(next));
  }

  function fillSettingsForm() {
    const s = getSettings();
    $("#apiModel").value = s.apiModel;
    $("#settingsStatus").textContent = "";
  }

  async function testSettings() {
    const apiModel = $("#apiModel").value.trim();

    $("#settingsStatus").textContent = "测试中…";
    try {
      const resp = await fetch(`/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: apiModel || undefined,
          messages: [
            { role: "system", content: "你是一个简短回答的助手。" },
            { role: "user", content: "请回复：连接成功" },
          ],
          temperature: 0,
        }),
      });
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const data = await resp.json();
      const text = data?.choices?.[0]?.message?.content || "";
      $("#settingsStatus").textContent = `✅ ${text || "连接成功"}`;
    } catch (e) {
      $("#settingsStatus").textContent = `❌ 连接失败：${e?.message || e}`;
    }
  }

  // ---------- AI Match ----------
  function buildPrompt(jdText) {
    const schemaHint = {
      overall_score: 0,
      category_scores: { education: 0, experience: 0, hard_skills: 0, soft_skills: 0 },
      highlights: ["..."],
      gaps: ["..."],
      summary: "...",
      optimized_resume_md: "# 简历（为该岗位优化）\n\n...",
    };

    return [
      {
        role: "system",
        content:
          "你是一位资深招聘顾问与简历优化专家。你必须严格输出 JSON，不要输出任何多余文字，不要用 Markdown 代码块包裹 JSON。",
      },
      {
        role: "user",
        content:
          "请根据【候选人简历（结构化）】与【目标岗位JD】做匹配评估，并生成一版更匹配该岗位的中文简历内容。\n\n" +
          "要求：\n" +
          "1) 评分 0-100，给出综合分与分类分：education/experience/hard_skills/soft_skills。\n" +
          "2) highlights：匹配亮点（<=8条，尽量引用简历已有事实，不要编造）。\n" +
          "3) gaps：差距与建议（<=8条，可给补强建议）。\n" +
          "4) summary：1段话总结匹配情况（80-140字）。\n" +
          "5) optimized_resume_md：输出为 Markdown 简历（包含：基本信息、求职意向/个人总结、教育背景、工作/实习经历、项目/校园经历、技能与证书、其他）。\n" +
          "6) 优化后的简历：可以重排内容、改写表达、补充量化方式，但严禁捏造不存在的公司/项目/数字。\n\n" +
          `【候选人简历（结构化）】\n${JSON.stringify(RESUME_BASE, null, 2)}\n\n` +
          `【目标岗位JD】\n${jdText}\n\n` +
          `请按以下 JSON schema 输出：\n${JSON.stringify(schemaHint, null, 2)}`,
      },
    ];
  }

  function clampScore(n) {
    const x = Number(n);
    if (Number.isNaN(x)) return 0;
    return Math.max(0, Math.min(100, Math.round(x)));
  }

  function setBar(el, value) {
    const v = clampScore(value);
    el.style.width = `${v}%`;
  }

  function renderMatchResult(json) {
    const overall = clampScore(json.overall_score);
    const cs = json.category_scores || {};
    const edu = clampScore(cs.education);
    const exp = clampScore(cs.experience);
    const hard = clampScore(cs.hard_skills);
    const soft = clampScore(cs.soft_skills);

    $("#overallScore").textContent = String(overall);
    $("#scoreEdu").textContent = String(edu);
    $("#scoreExp").textContent = String(exp);
    $("#scoreHard").textContent = String(hard);
    $("#scoreSoft").textContent = String(soft);

    setBar($("#barEdu"), edu);
    setBar($("#barExp"), exp);
    setBar($("#barHard"), hard);
    setBar($("#barSoft"), soft);

    const hl = Array.isArray(json.highlights) ? json.highlights : [];
    const gaps = Array.isArray(json.gaps) ? json.gaps : [];

    $("#matchHighlights").innerHTML = hl.map((x) => `<li>${escapeHtml(String(x))}</li>`).join("") || "<li>—</li>";
    $("#matchGaps").innerHTML = gaps.map((x) => `<li>${escapeHtml(String(x))}</li>`).join("") || "<li>—</li>";
    $("#matchSummary").textContent = String(json.summary || "—");

    const md = String(json.optimized_resume_md || "");
    $("#resumeRaw").textContent = md;
    const preview = $("#resumePreview");
    if (window.marked && md) {
      preview.innerHTML = window.marked.parse(md);
    } else {
      preview.textContent = md;
    }
  }

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  async function callLLM(jdText) {
    const { apiModel } = getSettings();
    const url = `/api/chat`;
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: apiModel || undefined,
        messages: buildPrompt(jdText),
        temperature: 0.2,
        response_format: { type: "json_object" },
      }),
    });
    if (!resp.ok) throw new Error(`请求失败：HTTP ${resp.status}`);
    const data = await resp.json();
    const content = data?.choices?.[0]?.message?.content;
    if (!content) throw new Error("模型未返回内容");
    return JSON.parse(content);
  }

  // ---------- Downloads ----------
  function downloadText(filename, text) {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 500);
  }

  async function ensurePdfLibs() {
    // Lazy-load to reduce initial page weight.
    const need = [
      { id: "h2c", src: "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js" },
      { id: "jspdf", src: "https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js" },
    ];
    for (const n of need) {
      if (document.getElementById(n.id)) continue;
      await new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.id = n.id;
        s.src = n.src;
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
      });
    }
    if (!window.html2canvas || !window.jspdf) throw new Error("PDF 依赖加载失败（请检查网络）");
  }

  async function downloadPdfFromPreview() {
    await ensurePdfLibs();
    const { jsPDF } = window.jspdf;
    const el = $("#resumePreview");
    const canvas = await window.html2canvas(el, { backgroundColor: "#ffffff", scale: 2 });

    const pdf = new jsPDF("p", "pt", "a4");
    const pageW = pdf.internal.pageSize.getWidth();
    const pageH = pdf.internal.pageSize.getHeight();
    const margin = 28;
    const contentW = pageW - margin * 2;
    const contentH = pageH - margin * 2;

    // How many canvas pixels fit in one PDF page (after scaling to contentW)
    const pageHeightPx = Math.floor((canvas.width * contentH) / contentW);
    let yPx = 0;
    let pageIndex = 0;

    const pageCanvas = document.createElement("canvas");
    const pageCtx = pageCanvas.getContext("2d");
    pageCanvas.width = canvas.width;

    while (yPx < canvas.height) {
      const sliceH = Math.min(pageHeightPx, canvas.height - yPx);
      pageCanvas.height = sliceH;
      pageCtx.clearRect(0, 0, pageCanvas.width, pageCanvas.height);
      pageCtx.drawImage(canvas, 0, yPx, canvas.width, sliceH, 0, 0, canvas.width, sliceH);

      const imgData = pageCanvas.toDataURL("image/png");
      const imgH = (sliceH * contentW) / canvas.width;

      if (pageIndex > 0) pdf.addPage();
      pdf.addImage(imgData, "PNG", margin, margin, contentW, imgH, undefined, "FAST");

      yPx += sliceH;
      pageIndex += 1;
    }

    pdf.save("简历_岗位优化版.pdf");
  }

  // ---------- Tabs in match modal ----------
  function setupModalTabs() {
    const modal = $("#matchModal");
    if (!modal) return;
    const pills = $$("[data-tab]", modal);
    const panels = $$("[data-tab-panel]", modal);
    pills.forEach((p) => {
      p.addEventListener("click", () => {
        const tab = p.getAttribute("data-tab");
        pills.forEach((x) => x.classList.toggle("is-active", x === p));
        panels.forEach((x) => x.classList.toggle("is-active", x.getAttribute("data-tab-panel") === tab));
      });
    });
  }

  // ---------- Main events ----------
  function setupEvents() {
    window.addEventListener("hashchange", renderRoute);
    renderRoute();

    $("#openSettings")?.addEventListener("click", () => {
      openModal("settingsModal");
      fillSettingsForm();
    });

    $("#saveSettings")?.addEventListener("click", () => {
      const next = {
        apiModel: $("#apiModel").value.trim(),
      };
      setSettings(next);
      $("#settingsStatus").textContent = "✅ 已保存";
      toast("已保存 AI 设置");
    });

    $("#testSettings")?.addEventListener("click", testSettings);

    $("#scrollContact")?.addEventListener("click", () => {
      const node = document.getElementById("contact");
      node?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    $("#runMatch")?.addEventListener("click", async () => {
      const jd = ($("#jdInput")?.value || "").trim();
      if (!jd) return toast("请先粘贴岗位 JD");
      try {
        $("#runMatch").disabled = true;
        $("#runMatch").textContent = "匹配中…";
        openModal("matchModal");
        // default to match tab
        $$("[data-tab]").forEach((x) => x.classList.toggle("is-active", x.getAttribute("data-tab") === "match"));
        $$("[data-tab-panel]").forEach((x) => x.classList.toggle("is-active", x.getAttribute("data-tab-panel") === "match"));

        // reset
        $("#overallScore").textContent = "--";
        $("#matchHighlights").innerHTML = "<li>正在分析…</li>";
        $("#matchGaps").innerHTML = "<li>正在分析…</li>";
        $("#matchSummary").textContent = "正在生成…";
        ["barEdu", "barExp", "barHard", "barSoft"].forEach((id) => (document.getElementById(id).style.width = "0%"));

        const json = await callLLM(jd);
        renderMatchResult(json);
        toast("匹配完成");
      } catch (e) {
        toast(e?.message || String(e));
      } finally {
        $("#runMatch").disabled = false;
        $("#runMatch").textContent = "开始匹配 →";
      }
    });

    $("#downloadMd")?.addEventListener("click", () => {
      const md = $("#resumeRaw")?.textContent || "";
      if (!md.trim()) return toast("暂无可下载内容");
      downloadText("简历_岗位优化版.md", md);
    });

    $("#copyResume")?.addEventListener("click", async () => {
      const md = $("#resumeRaw")?.textContent || "";
      if (!md.trim()) return toast("暂无可复制内容");
      try {
        await navigator.clipboard.writeText(md);
        toast("已复制到剪贴板");
      } catch {
        toast("复制失败（浏览器限制），请手动复制");
      }
    });

    $("#downloadPdf")?.addEventListener("click", async () => {
      const md = $("#resumeRaw")?.textContent || "";
      if (!md.trim()) return toast("暂无可导出内容");
      try {
        await downloadPdfFromPreview();
        toast("已开始下载 PDF");
      } catch (e) {
        toast(e?.message || String(e));
      }
    });
  }

  // ---------- Init ----------
  setYear();
  setupCopy();
  setupToTop();
  setupModalClose();
  setupModalTabs();
  setupEvents();
})();

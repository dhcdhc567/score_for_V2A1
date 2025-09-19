// ====== 视频对列表 ======
const videoPairs = [
  ['kling/28_纪实摄影风格_一只棕色的狗位于画面左侧_旁边是一颗鲜红的苹果_狗.mp4', 'ours/28_纪实摄影风格_一只棕色的狗位于画面左侧_旁边是一颗鲜红的苹果_狗.mp4'],
  ['kling/29_冬季雪地实景拍摄_一个雪人从大变小的过程_初始时_雪人巨大_由三.mp4', 'ours/29_冬季雪地实景拍摄_一个雪人从大变小的过程_初始时_雪人巨大_由三.mp4'],
  ['kling/2_纪实摄影风格_一座古老的水坝突然崩塌_引发汹涌的淡水洪流奔腾而下.mp4', 'ours/2_纪实摄影风格_一座古老的水坝突然崩塌_引发汹涌的淡水洪流奔腾而下.mp4'],
  ['kling/30_纪实摄影风格_黄铜色的门环重重敲击在厚重的橡木门前_发出沉闷而有.mp4', 'ours/30_纪实摄影风格_黄铜色的门环重重敲击在厚重的橡木门前_发出沉闷而有.mp4'],
  ['kling/31_纪实摄影风格_一只手拿着透明塑料梳子正在梳理一头凌乱的长发_头发.mp4', 'ours/31_纪实摄影风格_一只手拿着透明塑料梳子正在梳理一头凌乱的长发_头发.mp4'],
  ['kling/32_纪实摄影风格_一个自动洒水器正在绿色草坪上喷洒水珠_水珠在阳光下.mp4', 'ours/32_纪实摄影风格_一个自动洒水器正在绿色草坪上喷洒水珠_水珠在阳光下.mp4'],
  ['kling/33_纪实摄影风格_一只手正在迅速拉上一个黑色旅行袋的拉链_手部皮肤白.mp4', 'ours/33_纪实摄影风格_一只手正在迅速拉上一个黑色旅行袋的拉链_手部皮肤白.mp4'],
  ['kling/34_纪实摄影风格_一位穿着休闲装的年轻人正弯腰从办公桌上拿起手机_他.mp4', 'ours/34_纪实摄影风格_一位穿着休闲装的年轻人正弯腰从办公桌上拿起手机_他.mp4'],
  ['kling/35_纪实摄影风格_一滴晶莹剔透的水珠悬挂在光滑镜子边缘_展示出表面张.mp4', 'ours/35_纪实摄影风格_一滴晶莹剔透的水珠悬挂在光滑镜子边缘_展示出表面张.mp4'],
  ['kling/36_纪实摄影风格_一只洁白的绵羊站在一棵粗壮的树前_树干苍劲_树叶繁.mp4', 'ours/36_纪实摄影风格_一只洁白的绵羊站在一棵粗壮的树前_树干苍劲_树叶繁.mp4'],
  ['kling/37_镜头环绕拍摄_相机围绕主体旋转_捕捉各个角度的细节_画面中_主体.mp4', 'ours/37_镜头环绕拍摄_相机围绕主体旋转_捕捉各个角度的细节_画面中_主体.mp4'],
  ['kling/38_纪实摄影风格_一位中年男子正缓缓推开一扇木质窗框的窗户_他穿着简.mp4', 'ours/38_纪实摄影风格_一位中年男子正缓缓推开一扇木质窗框的窗户_他穿着简.mp4'],
  ['kling/39_纪实摄影风格_一位年轻女性正专注地用银色勺子品尝面前的香草布丁_.mp4', 'ours/39_纪实摄影风格_一位年轻女性正专注地用银色勺子品尝面前的香草布丁_.mp4'],
  ['kling/3_现实主义风格摄影_一支黑色钢笔正在一张洁白的纸上流畅地书写文字_.mp4', 'ours/3_现实主义风格摄影_一支黑色钢笔正在一张洁白的纸上流畅地书写文字_.mp4'],
  ['kling/40_纪实摄影风格_一只展翅飞翔的鸟儿掠过平静清澈的湖面_湖水如镜般反.mp4', 'ours/40_纪实摄影风格_一只展翅飞翔的鸟儿掠过平静清澈的湖面_湖水如镜般反.mp4'],
  ['kling/41_纪实摄影风格_一把旧木椅斜靠在老旧木门旁_椅子表面有岁月留下的痕.mp4', 'ours/41_纪实摄影风格_一把旧木椅斜靠在老旧木门旁_椅子表面有岁月留下的痕.mp4'],
  ['kling/42_纪实摄影风格_镜头环绕拍摄马丘比丘的壮丽景象_古老的石砌建筑群在.mp4', 'ours/42_纪实摄影风格_镜头环绕拍摄马丘比丘的壮丽景象_古老的石砌建筑群在.mp4'],
  ['kling/43_纪实摄影风格_一枚脆弱的鸡蛋从高处坠落_即将触碰到坚硬的水泥地面.mp4', 'ours/43_纪实摄影风格_一枚脆弱的鸡蛋从高处坠落_即将触碰到坚硬的水泥地面.mp4'],
  ['kling/44_纪实摄影风格_一个精致的花瓶缓缓倾斜向下_镜头跟随其运动轨迹_花.mp4', 'ours/44_纪实摄影风格_一个精致的花瓶缓缓倾斜向下_镜头跟随其运动轨迹_花.mp4'],
  ['kling/45_一只毛茸茸的猫咪正蜷缩在桌子底下_它的眼睛闪烁着好奇的光芒_突然.mp4', 'ours/45_一只毛茸茸的猫咪正蜷缩在桌子底下_它的眼睛闪烁着好奇的光芒_突然.mp4'],
];

let current = 0;
let results = [];
const ratingLabels = ["差","较差","一般","好","很好"];
let randomizedPairs = []; // 存每组原始顺序 + swap 标记

// 创建评分下拉选项
function createDropdown(selectId) {
  const select = document.getElementById(selectId);
  select.innerHTML = '<option value="">Select</option>';
  for (let i = 1; i <= 5; i++) {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = `${i} (${ratingLabels[i-1]})`;
    select.appendChild(opt);
  }
}

// 初始化每组随机左右顺序
function initRandomizedPairs() {
  randomizedPairs = videoPairs.map(pair => ({
    original: pair,
    swap: Math.random() < 0.5 // true 表示交换左右
  }));
}

// 加载题目
function loadQuestion(index) {
  const pairObj = randomizedPairs[index];

  // 根据 swap 决定左右显示
  const leftVideo  = pairObj.swap ? pairObj.original[1] : pairObj.original[0];
  const rightVideo = pairObj.swap ? pairObj.original[0] : pairObj.original[1];

  document.getElementById("question-counter").textContent = `Question ${index+1} / ${videoPairs.length}`;
  document.getElementById("videoA").src = leftVideo;
  document.getElementById("videoB").src = rightVideo;

  // 清空选择
  document.querySelectorAll('input[name="preferredAudio"]').forEach(el => el.checked = false);
  ["qualityA","semanticA","temporalA","qualityB","semanticB","temporalB"].forEach(id => {
    document.getElementById(id).value = "";
  });

  // 恢复答案
  if (results[index]) {
    const prev = results[index];
    document.querySelector(`input[name="preferredAudio"][value="${prev.preferredAudio}"]`).checked = true;
    document.getElementById("qualityA").value = prev.qualityLeft;
    document.getElementById("semanticA").value = prev.semanticLeft;
    document.getElementById("temporalA").value = prev.temporalLeft;
    document.getElementById("qualityB").value = prev.qualityRight;
    document.getElementById("semanticB").value = prev.semanticRight;
    document.getElementById("temporalB").value = prev.temporalRight;
  }
}

window.onload = () => {
  ["qualityA","semanticA","temporalA","qualityB","semanticB","temporalB"].forEach(createDropdown);

  document.getElementById("startTask").addEventListener("click", () => {
    document.getElementById("cover-page").style.display = 'none';
    document.getElementById("rating-task").style.display = 'block';
    current = 0;
    results = [];
    initRandomizedPairs();
    loadQuestion(current);
  });

  document.getElementById("submitBtn").addEventListener("click", () => {
    const preferred = document.querySelector('input[name="preferredAudio"]:checked')?.value;
    if (!preferred) { alert("Select which video's audio is more suitable."); return; }

    // 获取左右评分
    const qualityLeft = document.getElementById("qualityA").value;
    const semanticLeft = document.getElementById("semanticA").value;
    const temporalLeft = document.getElementById("temporalA").value;
    const qualityRight = document.getElementById("qualityB").value;
    const semanticRight = document.getElementById("semanticB").value;
    const temporalRight = document.getElementById("temporalB").value;

    if (!qualityLeft || !semanticLeft || !temporalLeft || !qualityRight || !semanticRight || !temporalRight) {
      alert("Please rate all dimensions for both videos."); return;
    }

    const pairObj = randomizedPairs[current];
    const leftVideo  = pairObj.swap ? pairObj.original[1] : pairObj.original[0];
    const rightVideo = pairObj.swap ? pairObj.original[0] : pairObj.original[1];

    results[current] = {
      question: current + 1,
      leftVideo,
      rightVideo,
      originalVideoA: pairObj.original[0],
      originalVideoB: pairObj.original[1],
      preferredAudio: preferred,
      qualityLeft, semanticLeft, temporalLeft,
      qualityRight, semanticRight, temporalRight,
      timestamp: new Date().toISOString()
    };

    current++;
    if (current < videoPairs.length) loadQuestion(current);
    else {
      document.getElementById("rating-task").style.display = 'none';
      document.getElementById("complete").style.display = 'block';
    }
  });

  document.getElementById("backBtn").addEventListener("click", () => {
    if (current > 0) { current--; loadQuestion(current); }
  });
};

// 下载 CSV
function downloadCSV() {
  if (!results.length) { alert("No results."); return; }

  const fields = [
    "question", "leftVideo", "rightVideo", "originalVideoA", "originalVideoB",
    "preferredAudio",
    "qualityLeft","semanticLeft","temporalLeft",
    "qualityRight","semanticRight","temporalRight",
    "timestamp"
  ];

  const header = fields.join(",");
  const lines = results.map(r => fields.map(f => `"${r[f]}"`).join(","));
  const csv = [header, ...lines].join("\n");

  const blob = new Blob([csv], { type: 'text/csv' });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "video_audio_evaluation.csv";
  a.click();
}

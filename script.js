// ====== 视频对列表 ======
const videoPairs = [
  ['kling/0_纪实摄影风格_一位年轻女性的头发正在从黑色逐渐变为金色_她的头发.mp4', 'ours/0_纪实摄影风格_一位年轻女性的头发正在从黑色逐渐变为金色_她的头发.mp4'],
  ['kling/10_纪实摄影风格_一匹棕色骏马正在一片绿油油的草地上悠闲地吃草_靠近.mp4', 'ours/10_纪实摄影风格_一匹棕色骏马正在一片绿油油的草地上悠闲地吃草_靠近.mp4'],
  ['kling/11_纪实摄影风格_镜头环绕拍摄巴塞罗那圣家堂_圣家堂高耸入云_尖塔林.mp4', 'ours/11_纪实摄影风格_镜头环绕拍摄巴塞罗那圣家堂_圣家堂高耸入云_尖塔林.mp4'],
  ['kling/12_延时摄影捕捉到热淋浴蒸汽与冷毛巾接触的瞬间变化_蒸汽缓缓升起_与.mp4', 'ours/12_延时摄影捕捉到热淋浴蒸汽与冷毛巾接触的瞬间变化_蒸汽缓缓升起_与.mp4'],
  ['kling/13_纪实摄影风格_一只手握着尖锐的铅笔_缓缓地刺向一只薄薄的橡胶手套.mp4', 'ours/13_纪实摄影风格_一只手握着尖锐的铅笔_缓缓地刺向一只薄薄的橡胶手套.mp4'],
  ['kling/14_纪实摄影风格_一只棕色的拉布拉多犬最初位于桌子左侧_它身体健壮_.mp4', 'ours/14_纪实摄影风格_一只棕色的拉布拉多犬最初位于桌子左侧_它身体健壮_.mp4'],
  ['kling/15_纪实摄影风格_两只洁白的绵羊在绿油油的草地上悠闲地行走_它们毛发.mp4', 'ours/15_纪实摄影风格_两只洁白的绵羊在绿油油的草地上悠闲地行走_它们毛发.mp4'],
  ['kling/16_纪实摄影风格_一位中年男子正在厨房里专注地切割食材_他穿着简单的.mp4', 'ours/16_纪实摄影风格_一位中年男子正在厨房里专注地切割食材_他穿着简单的.mp4'],
  ['kling/17_纪实摄影风格_一条白色布料在装满肥皂水的铁桶中轻轻摆动_水面上泛.mp4', 'ours/17_纪实摄影风格_一条白色布料在装满肥皂水的铁桶中轻轻摆动_水面上泛.mp4'],
  ['kling/18_纪实摄影风格的延时摄影_捕捉一锅蜂蜜随温度升高而变化的过程_金黄.mp4', 'ours/18_纪实摄影风格的延时摄影_捕捉一锅蜂蜜随温度升高而变化的过程_金黄.mp4'],
  ['kling/19_延时摄影记录了三氧化二砷在室温下逐渐升温时的形态变化过程_画面中.mp4', 'ours/19_延时摄影记录了三氧化二砷在室温下逐渐升温时的形态变化过程_画面中.mp4'],
  ['kling/1_纪实摄影风格_镜头环绕拍摄壮丽的优胜美地国家公园_阳光洒在巍峨的.mp4', 'ours/1_纪实摄影风格_镜头环绕拍摄壮丽的优胜美地国家公园_阳光洒在巍峨的.mp4'],
  ['kling/20_纪实摄影风格_镜头环绕拍摄一个摆满书籍的书架_书架上整齐排列着各.mp4', 'ours/20_纪实摄影风格_镜头环绕拍摄一个摆满书籍的书架_书架上整齐排列着各.mp4'],
  ['kling/21_纪实摄影风格_两位中年男女正在一起清扫地板_男子穿着蓝色工作服_.mp4', 'ours/21_纪实摄影风格_两位中年男女正在一起清扫地板_男子穿着蓝色工作服_.mp4'],
  ['kling/22_纪实摄影风格_一个小巧的橡胶沙滩球被用力抛向地面_球在触地瞬间产.mp4', 'ours/22_纪实摄影风格_一个小巧的橡胶沙滩球被用力抛向地面_球在触地瞬间产.mp4'],
  ['kling/23_纪实摄影风格_镜头缓缓从故宫的宏伟建筑群中拉远_展现其全貌_红墙.mp4', 'ours/23_纪实摄影风格_镜头缓缓从故宫的宏伟建筑群中拉远_展现其全貌_红墙.mp4'],
  ['kling/24_纪实摄影风格_黄色和红色颜料以相等比例迅速混合_画面中两只手正快.mp4', 'ours/24_纪实摄影风格_黄色和红色颜料以相等比例迅速混合_画面中两只手正快.mp4'],
  ['kling/25_第一人称视角斜拍镜头_空中移动拍摄一个精致的花瓶_花瓶由透明玻璃.mp4', 'ours/25_第一人称视角斜拍镜头_空中移动拍摄一个精致的花瓶_花瓶由透明玻璃.mp4'],
  ['kling/26_纪实摄影风格_一位穿着休闲装的行人正沿着城市街道行走_行人步伐稳.mp4', 'ours/26_纪实摄影风格_一位穿着休闲装的行人正沿着城市街道行走_行人步伐稳.mp4'],
  ['kling/27_纪实摄影风格_一位穿着家居服的中年女性正缓缓拉开厚重的窗帘_她的.mp4', 'ours/27_纪实摄影风格_一位穿着家居服的中年女性正缓缓拉开厚重的窗帘_她的.mp4'],
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
  ['kling/46_纪实摄影风格_一对情侣正在共同骑行一辆双人自行车_男生在前_女生.mp4', 'ours/46_纪实摄影风格_一对情侣正在共同骑行一辆双人自行车_男生在前_女生.mp4'],
  ['kling/47_纪实摄影风格_一杯新鲜果汁缓缓倒入浓稠酸奶中_果汁与酸奶在杯中交.mp4', 'ours/47_纪实摄影风格_一杯新鲜果汁缓缓倒入浓稠酸奶中_果汁与酸奶在杯中交.mp4'],
  ['kling/48_纪实摄影风格_一根细长的针缓缓地压向一个充气床垫的表面_针尖逐渐.mp4', 'ours/48_纪实摄影风格_一根细长的针缓缓地压向一个充气床垫的表面_针尖逐渐.mp4'],
  ['kling/49_纪实摄影风格_一位中年男子正蹲在地上_细心地帮另一位年轻人擦拭鞋.mp4', 'ours/49_纪实摄影风格_一位中年男子正蹲在地上_细心地帮另一位年轻人擦拭鞋.mp4'],
  ['kling/4_纪实摄影风格_一根细小的燃烧木棍被扔进一堆干燥的稻草中_木棍火焰.mp4', 'ours/4_纪实摄影风格_一根细小的燃烧木棍被扔进一堆干燥的稻草中_木棍火焰.mp4'],
  ['kling/50_纪实摄影风格_镜头以顺时针方向环绕拍摄一台笔记本电脑_电脑放置在.mp4', 'ours/50_纪实摄影风格_镜头以顺时针方向环绕拍摄一台笔记本电脑_电脑放置在.mp4'],
  ['kling/51_史诗战争场景_一台巨大的古代投石机正全力运转_发射出一块巨大的石.mp4', 'ours/51_史诗战争场景_一台巨大的古代投石机正全力运转_发射出一块巨大的石.mp4'],
  ['kling/52_现代简约风格室内场景_一款设计感十足的香薰机正静静地放置在木质桌.mp4', 'ours/52_现代简约风格室内场景_一款设计感十足的香薰机正静静地放置在木质桌.mp4'],
  ['kling/53_纪实摄影风格_一双强壮有力的手正在揉面团_手上的肌肉线条清晰可见.mp4', 'ours/53_纪实摄影风格_一双强壮有力的手正在揉面团_手上的肌肉线条清晰可见.mp4'],
  ['kling/54_纪实摄影风格_一个阳光明媚的下午_两个年轻人在公园的绿草坪上玩耍.mp4', 'ours/54_纪实摄影风格_一个阳光明媚的下午_两个年轻人在公园的绿草坪上玩耍.mp4'],
  ['kling/55_镜头环绕旋转_捕捉到一台复古点唱机的全貌_点唱机外壳光滑_金属光.mp4', 'ours/55_镜头环绕旋转_捕捉到一台复古点唱机的全貌_点唱机外壳光滑_金属光.mp4'],
  ['kling/56_纪实摄影风格_一束明亮的阳光穿透一颗晶莹剔透的玻璃钻石_钻石在光.mp4', 'ours/56_纪实摄影风格_一束明亮的阳光穿透一颗晶莹剔透的玻璃钻石_钻石在光.mp4'],
  ['kling/57_镜头环绕拍摄_围绕着一个戴着头盔的人物旋转_头盔设计独特_表面有.mp4', 'ours/57_镜头环绕拍摄_围绕着一个戴着头盔的人物旋转_头盔设计独特_表面有.mp4'],
  ['kling/58_一台银色笔记本电脑放置在木质桌面上_镜头从左向右缓缓移动_展示出.mp4', 'ours/58_一台银色笔记本电脑放置在木质桌面上_镜头从左向右缓缓移动_展示出.mp4'],
  ['kling/59_现实主义摄影风格_一位穿着休闲装的中年男子正在享用三明治_突然放.mp4', 'ours/59_现实主义摄影风格_一位穿着休闲装的中年男子正在享用三明治_突然放.mp4'],
  ['kling/5_纪实摄影风格_镜头缓缓拉远_展现神秘的马丘比丘全景_古老的石砌建.mp4', 'ours/5_纪实摄影风格_镜头缓缓拉远_展现神秘的马丘比丘全景_古老的石砌建.mp4'],
  ['kling/60_纪实摄影风格_镜头固定拍摄马丘比丘的静态画面_古老的石砌建筑群在.mp4', 'ours/60_纪实摄影风格_镜头固定拍摄马丘比丘的静态画面_古老的石砌建筑群在.mp4'],
  ['kling/61_超现实主义艺术风格_一只拥有狮子腿的鲨鱼在海岸线上缓缓行走_仿佛.mp4', 'ours/61_超现实主义艺术风格_一只拥有狮子腿的鲨鱼在海岸线上缓缓行走_仿佛.mp4'],
  ['kling/62_纪实摄影风格_一位穿着深色西装的中年男子弯腰捡起地上一顶黑色礼帽.mp4', 'ours/62_纪实摄影风格_一位穿着深色西装的中年男子弯腰捡起地上一顶黑色礼帽.mp4'],
  ['kling/63_超现实主义艺术风格_一只拥有鲸鱼身体_袋鼠腿和火烈鸟尾巴的长颈鹿.mp4', 'ours/63_超现实主义艺术风格_一只拥有鲸鱼身体_袋鼠腿和火烈鸟尾巴的长颈鹿.mp4'],
  ['kling/64_纪实摄影风格_厨房一角_一位穿着围裙的女性正专注地用打蛋器快速搅.mp4', 'ours/64_纪实摄影风格_厨房一角_一位穿着围裙的女性正专注地用打蛋器快速搅.mp4'],
  ['kling/65_纪实摄影风格_一只毛茸茸的棕色猴子位于画面右侧_紧挨着一颗鲜红的.mp4', 'ours/65_纪实摄影风格_一只毛茸茸的棕色猴子位于画面右侧_紧挨着一颗鲜红的.mp4'],
  ['kling/66_现实主义摄影风格_一位中年女性正在厨房里专注地切割食材_她穿着简.mp4', 'ours/66_现实主义摄影风格_一位中年女性正在厨房里专注地切割食材_她穿着简.mp4'],
  ['kling/67_纪实摄影风格_一位穿着正式西装的男士正帮助另一位男士系领结_被帮.mp4', 'ours/67_纪实摄影风格_一位穿着正式西装的男士正帮助另一位男士系领结_被帮.mp4'],
  ['kling/68_延时摄影捕捉到茶壶中茶叶随温度迅速升高的变化过程_茶壶透明_可以.mp4', 'ours/68_延时摄影捕捉到茶壶中茶叶随温度迅速升高的变化过程_茶壶透明_可以.mp4'],
  ['kling/69_纪实摄影风格_镜头从马丘比丘的古老石阶缓缓向上移动_展现这座神秘.mp4', 'ours/69_纪实摄影风格_镜头从马丘比丘的古老石阶缓缓向上移动_展现这座神秘.mp4'],
  ['kling/6_一只毛茸茸的猫咪轻盈地跃上一张古朴的木质桌子_桌子表面有着岁月留.mp4', 'ours/6_一只毛茸茸的猫咪轻盈地跃上一张古朴的木质桌子_桌子表面有着岁月留.mp4'],
  ['kling/70_纪实摄影风格_一瓶酱料正缓缓挤出鲜红的番茄酱_均匀地淋在一根刚出.mp4', 'ours/70_纪实摄影风格_一瓶酱料正缓缓挤出鲜红的番茄酱_均匀地淋在一根刚出.mp4'],
  ['kling/71_纪实摄影风格_等量的粉色和白色颜料在透明玻璃碗中迅速混合_画面中.mp4', 'ours/71_纪实摄影风格_等量的粉色和白色颜料在透明玻璃碗中迅速混合_画面中.mp4'],
  ['kling/72_纪实摄影风格_两件衣物在空中旋转_一件鲜艳的红色T恤和一件深邃的.mp4', 'ours/72_纪实摄影风格_两件衣物在空中旋转_一件鲜艳的红色T恤和一件深邃的.mp4'],
  ['kling/73_现实主义摄影风格_一位穿着休闲装的年轻人正弯腰帮助另一位坐在长椅.mp4', 'ours/73_现实主义摄影风格_一位穿着休闲装的年轻人正弯腰帮助另一位坐在长椅.mp4'],
  ['kling/74_延时摄影记录了温度计中水银随温度变化的动态过程_画面中_细长的玻.mp4', 'ours/74_延时摄影记录了温度计中水银随温度变化的动态过程_画面中_细长的玻.mp4'],
  ['kling/75_纪实摄影风格_海浪拍打岩石_激起大量水花在空中飞溅_波涛汹涌_浪.mp4', 'ours/75_纪实摄影风格_海浪拍打岩石_激起大量水花在空中飞溅_波涛汹涌_浪.mp4'],
  ['kling/76_镜头环绕拍摄_摄像机缓缓旋转_围绕主体全方位捕捉每一个细节_画面.mp4', 'ours/76_镜头环绕拍摄_摄像机缓缓旋转_围绕主体全方位捕捉每一个细节_画面.mp4'],
  ['kling/77_自然生态纪录片风格_一只羽毛斑斓的小鸟安静地栖息在精致的巢穴中_.mp4', 'ours/77_自然生态纪录片风格_一只羽毛斑斓的小鸟安静地栖息在精致的巢穴中_.mp4'],
  ['kling/78_纪实摄影风格_镜头环绕拍摄雅典卫城_捕捉其宏伟壮丽的全貌_古老的.mp4', 'ours/78_纪实摄影风格_镜头环绕拍摄雅典卫城_捕捉其宏伟壮丽的全貌_古老的.mp4'],
  ['kling/79_超现实主义微距摄影_水滴缓缓坠入油面_瞬间激起细微涟漪与气泡_水.mp4', 'ours/79_超现实主义微距摄影_水滴缓缓坠入油面_瞬间激起细微涟漪与气泡_水.mp4'],
  ['kling/7_纪实摄影风格_一名男子正在空中跳跃_身体完全伸展_双腿弯曲_双臂.mp4', 'ours/7_纪实摄影风格_一名男子正在空中跳跃_身体完全伸展_双腿弯曲_双臂.mp4'],
  ['kling/8_纪实摄影风格_一块铁在熊熊燃烧_发出明亮而独特的火焰_铁块表面因.mp4', 'ours/8_纪实摄影风格_一块铁在熊熊燃烧_发出明亮而独特的火焰_铁块表面因.mp4'],
  ['kling/9_现实主义摄影风格_一位穿着休闲装的中年男子坐在木质餐桌旁_桌上散.mp4', 'ours/9_现实主义摄影风格_一位穿着休闲装的中年男子坐在木质餐桌旁_桌上散.mp4'],
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